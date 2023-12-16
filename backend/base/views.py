from django.shortcuts import render
from django.http import JsonResponse
from .models import Product
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProductSerializers

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/products/',
        '/api/products/create/',

        
        '/api/products/upload',
        '/api/products/<id>/reviews',

        '/api/products/top',
        '/api/products/<id>',

        '/api/products/delete/<id>/',
        '/api/products/<update>/<id>/',



    ]

    return Response(routes)


@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    return Response(ProductSerializers(products, many=True).data)


@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(pk = int(pk))
    return Response(ProductSerializers(product, many=False).data)