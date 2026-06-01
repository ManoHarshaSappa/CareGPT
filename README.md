# CareGPT Web - AI-Powered Health Records Assistant

![CareGPT Logo](https://img.shields.io/badge/CareGPT-Health%20AI-blue?style=for-the-badge&logo=medical-cross)

**Author:** Manohar Shasappa  
**Email:** sappamanoharsha@gmail.com  
**Project Type:** Healthcare AI Application  
**Tech Stack:** Next.js, TypeScript, Tailwind CSS, NEON Database, Vercel  

## 🩺 Project Overview

CareGPT Web is an AI-powered health records assistant that helps patients understand their medical data through conversational AI. Created by Manohar Shasappa, this innovative web application makes healthcare information accessible and understandable for everyday users.

### 🎯 Key Features

- **📄 FHIR Record Processing**: Upload and parse health records in JSON, XML, or PDF formats
- **🤖 AI-Powered Interpretations**: Get plain-language explanations of medical data using OpenAI/Claude
- **💬 Interactive Chat**: Ask questions about your health records and receive personalized answers  
- **📊 Data Visualization**: View lab results, medications, and health trends in intuitive charts
- **🔒 Privacy-First**: Client-side processing with optional cloud analysis
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🏗️ Technology Stack

- **Frontend**: Next.js 14+ with TypeScript and React 18
- **Styling**: Tailwind CSS with custom healthcare-focused design system
- **Database**: NEON PostgreSQL for session management and user data
- **AI Integration**: OpenAI/Claude API for health record interpretation
- **Deployment**: Vercel for serverless hosting and edge functions
- **Version Control**: GitHub for source code management

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager
- NEON Database account
- OpenAI API key
- Vercel account (for deployment)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd caregpt-web
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
# Database
DATABASE_URL="your-neon-database-url"

# AI Services
OPENAI_API_KEY="your-openai-api-key"

# App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_AUTHOR_NAME="Manohar Shasappa"
NEXT_PUBLIC_AUTHOR_EMAIL="sappamanoharsha@gmail.com"
```

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
caregpt-web/
├── README.md                    # This file
├── BUILD.md                     # Development roadmap
├── ARCHITECTURE.md              # Technical architecture
├── DEPLOYMENT.md                # Deployment guide
├── package.json                 # Dependencies and scripts
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── drizzle.config.ts            # Database ORM configuration
├── vercel.json                  # Vercel deployment settings
├── .env.example                 # Environment variables template
├── .env.local                   # Local environment (not in git)
│
├── src/
│   ├── app/                     # Next.js App Router
│   ├── components/              # React components
│   ├── lib/                     # Utility libraries
│   ├── types/                   # TypeScript definitions
│   └── styles/                  # CSS and styling
│
├── public/                      # Static assets
├── docs/                        # Additional documentation
├── scripts/                     # Build and utility scripts
└── tests/                       # Test files
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint code quality checks
- `npm run type-check` - Run TypeScript type checking
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Apply database migrations
- `npm run db:studio` - Open database management UI

## 🗄️ Database Schema

The application uses NEON PostgreSQL for:
- User session management
- Health record metadata (no sensitive health data stored)
- Chat conversation history (if user opts in)
- Application analytics and usage tracking

## 🤖 AI Integration

### Supported AI Providers

1. **OpenAI GPT-4/GPT-3.5-turbo** - Primary recommendation engine
2. **Anthropic Claude** - Alternative AI provider for health interpretations

### Health Record Processing Pipeline

1. **File Upload** → User uploads FHIR records (JSON/XML/PDF)
2. **Parsing** → Extract structured data using FHIR libraries
3. **Privacy Check** → Validate no sensitive data leaves client-side
4. **AI Analysis** → Send anonymized summaries to AI providers
5. **Interpretation** → Return plain-language explanations
6. **Visualization** → Display data in charts and interactive components

## 🔒 Privacy and Security

### Data Protection Principles

- **Client-side First**: Health records processed in browser when possible
- **No Storage**: Original health files never stored on servers
- **Anonymization**: Only anonymized summaries sent to AI services
- **User Control**: Users choose what data to share and analyze
- **Encryption**: All data transmission uses HTTPS/TLS

### Compliance Considerations

- GDPR-compliant data handling
- HIPAA-aware design principles (not for production medical use)
- Transparent privacy policies and user consent flows

## 🚀 Deployment

### Vercel Deployment

The application is optimized for Vercel's serverless platform:

1. **Connect GitHub Repository** to Vercel
2. **Configure Environment Variables** in Vercel dashboard
3. **Deploy** automatically on git push to main branch

### Environment Variables for Production

```env
DATABASE_URL=your-neon-production-database-url
OPENAI_API_KEY=your-production-openai-key
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-random-secret-key
```

## 📊 Development Roadmap

See [BUILD.md](BUILD.md) for the complete step-by-step development plan:

- ✅ **Phase 1**: Foundation (Complete)
- 🔨 **Phase 2**: Core FHIR Processing (Next)
- 🔨 **Phase 3**: Database Schema
- 🔨 **Phase 4**: File Upload System
- 🔨 **Phase 5**: AI Integration
- 🔨 **Phase 6**: User Interface
- 🔨 **Phase 7**: Advanced Features
- 🔨 **Phase 8**: Security & Privacy
- 🔨 **Phase 9**: Testing & Quality
- 🔨 **Phase 10**: Deployment

## 🤝 Contributing

This project is an original creation by **Manohar Shasappa** showcasing innovative healthcare AI development.

### Development Guidelines

1. Follow TypeScript best practices
2. Maintain component modularity
3. Write comprehensive tests for health data processing
4. Ensure privacy and security standards
5. Update documentation for any API changes

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI/Anthropic** for AI capabilities that make health data interpretation possible
- **Next.js and Vercel teams** for excellent development and deployment platforms
- **NEON** for providing scalable PostgreSQL database infrastructure

## 📞 Contact

**Manohar Shasappa**  
📧 Email: sappamanoharsha@gmail.com  
🌐 Portfolio: [Your Portfolio URL]  
💼 LinkedIn: [Your LinkedIn Profile]  
🐙 GitHub: [Your GitHub Profile]

## 🩺 Medical Disclaimer

⚠️ **This application is for educational and informational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always consult qualified healthcare providers for medical decisions.**

---

*Built with ❤️ for healthcare accessibility by Manohar Shasappa*