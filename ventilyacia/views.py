from django.shortcuts import render

# Create your views here.
def ventilyacia(request):

    context = {
        'title' : 'Системы вентиляции в СПб — проектирование и монтаж оборудования ПрофКлимат',
    }
    return render(request, 'vent/vent.html', context)

def vunit(request):
    return render(request, 'vent/vunit.html')