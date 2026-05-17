# Planning Guide

A dynamic GitHub README profile generator that helps users create personalized, eye-catching profile READMEs through an intuitive visual builder with live preview.

**Experience Qualities**: 
1. **Creative** - Users should feel empowered to express their personality through customizable sections, styling options, and preview-driven design
2. **Intuitive** - The builder should guide users naturally through profile creation without overwhelming them with technical markdown syntax
3. **Immediate** - Changes should reflect instantly in the preview pane, creating a satisfying feedback loop

**Complexity Level**: Light Application (multiple features with basic state)
  - This is a builder tool with multiple customizable sections (header, about, skills, stats, badges), form inputs, live preview, and export functionality, but doesn't require complex routing or data relationships

## Essential Features

### Section Management
- **Functionality**: Add, remove, reorder, and customize profile sections (header, about me, skills, GitHub stats, badges, social links with images, tech stack code view, streaming/video channels)
- **Purpose**: Allows users to build a personalized profile structure that reflects their unique developer identity
- **Trigger**: User clicks section buttons in the builder panel
- **Progression**: Select section type → Configure section content via form → See live preview update → Adjust styling/content → Continue adding sections
- **Success criteria**: Sections appear in preview immediately, can be reordered via drag handles, and removed individually

### Live Markdown Preview
- **Functionality**: Real-time rendering of the generated markdown as it would appear on GitHub
- **Purpose**: Eliminates guesswork by showing exactly what the final profile will look like
- **Trigger**: Any change to form inputs or section configuration
- **Progression**: User modifies input → Preview updates instantly → User sees visual result
- **Success criteria**: Preview updates within 100ms of input change, accurately represents GitHub's markdown rendering

### Content Customization
- **Functionality**: Input fields for name, tagline, bio, skills list, social links with platform-specific badges and icons, badge selections, personal websites/blog URLs, and GitHub stats with automatic username detection and customizable theme styles (dark mode, gradient, neon)
- **Purpose**: Personalizes the profile with user-specific information while reducing manual entry through smart defaults, visual theme selection, and professional-looking social badges
- **Trigger**: User types in input fields, selects from dropdowns, clicks the "Use my username" button in stats section, selects social platform from predefined list, or selects a theme style for GitHub stats
- **Progression**: Focus input → Enter text OR click auto-fill → Select platform (Twitter, LinkedIn, GitHub, Medium, Dev.to, YouTube, etc.) → Add username if required → Select theme style from visual options → See formatted result with colorful badges in preview → Refine content
- **Success criteria**: All inputs persist during session, support common markdown enhancements, validate URLs, automatically populate GitHub username when stats section is added, theme selection updates preview immediately with visual feedback, social links display with proper logos and colors

### Export Options
- **Functionality**: Copy markdown to clipboard or download as README.md file with proper error handling
- **Purpose**: Makes it easy to transfer the generated content to GitHub
- **Trigger**: User clicks "Copy" or "Download" button
- **Progression**: Click export button → Content generates → File downloads or clipboard updates → Feedback confirmation → Paste into GitHub or save file
- **Success criteria**: Markdown copies correctly with formatting, download creates valid .md file with proper charset encoding, success toast appears, download handles errors gracefully

## Edge Case Handling
- **Empty Sections**: Display placeholder text guiding users to fill in content rather than showing blank areas
- **Long Content**: Automatically truncate or wrap text that exceeds reasonable lengths with visual indicators
- **Invalid URLs**: Validate social links and badge URLs, showing inline errors with correction hints
- **No Sections Added**: Show onboarding state with suggested starter sections and example profiles
- **Browser Compatibility**: Ensure clipboard API fallback for older browsers, with manual copy option

## Design Direction
The design should evoke a modern developer workspace - clean, focused, and powerful. Think of a sophisticated code editor meets a creative design tool. The interface should feel like premium developer tooling with attention to detail in typography, spacing, and interactions. It should inspire creativity while maintaining the technical precision developers expect.

## Color Selection
A rich, developer-focused palette with deep purples and vibrant accents that feels both professional and creative.

