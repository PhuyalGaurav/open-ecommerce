from django.contrib import admin
from .models import  Product, Review, Shippingaddress, Order

admin.site.register(Product)
admin.site.register(Review)
admin.site.register(Shippingaddress)
admin.site.register(Order)