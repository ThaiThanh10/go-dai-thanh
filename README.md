# Realway Studio Frontend

![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-149ECA?style=flat-square&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=flat-square&logo=yarn&logoColor=white)

## Overview

The Realway Studio Frontend is a Next.js-powered React application. It delivers a modern, responsive, and dynamic user interface with rich animations, customized features, and high performance.

**Key Features**

- Server-side rendering and routing powered by Next.js App Router
- Modern UI components built with Radix UI and Shadcn UI
- Dynamic layout styling via Tailwind CSS v4
- Smooth animations leveraging Framer Motion and tw-animate-css
- Interactive sliders and carousels using Swiper

---

## Project Structure

```plaintext
📦src
├── 📂app                  # Next.js App Router root, pages and layouts
├── 📂components           # Reusable and feature-specific UI components
├── 📂contants             # Global constant values
├── 📂hooks                # Custom React hooks
├── 📂lib                  # Utility libraries and helpers
└── 📂utils                # Formatting and general utilities
```

### Component Organization

- **`app/`**: Contains the core layout, templates, and page views per route (Next.js architecture).
- **`components/`**: Houses shared UI building blocks (buttons, inputs, etc.) and complex components used throughout the application.
- **`lib/`**: Helpers, configurations, and core logic primitives.

---

## Getting Started

### Prerequisites

| Requirement | Version | Description        |
| ----------- | ------- | ------------------ |
| Node.js     | ≥18.18  | JavaScript runtime |
| Yarn        | Latest  | Package manager    |

### Quick Start

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd realway-studio
   ```

2. **Configure environment variables**

   ```bash
   cp .env .env.sample
   ```

   > 📝 Provide backend and general configuration values in `.env.local`

3. **Install dependencies**

   ```bash
   yarn install
   ```

4. **Start the development server**

   ```bash
   yarn dev
   ```

   > 🌐 Visit [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command        | Description                     |
| -------------- | ------------------------------- |
| `yarn dev`     | Start development server        |
| `yarn build`   | Create production-ready build   |
| `yarn start`   | Start production server         |
| `yarn preview` | Preview the exported build      |
| `yarn lint`    | Run ESLint against the codebase |

---

## Environment Variables

The application requires the following variables (see `.env`):

```plaintext
NEXT_PUBLIC_SERVER_URL=<backend-api-url>
```

> 🔒 Never commit `.env.local` files or real credentials to version control.

---

## Deployment

### Build for Production

```bash
# Create an optimized production build
yarn build

# Start the deployed server
yarn start
```

Deploy the Next.js output to your preferred hosting provider (Vercel, AWS, etc.). Next.js handles rendering, optimization, and output seamlessly.

### Production Notes

- Default server port is `3000` (configurable via environment variables).
- Ensure all environment variables are configured in your hosting platform before deploying.
- Configure proper node runtime settings depending on your hosting provider.

---

## Useful Links

- **Production deployment**: Replace with actual deployment URL
- **Design System**: Built on [Shadcn UI](https://ui.shadcn.com/) and [Tailwind CSS](https://tailwindcss.com/).
