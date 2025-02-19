import 'dotenv/config'
import { spotifyApi } from '../lib/spotify.js'

const scopes = ['user-read-currently-playing']
const state = 'user-read-playback-state'

export async function printAuthorizeURL() {
  try {
    const authorizeURL = spotifyApi.createAuthorizeURL(scopes, state)
    console.log(`
Your confirm link is:

${authorizeURL}

Then paste the entire link into your browser.
    `)
    process.exit(0)
  } catch (error) {
    console.error('Error generating authorization URL:', error)
    process.exit(1)
  }
}

printAuthorizeURL()
