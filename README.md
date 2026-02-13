<div align="center">

# 🧼 Bellgams Carpet Cleaning

### Professional Carpet Cleaning Services Website

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-5.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.10-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[View Demo](#) • [Report Bug](https://github.com/bougzy/bellgam-carpet-cleaning/issues) • [Request Feature](https://github.com/bougzy/bellgam-carpet-cleaning/issues)

<p align="center">
  A modern, SEO-optimized NextJS website with dark glassmorphism design,<br/>
  complete admin dashboard, and WhatsApp integration for carpet cleaning services.
</p>

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 Modern Design
- Dark glassmorphism UI
- Smooth animations & transitions
- Professional image carousel
- Responsive across all devices

### 📊 Admin Dashboard
- Complete CRUD operations
- Services management
- Locations management
- Contact form tracking

</td>
<td width="50%">

### 💰 Smart Pricing
- Dynamic pricing calculator
- 3 apartment packages
- Feature comparison
- Clear CTAs

### 🔍 SEO Optimized
- Dynamic meta tags
- Schema markup
- Sitemap generation
- Location-based pages

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git
- MongoDB Atlas account (free tier) - [Sign up here](https://www.mongodb.com/cloud/atlas/register)

### Installation

```bash
# Clone the repository
git clone https://github.com/bougzy/bellgam-carpet-cleaning.git
cd bellgam-carpet-cleaning

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your MongoDB connection string

# Set up MongoDB Atlas
# Follow the detailed guide in MONGODB_SETUP.md

# Generate Prisma client
npx prisma generate

# Push schema to MongoDB
npx prisma db push

# Seed database with initial data
npx prisma db seed

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser!

**📖 Detailed MongoDB setup:** See [MONGODB_SETUP.md](MONGODB_SETUP.md) for step-by-step instructions

---

## 🎯 Admin Access

Access the admin dashboard at `/admin/login`

```

```

⚠️ **Important:** Change these credentials in production!

---

## 🛠️ Tech Stack

<div align="center">

### Core Technologies

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

### Backend & Database

[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

### UI & Animation

[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radix-ui&logoColor=white)](https://www.radix-ui.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide-F56565?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)

### Forms & Validation

[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)](https://react-hook-form.com/)
[![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)

</div>

---

## 📁 Project Structure

```
bellgam-carpet-cleaning/
│
├── 📂 app/
│   ├── 📂 (public)/               # Public-facing pages
│   │   ├── 📄 page.tsx            # Homepage with hero carousel
│   │   ├── 📂 services/           # Services listing & detail pages
│   │   ├── 📂 locations/          # Location-specific SEO pages
│   │   ├── 📂 gallery/            # Before/after image gallery
│   │   ├── 📂 reviews/            # Customer testimonials
│   │   ├── 📂 pricing/            # Pricing packages
│   │   └── 📂 contact/            # Contact form with WhatsApp
│   │
│   ├── 📂 admin/                  # Admin dashboard (protected)
│   │   ├── 📂 login/              # Admin authentication
│   │   ├── 📂 services/           # Manage services (CRUD)
│   │   ├── 📂 locations/          # Manage locations (CRUD)
│   │   ├── 📂 reviews/            # Manage reviews (CRUD)
│   │   └── 📂 contacts/           # View form submissions
│   │
│   └── 📂 api/                    # API routes
│       ├── 📂 contact/            # Contact form handler
│       └── 📂 admin/              # Admin CRUD endpoints
│
├── 📂 components/
│   ├── 📂 ui/                     # Reusable UI components
│   ├── 📂 layout/                 # Header, footer, navigation
│   ├── 📂 sections/               # Homepage sections
│   ├── 📂 forms/                  # Form components
│   ├── 📂 admin/                  # Admin-specific components
│   └── 📂 animations/             # Framer Motion wrappers
│
├── 📂 lib/
│   ├── 📄 prisma.ts               # Prisma client singleton
│   ├── 📄 auth-simple.ts          # Authentication logic
│   ├── 📄 whatsapp.ts             # WhatsApp link generators
│   ├── 📄 constants.ts            # Site configuration
│   └── 📄 utils.ts                # Helper functions
│
├── 📂 prisma/
│   ├── 📄 schema.prisma           # Database schema (8 models)
│   ├── 📄 seed.ts                 # Seed data script
│   └── 📂 data/                   # SQLite database file
│
└── 📄 middleware.ts               # Route protection
```

---

## 🎨 Key Features

### 🖼️ Hero Image Carousel

Auto-rotating image carousel with:
- 4 professional carpet cleaning images
- 5-second smooth fade transitions
- Fixed text overlay for readability
- Optimized for performance with Next.js Image

```tsx
// Carousel changes images every 5 seconds
const heroImages = [
  'professional-cleaning-1.jpg',
  'clean-living-room.jpg',
  'pet-friendly-cleaning.jpg',
  'fresh-upholstery.jpg',
];
```

### 💰 Dynamic Pricing Section

<table>
<tr>
<th>Package</th>
<th>Price</th>
<th>Included</th>
</tr>
<tr>
<td><b>1 Bedroom</b></td>
<td><b>$125</b></td>
<td>1 room + Living Room (~150 sq ft each)</td>
</tr>
<tr>
<td><b>2 Bedroom</b> ⭐</td>
<td><b>$170</b></td>
<td>2 rooms + Living Room (~150 sq ft each)</td>
</tr>
<tr>
<td><b>3 Bedroom</b></td>
<td><b>$215</b></td>
<td>3 rooms + Living Room (~150 sq ft each)</td>
</tr>
</table>

### 🎭 Before/After Gallery

Professional showcase with:
- Side-by-side image comparisons
- "BEFORE" / "AFTER" overlay badges
- 6 transformation categories
- Lightbox view for details
- Category-based filtering

### 📊 Admin Dashboard

Complete content management:
- **Services:** Add, edit, delete cleaning services
- **Locations:** Manage multi-city pages (15+ cities)
- **Reviews:** Approve/reject customer testimonials
- **Gallery:** Upload before/after images
- **Contacts:** Track form submissions with status
- **Blog:** Create SEO blog posts (future)

### 💬 WhatsApp Integration

Smart WhatsApp links throughout:
- Hero CTA with service context
- Service-specific inquiry buttons
- Location-based contact
- Floating WhatsApp button (mobile)
- Pre-filled messages for conversions

```typescript
// Example usage
const link = generateWhatsAppLink({
  service: 'Carpet Steam Cleaning',
  location: 'Vancouver',
  message: 'Hi! I need a quote for...'
});
// Output: https://wa.me/16049021805?text=...
```

---

## 🗃️ Database Models

```prisma
model Service {
  id          Int       @id @default(autoincrement())
  title       String
  slug        String    @unique
  description String
  price       String?
  featured    Boolean   @default(false)
  published   Boolean   @default(true)
}

model Location {
  id       Int     @id @default(autoincrement())
  city     String
  province String
  slug     String  @unique
  content  String
  featured Boolean @default(false)
}

model Review {
  id           Int      @id @default(autoincrement())
  customerName String
  rating       Int      // 1-5 stars
  content      String
  featured     Boolean  @default(false)
  published    Boolean  @default(false)
}

// + ContactSubmission, GalleryImage, BlogPost, User, SiteSettings
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

Or use the [Vercel Dashboard](https://vercel.com):
1. Import your GitHub repository
2. Set up MongoDB Atlas (see [MONGODB_SETUP.md](MONGODB_SETUP.md))
3. Add environment variables (especially `DATABASE_URL`)
4. Click "Deploy"!

### Environment Variables

**Important**: Before deploying, set up MongoDB Atlas and get your connection string. See [MONGODB_SETUP.md](MONGODB_SETUP.md) for detailed instructions.

```env
# Database - MongoDB Atlas connection string
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/bellgam?retryWrites=true&w=majority"

# WhatsApp (use your business number with country code)
NEXT_PUBLIC_WHATSAPP_NUMBER="+16049021805"

# Session Secret (generate with: openssl rand -base64 32)
NEXTAUTH_SECRET="your-secret-key-here"

# Site URL (update for production)
NEXT_PUBLIC_SITE_URL="https://bellgam.com"
```

---

## 📸 Screenshots

<div align="center">

### 🏠 Homepage

![Homepage](https://via.placeholder.com/800x450/0a0a0a/0ea5e9?text=Hero+Section+with+Carousel)

*Hero section with auto-rotating images and glassmorphism design*

---

### 💰 Pricing Section

![Pricing](https://via.placeholder.com/800x300/0a0a0a/10b981?text=Dynamic+Pricing+Cards)

*Three apartment packages with clear pricing and features*

---

### 📊 Admin Dashboard

![Admin](https://via.placeholder.com/800x450/0a0a0a/f59e0b?text=Admin+Dashboard)

*Intuitive admin interface for content management*

---

### 🎭 Gallery

![Gallery](https://via.placeholder.com/800x450/0a0a0a/ec4899?text=Before+After+Gallery)

*Professional before/after image showcase*

</div>

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [Framer Motion](https://www.framer.com/motion/) - Production-ready animations
- [Unsplash](https://unsplash.com/) - Professional stock photography
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icons

---

<div align="center">

### 💼 Built with ❤️ by the Bellgams Team

[![GitHub Stars](https://img.shields.io/github/stars/bougzy/bellgam-carpet-cleaning?style=social)](https://github.com/bougzy/bellgam-carpet-cleaning)
[![GitHub Forks](https://img.shields.io/github/forks/bougzy/bellgam-carpet-cleaning?style=social)](https://github.com/bougzy/bellgam-carpet-cleaning/fork)
[![GitHub Watchers](https://img.shields.io/github/watchers/bougzy/bellgam-carpet-cleaning?style=social)](https://github.com/bougzy/bellgam-carpet-cleaning)

**[⭐ Star this repo](https://github.com/bougzy/bellgam-carpet-cleaning)** if you find it helpful!

---

<sub>Made with [Claude Code](https://claude.com/claude-code) 🤖</sub>

</div>
