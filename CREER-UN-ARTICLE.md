# ✍️ Comment créer un nouvel article

## 1. Créer un fichier Markdown

Dans le dossier `src/content/blog/`, créez un nouveau fichier `.md` :

```
src/content/blog/mon-nouvel-article.md
```

⚠️ Le nom du fichier devient l'URL : `mon-nouvel-article.md` → `/blog/mon-nouvel-article`  
Utilisez uniquement des **minuscules**, des **tirets**, pas d'accents ni d'espaces.

---

## 2. Remplir l'en-tête (frontmatter)

Copiez ce modèle en haut de votre fichier :

```markdown
---
titre: "Votre titre d'article ici"
description: "Un résumé de 1-2 phrases affiché dans les cartes et le SEO."
date: 2025-06-01
categorie: Semences
tempsLecture: 6
brouillon: false
---
```

### Valeurs autorisées pour `categorie` :
- `Semences`
- `Calendrier`
- `Guides`
- `Potager bio`
- `Biodiversité`
- `Aromatiques`
- `Conservation`

### Pour travailler sur un brouillon :
Mettez `brouillon: true` — l'article ne sera pas publié.

---

## 3. Écrire votre contenu en Markdown

Après l'en-tête, écrivez votre article en Markdown :

```markdown
## Titre de section

Votre texte ici. Le Markdown standard est supporté :

- Listes à puces
- **Gras**, *italique*
- [Liens](https://example.com)

> Citations en blockquote

### Sous-titre

| Col 1 | Col 2 |
|---|---|
| Ligne 1 | Valeur |
```

---

## 4. Vérifier dans le navigateur

```bash
npm run dev
```

Votre article sera visible sur `http://localhost:4321/blog/mon-nouvel-article`

---

## Exemple complet

```markdown
---
titre: "Les 5 meilleures plantes compagnes pour les tomates"
description: "Basilic, œillet d'Inde, persil… certaines plantes protègent les tomates et améliorent leur saveur. Découvrez lesquelles et pourquoi."
date: 2025-06-10
categorie: Potager bio
tempsLecture: 5
---

Les associations de plantes sont une technique ancestrale qui permet de...

## Le basilic, allié incontournable

...
```
