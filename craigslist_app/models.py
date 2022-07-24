from django.db import models

# Create your models here.

class Category(models.Model):

    name = models.CharField(max_length=255, unique=True)

class Post(models.Model):

    category_id = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='category')
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
