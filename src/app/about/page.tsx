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
  Heart
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
                <h3 className="text-lg font-bold text-gray-900 mb-2">File Management Demo</h3>
                <p className="text-gray-700">
                  Demonstrates file upload, processing workflows, and healthcare data visualization concepts.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Users className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Educational Purpose</h3>
                <p className="text-gray-700">
                  Learn about healthcare technology, FHIR standards, and medical data presentation.
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
                <li>• File upload and management interface</li>
                <li>• Healthcare-themed UI/UX design</li>
                <li>• Pre-written educational responses</li>
                <li>• FHIR data structure demonstration</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Technical Stack:</h3>
              <ul className="space-y-1 ml-4">
                <li>• Frontend: Next.js 14, React, TypeScript</li>
                <li>• Styling: Tailwind CSS</li>
                <li>• Database: NEON PostgreSQL (configured)</li>
                <li>• Deployment: Vercel</li>
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
              This project demonstrates proficiency in modern web development, healthcare UI/UX design,
              and understanding of medical data standards. It's built as a portfolio piece to showcase
              technical skills and design capabilities.
            </p>

            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>Purpose:</strong> Portfolio demonstration, educational showcase,
                technical proof-of-concept for healthcare interface design.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-600">
          <h3 className="font-bold text-gray-900 mb-3">📄 Legal Disclaimer</h3>
          <p className="leading-relaxed">
            This software is provided "as is" for demonstration purposes only. The developer makes no
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
            Try Demo Interface
          </Link>
          <p className="text-sm text-gray-600 mt-2">
            Upload sample files to explore the interface
          </p>
        </div>
      </div>
    </div>
  )
}