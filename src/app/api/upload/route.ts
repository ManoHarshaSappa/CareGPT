import { NextRequest, NextResponse } from 'next/server'
import { writeFile, unlink } from 'fs/promises'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const files = formData.getAll('files') as File[]

    if (!files || files.length === 0) {
      return NextResponse.json({ error: 'No files provided' }, { status: 400 })
    }

    const processedFiles = []

    for (const file of files) {
      // Create temporary file path
      const tempDir = path.join(process.cwd(), 'temp')
      const tempFilePath = path.join(tempDir, `${Date.now()}_${file.name}`)

      // Save file temporarily
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      await writeFile(tempFilePath, buffer)

      // Process the file (your logic here)
      const processedData = {
        name: file.name,
        size: file.size,
        type: file.type,
        processed: true,
        timestamp: new Date().toISOString()
      }

      processedFiles.push(processedData)

      // IMPORTANT: Delete the temporary file immediately after processing
      // Files are NOT saved to database - only temporary processing
      try {
        await unlink(tempFilePath)
        console.log(`Temporary file deleted: ${tempFilePath}`)
      } catch (deleteError) {
        console.warn(`Could not delete temp file: ${tempFilePath}`, deleteError)
      }
    }

    return NextResponse.json({
      success: true,
      files: processedFiles,
      message: 'Files processed successfully (temporary processing only - no data stored)'
    })

  } catch (error) {
    console.error('Upload processing error:', error)
    return NextResponse.json(
      { error: 'Failed to process files' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'CareGPT Upload API - Temporary file processing only',
    note: 'Files are processed temporarily and immediately deleted. No data is stored in database.',
    author: 'Manohar Shasappa (sappamanoharsha@gmail.com)'
  })
}