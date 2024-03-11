from django.shortcuts import render

from main.models import Navbar

def index(request):

    navbar = Navbar.objects.all()

    data = {
        'title' : 'Климатические системы и оборудования',
        'navbar' : navbar,
    }

    return render(request, 'main/index.html', data)

def dostavka(request):
    data = {
        'title' : 'Доставка по Санкт-Петербургу и Ленинградской области'
    }
    return render(request, 'main/dostavka.html', data)