# Generated by Django 4.1.7 on 2023-02-26 19:15

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('escola', '0002_rename_aluno_avaliacao_aluno_id_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='aluno',
            name='serie',
        ),
        migrations.RemoveField(
            model_name='professor',
            name='serie',
        ),
        migrations.AlterField(
            model_name='aluno',
            name='cpf',
            field=models.CharField(max_length=11, unique=True, validators=[django.core.validators.MinLengthValidator(11)]),
        ),
        migrations.AlterField(
            model_name='curso',
            name='carga_horaria',
            field=models.IntegerField(validators=[django.core.validators.MaxValueValidator(200), django.core.validators.MinValueValidator(1)]),
        ),
        migrations.AlterField(
            model_name='professor',
            name='cpf',
            field=models.CharField(max_length=11, unique=True, validators=[django.core.validators.MinLengthValidator(11)]),
        ),
    ]