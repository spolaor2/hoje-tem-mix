FROM node:10

#Setar work dir
WORKDIR /usr/src/app

#Instalar dependências
COPY package*.json ./
RUN npm install

# Copying source files
COPY . . 

#Buildar
RUN npm run build

# Rodar o app
CMD [ "npm", "start" ]