# Utiliser une image Node.js comme base
FROM node:14

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port sur lequel votre application s'exécute
EXPOSE 8003

# Commande pour démarrer l'application
CMD ["npm", "start"]
