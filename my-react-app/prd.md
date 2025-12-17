# Agentic Product Infrastructure - PRD

## Product Overview

**Product Name:** Agentic Product Infrastructure Microsite  
**Purpose:** Internal presentation website communicating the vision and technical architecture of proposed Product HQ+ and Product Studio systems  
**Context:** This site replaces a traditional PowerPoint deck. Readers will digest information topic-by-topic, section-by-section, as they would with slides. The presenter may walk an audience through the site during meetings.  
**Target Audience:** Executive leadership (CPO Rob), engineering leadership (CTO Carson), product management team  
**Primary Goal:** Secure buy-in for building agentic product infrastructure through clear, compelling presentation

## Technical Requirements

**Framework:** React with Vite  
**Hosting:** Firebase Hosting  
**Styling:** CSS Modules or Styled Components  
**Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge - latest 2 versions)  
**Responsive:** Desktop and tablet optimized (laptop viewing in presentation contexts, mobile out of scope)

## Design Aesthetic

**Visual Style:**
- Clean, minimal design inspired by linear.app, stripe.com, and framer.com
- Dark background throughout (similar to Linear's dark mode)
- White Lightspeed logo in header
- No additional brand colors - use grayscale palette with subtle accents as needed
- Typography-driven design with generous whitespace
- Smooth, subtle animations and transitions

**Typography:**
- **Font Family:** Roboto (Regular, Medium, Bold weights only)
- Import from Google Fonts or use system fallback
- Clear hierarchy through size and weight variation
- Generous line height for readability (1.6-1.8 for body copy)

**Visual Enhancements:**
- Claude Code may add background patterns, textures, or subtle visual elements if they support the overall aesthetic
- Keep enhancements minimal and non-distracting
- Ensure any additions maintain professional, sophisticated tone

## Content Source

**Primary Copy:** Use content from COPY.md file provided separately

**Copy Flexibility:** Claude Code may adjust copy as needed to:
- Improve flow and readability in the web context
- Optimize for progressive disclosure patterns
- Enhance UX/UI effectiveness
- Ensure natural transitions between sections
- Adjust for responsive layout needs

**Core messaging and strategic positioning must be preserved.** Tactical wording can be refined for optimal user experience.

## User Experience & Interaction

### Navigation Model: Guided Narrative Experience

**Think of this as a deck replacement:**
- Readers digest information topic-by-topic, section-by-section (like slides)
- Presenter may walk audience through during meetings
- Sequential narrative flow with clear section breaks
- Scrolling is the navigation mechanism (instead of clicking "next slide")

**Implementation:**
- Single-page site with smooth scroll behavior
- All six main sections clearly delineated as you scroll
- Each section feels distinct and complete (like an individual slide)
- Optional sticky header with section navigation
- Smooth scroll-to-section behavior
- Visual transitions between sections help guide the narrative

### Progressive Disclosure Patterns
Use progressive disclosure throughout to enable different depths of engagement:

**Recommended patterns:**
- **Hover tooltips** for brief explanatory details (e.g., quality auditor descriptions)
- **Expandable sections** using "Show more/Less" toggles for longer content
- **Accordion elements** for nested information where appropriate
- **Info icons** with tooltips for terminology clarification

**Specific areas requiring progressive disclosure:**
- Quality auditor dimension descriptions (Section 3)
- Key capabilities lists (Section 2)
- Technical architecture details (Section 5)
- Detailed phase descriptions (Section 6)

**Progressive disclosure principle:** Main section copy is visible by default. Supporting details, examples, and deeper explanations are revealed on user interaction.

### Section Structure

**Hero Section (Always visible at top):**
- Large headline: "The Future of Product Development"
- PM-Agent team diagram (provided as vector PDF)
- Brief subhead and intro paragraph
- Visually distinct from scrolling sections below

**Main Sections (1-6):**
Each section should feel like a distinct "slide" with:
- Clear section title (large, bold typography)
- Main body copy (visible by default, concise)
- Progressive disclosure elements for deeper content
- Visual assets where indicated in COPY.md
- Visual separation between sections (spacing, subtle dividers, or transitions)

## Visual Assets

### Provided Diagrams (Vector PDF Format)

Three diagrams will be provided as vector PDFs in the project:

1. **`pm-agent-team.pdf`**  
   Location: Hero section  
   Content: Product Manager with bidirectional arrows to multiple AI agents (ChatGPT/Claude, BOB, Product Strategy Agent, Product Design Agent)

2. **`product-infrastructure-systems.pdf`**  
   Location: Section 2  
   Content: Side-by-side comparison showing Product HQ+ (left) and Product Studio (right) with PRD handoff in center, including "Together" statement at bottom

3. **`workflow-architecture.pdf`**  
   Location: Section 5  
   Content: Complete system workflow showing Product Design Exploration, UX/UI Execution, Engineering, Release, and Learning Loops  
   Note: This diagram is complex. Optimize for desktop/laptop viewing. On tablet, horizontal scroll is acceptable if needed.

### Diagram Implementation

**Convert provided PDFs to SVG format** for web use:
- Recreate diagrams as inline SVG or optimized SVG files
- Maintain visual fidelity to original designs
- Ensure crisp rendering on retina displays
- Use consistent styling with site aesthetic (dark background compatible)
- Add appropriate alt text for accessibility

### Additional Visual Creation (Optional)

**Claude Code may create additional SVG diagrams or visuals** if they would enhance understanding or presentation quality:
- Supplementary diagrams to clarify concepts
- Icon sets for bullet points or features
- Visual callouts or annotations
- Background patterns or decorative elements
- Any additions should maintain the professional, minimal aesthetic

### Image Handling
- Optimize all assets for fast loading
- Ensure high-quality rendering on retina displays
- Use semantic alt text for accessibility
- Lazy load below-the-fold content if beneficial

## Technical Implementation Details

### File Structure
```
/src
  /components
    Header.jsx
    Hero.jsx
    Section.jsx (reusable section component)
    Footer.jsx
    ProgressiveDisclosure.jsx (reusable patterns)
  /assets
    /diagrams (provided PDF files, converted to SVG)
    /images (logos, generated visuals)
  /styles
    global.css
    variables.css (colors, typography, spacing)
  App.jsx
  main.jsx (Vite entry point)
  
/public
  Lightspeed logo (white version)
```

### Key Components

**Header:**
- White Lightspeed logo (provided separately)
- Optional navigation links to main sections
- Sticky on scroll if navigation included
- Minimal, unobtrusive design

**Section Component:**
- Reusable for all six main sections
- Accepts title, body copy, and child elements
- Handles progressive disclosure children
- Consistent spacing and typography
- Clear visual separation between sections

**Progressive Disclosure:**
- Reusable components for hover tooltips, expandables, accordions
- Smooth height transitions for expandable content
- Clear visual states for expanded/collapsed
- Accessible (keyboard navigation, ARIA labels)

**Footer:**
- Meta statement about site being built with proposed infrastructure
- Minimal styling, concise

### Styling Guidelines

**Typography Scale:**
- Hero headline: ~48-64px (Roboto Bold)
- Section titles: ~32-40px (Roboto Bold)
- Subheads: ~20-24px (Roboto Medium)
- Body copy: ~16-18px (Roboto Regular)
- Supporting text: ~14-16px (Roboto Regular)
- Generous line height (1.6-1.8 for body copy)

**Colors:**
- Background: Dark (#0d0d0d to #1a1a1a range)
- Primary text: White or off-white (#ffffff to #f5f5f5)
- Secondary text: Light gray (#a0a0a0 to #cccccc)
- Accent (minimal use): Subtle color for interactive elements
- Borders/dividers: Very subtle gray (#2a2a2a to #333333)

**Spacing:**
- Sections: 120-160px vertical spacing between sections
- Content: 40-60px vertical spacing within sections
- Paragraphs: 24-32px spacing
- Generous horizontal padding for readability
- Section transitions should create clear visual breaks

### Accessibility Requirements
- Semantic HTML5 structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios (especially important on dark backgrounds)
- Alt text for all images and diagrams
- Focus indicators for interactive elements

### Performance Considerations
- Optimize SVG file sizes
- Lazy load below-the-fold content if beneficial
- Fast initial page load (<3 seconds on modern connection)
- Smooth scrolling and animations (60fps)
- Efficient React rendering (avoid unnecessary re-renders)

## Acceptance Criteria

**Functional:**
- [ ] All six sections display in correct order as user scrolls
- [ ] Each section feels distinct and complete (like individual slides)
- [ ] Progressive disclosure patterns work smoothly (hover, expand, etc.)
- [ ] Smooth scroll behavior to sections
- [ ] All three provided diagrams recreated accurately as SVG
- [ ] Site loads quickly (<3 seconds on modern connection)
- [ ] Responsive layout works on desktop and tablet sizes
- [ ] Can be walked through section-by-section in presentation context

**Visual:**
- [ ] Matches Linear/Framer/Stripe aesthetic (clean, minimal, professional)
- [ ] Dark background with white logo
- [ ] Roboto font family used consistently
- [ ] Clear visual hierarchy through typography
- [ ] Generous whitespace throughout
- [ ] Smooth, subtle animations (no jarring transitions)
- [ ] Clear visual separation between sections

**Content:**
- [ ] All copy from COPY.md is incorporated (with UX-appropriate adjustments)
- [ ] Core messaging and strategic positioning preserved
- [ ] Progressive disclosure enhances readability without hiding critical info
- [ ] Section flow is logical and compelling
- [ ] Narrative guides reader through proposal effectively

**Technical:**
- [ ] Clean, maintainable React code
- [ ] Reusable components where appropriate
- [ ] No console errors or warnings
- [ ] Accessible markup and interactions
- [ ] Optimized images and assets
- [ ] Works with Firebase Hosting deployment

## Non-Requirements (Out of Scope)

- User authentication or login
- Backend/database integration
- Form submissions or data collection
- Mobile phone optimization (desktop/tablet only)
- Multi-language support
- Print stylesheets
- IE11 or older browser support
- Animation-heavy interactions (keep subtle and purposeful)

## Success Metrics

**Primary Success Criteria:**
- Effective communication of vision to stakeholders
- Clear understanding of two-system architecture (Product HQ+ / Product Studio)
- Engagement with content at appropriate depth per audience member
- Easy to walk through in presentation context
- Buy-in from CPO Rob to move forward with implementation

**Site should enable:**
- Executive-level understanding without deep dive
- Technical audience can explore architectural details
- Product team can understand operational changes
- Shareable link for async review and discussion
- Presenter can guide audience through section-by-section

## Notes

- This is an internal presentation tool replacing a PowerPoint deck
- Priority is clarity and strategic positioning over marketing polish
- Content accuracy and message preservation is critical
- UX refinements to copy are encouraged for optimal presentation
- Site demonstrates the proposed Product Studio workflow at meta-level
- The narrative should guide readers naturally through the proposal
- Each section should feel purposeful and complete

## Assets Checklist

**To be provided in project:**
- [ ] `pm-agent-team.pdf` - Hero diagram
- [ ] `product-infrastructure-systems.pdf` - Section 2 systems comparison
- [ ] `workflow-architecture.pdf` - Section 5 complete workflow
- [ ] White Lightspeed logo (PNG or SVG)
- [ ] COPY.md file with all site content
