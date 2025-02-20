import { generateChordLayout } from '../layout/chord.js'
import { generateDefaultLayout } from '../layout/default.js'
import { generateSpinLayout } from '../layout/spin.js'
import { getCurrentPlayingTrack, spotifyRefreshAccessToken } from '../lib/spotify.js'
import { createDefaultData, processTrackData } from '../utils/index.js'

function generateSpotifyCard(data, options = {}) {
  const { animation, direction } = options

  switch (animation) {
    case 'chord':
      return generateChordLayout(data, direction)
    case 'spin':
      return generateSpinLayout(data, direction)
    default:
      return generateDefaultLayout(data)
  }
}

async function generateSpotifyCardData() {
  const MAX_RETRIES = 3
  let attempts = 0

  // Fungsi utama untuk mengambil data
  async function fetchData() {
    try {
      await spotifyRefreshAccessToken()
      const currentPlayingTrack = await getCurrentPlayingTrack()

      if (!currentPlayingTrack?.body?.item) {
        return createDefaultData()
      }

      return processTrackData(currentPlayingTrack)
    } catch (error) {
      if (attempts < MAX_RETRIES) {
        attempts++
        console.warn(`Attempt ${attempts} failed. Retrying...`)
        return await fetchData()
      } else {
        console.error('Failed to fetch data after multiple attempts:', error)
        throw new Error('Failed to fetch data after multiple attempts.')
      }
    }
  }

  return await fetchData()
}

export { generateSpotifyCard, generateSpotifyCardData }
