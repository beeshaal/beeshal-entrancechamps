from django.shortcuts import render,redirect,HttpResponse
from django.http.response import JsonResponse
import random
from .models import *

def ioecourse(request):
    return render(request,'ioe.html')

def physics(request):
    return render(request,'physics.html')

def math(request):
    return render(request,'mathematics.html')

def english(request):
    return render(request,'english.html')

def chemistry(request):
    return render(request,'chemistry.html')
