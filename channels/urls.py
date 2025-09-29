
from django.urls import path
from channels.views import get_channel

urlpatterns = [
    path('get_channel/', get_channel, name='get_channel'),
]
