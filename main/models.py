from django.db import models

# Create your models here.
class Navbar(models.Model):
    name = models.CharField(max_length=150, unique=True, verbose_name='Название') 
    slug = models.SlugField(max_length=200, unique=True, blank=True, null=True, verbose_name='URL')
    code = models.TextField(blank=True, null=True,verbose_name='code')
    title = models.CharField(max_length=150, unique=True, verbose_name='Титульник')

    class Meta:
        db_table = 'navbar'
        verbose_name = 'Навигацию'
        verbose_name_plural = 'Навигация'

    def __str__(self):
        return self.name