from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    data = {
        'title' : 'Климатические системы и оборудования',
        'content' : 'Hello world!'
    }

    return render(request, 'main/index.html', data)

def about(request):
    return HttpResponse('About page')