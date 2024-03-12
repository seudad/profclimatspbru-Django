from django.contrib import admin

# Register your models here.
from kondicionery.models import Categories, Manuf, Products

# admin.site.register(Categories)
# admin.site.register(Products)

@admin.register(Categories)
class CategoriesAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug' : ('name',)}

@admin.register(Products)
class ProductsAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug' : ('name',)}

@admin.register(Manuf)
class ManufAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug' : ('name',)}    