import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('CTA tracked:', body.action);
    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response('Error', { status: 500 });
  }
}
