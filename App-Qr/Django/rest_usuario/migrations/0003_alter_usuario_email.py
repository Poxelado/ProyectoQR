# Generated by Django 5.0.6 on 2024-10-17 21:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rest_usuario', '0002_alter_usuario_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='email',
            field=models.CharField(max_length=100),
        ),
    ]
