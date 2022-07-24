from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('categories/', views.list_categories),
    path('categories/new', views.add_category),
    path('categories/<int:id>', views.view_category),
    path('categories/<int:id>/view', views.view_category_posts),
    path('categories/<int:id>/edit', views.edit_category),
    path('categories/<int:id>/posts/new', views.add_post),
    path('posts/', views.view_posts)
]