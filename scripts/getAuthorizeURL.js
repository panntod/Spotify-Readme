require('dotenv').config()
const SpotifyWebApi = require('spotify-web-api-node')

const scopes = ['user-read-currently-playing']
const state = 'user-read-playback-state'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.YOUR_CLIENT_ID,
  clientSecret: process.env.YOUR_CLIENT_SECRET,
  redirectUri: process.env.YOUR_REDIRECT_URI,
})

async function printAuthorizeURL() {
  try {
    const authorizeURL = spotifyApi.createAuthorizeURL(scopes, state)
    console.log('Your confirm link is: ')
    console.log('')
    console.log(authorizeURL)
    console.log('')
    console.log('then paste the entire link into your browser.')
    process.exit(0)
  } catch (error) {
    console.log(error)
  }
}

printAuthorizeURL()
