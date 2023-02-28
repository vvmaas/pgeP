from django.contrib import admin
from django.urls import path, include
from escola.views import AlunosViewSet, CursosViewSet, ProfessoresViewSet, AvaliacoesViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'alunos', AlunosViewSet)
router.register(r'cursos', CursosViewSet)
router.register(r'professores', ProfessoresViewSet)
router.register(r'avaliacoes', AvaliacoesViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
