import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, userid } = body;

    const workflowId = process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID;
    const apiKey = process.env.VAPI_SERVER_API_KEY;

    if (!workflowId || !apiKey) {
      return NextResponse.json({ error: 'Missing Vapi config' }, { status: 500 });
    }

    const response = await fetch(`https://api.vapi.ai/workflows/${workflowId}/start`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        variables: {
          username,
          userid,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Vapi error:', data);
      return NextResponse.json({ error: data }, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
