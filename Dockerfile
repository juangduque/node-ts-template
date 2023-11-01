# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar package.json y yarn.lock al directorio de trabajo
COPY package*.json yarn.lock ./

# Instalar dependencias usando Yarn
RUN yarn install

# Copiar el código fuente al contenedor
COPY . .

RUN yarn build

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["yarn", "start"]