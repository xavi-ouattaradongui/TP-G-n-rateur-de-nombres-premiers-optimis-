Rapport — Générateur de Nombres Premiers Optimisé
1. Introduction

Dans le cadre de ce travail pratique, nous avons réalisé une application React permettant de générer des nombres aléatoires, de vérifier s’ils sont premiers, ainsi que de proposer un nombre à tester.
Le projet met en œuvre plusieurs technologies modernes telles que Zustand, TanStack Query, TanStack Router, Zod et TailwindCSS, ainsi que des techniques d’optimisation.

2. Objectifs du projet

Les objectifs principaux étaient les suivants :

Générer un nombre aléatoire à partir d’une API simulée.

Vérifier efficacement si un nombre est premier.

Permettre à l’utilisateur de saisir un nombre et de valider son format.

Gérer les états internes avec Zustand.

Gérer les requêtes asynchrones avec TanStack Query.

Assurer la navigation avec TanStack Router.

Optimiser les calculs coûteux grâce à useMemo.

Structurer proprement un projet React moderne.

3. Technologies utilisées

Le projet utilise les outils suivants :

React : base de l’application.

Zustand : gestion d’état légère et flexible.

TanStack Query : gestion des données asynchrones.

TanStack Router : navigation entre les pages.

Zod : validation des données utilisateur.

TailwindCSS : mise en forme rapide et modulable.

useMemo : optimisation des calculs intensifs.

4. Structure générale du projet

Le projet a été organisé selon une architecture claire permettant de séparer les responsabilités :

api : contient la fonction simulant une API.

components : composants UI réutilisables.

hooks : hooks personnalisés liés aux requêtes.

pages : pages principales de l’application.

routes : gestion des routes avec TanStack Router.

schemas : schémas de validation Zod.

service : fonctions métier, dont le test de primalité.

stores : gestion des états via Zustand.

Cette structure permet une évolution facile et un maintien propre du code.

5. Fonctionnement de l’application
5.1 Génération d’un nombre aléatoire

Une API simulée renvoie un nombre compris entre 1 et 10 000. La requête est gérée par TanStack Query, permettant d’utiliser le cache, la gestion du chargement et la facilité de réexécution.

5.2 Vérification de la primalité

La fonction de test utilise une méthode optimisée reposant sur les points suivants :

gestion immédiate des cas simples (n ≤ 1, n = 2, n pair) ;

itération uniquement jusqu’à la racine carrée du nombre ;

élimination des divisions inutiles.

5.3 Entrée utilisateur

L’utilisateur peut entrer un nombre qui est automatiquement validé par Zod afin d’éviter les erreurs de type ou de format.

5.4 Gestion de l’état

Zustand permet de stocker :

l’historique des nombres testés,

le résultat des vérifications,

l’affichage conditionnel des éléments.

5.5 Optimisation

Les calculs de primalité, potentiellement coûteux pour les grands nombres, sont optimisés grâce à useMemo afin d’éviter les recalculs inutiles.

6. Répartition des tâches dans le groupe
6.1 Dongui OUATTARA

Mise en place du routeur TanStack.

Création du formulaire utilisateur et validation Zod.

Tests et intégration des routes.

6.2 ben DIARRA

Développement de l’API simulée.

Création du schéma Zod.

Développement du hook TanStack Query.

6.3 Franck Evan YAPI

Création du service de vérification de primalité.

Mise en place du store Zustand.

Optimisations via useMemo et revue des performances.
