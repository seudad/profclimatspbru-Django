from django.shortcuts import render

from obogrevateli.models import Categories_Heat
# Create your views here.
def obogrevateli(request):

    context = {
        'title' : 'Обогреватели',
    }
    return render(request, 'obogrevateli/obogrevateli.html', context)

def hunit(request):
    return render(request, 'obogrvateli/hunit.html')