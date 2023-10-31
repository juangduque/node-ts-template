# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Instalar Yarn globalmente
RUN npm install -g yarn

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar package.json y yarn.lock al directorio de trabajo
COPY package*.json yarn.lock ./

# Instalar dependencias usando Yarn
RUN yarn install --production  # Cambiado a --production para instalar solo las dependencias de producción

# Copiar el código fuente al contenedor
COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["yarn", "start"]