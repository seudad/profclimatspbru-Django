from django.urls import path

from kondicionery import views

app_name = 'kondicionery'

urlpatterns = [
    path('', views.kondicionery, name='kondicionery'),
    path('cunit/', views.cunit, name='cunit'),
]