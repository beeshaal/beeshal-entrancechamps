from django.urls import path
from . import views

urlpatterns = [
path('',views.ioecourse,name='ioecourse'),
path('physics',views.physics,name='physics'),
path('mathematics',views.math,name='math'),
path('english',views.english,name='english'),
path('chemistry',views.chemistry,name='chemistry'),
]
