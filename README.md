# PermaHub

PermaHub is a decentralized platform for building, playing, and learning on Arweave. This React + TypeScript application serves as a hub for various permaweb activities including gaming, blogging, and community engagement.

## Project Overview

PermaHub consists of several key sections:
- Home: Landing page with animated hero section
- Blog: Articles and updates about the permaweb ecosystem
- Games: Interactive grid of permaweb games and applications
- Bites: Registration for permaweb experiences and early access

## How to Update Content

### Adding New Blog Posts

To add a new blog post, follow these steps:

1. Create a new blog post component in `src/pages/` (e.g., `NewBlogPost.tsx`)
2. Use the existing blog post template structure:
```tsx
import "./BlogPost.css";

const NewBlogPost = () => {
  return (
    <div className="blog-post-container">
      <a href="/#/home" className="back-link">← Back to Blog</a>
      <img src="/your-header-image.jpg" alt="Blog Header" className="blog-header-image" />
      <h1>Your Blog Title</h1>
      <p className="blog-meta">Published on [Date] | By [Author]</p>
      
      <div className="blog-content">
        // Your blog content here
      </div>
    </div>
  );
};

export default NewBlogPost;
```

3. Add the blog post to the `blogTopics` array in `src/components/BlogCarousel.tsx`:
```tsx
{
  title: "Your Blog Title",
  excerpt: "Brief description of your blog post",
  image: "/path/to/preview-image.jpg",
  link: "/blog/your-blog-url",
  walletAddress: "your-arweave-wallet-address"
}
```

4. Add the route in `src/App.tsx`:
```tsx
<Route path="/blog/your-blog-url" element={<NewBlogPost />} />
```

### Adding Games to the Grid

To add new games to the Games page, update the following in `src/pages/GridMotionDemo.tsx`:

1. Add the game's background image URL to the `backgroundImages` array:
```tsx
const backgroundImages = [
  // ... existing images ...
  'https://arweave.net/your-game-image-url',
];
```

2. Add the game's destination URL to the `destinationUrls` array:
```tsx
const destinationUrls = [
  // ... existing URLs ...
  'https://your-game-url.com',
];
```

Make sure both arrays maintain the same length and corresponding indices.

### Updating the Bites Page

To update the Typeform link for the Bites page registration, modify the `handleSave` function in `src/pages/Bites.tsx`:

```tsx
const handleSave = async () => {
  window.open('https://form.typeform.com/to/your-new-form-id', '_blank')
}
```

## Project Structure

Key directories and files:
- `src/pages/`: Page components
- `src/components/`: Reusable components
- `src/components/ui/`: UI components like buttons and grids
- `public/`: Static assets like images and videos

## Development

This project uses:
- React + TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# Redeploy with Turbo credits
