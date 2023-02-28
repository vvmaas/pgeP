from django.contrib import admin
from escola.models import Curso, Professor

class Professores(admin.ModelAdmin):
    list_display = ('id', 'nome')
    list_display_links = ('id', 'nome')

class Cursos(admin.ModelAdmin):
    list_display = ('id', 'nome')
    list_display_links = ('id', 'nome')

admin.site.register(Professor, Professores)
admin.site.register(Curso, Cursos)
    
