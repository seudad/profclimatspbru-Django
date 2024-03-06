from django.shortcuts import render

# Create your views here.
def ventilyacia(request):

    context = {
        'title' : 'Вентиляция',
    }
    return render(request, 'vent/vent.html', context)

def vunit(request):
    return render(request, 'vent/vunit.html')