from django.urls import path

from obogrevateli import views

app_name = 'obogrevateli'

urlpatterns = [
    path('', views.obogrevateli, name='index'),
    path('<slug:category_slug>/', views.subitem, name='subitem'),
    path('hunit/', views.hunit, name='hunit'),
]