import { NextRequest, NextResponse } from 'next/server'

const DECAP_MESSAGE_TEMPLATE = (status: string, content: object) => {
  const message = `authorization:github:${status}:${JSON.stringify(content)}`
  return `<!DOCTYPE html><html><body><script>
    (function() {
      var message = ${JSON.stringify(message)};

      function receiveMessage(e) {
        console.log("[oauth-callback] handshake received, sending token");
        window.opener.postMessage(message, e.origin);
        window.removeEventListener("message", receiveMessage, false);
        window.close();
      }

      window.addEventListener("message", receiveMessage, false);
      console.log("[oauth-callback] sending authorizing signal");
      window.opener.postMessage("authorizing:github", "*");
    })();
  <\/script></body></html>`
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')

  if (error || !code) {
    const html = DECAP_MESSAGE_TEMPLATE('error', {
      message: error ?? 'No authorization code received',
    })
    return new NextResponse(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
  }

  const clientId = process.env.GITHUB_CLIENT_ID
  const clientSecret = process.env.GITHUB_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    const html = DECAP_MESSAGE_TEMPLATE('error', { message: 'OAuth credentials not configured' })
    return new NextResponse(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
  }

  const redirectUri = new URL('/api/callback', request.url).toString()

  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri,
    }),
  })

  const tokenData = await tokenResponse.json()
  console.log('[oauth-callback] GitHub token response:', JSON.stringify(tokenData))

  if (tokenData.error || !tokenData.access_token) {
    const html = DECAP_MESSAGE_TEMPLATE('error', {
      message: tokenData.error_description ?? 'Failed to obtain access token',
    })
    return new NextResponse(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
  }

  const html = DECAP_MESSAGE_TEMPLATE('success', {
    token: tokenData.access_token,
    provider: 'github',
  })
  return new NextResponse(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
}
