from django.contrib import admin

# Register your models here.
from ventilyacia.models import CategoriesVent, Products

# admin.site.register(Categories)
# admin.site.register(Products)

@admin.register(CategoriesVent)
class CategoriesAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug' : ('name',)}

@admin.register(Products)
class ProductsAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug' : ('name',)}  