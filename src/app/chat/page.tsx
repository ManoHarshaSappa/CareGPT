'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Send,
  Bot,
  User,
  Lightbulb,
  FileText,
  Activity,
  MessageCircle
} from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'ai'
  content: string | FormattedContent
  timestamp: Date
}

interface FormattedContent {
  type: 'formatted'
  content: Array<{
    type: 'text' | 'heading' | 'list'
    content?: string
    items?: string[]
  }>
}

// Component to render formatted AI responses
const FormattedMessage = ({ content }: { content: FormattedContent }) => {
  return (
    <div className="space-y-3">
      {content.content.map((section, index) => {
        switch (section.type) {
          case 'heading':
            return (
              <h3 key={index} className="text-lg font-bold text-gray-800 mb-2 mt-4">
                {section.content}
              </h3>
            )
          case 'list':
            return (
              <ul key={index} className="space-y-2 ml-4">
                {section.items?.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            )
          case 'text':
          default:
            return (
              <p key={index} className="text-gray-700 leading-relaxed">
                {section.content}
              </p>
            )
        }
      })}
    </div>
  )
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: `Hello! I'm your CareGPT assistant. I've analyzed your health records for Michael Johnson and I'm ready to help you understand your medical data. You can ask me questions about:

• Your lab results and vital signs
• Medical conditions and their implications
• Medication effects and interactions
• Health trends and recommendations

What would you like to know about your health?`,
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const suggestedQuestions = [
    "What do my cholesterol levels mean?",
    "Should I be concerned about my blood pressure?",
    "What lifestyle changes can help my condition?",
    "Are there any interactions with my medications?",
    "How have my health metrics changed over time?"
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const simulateAIResponse = (userMessage: string): any => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes('cholesterol')) {
      return {
        type: 'formatted',
        content: [
          {
            type: 'text',
            content: 'Based on your recent lab results, your total cholesterol level is 245 mg/dL, which is above the recommended level of <200 mg/dL. This puts you at moderate risk for cardiovascular disease.'
          },
          {
            type: 'heading',
            content: 'Key Points:'
          },
          {
            type: 'list',
            items: [
              'Your LDL ("bad") cholesterol is likely elevated',
              'You\'re currently taking Atorvastatin 20mg daily, which is appropriate',
              'With medication and lifestyle changes, this can be improved'
            ]
          },
          {
            type: 'heading',
            content: 'Recommendations:'
          },
          {
            type: 'list',
            items: [
              'Continue taking your prescribed statin medication',
              'Reduce saturated fat intake (limit red meat, full-fat dairy)',
              'Increase fiber intake (oats, beans, fruits)',
              'Regular exercise can help raise HDL cholesterol',
              'Follow up with your doctor in 6-8 weeks to recheck levels'
            ]
          },
          {
            type: 'text',
            content: 'Would you like specific dietary recommendations or have questions about your medication?'
          }
        ]
      }
    }

    if (lowerMessage.includes('blood pressure')) {
      return {
        type: 'formatted',
        content: [
          {
            type: 'text',
            content: 'Your recent blood pressure reading of 142/89 mmHg indicates Stage 1 hypertension. This is elevated but manageable with proper treatment.'
          },
          {
            type: 'heading',
            content: 'What this means:'
          },
          {
            type: 'list',
            items: [
              'Systolic (top number): 142 is elevated (normal <120)',
              'Diastolic (bottom number): 89 is high normal (normal <80)',
              'You\'re already on Lisinopril 10mg daily, which is helping'
            ]
          },
          {
            type: 'heading',
            content: 'Current trends:'
          },
          {
            type: 'list',
            items: [
              'Your BP has been trending upward over the last 3 months',
              'Medication may need adjustment'
            ]
          },
          {
            type: 'heading',
            content: 'Immediate actions:'
          },
          {
            type: 'list',
            items: [
              'Monitor your BP at home if possible',
              'Reduce sodium intake (<2,300mg daily)',
              'Maintain regular physical activity',
              'Manage stress through relaxation techniques',
              'Limit alcohol consumption'
            ]
          },
          {
            type: 'text',
            content: 'Your doctor may consider increasing your Lisinopril dose or adding another medication. Schedule a follow-up appointment within 2-4 weeks.'
          }
        ]
      }
    }

    if (lowerMessage.includes('lifestyle') || lowerMessage.includes('changes')) {
      return {
        type: 'formatted',
        content: [
          {
            type: 'text',
            content: 'Based on your health profile (hypertension, high cholesterol), here are evidence-based lifestyle modifications that can significantly improve your health:'
          },
          {
            type: 'heading',
            content: 'Diet Changes:'
          },
          {
            type: 'list',
            items: [
              'Follow DASH diet principles',
              'Reduce sodium to <2,300mg daily (ideally 1,500mg)',
              'Increase fruits, vegetables, and whole grains',
              'Choose lean proteins (fish, poultry, legumes)',
              'Limit saturated fats and processed foods'
            ]
          },
          {
            type: 'heading',
            content: 'Physical Activity:'
          },
          {
            type: 'list',
            items: [
              'Aim for 150 minutes moderate exercise weekly',
              'Include both cardio and strength training',
              'Start gradually if you\'re not currently active',
              'Walking, swimming, cycling are excellent options'
            ]
          },
          {
            type: 'heading',
            content: 'Stress Management:'
          },
          {
            type: 'list',
            items: [
              'Practice deep breathing or meditation',
              'Ensure adequate sleep (7-9 hours nightly)',
              'Consider stress-reduction techniques like yoga'
            ]
          },
          {
            type: 'heading',
            content: 'Monitoring:'
          },
          {
            type: 'list',
            items: [
              'Track blood pressure regularly',
              'Monitor weight weekly',
              'Keep a food diary initially'
            ]
          },
          {
            type: 'text',
            content: 'These changes can reduce your cardiovascular risk by 20-30% when combined with your current medications. Start with small, sustainable changes rather than dramatic overhauls.'
          }
        ]
      }
    }

    if (lowerMessage.includes('medication') || lowerMessage.includes('drug')) {
      return {
        type: 'formatted',
        content: [
          {
            type: 'text',
            content: 'You\'re currently taking two important medications for cardiovascular health:'
          },
          {
            type: 'heading',
            content: 'Lisinopril 10mg (Daily)'
          },
          {
            type: 'list',
            items: [
              'ACE inhibitor for blood pressure control',
              'Helps protect kidneys and heart',
              'Common side effects: dry cough (5-10% of patients), dizziness',
              'Take at same time daily, preferably evening'
            ]
          },
          {
            type: 'heading',
            content: 'Atorvastatin 20mg (Daily)'
          },
          {
            type: 'list',
            items: [
              'Statin for cholesterol management',
              'Reduces heart attack and stroke risk by 25-35%',
              'Take in evening (cholesterol production peaks at night)',
              'Avoid grapefruit juice (can increase drug levels)'
            ]
          },
          {
            type: 'heading',
            content: 'Important Notes:'
          },
          {
            type: 'list',
            items: [
              'No significant interactions between these medications',
              'Don\'t stop either medication without consulting your doctor',
              'Report muscle pain, weakness, or persistent cough',
              'Annual liver function tests with atorvastatin',
              'Potassium levels should be monitored with lisinopril'
            ]
          },
          {
            type: 'text',
            content: 'Both medications work together to reduce your overall cardiovascular risk. Compliance is crucial - missing doses reduces effectiveness significantly.'
          }
        ]
      }
    }

    // Generic response
    return {
      type: 'formatted',
      content: [
        {
          type: 'text',
          content: `I understand your question about "${userMessage}". Based on your health records, I can provide some insights, but please remember that this is for informational purposes only and doesn't replace professional medical advice.`
        },
        {
          type: 'heading',
          content: 'Your current health profile shows:'
        },
        {
          type: 'list',
          items: [
            'Hypertension being managed with Lisinopril',
            'Elevated cholesterol on Atorvastatin therapy',
            'Recent labs showing good glucose control',
            'Overall cardiovascular risk factors being addressed'
          ]
        },
        {
          type: 'text',
          content: 'For specific medical decisions, always consult with your healthcare provider. Is there a particular aspect of your health data you\'d like me to explain in more detail?'
        }
      ]
    }
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: simulateAIResponse(inputMessage),
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500 + Math.random() * 1500)
  }

  const handleSuggestedQuestion = (question: string) => {
    setInputMessage(question)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/results"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Results
            </Link>
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-900">AI Health Assistant</h1>
              <p className="text-sm text-gray-600">Ask questions about your health data</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-4 py-6">
        {/* Messages Area */}
        <div className="flex-1 bg-white rounded-xl shadow-lg mb-4 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.type === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.type === 'ai' && (
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary-600" />
                  </div>
                )}

                <div
                  className={`max-w-2xl p-4 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.type === 'ai' && typeof message.content === 'object' && message.content.type === 'formatted' ? (
                    <FormattedMessage content={message.content} />
                  ) : (
                    <div className="whitespace-pre-wrap">{String(message.content)}</div>
                  )}
                  <div className={`text-xs mt-3 ${
                    message.type === 'user' ? 'text-primary-200' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>

                {message.type === 'user' && (
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary-600" />
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="flex items-center mb-3">
                <Lightbulb className="w-4 h-4 text-yellow-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Suggested questions:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="text-sm bg-white border border-gray-300 rounded-full px-3 py-1 hover:bg-gray-100 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="bg-white rounded-xl shadow-lg p-4">
          <div className="flex items-end space-x-3">
            <div className="flex-1">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about your health data..."
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                rows={3}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="bg-primary-600 text-white p-3 rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-3 text-xs text-gray-500">
            💡 This AI assistant analyzes your uploaded health records. For medical emergencies, contact your healthcare provider immediately.
          </div>
        </div>
      </div>
    </div>
  )
}