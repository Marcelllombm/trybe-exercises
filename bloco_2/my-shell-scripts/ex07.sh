#!/bin/bash
read -p "Digite aqui um argumento" ARGUMENTO
if [ -d "$ARGUMENTO" ]
then 
    LINHAS=`ls $ARGUMENTO | wc -l`
    echo "O $ARGUMENTO tem $LINHAS arquivos" 

else echo "O argumento $ARGUMENTO não é um diretório"

fi