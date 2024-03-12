from django.urls import path

from kondicionery import views

app_name = 'kondicionery'

urlpatterns = [
    path('', views.kondicionery, name='index'),
    path('<slug:category_slug>/', views.subitem, name='subitem'),
    path('/<slug:products_slug>/', views.cunit, name='cunit'),
]