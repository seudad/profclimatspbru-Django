from django.contrib import admin

from main.models import Navbar

# Register your models here.
@admin.register(Navbar)
class NavbarAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug' : ('name',)}