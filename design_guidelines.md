# Design Guidelines: Priyadharshini N Portfolio Website

## Design Approach
**Reference-Based Approach** - Drawing inspiration from modern portfolio platforms like Behance, Dribbble, and contemporary developer portfolios. The design emphasizes clean aesthetics, soft visual hierarchy, and professional presentation suitable for a Computer Science student's portfolio.

## Core Design Elements

### A. Color Palette

**Light Mode (Primary):**
- **Background:** 240 20% 98% (soft off-white)
- **Primary Surface:** 210 40% 96% (light blue-gray)
- **Primary Brand:** 200 80% 65% (soft teal-blue)
- **Accent:** 280 60% 70% (gentle purple for CTAs)
- **Text Primary:** 220 20% 20% (dark slate)
- **Text Secondary:** 220 15% 45% (medium gray)

**Card/Section Backgrounds:**
- Use white (0 0% 100%) for floating cards
- Subtle pastel backgrounds: 150 40% 96%, 280 35% 96%, 45 50% 96% for alternating sections

### B. Typography

**Font Stack:**
- **Primary:** 'Inter' or 'Poppins' from Google Fonts - clean, modern sans-serif
- **Accent/Headings:** 'Space Grotesk' or 'Outfit' for section headers - distinctive but professional

**Hierarchy:**
- Hero Title: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headers: text-3xl md:text-4xl, font-bold
- Subsection/Card Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal
- Caption/Meta: text-sm, font-medium

### C. Layout System

**Spacing Units:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24
- Card spacing: p-6 md:p-8
- Element gaps: gap-6 md:gap-8 for grids, gap-4 for tight groupings
- Container: max-w-6xl mx-auto px-4 md:px-8

**Grid Structure:**
- Projects: 1 column mobile, 2 columns tablet (md:grid-cols-2), 3 columns desktop (lg:grid-cols-3)
- Skills: 2 columns mobile (grid-cols-2), 4 columns desktop (md:grid-cols-4)
- Education: Single column stack with timeline aesthetic

### D. Component Library

**Navigation Bar:**
- Sticky header with backdrop blur (backdrop-blur-lg bg-white/80)
- Horizontal menu on desktop, hamburger on mobile
- Smooth underline indicator for active section
- Height: h-16 md:h-20

**Hero Section:**
- Height: min-h-screen with centered content
- Large greeting text with wave emoji
- Subtitle with gradient text effect using primary colors
- Two CTA buttons side-by-side: Primary (filled with accent) + Secondary (outline)
- Include a profile illustration or abstract geometric pattern on the right (desktop) or below (mobile)

**About Section:**
- Clean typography-focused layout
- Objective text in larger font (text-lg md:text-xl) with generous line-height (leading-relaxed)
- Subtle background pattern or gradient overlay

**Education Cards:**
- Timeline-style vertical layout with connecting line
- Each entry: Icon/Badge → Institution → Grade/CGPA → Dates
- Rounded cards (rounded-2xl) with soft shadow (shadow-md hover:shadow-xl transition)

**Project Cards:**
- Raised cards with image placeholder areas at top
- Title, year badge, tech stack tags (small pills with pastel backgrounds)
- Brief description with "Learn More" link
- Hover lift effect (transform hover:-translate-y-1)

**Skills Section:**
- Category-based grouping with icon headers
- Tag-style pills for individual skills (rounded-full px-4 py-2)
- Different pastel background for each category

**Contact Section:**
- Two-column layout: Contact info cards + Large CTA
- Icon + Text pattern for each contact method
- Social links as icon buttons with hover effects
- Gentle background gradient

**Footer:**
- Centered text with heart emoji
- Subtle top border
- Padding: py-8

### E. Animations & Interactions

**Framer Motion Patterns:**
- **Fade-in on scroll:** opacity 0→1, y: 20→0, duration 0.6s for sections
- **Stagger children:** 0.1s delay between card appearances in grids
- **Hover scale:** scale: 1.02 for project cards
- **Button interactions:** scale: 0.98 on tap
- **Smooth scroll:** behavior: smooth for navigation

**Micro-interactions:**
- Nav links: Underline slide-in from left on hover
- Buttons: Subtle background color shift + scale
- Cards: Shadow expansion on hover
- Skills tags: Gentle background color pulse on hover

## Images

**Hero Section:**
- **Primary Hero Image/Illustration:** Abstract developer illustration or geometric pattern composition positioned on the right side (desktop) or below text (mobile). Use soft pastel colors matching the brand palette (teal-blue, purple, soft pink). Dimensions: 500x500px minimum, aspect ratio 1:1. Style: Modern, minimal, friendly.

**Project Cards:**
- **Thumbnail Images:** Each project card should have a representative thumbnail image at the top. These can be screenshots or abstract representations of the projects. Dimensions: 400x250px, aspect ratio 16:10. Use subtle rounded corners (rounded-t-2xl).

**Visual Enhancements:**
- Subtle geometric shapes or blob patterns as decorative background elements in alternating sections
- Use of gradient overlays sparingly for visual interest without overwhelming

## Responsive Behavior

**Breakpoints:**
- Mobile-first approach
- Tablet (md: 768px): 2-column grids, horizontal nav appears
- Desktop (lg: 1024px): 3-column grids, expanded spacing

**Mobile Optimizations:**
- Hamburger menu with slide-in drawer
- Stacked button layout in hero
- Single column for all content sections
- Reduced padding (py-12 instead of py-24)