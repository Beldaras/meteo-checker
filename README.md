# Meteo Checker

Voici le projet frontend d'une web app météo fullstack.  
A ce stade de développement, vous pouvez rechercher une ville et voir sa météo sur la page d'acceuil. Les donnée sont sauvegarder dans la stockage local du navigateur.  
Vous pouvez également créer un compte utilisateur, vous connecter, ajouter des favoris et accéder à la page correspondante pour les consulter.

Pour la suite, il reste à améliorer le design (css), finir le CRUD utilisateur (pour mettre à jour ses informations ou supprimer son compte) et refactoriser le code.

Lien vers le dépot du backend : https://github.com/Beldaras/meteo-express

### Pour lancer le projet :

```
git clone git@github.com:Beldaras/meteo-checker.git

npm install

npm run dev
```

N'oublier pas de paramétrer vos variables d'environnement dans un fichier .env (utilisez le .env.sample en exemple).

## English translation

This part is a frontend project for a meteo checker fullstack web app. 
At this time, you can search a city, check her weather on the home page and set this in local storage of your browser.
As a user, you can create an account and login to add and get favorite cities.

for the future, I would like to upgrade the UI with CSS, add features to update or delete user account and refactor code.

The backend project to register user and his favorites cities here : https://github.com/Beldaras/meteo-express

### To run the project

```
git clone git@github.com:Beldaras/meteo-checker.git

npm install

npm run dev
```

Don't forget to set your .env (with .env.sample), clone and run backend repository

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
