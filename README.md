# Aswin Anilkumar Portfolio

Premium futuristic personal portfolio built with Vite, React, Framer Motion, CSS Modules, and resume-driven portfolio data.

## Run for development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Open without `npm install`

The ready-to-view production files are in `dist/`.

You can try opening:

```text
dist/index.html
```

If your browser blocks local JavaScript modules from `file://`, serve the built folder with any static server. This does not require `npm install` for this project if Python is already installed:

```bash
cd dist
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Update portfolio data

Main content lives in:

```text
src/store/portfolioData.js
```

TODO placeholders are included for future GitHub, GitLab, LeetCode, Instagram, Facebook, credential links, project screenshots, demo links, and contact form integration.
