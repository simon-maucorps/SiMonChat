# SiMonChat - Parlez avec vous même

**SiMonChat** est une mini application permettant de parler avec vous même via X boites de dialogue communicante.

## Choix technique

### Framework Javascript: Angular
 Version 14  (v 14.2.6)
### Language de style : LESS 
Choisi pour sa simplicité de mise en place, de lecture et les possibilités offerte par rapport à du css basique.

## Démarrage du projet 

Pour démarrer le projet il va d'abord falloir récupérer les différents package angular.
Pour se faire, il faut se placer via une invite de commande (Windows + R -> cmd -> "entrer") à la racine du projet.
La commande suivante permettre de récupérer toutes les packages nécessaire au bon fonctionnement du site : 
```
npm i
```
Une fois les packages correctement installés, il faut saisir la commande suivante : 
```
ng serve --open
```
Cette commande va permettre au projet de se générer puis une fini, le site va s'ouvrir sur votre navigateur par défaut.

## Architecture du projet
Le projet est divisé en **5** modules
### Le module initial - AppModule
C'est lui qui est appelé en premier et qui fait ensuite le lien vers les autres modules. 
Il est composé des éléments suivant :
- **app.component.html** : Affiche le composant header, puis le routing
- **app-routing.module.ts** : Contient le routing avec la liaison vers les différents composants
- **app.module.ts** : Permet de charger les différents modules nécessaire 
- **variable.less** : Fichier dans lequel est stocké les variables utilisable pour le style des pages

### Le module de chat - ChatModule
On y retrouve toute la logique liée au chat.
Il est composé de 3 composants :
- **chat.component** : Représente une boite de chat
- **chat-list.component** : Composant qui affichera les différentes boite de chat
- **message.component** : Représentation du message présent dans les chats

4 class d'objets : 
- **chat.ts** : Entité représentant le chat
- **chatParam.ts** : Entité représentant les paramètres du chat
- **message.ts** : Entité représentant les messages échangés via le chat
- **user.ts** : Entité représentant l'utilisateur du chat

1 pipe : 
- **date-ago.pipe.ts** : Permet d'avoir la notion de depuis combien de temps un message est envoyé

1 service
- **chat.service.ts** : C'est ici qu'est toute la logique d'échange de message

### Le module boite à outil - CoreModule
Il est composé d'un seul service **global.service.ts** qui contient les différentes fonctionnalités qui peuvent être utilisées par tous les modules. C'est la boite à outil de l'application.

### Le header - HeaderModule
Simplement composé d'une class d'objet et d'un composant, il correspond à l'entête du site et permet d'afficher les lien vers les différents module de l'application
### A propos - AboutModule
Module où la documentation est mise (lien vers ce Readme)

- --
Le fichier **environment.ts** permet de paramétrer facilement l'application, notamment dans le cas où l'on veut faire un auto-test du dialogue. 
Voilà en détail les variables qui le compose : 
- **chatNumber**  : Nombre de chat actif
- **launchChatTest** :: Lance le test de dialogue automatique directement lorsque le chat s'ouvre

Les champs ci-dessous ont une utilité uniquement lors des tests de dialogue automatique
-  **maxSentence**  : Nombre de phrase maximum par message
-  **minSentence**  : Nombre de phrase minimum par message
-  **maxWord**  : Nombre de mot maximum par phrase
-  **minWord**  : Nombre de mot minimum par phrase
-  **testMessageNumber**  : Nombre de message envoyé lors d'un test

## Package utilisé 
- **lorem-ipsum** : https://www.npmjs.com/package/lorem-ipsum
	- Permet de générer du Lorem Ipsum pour avoir des messages de test 



