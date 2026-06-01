'use client'

import React from 'react'
import { FileText, MessageCircle, Upload, Shield, Zap, Globe } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Understand Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">
                {' '}Health Records
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              CareGPT Web helps you interpret your medical data using AI. Upload your health records
              and get plain-language explanations, insights, and answers to your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg">
                Start Analyzing Records
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Health Data Analysis
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built with privacy and security in mind, designed and developed by Manohar Shasappa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-health-card rounded-xl p-6 shadow-sm border border-health-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-health-text mb-3">
                FHIR Record Processing
              </h3>
              <p className="text-health-muted">
                Upload health records in JSON, XML, or PDF formats. Our system parses FHIR data
                and extracts meaningful insights from your medical information.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-health-card rounded-xl p-6 shadow-sm border border-health-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-health-text mb-3">
                Interactive AI Chat
              </h3>
              <p className="text-health-muted">
                Ask questions about your health data and receive personalized explanations
                in plain language powered by advanced AI models.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-health-card rounded-xl p-6 shadow-sm border border-health-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-health-text mb-3">
                Privacy-First Design
              </h3>
              <p className="text-health-muted">
                Your health records are processed client-side when possible. Only anonymized
                summaries are sent to AI services for analysis.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-health-card rounded-xl p-6 shadow-sm border border-health-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Upload className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-health-text mb-3">
                Easy File Upload
              </h3>
              <p className="text-health-muted">
                Simple drag-and-drop interface supports multiple file formats.
                Get started with your health data analysis in seconds.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-health-card rounded-xl p-6 shadow-sm border border-health-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-health-text mb-3">
                Real-time Processing
              </h3>
              <p className="text-health-muted">
                Fast analysis powered by cloud infrastructure. Get insights from
                your health records within seconds of upload.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-health-card rounded-xl p-6 shadow-sm border border-health-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-health-text mb-3">
                Global Accessibility
              </h3>
              <p className="text-health-muted">
                Web-based platform accessible from any device. No app installation
                required - just open your browser and start analyzing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powered by Next.js, NEON Database, and Vercel for optimal performance and scalability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">Next.js</div>
              <div className="text-sm text-gray-600">React Framework</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">NEON</div>
              <div className="text-sm text-gray-600">PostgreSQL</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">Vercel</div>
              <div className="text-sm text-gray-600">Serverless</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">OpenAI</div>
              <div className="text-sm text-gray-600">AI Models</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Understand Your Health Data?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Upload your health records and start getting AI-powered insights today.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Get Started Now
          </button>

          <div className="mt-8 text-primary-200 text-sm">
            <p>
              <strong>Developed by Manohar Shasappa</strong> |
              Email: sappamanoharsha@gmail.com
            </p>
            <p className="mt-2">
              ⚠️ For informational purposes only. Not a substitute for professional medical advice.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}