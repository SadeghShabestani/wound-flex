from django.db import models

class ProductsModel(models.Model):
    image = models.ImageField(upload_to='products/')
    product_name = models.CharField(max_length=250)
    barcode = models.IntegerField(unique=True)
