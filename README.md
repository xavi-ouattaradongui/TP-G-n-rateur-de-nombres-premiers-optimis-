# Générateur de nombres premiers optimisé

Application React qui **génère un nombre aléatoire et vérifie s'il est premier**, ou teste un nombre saisi par l'utilisateur. Projet d'équipe centré sur une stack React moderne et l'optimisation des calculs.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TanStack Query](https://img.shields.io/badge/TanStack-Query%20%2B%20Router-FF4154?logo=reactquery&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-5-443E38)
![Zod](https://img.shields.io/badge/Zod-4-3E67B1?logo=zod&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

## Fonctionnalités

- **Nombre aléatoire** entre 1 et 10 000, fourni par une API simulée et mis en cache par TanStack Query
- **Test de primalité optimisé** : cas simples traités tout de suite (n ≤ 1, 2, nombres pairs), divisions seulement jusqu'à √n
- **Saisie libre** d'un nombre, validée par un schéma Zod
- **Historique** des nombres testés, conservé dans un store Zustand
- **Navigation** entre les pages avec TanStack Router ; calculs mémorisés avec `useMemo`

## Lancer le projet

Prérequis : Node.js 18+.

```bash
cd app_generateur
npm install
npm run dev
```

Puis ouvrir <http://localhost:5173>.

## Architecture

```
app_generateur/src/
├── api/fetchApi.js            API simulée (nombre aléatoire)
├── hooks/usePrimeAlea.js      requête TanStack Query
├── service/verifIsPrime.js    test de primalité
├── schemas/numberSchema.js    validation Zod
├── stores/usePrimeStore.js    état global Zustand
├── routes/                    pages (TanStack Router)
└── components/                composants d'interface
```

Le rapport complet du projet (objectifs, choix techniques, répartition des tâches) est dans [`docs/RAPPORT.md`](docs/RAPPORT.md).

## Équipe

| Membre | Rôle principal |
|---|---|
| **Dongui OUATTARA** ([@xavi-ouattaradongui](https://github.com/xavi-ouattaradongui)) | Routeur TanStack, formulaire et validation Zod, intégration des routes |
| **Ben DIARRA** | API simulée, schéma Zod, hook TanStack Query |
| **Franck Evan YAPI** | Service de primalité, store Zustand, optimisations |
