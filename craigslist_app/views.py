from nis import cat
from unicodedata import category
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt
import json
from django.forms.models import model_to_dict

# Create your views here.
def index(request):

    categories = Category.objects.all()

    my_data = {
        'categories': categories
    }

    return render(request, 'index.html', my_data)
    


def list_categories(request):
    categories = Category.objects.all() 
    return JsonResponse({'success':True})

@csrf_exempt
def add_category(request):
    
    if request.method == 'POST':
        body = json.loads(request.body)
        new_name = body['name']

        new_category = Category(name=new_name)
        new_category.save()

        return JsonResponse({'success': True})
    else:
        return render(request, 'add_category.html')

@csrf_exempt
def view_category(request, id):
    
    if request.method == "PUT":
        body = json.loads(request.body)
        new_name = body['name']
        category = Category.objects.get(id = id)
        category.name = new_name
        category.save()
        

        return JsonResponse({'success': True})

    pass


def view_category_posts(request, id):
    
    post = Post.objects.filter(category_id = id)
    all_posts = []

    for posts in post:
        add_post = model_to_dict(posts)
        all_posts.append(add_post)

    print(all_posts)

    my_data = {
        'posts': all_posts,
        'id': id
    }

    return render(request, 'view_category.html', my_data)

def edit_category(request, id):

    category = Category.objects.get(id = id)

    my_data = {
        'category': category
    }

    return render(request, 'edit_category.html', my_data)

def add_post(request, id):

    category = Category.objects.get(id = id)

    my_data = {
        'category': category
    }

    return render(request, 'add_post.html', my_data)

@csrf_exempt
def view_posts(request):
    
    if request.method == 'POST':
        body = json.loads(request.body)

        id = body['id']
        title = body['title']
        location = body['location']
        description = body['description']

        category = Category.objects.get(id = id)

        new_post = Post(category_id = category, title = title, location = location, description = description)
        new_post.save()

        
        
        return JsonResponse({'success': True})


