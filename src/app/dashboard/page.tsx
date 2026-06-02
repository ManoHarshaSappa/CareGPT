'use client'

import React from 'react'
import Link from 'next/link'
import {
  Upload,
  MessageCircle,
  FileText,
  Activity,
  Users,
  TrendingUp,
  Calendar,
  Clock,
  Plus,
  BarChart3
} from 'lucide-react'

export default function DashboardPage() {
  // Mock data for dashboard
  const recentUploads = [
    { name: "lab_results_michael_johnson.pdf", date: "2024-05-15", size: "5.1 KB" },
    { name: "michael_johnson_fhir.json", date: "2024-05-15", size: "8.06 KB" },
    { name: "visit_summary_michael_johnson.pdf", date: "2024-05-15", size: "6.84 KB" }
  ]

  const quickStats = [
    { label: "Files Processed", value: "12", icon: FileText, color: "blue" },
    { label: "AI Conversations", value: "8", icon: MessageCircle, color: "green" },
    { label: "Health Records", value: "5", icon: Activity, color: "purple" },
    { label: "This Month", value: "3", icon: Calendar, color: "orange" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Health Dashboard</h1>
          <p className="text-gray-600">
            Welcome back! Here's an overview of your health data analysis activity.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => {
            const IconComponent = stat.icon
            const colorClasses = {
              blue: "bg-blue-500",
              green: "bg-green-500",
              purple: "bg-purple-500",
              orange: "bg-orange-500"
            }

            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${colorClasses[stat.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Link
            href="/upload"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                <Upload className="w-6 h-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Upload Records</h3>
                <p className="text-sm text-gray-600">Add new health documents</p>
              </div>
            </div>
            <p className="text-gray-700">
              Upload and analyze new health records, lab results, or medical documents.
            </p>
          </Link>

          <Link
            href="/chat"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">AI Assistant</h3>
                <p className="text-sm text-gray-600">Ask health questions</p>
              </div>
            </div>
            <p className="text-gray-700">
              Get insights and ask questions about your uploaded health data.
            </p>
          </Link>

          <Link
            href="/results"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">View Results</h3>
                <p className="text-sm text-gray-600">Health analysis</p>
              </div>
            </div>
            <p className="text-gray-700">
              Review detailed analysis of your processed health records.
            </p>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Recent Uploads */}
          <div className="bg-white rounded-xl shadow-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Recent Uploads</h3>
                <Link href="/upload" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  Upload more
                </Link>
              </div>
            </div>
            <div className="p-6">
              {recentUploads.length > 0 ? (
                <div className="space-y-4">
                  {recentUploads.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <FileText className="w-8 h-8 text-gray-400 mr-3" />
                        <div>
                          <p className="font-medium text-gray-900">{file.name}</p>
                          <p className="text-sm text-gray-500">{file.size} • {file.date}</p>
                        </div>
                      </div>
                      <Link
                        href="/results"
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                      >
                        View
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No files uploaded yet</p>
                  <Link
                    href="/upload"
                    className="inline-flex items-center mt-2 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Upload your first file
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Health Insights */}
          <div className="bg-white rounded-xl shadow-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Health Insights</h3>
                <Link href="/chat" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  Ask AI
                </Link>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-900">Blood Pressure Trend</h4>
                      <p className="text-sm text-yellow-800 mt-1">
                        Your BP readings show an upward trend. Consider lifestyle changes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start">
                    <Activity className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Cholesterol Management</h4>
                      <p className="text-sm text-blue-800 mt-1">
                        Recent lab results available for review and analysis.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Link
                    href="/chat"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Ask more questions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold text-sm">ℹ</span>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Demo Dashboard</h4>
              <p className="text-blue-800 text-sm">
                This dashboard shows sample data for demonstration purposes.
                Upload sample files to see the interface in action.
                <Link href="/about" className="font-medium underline hover:no-underline ml-1">
                  Learn more about this demo
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}