from django.urls import path
from . import views

app_name = 'products'
urlpatterns = [
    path('', views.product_page),
    path('manage/', views.add),
    path('read/', views.read),
    path('remove/', views.remove),
]