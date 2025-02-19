import 'dotenv/config'
import { spotifyApi } from '../lib/spotify.js'

const args = process.argv.slice(2)
const code = args[0]

if (!code) {
  console.log(`
Provide the Spotify authorization code.
Usage example:

npm run get-refresh-token <code>

  `)
  process.exit(1)
}

export async function printRefreshToken() {
  try {
    const { body } = await spotifyApi.authorizationCodeGrant(code)

    spotifyApi.setAccessToken(body.access_token)
    spotifyApi.setRefreshToken(body.refresh_token)

    console.log(`
Your refresh token is:

${body.refresh_token}

Then paste the entire code pattern "code=".
    `)
    process.exit(0)
  } catch (error) {
    console.error('Error retrieving refresh token:', error)
    process.exit(1)
  }
}

printRefreshToken()
