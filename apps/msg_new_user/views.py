from django.http import HttpResponse
from django.shortcuts import render, redirect
from ._py_msg_new_user import NewUserMessage

def home_view(request):
    return render(request, 'index.html')

def home_page_view(request):
    return render(request, 'home_page.html')

def send_message_view(request):
    if request.method == 'POST':
        new_message = NewUserMessage(request)
        new_message.send_message_telegram()
        return redirect('home_page')
    else:
        return render(request, 'index.html')