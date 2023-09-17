from django.contrib import admin
# file
from .models import ProductsModel

# Products
@admin.register(ProductsModel)
class Products(admin.ModelAdmin):
    list_display = ('id', 'image', 'product_name', 'barcode',)