import 'dotenv/config'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.YOUR_CLIENT_ID,
  clientSecret: process.env.YOUR_CLIENT_SECRET,
  redirectUri: process.env.YOUR_REDIRECT_URI,
  refreshToken: process.env.YOUR_REFRESH_TOKEN,
})

async function spotifyRefreshAccessToken() {
  try {
    const { body } = await spotifyApi.refreshAccessToken()
    spotifyApi.setAccessToken(body.access_token)
    return body.access_token
  } catch (error) {
    console.error('Error refreshing access token:', error)
    return null
  }
}

async function getCurrentPlayingTrack() {
  try {
    if (!spotifyApi.getAccessToken()) {
      const newToken = await spotifyRefreshAccessToken()

      if (!newToken) throw new Error('Failed to refresh access token')

      spotifyApi.setAccessToken(newToken)
    }

    const data = await spotifyApi.getMyCurrentPlayingTrack()
    return data
  } catch (error) {
    console.error('Error fetching current playing track:', error)
    return null
  }
}

export { getCurrentPlayingTrack, spotifyApi, spotifyRefreshAccessToken }
