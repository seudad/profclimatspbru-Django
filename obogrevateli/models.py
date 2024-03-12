from django.db import models

# Create your models here.
class Categories_Heat(models.Model):
    name = models.CharField(max_length=150, unique=True, verbose_name='Название') 
    slug = models.SlugField(max_length=200, unique=True, blank=True, null=True, verbose_name='URL')
    description = models.TextField(blank=True, null=True,verbose_name='Описание')
    title = models.CharField(max_length=150, unique=True, verbose_name='Титульник') 

    class Meta:
        db_table = 'category_heat'
        verbose_name = 'Категорию'
        verbose_name_plural = 'Категории'

    def __str__(self):
        return self.name
    
class Manuf_Heat(models.Model):
    name = models.CharField(max_length=150, unique=True, verbose_name='Название') 
    slug = models.SlugField(max_length=200, unique=True, blank=True, null=True, verbose_name='URL')

    class Meta:
        db_table = 'manuf_heat'
        verbose_name = 'Производитель'
        verbose_name_plural = 'Производители'

    def __str__(self):
        return self.name