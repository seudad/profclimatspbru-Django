from django.urls import path

from obogrevateli import views

app_name = 'obogrevateli'

urlpatterns = [
    path('', views.obogrevateli, name='obogrevateli'),
    path('hunit/', views.hunit, name='hunit'),
]