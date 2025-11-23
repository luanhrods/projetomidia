# AI Development Rules

This document outlines the rules and conventions for AI-driven development of this application. Adhering to these guidelines ensures consistency, maintainability, and quality.

## Tech Stack

This project is built with a modern, minimalist tech stack:

*   **Framework**: Next.js 16+ with the App Router.
*   **Language**: TypeScript.
*   **Styling**: Tailwind CSS for all styling, configured in `tailwind.config.mjs` and `app/globals.css`.
*   **UI Components**: A custom component library built with shadcn/ui, which uses Radix UI primitives for accessibility. All UI components are located in `@/components/ui`.
*   **Icons**: `lucide-react` for a consistent and clean icon set.
*   **Forms**: `react-hook-form` for logic and `zod` for schema validation.
*   **Animations**: `tailwindcss-animate` for component transitions.
*   **Utilities**: `clsx` and `tailwind-merge` (via the `cn` helper) for class name management.

## Library and Convention Rules

### 1. UI Components

-   **Primary Rule**: **ALWAYS** use the pre-built components from `@/components/ui` for all standard UI elements (Buttons, Inputs, Cards, etc.).
-   **Customization**: If a component from `@/components/ui` requires significant modification, create a *new* component in `@/components` that composes the base UI component. **DO NOT** modify the files in `@/components/ui` directly.
-   **New Components**: All new, reusable components should be created in their own file within the `@/components` directory.

### 2. Styling

-   **Primary Rule**: **ALWAYS** use Tailwind CSS utility classes for styling. Avoid writing custom CSS in `.css` files.
-   **Class Merging**: Use the `cn` utility function from `@/lib/utils.ts` to conditionally apply or merge Tailwind classes.
-   **Theming**: Colors, fonts, and radii are defined as CSS variables in `app/globals.css`. Use these variables (e.g., `bg-background`, `text-primary`, `rounded-lg`) instead of hardcoding values.

### 3. Icons

-   **Primary Rule**: **ONLY** use icons from the `lucide-react` library. This ensures visual consistency.
-   **Example**: `import { ArrowRight } from "lucide-react"`

### 4. Forms

-   **Primary Rule**: **ALWAYS** use `react-hook-form` for managing form state and validation.
-   **Schema Validation**: Use `zod` to define validation schemas.
-   **Integration**: Use the custom `Form` components from `@/components/ui/form.tsx` (e.g., `<FormField>`, `<FormItem>`, `<FormControl>`) to seamlessly connect `react-hook-form` with the shadcn/ui components.

### 5. State Management

-   **Local State**: Use React's built-in `useState` and `useReducer` hooks for component-level state.
-   **Global State**: For state that needs to be shared across the application, use React Context (`createContext`). Do not introduce external state management libraries like Redux or Zustand.

### 6. File Structure

-   **Pages**: All pages are defined as `page.tsx` files within the `app/` directory, using Next.js App Router conventions.
-   **Components**: Reusable, application-specific components are located in `@/components`.
-   **UI Primitives**: The base shadcn/ui components are in `@/components/ui`.
-   **Hooks**: Custom hooks are placed in the `@/hooks` directory.
-   **Utilities**: Global utility functions are located in `@/lib`.

By following these rules, we ensure the codebase remains clean, consistent, and easy for any developer (human or AI) to work with.