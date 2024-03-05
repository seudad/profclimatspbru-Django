from django.shortcuts import render

from kondicionery.models import Products

# Create your views here.
def kondicionery(request):

    item = Products.objects.all()

    context = {
        'title' : 'Кондиционеры',
        'item' : item,
    }
    return render(request, 'kondicionery/kondicionery.html', context)

def cunit(request):
    return render(request, 'kondicionery/cunit.html')

