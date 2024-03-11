from django import template

from kondicionery.models import Categories
from main.models import Navbar
from obogrevateli.models import Categories_Heat
from ventilyacia.models import CategoriesVent

register = template.Library()

@register.simple_tag()
def tag_categories():
    return Categories.objects.all()

@register.simple_tag()
def tag_categories_heat():
    return Categories_Heat.objects.all()

@register.simple_tag()
def tag_categories_vent():
    return CategoriesVent.objects.all()

@register.simple_tag()
def tag_categories_nav():
    return Navbar.objects.all()