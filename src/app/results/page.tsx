'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  FileText,
  Heart,
  Activity,
  Pill,
  AlertTriangle,
  TrendingUp,
  MessageCircle,
  Download,
  Share
} from 'lucide-react'

export default function ResultsPage() {
  const [selectedTab, setSelectedTab] = useState('overview')

  // Mock processed health data
  const healthData = {
    patient: {
      name: "Michael Johnson",
      age: 39,
      gender: "Male",
      lastVisit: "2024-05-15"
    },
    summary: {
      totalRecords: 3,
      timeRange: "Last 6 months",
      lastUpdated: "2024-05-15"
    },
    vitals: [
      { name: "Blood Pressure", value: "142/89 mmHg", status: "elevated", trend: "up" },
      { name: "Cholesterol", value: "245 mg/dL", status: "high", trend: "up" },
      { name: "Glucose", value: "118 mg/dL", status: "elevated", trend: "stable" },
      { name: "BMI", value: "28.5", status: "overweight", trend: "up" }
    ],
    conditions: [
      { name: "Hypertension", severity: "moderate", diagnosed: "2024-02-15" },
      { name: "High Cholesterol", severity: "mild", diagnosed: "2024-05-10" }
    ],
    medications: [
      { name: "Lisinopril 10mg", purpose: "Blood pressure control", frequency: "Daily" },
      { name: "Atorvastatin 20mg", purpose: "Cholesterol management", frequency: "Daily" }
    ],
    insights: [
      {
        type: "warning",
        title: "Blood Pressure Trending Up",
        description: "Your blood pressure has increased over the last 3 months. Consider lifestyle changes and medication adjustment."
      },
      {
        type: "info",
        title: "Cholesterol Management",
        description: "Recent lab results show cholesterol levels above optimal range. Current medication may need adjustment."
      },
      {
        type: "success",
        title: "Glucose Control",
        description: "Blood glucose levels are within acceptable range with current management."
      }
    ]
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'text-green-600 bg-green-50 border-green-200'
      case 'elevated': return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'high': return 'text-red-600 bg-red-50 border-red-200'
      case 'overweight': return 'text-orange-600 bg-orange-50 border-orange-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-600" />
      case 'info': return <Activity className="w-5 h-5 text-blue-600" />
      case 'success': return <Heart className="w-5 h-5 text-green-600" />
      default: return <FileText className="w-5 h-5 text-gray-600" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/upload"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Upload
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Health Analysis Results</h1>
            <div className="flex items-center space-x-3">
              <Link
                href="/chat"
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Ask AI Questions
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Patient Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{healthData.patient.name}</h2>
              <p className="text-gray-600">
                {healthData.patient.age} years old • {healthData.patient.gender} • Last visit: {healthData.patient.lastVisit}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">{healthData.summary.totalRecords} files processed</p>
              <p className="text-sm text-gray-600">{healthData.summary.timeRange}</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {[
                { id: 'overview', name: 'Overview', icon: Activity },
                { id: 'vitals', name: 'Vital Signs', icon: Heart },
                { id: 'conditions', name: 'Conditions', icon: AlertTriangle },
                { id: 'medications', name: 'Medications', icon: Pill }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                    selectedTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {selectedTab === 'overview' && (
              <div className="space-y-6">
                {/* AI Insights */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Health Insights</h3>
                  <div className="space-y-3">
                    {healthData.insights.map((insight, index) => (
                      <div key={index} className="flex items-start p-4 border border-gray-200 rounded-lg">
                        {getInsightIcon(insight.type)}
                        <div className="ml-3">
                          <h4 className="font-medium text-gray-900">{insight.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Overview</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {healthData.vitals.map((vital, index) => (
                      <div key={index} className={`p-4 rounded-lg border ${getStatusColor(vital.status)}`}>
                        <h4 className="font-medium">{vital.name}</h4>
                        <p className="text-lg font-bold mt-1">{vital.value}</p>
                        <div className="flex items-center mt-2 text-sm">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {vital.trend}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'vitals' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Vital Signs & Lab Results</h3>
                <div className="space-y-4">
                  {healthData.vitals.map((vital, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{vital.name}</h4>
                        <p className="text-sm text-gray-600">Last measured: 2024-05-10</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">{vital.value}</p>
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getStatusColor(vital.status)}`}>
                          {vital.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'conditions' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Medical Conditions</h3>
                <div className="space-y-4">
                  {healthData.conditions.map((condition, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{condition.name}</h4>
                        <p className="text-sm text-gray-600">Diagnosed: {condition.diagnosed}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        condition.severity === 'mild' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {condition.severity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'medications' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Medications</h3>
                <div className="space-y-4">
                  {healthData.medications.map((med, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">{med.name}</h4>
                        <span className="text-sm text-gray-600">{med.frequency}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{med.purpose}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <Link
            href="/chat"
            className="flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Ask Questions About Your Health
          </Link>
          <button className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-5 h-5 mr-2" />
            Download Report
          </button>
        </div>
      </div>
    </div>
  )
}