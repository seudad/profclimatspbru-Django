from django.db import models

# Create your models here.
class Categories(models.Model):
    name = models.CharField(max_length=150, unique=True, verbose_name='Название') 
    slug = models.SlugField(max_length=200, unique=True, blank=True, null=True, verbose_name='URL')
    description = models.TextField(blank=True, null=True,verbose_name='Описание')
    title = models.CharField(max_length=150, unique=True, verbose_name='Титульник')

    class Meta:
        db_table = 'category'
        verbose_name = 'Категорию'
        verbose_name_plural = 'Категории'

    def __str__(self):
        return self.name

    def more(self):
        if self.slug == 'rashodnye-materialy-dlya-kondicionerov' or 'zapchasti-k-kondicioneram':
            return 'ok'
        

class Compressor(models.Model):
    name = models.CharField(max_length=150, unique=True, verbose_name='Название') 
    slug = models.SlugField(max_length=200, unique=True, blank=True, null=True, verbose_name='URL')

    class Meta:
        db_table = 'compress'
        verbose_name = 'Компрессор'
        verbose_name_plural = 'Компрессоры'

    def __str__(self):
        return self.name

class Products(models.Model):
    name = models.CharField(max_length=150, unique=True, verbose_name='Название') 
    slug = models.SlugField(max_length=200, unique=True, blank=True, null=True, verbose_name='URL')
    description = models.TextField(blank=True, null=True,verbose_name='Описание')
    img = models.ImageField(upload_to='prod_images', blank=True, null=True, verbose_name='Изображение')
    imgmore = models.FileField(upload_to='descpript_images', blank=True, null=True, verbose_name='Изображение под описание')
    spec = models.TextField(blank=True, null=True,verbose_name='Хар-ки')
    price = models.DecimalField(default=0, verbose_name='Цена', decimal_places=0, max_digits=10)
    discount = models.DecimalField(default=0, verbose_name='Скидка в процентах', decimal_places=0, max_digits=3)
    cooled = models.DecimalField(default=0, verbose_name='Охлаждение', decimal_places=1, max_digits=4)
    heater = models.DecimalField(default=0, verbose_name='Обогрев', decimal_places=1, max_digits=4)
    articul = models.DecimalField(default=0, verbose_name='Артикул', decimal_places=0, max_digits=4)
    square = models.IntegerField(default=0, verbose_name="Площадь охлаждения")
    compress = models.ForeignKey(to=Compressor, on_delete=models.PROTECT, verbose_name='Компрессор')
    category = models.ForeignKey(to=Categories, on_delete=models.PROTECT, verbose_name='Категория')
    

    class Meta:
        db_table = 'products'
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'

    def __str__(self):
        return self.name
    
class Manuf(models.Model):
    name = models.CharField(max_length=150, unique=True, verbose_name='Название') 
    slug = models.SlugField(max_length=200, unique=True, blank=True, null=True, verbose_name='URL')

    class Meta:
        db_table = 'manuf'
        verbose_name = 'Производитель'
        verbose_name_plural = 'Производители'

    def __str__(self):
        return self.name