# Generated by Django 4.1.7 on 2023-04-04 09:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0002_category"),
    ]

    operations = [
        migrations.AlterField(
            model_name="addmoney_info",
            name="Category",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="home.category"
            ),
        ),
    ]
