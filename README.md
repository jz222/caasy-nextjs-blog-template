# Caasy Blog Template

This repository contains a NextJS blog template that renders all the content from Caasy - a headless content as a service. It demonstrates how to implement the official Caasy Javascript SDK.

🚀 [Live Preview](https://upbeat-murdock-8a397d.netlify.app/)

## Setup

Before you start, please set your Caasy site ID in `blogConfig.js`.

## Customization

### Colors

All the colors rely on the CSS variables defined in `stylesheets/global.css`. Feel free to change the color codes there. Darkmode is currently not supported. Contributions are welcome, though.

### Static content

The actual blog posts are fetched from Caasy using the official Caasy Javascript SDK. However, there is also static information such as the name of your blog or your social media links. This type of information can be edited in the `blogConfig.js`, which you can find in the root folder.

### Logo

The logo is used in the navigation bar as well as in the footer. To change the logo, update the logo component in `components/logo/`.