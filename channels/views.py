from django.shortcuts import render
from django.http import JsonResponse
import json

def get_data(x):
    with open('channels.json') as f:
        data = json.load(f)
    return data[str(x)]

def get_channel(request):
    arg = int(request.GET.get('arg')) + 1
    return JsonResponse(get_data(arg))