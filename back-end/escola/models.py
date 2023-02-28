from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator, MinLengthValidator

class Curso(models.Model):
    nome = models.CharField(max_length=50);
    carga_horaria = models.IntegerField(
        validators=[
            MaxValueValidator(200),
            MinValueValidator(1)
        ]);

    def __str__(self):
        return str(self.id)

class Aluno(models.Model):
    nome = models.CharField(max_length=50);
    cpf = models.CharField(max_length=11, validators=[MinLengthValidator(11)], unique=True);
    email = models.EmailField(max_length=254);
    cursos = models.ManyToManyField(Curso)

    def __str__(self):
        return str(self.id)

class Avaliacao(models.Model):
    nota1 = models.IntegerField(
        validators=[
            MaxValueValidator(100),
            MinValueValidator(0)
        ]);
    nota2 = models.IntegerField(
        validators=[
            MaxValueValidator(100),
            MinValueValidator(0)
        ]);
    faltas = models.IntegerField(default=0);
    curso_id = models.ForeignKey(Curso, on_delete=models.CASCADE)
    aluno_id = models.ForeignKey(Aluno, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id)

class Professor(models.Model):
    user = models.OneToOneField(
           User, 
           on_delete=models.CASCADE, 
           null=True, blank=True
    );
    nome = models.CharField(max_length=50);
    cpf = models.CharField(max_length=11, validators=[MinLengthValidator(11)], unique=True);
    email = models.EmailField(max_length=254);
    curso_id = models.OneToOneField(Curso, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id)
