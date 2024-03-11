from django.contrib import admin

# Register your models here.
from obogrevateli.models import Categories_Heat

# admin.site.register(Categories)
# admin.site.register(Products)

@admin.register(Categories_Heat)
class CategoriesHeatAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug' : ('name',)}