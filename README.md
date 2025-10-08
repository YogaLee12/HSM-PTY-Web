# 🌏 HSM AUS Official Website

> **HSM AUS** Official Website
> Built with **Next.js + TypeScript + TailwindCSS**,
> It aims to provide customers with a company introduction, service showcase, and online contact channels.

---

## 🚀 Project Introduction

The HSM AUS official website is a modern corporate showcase website, consisting of the following main pages:

- **Home**: Company image, business overview, highlights, and core service previews
- **Services**: Detailed introduction to the company's services
- **About Us**: Company culture, team, and development direction
- **Contact Us**: Contact information and form submission functionality

This project focuses on modularity and maintainability. All page components are independently separated to facilitate future expansion or revisions.

---

## 🧰 Technology Stack
```bash
| Category | Technology |
|------|------|
| Front-end Framework | [Next.js 15](https://nextjs.org/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Style | [Tailwind CSS](https://tailwindcss.com/) |
| Package Manager | pnpm / npm |
| Coding Styles | ESLint + Prettier |
| Form Validation | react-hook-form + zod (optional) |
```
---

## 📁 Project Structure
``` bash
app/
├─ layout.tsx # Global layout (Header/Footer package)
├─ globals.css # Global styles
├─ page.tsx # Homepage
│
├─ about/
│ └─ page.tsx # About Us
│
├─ services/
│ └─ page.tsx # Services page
│
├─ contact/
│ └─ page.tsx # Contact Us page
│
└─ ui/
├─ header.tsx # Header components
├─ footer.tsx # Footer components
├─ indexSection/ # Homepage-specific components
│ ├─ HeroSection.tsx
│ ├─ AboutPreview.tsx
│ ├─ ServicePreview.tsx
│ └─ FoucusPoint.tsx # (You already have it)
├─ common/
│ ├─ SectionTitle.tsx # Common section title component
│ ├─ Button.tsx # Common button component
│ └─ Card.tsx # Common card component
└─ forms/
└─ ContactForm.tsx # Contact form (with validation)
```

---

## 🧑‍💻 Development and Operation

### Installing Dependencies
```bash

npm install

```

### Local test
```bash
pnpm run dev
#  http://localhost:3000
```

## 💡 Development Conventions

All component files use PascalCase naming conventions (e.g., HeroSection.tsx)

Use Tailwind CSS utility classes for consistent styling, extending them in globals.css as needed.

Each component must have clear prop type definitions.

All images should be placed in the public/images folder.

Common components (such as buttons, titles, and cards) should be placed in ui/common.

Page-specific components should be placed in corresponding subdirectories, such as ui/indexSection.

## 🔮 Future Expansion Plans

Add Chinese and English language switching (i18n)

Contact form backend interface (email sending/data collection)

Dynamic service content (connecting to a database or CMS)

SEO optimization (meta/sitemap)

Animation and transition effects (Framer Motion)