from django.urls import path
from . import views

urlpatterns = [
    path('send/', views.send_message_view, name='send_message'),
    path('home/', views.home_page_view, name='home_page'),
]