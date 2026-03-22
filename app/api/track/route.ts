import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { label } = await request.json()
    console.log(`CTA clicked: ${label}`)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to track CTA click', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
