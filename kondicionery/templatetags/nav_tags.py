from django import template

from kondicionery.models import Categories
from ventilyacia.models import CategoriesVent

register = template.Library()

@register.simple_tag()
def tag_categories():
    return Categories.objects.all()

@register.simple_tag()
def tag_categories_vent():
    return CategoriesVent.objects.all()