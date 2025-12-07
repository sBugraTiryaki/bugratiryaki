# Bugra Tiryaki - Personal Website

A minimal, clean, single-page personal portfolio website built with Next.js and TailwindCSS.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** TailwindCSS v4
- **Icons:** Lucide React
- **Typography:** Geist Sans & Geist Mono
- **Form:** FormSubmit.co (no backend required)

## Features

- Responsive design (mobile-first)
- Smooth scroll navigation
- Sticky header with blur effect
- Light theme with quiet-luxury aesthetic
- Contact form via FormSubmit.co
- Social links (LinkedIn, GitHub, X, Email)

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

```bash
# Clone the repository
git clone https://github.com/sBugraTiryaki/bugratiryaki.git

# Navigate to the project directory
cd bugratiryaki

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Create a production build
npm run build

# Start the production server
npm run start
```

## Project Structure

```
bugratiryaki/
├── app/
│   ├── components/
│   │   ├── Header.tsx      # Sticky navigation with social links
│   │   ├── Hero.tsx        # Hero section with title and CTA
│   │   ├── About.tsx       # About section with bio
│   │   ├── Work.tsx        # Work section container
│   │   ├── ProjectCard.tsx # Reusable project card
│   │   ├── Skills.tsx      # Skills grid section
│   │   ├── Contact.tsx     # Contact form
│   │   └── Footer.tsx      # Footer with copyright
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page composition
├── public/                 # Static assets
└── package.json
```

## Deployment

Deploy easily on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sBugraTiryaki/bugratiryaki)

## License

All rights reserved.