- **Primary Color**: Deep purple `oklch(0.45 0.15 285)` - Represents creativity and technical sophistication, used for main actions and branding
- **Secondary Colors**: Slate gray `oklch(0.35 0.02 265)` for structural elements, creating a grounded technical feel
- **Accent Color**: Electric cyan `oklch(0.75 0.15 195)` - High-energy highlight for CTAs, active states, and drawing attention to key interactive elements
- **Foreground/Background Pairings**: 
  - Background (Deep slate `oklch(0.12 0.02 265)`): Light text `oklch(0.95 0.01 285)` - Ratio 15.8:1 ✓
  - Primary (Deep purple `oklch(0.45 0.15 285)`): White text `oklch(0.98 0 0)` - Ratio 5.2:1 ✓
  - Accent (Electric cyan `oklch(0.75 0.15 195)`): Dark text `oklch(0.15 0.02 265)` - Ratio 9.4:1 ✓
  - Card (Dark surface `oklch(0.18 0.02 265)`): Light text `oklch(0.95 0.01 285)` - Ratio 12.1:1 ✓

## Font Selection
Typography should communicate technical precision with modern sophistication, using a monospace accent for code-related elements and a clean geometric sans for UI.

- **Typographic Hierarchy**: 
  - H1 (App Title): Space Grotesk Bold/32px/tight letter-spacing (-0.02em)
  - H2 (Section Headers): Space Grotesk Semibold/20px/normal
  - H3 (Field Labels): Space Grotesk Medium/14px/wide letter-spacing (0.01em) uppercase
  - Body (Inputs/Content): Inter Regular/15px/relaxed line-height (1.6)
  - Code (Preview): JetBrains Mono Regular/14px/normal

## Animations
Animations should feel snappy and purposeful, reinforcing the immediate feedback loop of the builder. Use subtle scale transforms on button presses, smooth height transitions when sections expand/collapse, and a satisfying bounce when sections are added. The preview pane should have a subtle pulse animation when content updates to draw the eye. Keep all transitions under 250ms to maintain the feeling of responsiveness.

## Component Selection
- **Components**: 
  - Card for section builders and preview container
  - Input, Textarea, Label for form fields
  - Button (primary for add section, secondary for remove, custom theme selector buttons)
  - Accordion for collapsible section editors
  - Tabs for switching between edit/preview on mobile
  - Scroll-area for long preview content
  - Badge for skill tags
  - Separator for visual section breaks
  - Dialog for templates/examples gallery
  - Tooltip for icon buttons and feature hints
  
- **Customizations**: 
  - Custom drag handle component using Phosphor icons (DotsSixVertical)
  - Custom section selector grid with icon + label cards
  - Custom markdown preview renderer with syntax highlighting
  - Badge input component with tag-style addition/removal
  - Custom theme selector with visual preview cards for GitHub stats (dark mode, gradient, neon)
  
- **States**: 
  - Buttons: Hover lifts with shadow, active scales down 98%, disabled reduces opacity 40%
  - Theme selector: Selected state shows accent border and filled icon, hover shows subtle background
  - Inputs: Focus shows cyan ring, error state shows red border with shake animation
  - Sections: Hover shows drag handle, active dragging reduces opacity 60%
  - Preview: Updating state shows subtle shimmer overlay
  
- **Icon Selection**: 
  - Plus (add sections)
  - Trash (remove sections) 
  - DotsSixVertical (drag handle)
  - Copy (clipboard)
  - Download (export file)
  - Code (markdown view toggle)
  - Eye (preview toggle)
  - GithubLogo (social/stats)
  - User (profile sections, auto-fill username in stats)
  - Moon (dark mode theme)
  - Gradient (gradient theme)
  - Lightning (neon theme)
  
- **Spacing**: 
  - Container padding: p-6 (24px)
  - Section gaps: gap-4 (16px)
  - Form field spacing: space-y-3 (12px)
  - Card padding: p-5 (20px)
  - Button padding: px-4 py-2 (16px/8px)
  
- **Mobile**: 
  - Switch from side-by-side editor/preview to tabbed interface below 768px
  - Stack section selector cards in single column
  - Increase touch targets to minimum 44px
  - Collapse accordion sections by default on mobile
  - Preview takes full width with sticky "Copy" button at bottom
