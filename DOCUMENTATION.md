# Liste TODO pour le TP — Générateur de nombres premiers optimisé

## Étape 1 : Installer les dépendances
- [x] Installer Zustand, @tanstack/react-query, @tanstack/react-router, zod, tailwindcss et les dépendances de développement associées.

## Étape 2 : Configurer TailwindCSS
- [x] Initialiser TailwindCSS dans le projet.
- [x] Configurer tailwind.config.js et mettre à jour index.css.

## Étape 3 : Configurer TanStack Router
- [x] Créer le répertoire routes et les fichiers : __root.jsx, index.jsx, primes.jsx.
- [x] Générer routeTree.gen.ts.

## Étape 4 : Créer la structure du projet
- [x] Créer les dossiers : api, components, hooks, pages, schemas, service, stores.
- [x] Déplacer et organiser les fichiers existants si nécessaire.

## Étape 5 : Implémenter la fonction API simulée
- [x] Créer api/fetchApi.js avec la fonction fournie fetchNumberAlea.

## Étape 6 : Créer le schéma Zod
- [x] Créer schemas/numberSchema.js avec numberSchema.

## Étape 7 : Créer le service de vérification de nombre premier
- [x] Créer service/verifIsPrime.js avec la fonction isPrime.

## Étape 8 : Créer le store Zustand
- [x] Créer stores/usePrimeStore.js pour gérer la logique des nombres premiers et l'état d'affichage.

## Étape 9 : Créer le hook TanStack Query
- [x] Créer hooks/usePrimeAlea.js pour la requête vers l'API.

## Étape 10 : Créer les pages
- [x] Créer pages/PrimesPage.jsx.
- [x] Mettre à jour App.jsx ou intégrer le routeur.

## Étape 11 : Implémenter les routes et la navigation
- [x] Implémenter les routes / (accueil) et /primes avec leur contenu.

## Étape 12 : Ajouter un formulaire pour l'entrée utilisateur
- [x] Ajouter un champ de saisie dans PrimesPage pour proposer un nombre, le valider avec Zod et vérifier s'il est premier.

## Étape 13 : Optimiser avec useMemo
- [x] Utiliser useMemo aux endroits pertinents pour mettre en cache les vérifications de primalité.

## Étape 14 : Tests et finitions
- [ ] Tester l'application et s'assurer que toutes les fonctionnalités fonctionnent.
- [x] Ajouter les composants UI manquants comme Button.jsx, Prime.jsx.
- [ ] Vérifier la cohérence avec les graphiques de machine de Turing (si applicable).
