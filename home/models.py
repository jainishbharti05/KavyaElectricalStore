# from django.db import models
from djongo import models
# from djongo.models import forms

# Create your models here.
class Contact(models.Model): #Collection name
    
    
    name = models.CharField(max_length=122)
    email = models.EmailField(max_length=150)
    phone = models.CharField(max_length=12)
    concern = models.TextField(max_length=300)
    date = models.DateField()

    def __str__(self):
        return self.name


    
    