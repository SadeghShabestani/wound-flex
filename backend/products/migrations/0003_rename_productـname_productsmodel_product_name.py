# Generated by Django 4.2.4 on 2023-09-06 07:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_alter_productsmodel_barcode'),
    ]

    operations = [
        migrations.RenameField(
            model_name='productsmodel',
            old_name='productـname',
            new_name='product_name',
        ),
    ]
