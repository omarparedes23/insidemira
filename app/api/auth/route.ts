import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const clientId = process.env.GITHUB_CLIENT_ID
  if (!clientId) {
    return NextResponse.json({ error: 'GITHUB_CLIENT_ID not configured' }, { status: 500 })
  }

  const { searchParams } = new URL(request.url)
  const scope = searchParams.get('scope') ?? 'repo,user'

  const callbackUrl = new URL('/api/callback', request.url).toString()

  const githubOAuthUrl = new URL('https://github.com/login/oauth/authorize')
  githubOAuthUrl.searchParams.set('client_id', clientId)
  githubOAuthUrl.searchParams.set('redirect_uri', callbackUrl)
  githubOAuthUrl.searchParams.set('scope', scope)

  return NextResponse.redirect(githubOAuthUrl.toString())
}
