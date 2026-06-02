'use client'

import React from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  FileText,
  AlertTriangle,
  Shield,
  Users,
  Code,
  Heart,
  Zap,
  Star,
  Award,
  Target
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">About CareGPT Web</h1>
            <div></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* What Makes This Special */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6">
          <div className="flex items-start">
            <Star className="w-8 h-8 text-blue-600 mr-4 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">🌟 Why This Project is SPECIAL</h2>
              <div className="space-y-3 text-blue-800">
                <p className="text-lg font-semibold">
                  This isn't just another "upload + chat" app - it's a complete healthcare technology platform!
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <h4 className="font-bold text-blue-900">❌ Regular Chat Apps:</h4>
                    <p className="text-sm">Generic file upload + basic chat</p>
                  </div>
                  <div className="bg-green-100 rounded-lg p-3">
                    <h4 className="font-bold text-green-900">✅ CareGPT Platform:</h4>
                    <p className="text-sm">Medical-grade interface with health data visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Unique Features */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-purple-50 px-6 py-4 border-b border-purple-200">
            <div className="flex items-center">
              <Award className="w-6 h-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-purple-900">🏆 What Makes This Project Stand Out</h2>
            </div>
          </div>
          <div className="p-6 space-y-6">

            <div className="flex items-start">
              <Target className="w-6 h-6 text-purple-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Healthcare-Specific Design (Not Generic)</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Professional medical dashboard with vital signs display</li>
                  <li>• FHIR data structure understanding (healthcare standard)</li>
                  <li>• Medical terminology and proper health data presentation</li>
                  <li>• Healthcare color schemes and medical iconography</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <Zap className="w-6 h-6 text-purple-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Complete Healthcare Workflow</h3>
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 mt-2">
                  <p className="font-semibold text-gray-800 mb-2">Regular App: Upload → Chat</p>
                  <p className="font-semibold text-blue-800">CareGPT: Upload → Process → Analyze → Dashboard → Results → AI Chat</p>
                </div>
                <ul className="text-gray-700 space-y-1 mt-2">
                  <li>• Multi-step health analysis pipeline</li>
                  <li>• Professional results presentation with tabs (Vitals, Conditions, Medications)</li>
                  <li>• Health insights generation with medical context</li>
                  <li>• Dashboard with health metrics and trend analysis</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <Shield className="w-6 h-6 text-purple-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Industry-Standard Compliance Awareness</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• HIPAA compliance considerations</li>
                  <li>• Medical disclaimers and liability protection</li>
                  <li>• Security-first design for sensitive health data</li>
                  <li>• Proper medical data handling protocols</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <Code className="w-6 h-6 text-purple-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Advanced Technical Architecture</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Next.js 14 with App Router (latest tech)</li>
                  <li>• TypeScript for medical data safety</li>
                  <li>• Healthcare-grade error handling</li>
                  <li>• Professional deployment configuration</li>
                  <li>• Temporary file processing (no data storage)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why This Gets Stars & Contributions */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-green-50 px-6 py-4 border-b border-green-200">
            <div className="flex items-center">
              <Star className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-green-900">⭐ Why This Project Gets Stars & Contributions</h2>
            </div>
          </div>
          <div className="p-6 space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-blue-900 mb-3">🎓 Educational Value for Developers</h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• How to build healthcare applications</li>
                  <li>• FHIR data handling techniques</li>
                  <li>• Medical UI/UX design patterns</li>
                  <li>• Healthcare compliance basics</li>
                  <li>• Security in medical apps</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-purple-900 mb-3">🌍 Real-World Application</h3>
                <ul className="text-purple-800 text-sm space-y-1">
                  <li>• Addresses real healthcare problems</li>
                  <li>• Shows professional development skills</li>
                  <li>• Demonstrates industry knowledge</li>
                  <li>• Portfolio-worthy complexity</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-orange-900 mb-3">🚀 Unique in Open Source</h3>
                <ul className="text-orange-800 text-sm space-y-1">
                  <li>• Most projects: Todo apps, e-commerce</li>
                  <li>• This: Professional healthcare application</li>
                  <li>• Rare and valuable in the community</li>
                  <li>• Growing healthcare tech market ($5B+)</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="text-lg font-bold text-red-900 mb-3">🔬 Learning Opportunities</h3>
                <ul className="text-red-800 text-sm space-y-1">
                  <li>• Healthcare technology</li>
                  <li>• AI integration with medical data</li>
                  <li>• Complex data visualization</li>
                  <li>• Professional UI/UX design</li>
                  <li>• Compliance and security</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="text-lg font-bold text-yellow-900 mb-2">💎 The Secret Sauce</h3>
              <p className="text-yellow-800">
                <strong>This isn't just a chat app - it's a healthcare technology platform</strong> that demonstrates:
                understanding of healthcare industry + professional-grade development skills + compliance awareness +
                modern architecture + real-world problem solving = <strong>Portfolio Gold!</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Critical Warning */}
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
          <div className="flex items-start">
            <AlertTriangle className="w-8 h-8 text-red-600 mr-4 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-4">⚠️ IMPORTANT MEDICAL DISCLAIMER</h2>
              <div className="space-y-3 text-red-800">
                <p className="text-lg font-semibold">
                  This application is a DEMONSTRATION ONLY and is NOT intended for medical use.
                </p>
                <p>
                  • This is NOT a medical diagnostic tool<br/>
                  • Do NOT use for health decisions<br/>
                  • Do NOT replace professional medical advice<br/>
                  • Consult healthcare professionals for medical concerns
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What This App IS */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-green-50 px-6 py-4 border-b border-green-200">
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-green-900">✅ What This App IS For</h2>
            </div>
          </div>
          <div className="p-6 space-y-6">

            <div className="flex items-start">
              <Code className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Portfolio Demonstration</h3>
                <p className="text-gray-700">
                  Showcases modern web development skills, healthcare UI/UX design, and technical architecture capabilities.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FileText className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Healthcare Technology Education</h3>
                <p className="text-gray-700">
                  Learn about healthcare technology, FHIR standards, medical data presentation, and industry best practices.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Users className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Development Showcase</h3>
                <p className="text-gray-700">
                  Demonstrates ability to build industry-specific applications with professional quality and compliance awareness.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-bold text-blue-900 mb-2">✅ Safe to Upload for Demo:</h4>
              <div className="text-blue-800 text-sm space-y-1">
                <p>• Sample/test health records (non-personal)</p>
                <p>• Educational FHIR JSON files</p>
                <p>• Demo medical documents</p>
                <p>• Practice lab reports</p>
              </div>
            </div>
          </div>
        </div>

        {/* What This App IS NOT */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-red-50 px-6 py-4 border-b border-red-200">
            <div className="flex items-center">
              <XCircle className="w-6 h-6 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-red-900">❌ What This App is NOT For</h2>
            </div>
          </div>
          <div className="p-6 space-y-6">

            <div className="flex items-start">
              <XCircle className="w-6 h-6 text-red-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-red-900 mb-2">Medical Diagnosis</h3>
                <p className="text-gray-700">
                  Cannot diagnose medical conditions, interpret symptoms, or provide medical advice.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <XCircle className="w-6 h-6 text-red-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-red-900 mb-2">Real Medical Data Analysis</h3>
                <p className="text-gray-700">
                  Cannot analyze actual X-rays, MRIs, lab results, or provide accurate health insights.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <XCircle className="w-6 h-6 text-red-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-red-900 mb-2">Healthcare Decisions</h3>
                <p className="text-gray-700">
                  Should not be used for treatment decisions, medication choices, or health planning.
                </p>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-4">
              <h4 className="font-bold text-red-900 mb-2">❌ DO NOT Upload:</h4>
              <div className="text-red-800 text-sm space-y-1">
                <p>• Your real medical records</p>
                <p>• Personal health information</p>
                <p>• Actual X-rays or medical images</p>
                <p>• Genuine lab reports or test results</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">🔧 Technical Implementation</h2>
          </div>

          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Current Capabilities:</h3>
              <ul className="space-y-1 ml-4">
                <li>• Healthcare-themed UI/UX with medical-grade design</li>
                <li>• Complete health data visualization workflow</li>
                <li>• FHIR data structure demonstration</li>
                <li>• Temporary file processing (secure, no storage)</li>
                <li>• Professional medical dashboard</li>
                <li>• AI chat with formatted medical responses</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Technical Stack:</h3>
              <ul className="space-y-1 ml-4">
                <li>• Frontend: Next.js 14 with App Router, React, TypeScript</li>
                <li>• Styling: Tailwind CSS with healthcare-specific design system</li>
                <li>• Database: NEON PostgreSQL (configured for production)</li>
                <li>• Deployment: Vercel with optimized healthcare app settings</li>
                <li>• Security: Healthcare-grade security considerations</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4">
              <h4 className="font-bold text-yellow-900 mb-2">⚠️ Missing for Medical Use:</h4>
              <ul className="text-yellow-800 text-sm space-y-1 ml-4">
                <li>• Real AI medical analysis</li>
                <li>• HIPAA compliance certification</li>
                <li>• Clinical validation</li>
                <li>• Medical professional oversight</li>
                <li>• FDA approval</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Developer Info */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Heart className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">👨‍💻 About the Developer</h2>
          </div>

          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Manohar Shasappa</strong> - Full Stack Developer<br/>
              Email: sappamanoharsha@gmail.com
            </p>

            <p>
              This project demonstrates proficiency in healthcare technology development, modern web development,
              and understanding of medical data standards. It showcases the ability to build industry-specific
              applications with professional quality, security awareness, and compliance considerations.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
              <p className="text-gray-800">
                <strong>Purpose:</strong> Healthcare technology portfolio demonstration, educational showcase
                for medical software development, and technical proof-of-concept for professional healthcare
                interface design.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-600">
          <h3 className="font-bold text-gray-900 mb-3">📄 Legal Disclaimer</h3>
          <p className="leading-relaxed">
            This software is provided "as is" for demonstration and educational purposes only. The developer makes no
            representations or warranties about the suitability of this software for medical use.
            Users assume full responsibility for any use of this application. This is not a medical
            device and has not been approved by the FDA or any other regulatory body.
            Always consult qualified healthcare professionals for medical advice, diagnosis, or treatment.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/upload"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
          >
            Try Healthcare Demo Interface
          </Link>
          <p className="text-sm text-gray-600 mt-2">
            Experience professional healthcare application design
          </p>
        </div>
      </div>
    </div>
  )
}