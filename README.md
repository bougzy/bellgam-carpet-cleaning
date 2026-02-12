# Bellgam Carpet Cleaning Website

A modern, SEO-optimized NextJS 14 website for Bellgam's Carpet Cleaning with dark glassmorphism design, built-in admin dashboard, and WhatsApp integration.

## 🚀 Project Status

**Phase 1: Foundation - ✅ COMPLETE**

- [x] NextJS 14 project initialized with TypeScript & Tailwind
- [x] All dependencies installed and configured
- [x] Prisma + SQLite database setup
- [x] Database schema created and migrated
- [x] Database seeded with initial data
- [x] Environment variables configured
- [x] Tailwind custom theme with glassmorphism utilities
- [x] Global CSS with custom glass components
- [x] Base UI components created (Button, Input, Textarea, Select, Card)
- [x] Animation components with Framer Motion (FadeIn, StaggerContainer, ScaleIn)
- [x] Utility functions (utils.ts, constants.ts, prisma.ts, whatsapp.ts)
- [x] Development server running

## 🛠️ Tech Stack

- **Framework**: NextJS 14.2+ (App Router)
- **Language**: TypeScript 5.3+
- **Styling**: Tailwind CSS 3.4+
- **Database**: SQLite + Prisma ORM
- **Authentication**: NextAuth v5 (planned)
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion 11+
- **Email**: Resend
- **UI**: Custom glassmorphism components

## 📁 Project Structure

```
bellgam/
├── app/                    # NextJS App Router
│   ├── globals.css        # Global styles with glassmorphism
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── ui/                # Base UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── select.tsx
│   │   └── card.tsx
│   └── animations/        # Framer Motion wrappers
│       ├── fade-in.tsx
│       ├── stagger-container.tsx
│       └── scale-in.tsx
├── lib/
│   ├── prisma.ts          # Prisma client
│   ├── utils.ts           # Utility functions
│   ├── constants.ts       # Site constants
│   └── whatsapp.ts        # WhatsApp link generator
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── seed.ts            # Seed script
├── data/
│   └── content.db         # SQLite database
└── public/
    ├── images/            # Static images
    └── uploads/           # User uploads
```

## 🎨 Design System

### Glassmorphism Theme

