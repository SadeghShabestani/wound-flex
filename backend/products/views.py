import json
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpRequest, HttpResponse
# file
from .serializers import ProductsSerializer
from .models import ProductsModel

def product_page(request):
    return render(request, 'boxes_shop_t/index.html')

# remove product
@csrf_exempt
def remove(request):
    if request.method == 'POST':

        # Get the image file from request.FILES
        product_barcode = request.POST.get('remover item')
        # Check if any of the required fields are missing

        if not product_barcode:
            return HttpResponse(json.dumps({'data': 'فیلد مورد نیاز باید پر شود.'}))
        
        try:
            # Try to get the product using the provided barcode
            product = ProductsModel.objects.get(barcode=product_barcode)
            # Delete the product
            product.delete()
            return HttpResponse(json.dumps({'data': 'محصول با موفقیت پاک شد.'}))
        except ProductsModel.DoesNotExist:
            return HttpResponse(json.dumps({'data': 'محصول یافت نشد.'}))

# add product
@csrf_exempt
def add(request):
    if request.method == 'GET':
        return render(request, 'resive_data/index.html')
    if request.method == 'POST':

        # Get the image file from request.FILES
        product_image = request.FILES.get('resiver photo')
        product_name = request.POST.get('resiver title')
        product_barcode = request.POST.get('resiver code')

        # Check if any of the required fields are missing
        if not (product_image and product_name and product_barcode):
            return HttpResponse(json.dumps({'data': 'تمام فیلدهای مورد نیاز باید فرستاده شود.'}))

        # Check if a product with the same barcode already exists
        existing_product = ProductsModel.objects.filter(barcode=product_barcode).first()
        if existing_product:
            return HttpResponse(json.dumps({'data': 'محصول با این بارکد از قبل وجود دارد.'}))
        else:
            # Create a new ProductsModel instance and set its attributes
            product = ProductsModel(
                image=product_image,
                product_name=product_name,
                barcode=product_barcode
            )
            product.save()
            return HttpResponse(json.dumps({'data': 'محصول با موفقیت ذخیره شد.'}))

# read product
@csrf_exempt
def read(request):
    if request.method == 'GET':
        products = ProductsModel.objects.all()
        json_data = []
        for product in products:
            product_data = {
                'image_url': product.image.url,
                'product_name': product.product_name,
                'barcode': product.barcode,
            }
            json_data.append(product_data)
        return HttpResponse(json.dumps({'data': json_data}))
