from django.shortcuts import render, HttpResponse
from datetime import datetime
from home.models import Contact
from django.contrib import messages

def index(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')


def services(request):
    return render(request, 'services.html')


def components(request):
    return render(request, 'components.html')

    
def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        concern = request.POST.get('concern')
        contact = Contact(name = name, email = email, phone = phone, concern = concern, date = datetime.today())
        contact.save()
        messages.success(request, "Your query has been submitted successfully! We'll write you soon.")
    return render(request, 'contact.html')

# def retreive(request):
#     contact_data = Contact.objects.all()
#     for item in contact_data:
#         print("name of the contact", item.name)

#     return HttpResponse('This page is working')
