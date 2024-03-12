from django.shortcuts import render

from obogrevateli.models import Categories_Heat
# Create your views here.
def obogrevateli(request):

    context = {
        'title' : 'Купить обогреватель в СПб недорого ПрофКлимат.',
    }
    return render(request, 'obogrevateli/obogrevateli.html', context)

def hunit(request):
    return render(request, 'obogrvateli/hunit.html')

def subitem(request, category_slug):

    category = Categories_Heat.objects.get(slug=category_slug)

    data = {
        'category' : category,
    }

    return render(request, 'obogrevateli/subitem.html', data)