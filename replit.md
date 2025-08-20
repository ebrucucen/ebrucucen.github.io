# Overview

This is a full-stack web application built with React and Express.js, designed as a personal portfolio/blog platform for a technology leader. The application features a modern, responsive design with dark/light theme support and showcases professional highlights, publications, talks, community work, and personal reflections. The frontend uses React with TypeScript and shadcn/ui components, while the backend is built with Express.js and uses Drizzle ORM with PostgreSQL for data persistence.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Build Tool**: Vite for fast development and optimized production builds
- **Theme System**: Custom theme provider supporting light/dark modes with localStorage persistence

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **API Design**: RESTful API structure with `/api` prefix
- **Development**: Hot module replacement via Vite integration
- **Error Handling**: Centralized error middleware for consistent error responses
- **Logging**: Custom request logging middleware for API endpoint monitoring

## Data Storage
- **Database**: PostgreSQL as the primary database
- **Database Driver**: Neon Database serverless driver for PostgreSQL connections
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Connection**: Environment-based database URL configuration
- **Session Storage**: connect-pg-simple for PostgreSQL-backed session storage

## Authentication & Authorization
- **Session Management**: Express sessions with PostgreSQL store
- **User Schema**: Basic user model with username/password fields
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

## Development & Deployment
- **Development Server**: Vite dev server with Express.js backend integration
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation
- **Environment**: NODE_ENV-based configuration for development/production modes
- **Error Overlay**: Replit-specific error modal for development debugging
- **Code Analysis**: Replit Cartographer integration for code exploration

## External Dependencies

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Radix UI**: Unstyled, accessible UI primitives for component foundation
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel/slider component for content display

### Development Tools
- **TypeScript**: Static type checking and enhanced developer experience
- **Vite**: Fast build tool and development server
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **ESBuild**: Fast JavaScript bundler for backend compilation

### Database & Backend
- **Neon Database**: Serverless PostgreSQL platform for cloud database hosting
- **Drizzle ORM**: TypeScript-first ORM for database operations
- **Drizzle Zod**: Integration between Drizzle and Zod for schema validation
- **Express Session**: Session middleware for user authentication state

### Validation & Forms
- **Zod**: Schema validation library for runtime type checking
- **React Hook Form**: Form library for efficient form state management
- **Hookform Resolvers**: Integration between React Hook Form and validation libraries

### Date & Time
- **date-fns**: Modern date utility library for date manipulation and formatting

### Development Environment
- **Replit**: Cloud-based development environment with specific tooling integrations
- **Replit Vite Plugins**: Runtime error modal and code cartographer for enhanced development experience