The entire site uses a dark glassmorphism design with:
- **Dark background**: #0a0a0a with gradient overlays
- **Glass effects**: Backdrop blur with semi-transparent backgrounds
- **Primary color**: Blue (#0ea5e9)
- **Secondary color**: Green (#10b981)
- **Accent color**: Amber (#f59e0b)

### Pre-built Components

#### UI Components
- `Button` - Multiple variants (primary, secondary, accent, outline, ghost, glass)
- `Input` - Glass-styled inputs with label, error, and helper text
- `Textarea` - Glass-styled textarea
- `Select` - Glass-styled dropdown select
- `Card` - Glassmorphism cards with hover effects

#### Animation Components
- `FadeIn` - Fade in with directional slide
- `StaggerContainer` & `StaggerItem` - Staggered animations for lists
- `ScaleIn` - Scale and fade in with hover effects

### Utility Classes

Pre-built Tailwind classes available:
- `.glass-card` - Glassmorphism card
- `.glass-button` - Glass button
- `.glass-input` - Glass input field
- `.gradient-text` - Gradient text effect
- `.btn-primary`, `.btn-secondary`, `.btn-accent` - Button variants
- `.heading-1` through `.heading-4` - Typography
- `.section-padding` - Standard section padding

## 💾 Database

### Models Created

1. **User** - Admin users
2. **Service** - Carpet cleaning services
3. **Location** - Service area pages (cities)
4. **Review** - Customer testimonials
5. **BlogPost** - Blog articles
6. **GalleryImage** - Before/after photos
7. **ContactSubmission** - Form submissions
8. **SiteSettings** - Site configuration

### Seeded Data

- ✅ Admin user (admin@bellgam.com / admin123)
- ✅ 6 Services (Carpet Steam Cleaning, Upholstery, Tile & Grout, etc.)
- ✅ 5 Locations (Vancouver, Burnaby, Surrey, Toronto, Calgary)
- ✅ 5 Customer reviews
- ✅ 2 Blog posts
- ✅ 3 Gallery images
- ✅ Site settings

## 🔧 Environment Variables

### Required (.env.local)

```bash
# Database
DATABASE_URL="file:./data/content.db"

# NextAuth
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# Site Configuration
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_WHATSAPP_NUMBER="+16049021805"
NEXT_PUBLIC_PHONE_DISPLAY="(604) 902-1805"
NEXT_PUBLIC_EMAIL="info@bellgam.com"

# Email (Resend)
RESEND_API_KEY="re_your_key_here"
RESEND_FROM_EMAIL="hello@bellgam.com"
RESEND_TO_EMAIL="admin@bellgam.com"
```

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Run Database Migration
```bash
npx prisma migrate dev
```

### Seed the Database
```bash
npm run db:seed
```

### Start Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Other Commands

```bash
npm run build          # Build for production
npm run start          # Start production server
npm run db:studio      # Open Prisma Studio (database GUI)
npm run db:generate    # Generate Prisma Client
```

## 📝 Admin Credentials

**Email**: admin@bellgam.com
**Password**: admin123

⚠️ **Change this password after first login!**

## 🗺️ Roadmap

### ✅ Phase 1: Foundation (COMPLETE)
- Project setup
- Database schema and seeding
- Base components and animations
- Utility functions

### 🔄 Phase 2: Next Steps
- [ ] Set up NextAuth authentication
- [ ] Build admin dashboard layout
- [ ] Create admin CRUD interfaces (Services, Locations, Blog, etc.)
- [ ] Build public website layout (Header, Footer, Navigation)
- [ ] Build homepage with all sections

### 📅 Phase 3: Public Website
- [ ] Services pages (listing + detail)
- [ ] Location pages (city-specific)
- [ ] Gallery page with filters
- [ ] Reviews page
- [ ] Blog system
- [ ] Pricing page
- [ ] Contact page

### 📅 Phase 4: Forms & Integration
- [ ] Contact forms with validation
- [ ] WhatsApp integration
- [ ] Email notifications
- [ ] Form submissions tracking

### 📅 Phase 5: SEO & Polish
- [ ] Dynamic meta tags
- [ ] JSON-LD schema markup
- [ ] Sitemap generation
- [ ] Performance optimization
- [ ] Mobile responsiveness
- [ ] Accessibility audit

### 📅 Phase 6: Deployment
- [ ] Deploy to Vercel
- [ ] Configure custom domain
- [ ] Set up analytics
- [ ] Final testing

## 📚 Key Features

### For Users
- ✨ Modern glassmorphism design
- 📱 Fully responsive
- ⚡ Fast page loads
- 🔍 SEO optimized
- 💬 WhatsApp integration (simple wa.me links)
- 📧 Contact forms
- 🖼️ Before/after gallery
- ⭐ Customer reviews
- 📝 Blog articles
- 📍 Multi-location support (15+ cities)

### For Admins
- 🔐 Secure authentication
- 📊 Dashboard with analytics
- ✏️ Full CRUD for all content
- 🖼️ Image upload and management
- 📝 Rich text editor for content
- 🎨 SEO fields per page
- 📱 Mobile-friendly admin interface

## 🌐 WhatsApp Integration

Simple WhatsApp integration using `wa.me` links (no API required):

```typescript
import { generateWhatsAppLink } from '@/lib/whatsapp';

const link = generateWhatsAppLink({
  service: 'Carpet Steam Cleaning',
  location: 'Vancouver',
});
// Returns: https://wa.me/16049021805?text=...
```

## 🎨 Using Components

### Button Example
```tsx
import { Button } from '@/components/ui/button';

<Button variant="primary" size="lg">Get Free Quote</Button>
<Button variant="glass">Learn More</Button>
<Button variant="outline" isLoading>Submitting...</Button>
```

### Card Example
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

<Card hover glass>
  <CardHeader>
    <CardTitle>Service Name</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Service description...</p>
  </CardContent>
</Card>
```

### Animation Example
```tsx
import { FadeIn } from '@/components/animations/fade-in';
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-container';

<FadeIn direction="up" delay={0.2}>
  <h1>Welcome</h1>
</FadeIn>

<StaggerContainer>
  {items.map((item) => (
    <StaggerItem key={item.id}>
      <Card>{item.content}</Card>
    </StaggerItem>
  ))}
</StaggerContainer>
```

## 📖 Documentation

### Database Queries
All database queries use Prisma. Examples:

```typescript
import { prisma } from '@/lib/prisma';

// Get all published services
const services = await prisma.service.findMany({
  where: { published: true },
  orderBy: { order: 'asc' },
});

// Get service by slug
const service = await prisma.service.findUnique({
  where: { slug: 'carpet-steam-cleaning' },
  include: { reviews: true },
});
```

### WhatsApp Links
```typescript
import {
  generateWhatsAppLink,
  generateQuoteWhatsAppLink,
  generateServiceWhatsAppLink
} from '@/lib/whatsapp';

// Simple link
const link = generateWhatsAppLink({
  service: 'Carpet Cleaning',
  location: 'Vancouver',
});

// Quote request with full form data
const quoteLink = generateQuoteWhatsAppLink({
  name: 'John Doe',
  service: 'Carpet Steam Cleaning',
  location: 'Vancouver',
  rooms: 3,
});

// Service-specific link
const serviceLink = generateServiceWhatsAppLink('Upholstery Cleaning', 'Toronto');
```

## 🤝 Contributing

This is a private project for Bellgam Carpet Cleaning.

## 📄 License

Proprietary - All rights reserved

## 🆘 Support

For questions or issues, contact the development team.

---

Built with ❤️ using NextJS 14, TypeScript, and Tailwind CSS
