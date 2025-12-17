# Agentic Product Infrastructure Microsite

## Project Context

This is an internal presentation website proposing a transformation in how Lightspeed develops products using AI infrastructure. The site replaces a traditional PowerPoint deck and will be used to secure executive buy-in.

**Meta-demonstration:** This site itself demonstrates the proposed Product Studio workflow. It was created using structured inputs (PRD + COPY.md) to generate a high-quality output - exactly the process we're proposing to build.

## File Relationships

- **PRD.md** - Complete technical specification, requirements, and acceptance criteria
- **COPY.md** - All site content organized by section
- **Diagrams** (3 vector PDFs) - Visual assets to be converted to SVG
- **Lightspeed logo** - White version for dark background

## Content Handling

Use COPY.md as the source of truth for all site content. You may adjust copy for:
- Better UX flow and readability
- Optimal progressive disclosure
- Natural transitions between sections
- Responsive layout needs

**Critical constraint:** Preserve core messaging and strategic positioning. The *what* we're communicating cannot change, but *how* it's presented can be optimized for the web medium.

## Design Philosophy

**Think "guided narrative" not "web app":**
- Each section is like a slide in a deck
- Reader should digest information topic-by-topic
- May be used in live presentation (walking through section-by-section)
- Progressive disclosure allows different depths without overwhelming

**Aesthetic goal:** Professional, sophisticated, minimal. Reference sites like Linear, Stripe, and Framer - let content lead, design supports.

## Key Principles

1. **Clarity over cleverness** - This is a strategic proposal, not a portfolio piece
2. **Content accuracy is critical** - The messaging must land correctly
3. **Progressive disclosure strategically** - Main content visible, details on demand
4. **Professional restraint** - Subtle animations, minimal decoration
5. **Accessibility matters** - Semantic HTML, ARIA labels, keyboard nav

## Decision-Making Guidance

**When facing trade-offs:**
- Clarity wins over aesthetics
- Functionality wins over animation
- Readability wins over density
- Strategic messaging wins over word count optimization

**When specs are unclear:**
- Default to simpler implementation
- Favor established patterns (no experimental UX)
- Ask yourself: "Does this help communicate the proposal effectively?"

## Success Definition

The site succeeds if:
- Executive stakeholders understand the vision clearly
- Technical details are available but not overwhelming
- The proposal feels strategic and well-thought-out
- It can be walked through section-by-section in a meeting
- It demonstrates the quality of output this infrastructure could produce
