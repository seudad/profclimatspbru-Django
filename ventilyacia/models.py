from django.db import models

# Create your models here.
class CategoriesVent(models.Model):
    name = models.CharField(max_length=150, unique=True, verbose_name='Название') 
    slug = models.SlugField(max_length=200, unique=True, blank=True, null=True, verbose_name='URL')

    class Meta:
        db_table = 'category_vent'
        verbose_name = 'Категорию'
        verbose_name_plural = 'Категории'

    def __str__(self):
        return self.name              

class Products(models.Model):
    name = models.CharField(max_length=150, unique=True, verbose_name='Название') 
    slug = models.SlugField(max_length=200, unique=True, blank=True, null=True, verbose_name='URL')
    description = models.TextField(blank=True, null=True,verbose_name='Описание')
    img = models.ImageField(upload_to='prod_images', blank=True, null=True, verbose_name='Изображение')
    price = models.DecimalField(default=0, verbose_name='Цена', decimal_places=0, max_digits=10)
    category = models.ForeignKey(to=CategoriesVent, on_delete=models.PROTECT, verbose_name='Категория')
    

    class Meta:
        db_table = 'products_vents'
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'

    def __str__(self):
        return self.name