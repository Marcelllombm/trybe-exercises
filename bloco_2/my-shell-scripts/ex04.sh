#!/bin/bash
FILE="/home/marcelo/aulas_trybe/aula1.5"
if [ -e "$FILE" ]
then
    echo "O caminho $FILE está habilitado"
else "Você não está"
fi
if [ -w "$FILE" ]
then   
    echo "Você tem permissão para editar $FILE"
else 
    echo "Você NÃO foi autorizado a editar $FILE"
fi    
