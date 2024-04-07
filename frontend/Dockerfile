# Utiliser une image Node.js comme base
FROM node:16 as build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier package.json et package-lock.json pour installer les dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier les fichiers source de l'application
COPY . .

# Installer les scripts React
RUN npm install react-scripts@latest -g

# Construire l'application React
RUN npm run build

# Étape de production
FROM nginx:alpine

# Copier les fichiers de construction de l'étape de build dans le répertoire de serveur Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80 pour que Nginx puisse servir l'application
EXPOSE 80

# Démarrer Nginx en arrière-plan lorsque le conteneur démarre
CMD ["nginx", "-g", "daemon off;"]
