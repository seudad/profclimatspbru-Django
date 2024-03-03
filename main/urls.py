from django.urls import path

from main import views

app_name = 'main'

urlpatterns = [
    path('', views.index, name='home'),
    path('dostavka/', views.dostavka, name='dostavka'),
]