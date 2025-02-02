# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Css instalations
```bash
npm install -D sass sass-loader
```

```ts
// nuxt.config.ts
 css: [
    '@/assets/scss/main.scss' // Главный файл SCSS
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/utils/_variables.scss" as *;
            @use "~/assets/scss/utils/_mixins.scss" as *;
          `
        }
      }
    }
  }
```
