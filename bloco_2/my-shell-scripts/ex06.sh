#!/bin/bash
DIRETORIO=$1  
if [ -d `$1` ]
then echo "Ele é um diretório."

elif [ -f `$1` ]
then echo "Ele é um arquivo."

else echo "Ele é alguma outra coisa"
fi
ls -l $DIRETORIO