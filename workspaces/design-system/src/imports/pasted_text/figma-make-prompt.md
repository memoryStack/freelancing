Here's a comprehensive prompt you can give to Figma Make to generate a well-structured React + TypeScript application with atomic architecture.

---

## The Complete Prompt for Figma Make

Copy and paste this into Figma Make:

---

**【Project Overview】**

I need you to build a complete React + TypeScript + Vite application for "Georgia Coaching Classes" - a coaching institute website. The design has already been created in this Figma file. Now I need you to generate the production-ready code with a specific folder structure and architecture.

**【Technology Stack】**
- React with TypeScript (`.tsx` files)
- Vite as build tool
- Tailwind CSS for styling
- shadcn/ui for component library

**【Folder Structure Requirement】**

Generate the code using EXACTLY this atomic folder structure:

```
src/
├── App.tsx
├── main.tsx
├── index.css
│
├── pages/
│   └── home/
│       ├── index.tsx              # Home page component
│       ├── Home.css               # Page-specific styles (if needed)
│       │
│       └── components/            # Components used ONLY by Home page
│           ├── HeroSection.tsx
│           ├── AboutSection.tsx
│           ├── CoursesSection.tsx
│           ├── TeamSection.tsx
│           ├── ResultsSection.tsx
│           ├── VideosSection.tsx
│           ├── OffersSection.tsx
│           ├── BranchesSection.tsx
│           ├── TestimonialsSection.tsx
│           └── ContactSection.tsx
│
├── components/                    # Reusable/GLOBAL components (Atoms & Molecules)
│   ├── ui/                        # shadcn/ui components (buttons, cards, inputs)
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   │
│   ├── layout/                    # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   │
│   └── shared/                    # Shared business components
│       ├── CourseCard.tsx
│       ├── TeamMemberCard.tsx
│       ├── TestimonialCard.tsx
│       └── BranchCard.tsx
│
├── services/                      # API and external service integrations
│   ├── api.ts                     # Base API configuration
│   ├── contact.service.ts         # Contact form submission
│   └── booking.service.ts         # Demo class booking API
│
├── hooks/                         # Custom React hooks
│   ├── useForm.ts
│   ├── useCounter.ts
│   └── useScrollAnimation.ts
│
├── types/                         # TypeScript type definitions
│   ├── course.types.ts
│   ├── team.types.ts
│   └── api.types.ts
│
├── utils/                         # Utility functions
│   ├── constants.ts               # Institute data (courses, team, branches)
│   ├── helpers.ts
│   └── validators.ts
│
├── assets/                        # Static assets
│   ├── images/
│   ├── fonts/
│   └── videos/
│
└── styles/
    └── globals.css                # Global Tailwind imports
```

**【Dependencies & Integration Requirements】**

1. **Services Layer:**
   - Create a `services/api.ts` with axios/fetch configuration
   - Implement `contact.service.ts` with POST endpoint for contact form
   - Implement `booking.service.ts` with POST endpoint for demo class booking
   - Add error handling and loading states for all API calls

2. **Constants File:**
   - Create `utils/constants.ts` containing:
     - Course data (name, duration, fee, description)
     - Team member data (name, qualification, subject, image)
     - Branch data (address, phone, email, coordinates for map)
     - Testimonials (quote, name, relation, rating)

3. **Map Integration:**
   - In `BranchesSection.tsx`, include a Google Maps embed placeholder
   - Use the branch coordinates from constants to display multiple locations

4. **Form Handling:**
   - Create custom `useForm` hook in `hooks/useForm.ts`
   - Implement form validation for contact and booking forms

**【Atomic Design Principles to Follow】**

Apply these rules when generating components:

- **Atoms:** Basic building blocks (Button, Input, Card from `components/ui/`)
- **Molecules:** Combinations of atoms (CourseCard composed of Card + Button + Typography)
- **Organisms:** Complex sections (HeroSection, AboutSection - these go in `pages/home/components/`)
- **Pages:** Full page compositions (Home page assembling all organisms)

**【Code Quality Requirements】**

- Use functional React components with proper TypeScript interfaces
- All props must be typed
- Use Figma design tokens (colors, spacing, typography) from the attached design file
- No hardcoded values - reference constants from `utils/constants.ts`
- Include proper error boundaries
- Add loading skeletons for async operations

**【Responsive Design】**

- Mobile-first approach
- Hide sidebar images on mobile screens (as shown in Figma design)
- Use Tailwind responsive classes (`sm:`, `md:`, `lg:`)

**【Deliverables】**

Generate a complete, runnable Vite + React + TypeScript project with:
1. All files in the exact folder structure specified above
2. Proper package.json with all dependencies
3. Tailwind CSS configuration
4. TypeScript configuration
5. Working dev server (`npm run dev`)

**【Design Token Mapping】**

Use the variables from the attached Figma file. Map them to:
- CSS custom properties for colors, spacing, typography
- Tailwind config extend section
- No hardcoded hex codes or pixel values

---

## Why This Prompt Works

Based on search results, effective Figma Make prompts need five key dimensions: **Task, Context, Design Elements, Expected Behavior, and Constraints**. This prompt includes all five:

| Dimension | How This Prompt Addresses It |
|-----------|------------------------------|
| Task | Clear instruction to "build a React + TypeScript application" |
| Context | Georgia Coaching Classes - coaching institute website |
| Design Elements | Specific sections (Hero, About, Courses, Team, etc.) |
| Expected Behavior | Form submissions, API integration, map display |
| Constraints | Exact folder structure, atomic principles, no hardcoded values |

---

## Pro Tips for Using This Prompt

**1. Attach your design system FIRST**
Before pasting this prompt, attach your Figma design system library. Figma Make works best when it has atomic components to reference.

**2. Break it down if needed**
If the prompt is too long, split it into phases:
- Phase 1: Generate the folder structure and basic components
- Phase 2: Add the services layer
- Phase 3: Integrate the map and forms

**3. Use Point-and-Edit for refinements**
After generation, you can click on any element and say "move this to the shared components folder" or "add TypeScript interface for this component".

**4. Download and test locally**
Once satisfied, download the code. You may need to:
- Remove version-pinned imports (the `@1.2.3` suffixes)
- Run `npm install` to add missing dependencies
- Configure Vite and Tailwind properly

**5. Consider using a converter tool**
Tools like `figmx` can clean up Figma Make exports by tree-shaking unused components and fixing asset paths.