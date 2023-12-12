#descargar imagen padre node:16
FROM node:16-alpine

#Cambiar directorio de Docker
WORKDIR /app

#Copiar archivos Json
COPY package.json package-lock.json ./

#Instalar Dependencias
RUN npm install 

#Copiar el Resto de archivos en la imagen 
COPY . .

#Exponer puerto de la aplicación
EXPOSE 3001

#INICIALIZAR LA APLICACION
CMD npm start 