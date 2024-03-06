# Generated by Django 4.2.7 on 2024-03-05 15:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('kondicionery', '0003_alter_categories_options_alter_categories_name_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='SubCategories',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, unique=True, verbose_name='Название')),
                ('slug', models.SlugField(blank=True, max_length=200, null=True, unique=True, verbose_name='URL')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='kondicionery.categories')),
            ],
            options={
                'verbose_name': 'Подкатегорию',
                'verbose_name_plural': 'Подкатегории',
                'db_table': 'subcategory',
            },
        ),
        migrations.AddField(
            model_name='products',
            name='subcategory',
            field=models.ForeignKey(default=5, on_delete=django.db.models.deletion.PROTECT, to='kondicionery.subcategories'),
            preserve_default=False,
        ),
    ]