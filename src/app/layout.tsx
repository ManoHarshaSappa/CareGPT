import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CareGPT Web - AI Health Records Assistant',
  description: 'AI-powered health records assistant for understanding FHIR data. Built by Manohar Shasappa.',
  authors: [{ name: 'Manohar Shasappa', url: 'mailto:sappamanoharsha@gmail.com' }],
  keywords: ['healthcare', 'FHIR', 'AI', 'health records', 'medical assistant'],
  openGraph: {
    title: 'CareGPT Web - AI Health Records Assistant',
    description: 'Understand your health records with AI-powered interpretations',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-health-bg text-health-text`}>
        <div className="min-h-screen flex flex-col">
          {/* Header Navigation */}
          <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-health-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">C</span>
                  </div>
                  <span className="font-bold text-xl text-health-text">CareGPT</span>
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                  <a href="/" className="text-health-muted hover:text-health-text transition-colors">Dashboard</a>
                  <a href="/upload" className="text-health-muted hover:text-health-text transition-colors">Upload</a>
                  <a href="/chat" className="text-health-muted hover:text-health-text transition-colors">Chat</a>
                </nav>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-health-card border-t border-health-border mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-health-text mb-3">CareGPT Web</h3>
                  <p className="text-health-muted text-sm">
                    AI-powered health records assistant for understanding your medical data.
                  </p>
                  <p className="text-health-muted text-sm mt-2">
                    Built by <strong>Manohar Shasappa</strong>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-health-text mb-3">Privacy</h3>
                  <ul className="space-y-2 text-sm text-health-muted">
                    <li>✓ Client-side processing</li>
                    <li>✓ No data storage</li>
                    <li>✓ Secure AI analysis</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-health-text mb-3">Contact</h3>
                  <p className="text-sm text-health-muted">
                    Email: sappamanoharsha@gmail.com
                  </p>
                  <p className="text-xs text-health-muted mt-4">
                    ⚠️ For informational purposes only. Not a substitute for professional medical advice.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}