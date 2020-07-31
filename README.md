# Caasy Blog Template

[![Netlify Status](https://api.netlify.com/api/v1/badges/ebba6331-e6a1-4308-b45b-2d5db06372cc/deploy-status)](https://app.netlify.com/sites/romantic-tereshkova-637ee6/deploys)

This repository contains a NextJS blog template that renders all the content from Caasy - a headless content as a service. It demonstrates how to implement the official Caasy Javascript SDK.

### 🚀 [Live Preview](https://demo-blog.caasy.io)

### 🌐 [Caasy Website](https://caasy.io)

### 📚 [Caasy Documentation](https://docs.caasy.io)

<br>

## Setup ⚙️

Before you start, please set your Caasy site ID in `blogConfig.js`.

**Install dependencies**

```
npm i
```

**Start development server**

```
npm run dev
```

**Generate static sites**

```
npm run export
```

This will create a folder `out` with all generated static sites.

#### 📘 [Full step-by-step guide](https://docs.caasy.io)

## Customization 🎨

#### Colors

All the colors rely on the CSS variables defined in `stylesheets/global.css`. Feel free to change the color codes there. Darkmode is currently not supported. Contributions are welcome, though. This template uses Highlight.js to highlight code snippets. The default theme for code highlighting is `Night Owl`. If you would like to use a [different theme](https://github.com/highlightjs/highlight.js/tree/master/src/styles), you can replace the theme in `stylesheets/nightOwl.css`, which is imported in `_app.js`.

#### Static content

The actual blog posts are fetched from Caasy using the official Caasy Javascript SDK. However, there is also static information such as the name of your blog or your social media links. This type of information can be edited in the `blogConfig.js`, which you can find in the root folder.

#### Logo

The logo is used in the navigation bar as well as in the footer. To change the logo, update the logo component in `components/logo/`.

## Supported Elements 💡

Caasy continuously adds new elements. Therefore, this template might not support all of them. The following elements are currently supported:

- container
- headline
- image
- markdown: sanitized and highlighted 🔒
- rich text
- text
- youtube

Each element is rendered by its respective component. You can find them in `components/elements/`. Feel free to adjust them to your needs.

Not supported yet:

- card
- file

## Contributions 🤟

This template is free for everyone and it should evolve together with Caasy. If you improve the template or add any kind of functionality and would like to share it with others, feel free to open a pull request.

Please refer to [existing pull requests](https://github.com/jz222/caasy-nextjs-blog-template/pull/2/files) for examples on how to add new elements.

## License 🤝

Feel free to use this template and adapt it to your needs. It's not mandatory but we would appreciate it, if you gave us credit.
