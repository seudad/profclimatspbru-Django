from django.shortcuts import render

from kondicionery.models import Categories, Products

# Create your views here.
def kondicionery(request):

    item = Products.objects.all()

    context = {
        'title' : 'Купить кондиционер в Санкт-Петербурге недорого | ПрофКлимат.',
        'item' : item,
    }
    return render(request, 'kondicionery/kondicionery.html', context)

def cunit(request, products_slug):

    prod = Products.objects.get(slug=products_slug)
    item = Products.objects.all()

    data = {
        'prod' : prod,
        'item' : item,
    }

    return render(request, 'kondicionery/cunit.html', data)

def subitem(request, category_slug):

    category = Categories.objects.get(slug=category_slug)

    data = {
        'category' : category,
    }

    return render(request, 'kondicionery/subitem.html', data)