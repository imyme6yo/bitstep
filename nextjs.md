npx create-next-app@latest web
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

### tailwind.config.js

```javascript
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### globals.css

```css3
@tailwind base;
@tailwind components;
@tailwind utilities;
```
