from django.urls import path

from main import views

app_name = 'main'

urlpatterns = [
    path('', views.index, name='home'),
    path('<slug:navbar_slug>', views.navbar, name='nav'),
]