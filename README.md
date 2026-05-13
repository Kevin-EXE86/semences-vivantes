# 🌱 Semences Vivantes

Blog dédié aux semences anciennes, à la biodiversité potagère et au jardinage biologique.

## Installation

### Prérequis
- Node.js 18+ installé sur votre machine
- VSCode (recommandé)

### Démarrer le projet

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur → **http://localhost:4321**

### Construire pour la production

```bash
npm run build
npm run preview  # pour tester le build
```

---

## Structure du projet

```
semences-vivantes/
├── src/
│   ├── pages/
│   │   ├── index.astro          ← Page d'accueil
│   │   ├── blog/index.astro     ← Liste des articles
│   │   ├── guides.astro         ← Guides pratiques
│   │   └── ressources.astro     ← Liens affiliés
│   ├── layouts/
│   │   └── BaseLayout.astro     ← Layout commun (Header + Footer + SEO)
│   ├── components/
│   │   ├── Header.astro         ← Navigation
│   │   ├── Footer.astro         ← Pied de page
│   │   └── ArticleCard.astro    ← Carte d'aperçu d'article
│   ├── content/blog/            ← Vos articles en Markdown (étape 2)
│   └── styles/global.css        ← Variables CSS et styles globaux
└── public/
    └── images/                  ← Images statiques
```

---

## Étapes de développement

- [x] **Étape 1** — Structure + layout + pages principales ✅
- [ ] **Étape 2** — Système de blog avec articles Markdown
- [ ] **Étape 3** — Pages Guides & Ressources enrichies
- [ ] **Étape 4** — SEO avancé, sitemap, performances

---

## Déploiement (Netlify — gratuit)

1. Créer un compte sur [netlify.com](https://netlify.com)
2. Connecter votre dépôt GitHub
3. Paramètres : `Build command = npm run build`, `Publish dir = dist`
4. C'est tout !
