# Generated by Django 4.1 on 2023-08-21 14:43

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("people", "0010_faculty_phone"),
    ]

    operations = [
        migrations.AlterField(
            model_name="faculty",
            name="phone",
            field=models.CharField(blank=True, max_length=15),
        ),
    ]
