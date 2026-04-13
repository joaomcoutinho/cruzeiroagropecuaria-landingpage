# Cruzeiro Agropecuária — Landing page

Site institucional em **React** + **Vite**, estilos em **CSS Modules**.

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

Preview do build:

```bash
npm run preview
```

Deploy no **GitHub Pages** via workflow em `.github/workflows/deploy-pages.yml` (branch `main`).

## Estrutura principal

| Pasta / arquivo | Conteúdo |
|-----------------|----------|
| `public/` | Imagens estáticas (hero, favicon, fazendas, animais) servidas na raiz do site |
| `src/components/` | Loader, Nav, Hero, seções e Footer (cada um com `.module.css`) |
| `src/data/imagesData.js` | Logo e fotos embutidas em base64 (Loader, História, etc.) |
| `src/constants/contact.js` | Telefone / WhatsApp |
| `src/hooks/` | `useFadeIn`, `useLoader` |
| `src/styles/global.css` | Reset, variáveis `:root`, classe `.fade-in` |

## Stack

- React 19 · Vite 8
- Fontes: Cormorant Garamond + Barlow (Google Fonts, `index.html`)
