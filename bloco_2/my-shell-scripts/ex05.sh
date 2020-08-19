#!/bin/bash
read -p "Digite aqui o caminho do arquivo" ARQUIVO 
if [ -d "$ARQUIVO" ]
then echo "Ele é um diretório."

elif [ -f "$ARQUIVO" ]
then echo "Ele é um arquivo."

else echo "Ele é alguma outra coisa"
fi