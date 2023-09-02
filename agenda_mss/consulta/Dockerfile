#alpine: imagem Linux
FROM node:alpine

#um diretório no sistema de arquivos do container
#para os comandos a seguir
WORKDIR /app

#copia arquivo package.json para poder executar o install
COPY package.json .

#instala dependencias
RUN npm install 

#copia todo o conteudo local para imagem
COPY . .

#executa quando o container entra em execucao
CMD ["npm", "start"]