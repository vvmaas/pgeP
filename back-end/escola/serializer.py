from rest_framework import serializers
from escola.models import Aluno, Curso, Avaliacao, Professor

class AlunoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aluno
        fields = ['id', 'nome', 'email', 'cursos']

class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = ['id', 'nome', 'carga_horaria']

class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor
        fields = ['id', 'nome', 'cpf', 'email', 'curso_id']

class AvaliacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Avaliacao
        fields = ['id', 'nota1', 'nota2', 'faltas', 'aluno_id', 'curso_id']