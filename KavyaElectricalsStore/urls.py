
from django.contrib import admin
from django.urls import path, include
# from home import views


admin.site.site_header = "Kavya Electrical Store Admin"
admin.site.site_title = "Kavya Electrical Store"
admin.site.index_title = "Admin | Kavya Electrical Store"

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('odm', views.retreive, name = 'retreive'),
    path('',include('home.urls'))
]
