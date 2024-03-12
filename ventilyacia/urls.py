from django.urls import path

from ventilyacia import views

app_name = 'ventilyacia'

urlpatterns = [
    path('', views.ventilyacia, name='index'),
    path('vunit/', views.vunit, name='vunit'),
]