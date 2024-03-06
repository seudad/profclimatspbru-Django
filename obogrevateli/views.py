from django.shortcuts import render
# Create your views here.
def obogrevateli(request):

    context = {
        'title' : 'Обогреватели',
    }
    return render(request, 'obogrevateli/obogrevateli.html', context)

def hunit(request):
    return render(request, 'obogrvateli/hunit.html')