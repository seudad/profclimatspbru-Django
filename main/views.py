from django.shortcuts import render

from kondicionery.models import Manuf

from main.models import Navbar
from obogrevateli.models import Manuf_Heat

def index(request):

    navbar = Navbar.objects.all()
    manuf = Manuf.objects.all()
    manuf2 = Manuf_Heat.objects.all()

    data = {
        'title' : 'Климатические системы и оборудования',
        'navbar' : navbar,
        'manuf' : manuf,
        'manuf2' : manuf2,
    }

    return render(request, 'main/index.html', data)

def navbar(request, navbar_slug):

    nav = Navbar.objects.get(slug=navbar_slug)
    navbar = Navbar.objects.all()

    data = {
        'slug' : nav,
        'navbar' : navbar
    }
    return render(request, 'main/nav_other.html', data)