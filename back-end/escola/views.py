from rest_framework import viewsets
from escola.models import Aluno, Curso, Avaliacao, Professor
from escola.serializer import AlunoSerializer, CursoSerializer, ProfessorSerializer, AvaliacaoSerializer

class AlunosViewSet(viewsets.ModelViewSet):
    queryset = Aluno.objects.all()
    serializer_class = AlunoSerializer

class ProfessoresViewSet(viewsets.ModelViewSet):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer

class CursosViewSet(viewsets.ModelViewSet):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer

class AvaliacoesViewSet(viewsets.ModelViewSet):
    queryset = Avaliacao.objects.all()
    serializer_class = AvaliacaoSerializer
