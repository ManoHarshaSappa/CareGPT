import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const healthData = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      services: {
        database: 'not_configured', // Will be updated when NEON is configured
        ai_service: 'not_configured', // Will be updated when OpenAI is configured
      },
      author: {
        name: 'Manohar Shasappa',
        email: 'sappamanoharsha@gmail.com',
        project: 'CareGPT Web - Original AI Health Records Assistant'
      },
    }

    // Check if environment variables are configured
    if (process.env.DATABASE_URL) {
      healthData.services.database = 'configured'
    }

    if (process.env.OPENAI_API_KEY) {
      healthData.services.ai_service = 'configured'
    }

    return NextResponse.json(healthData, {
      status: 200,
      headers: {
        'Cache-Control': 'no-cache',
        'X-Health-Check': 'caregpt-web',
        'X-Author': 'Manohar Shasappa',
      },
    })
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error',
        author: {
          name: 'Manohar Shasappa',
          email: 'sappamanoharsha@gmail.com',
          project: 'CareGPT Web - AI Health Records Assistant'
        },
      },
      { status: 500 }
    )
  }
}

export async function HEAD() {
  // Simple HEAD request for load balancer health checks
  return new Response(null, {
    status: 200,
    headers: {
      'X-Health-Check': 'caregpt-web',
      'X-Author': 'Manohar Shasappa',
    }
  })
}