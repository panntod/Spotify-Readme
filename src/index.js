import 'dotenv/config'
import express from 'express'

import { generateSpotifyCard, generateSpotifyCardData } from './lib/service.js'
import { getCurrentPlayingTrack } from './lib/spotify.js'

const app = express()

app.get('/api', async (_, res) => {
  try {
    const { body } = await getCurrentPlayingTrack()
    res.status(200).json(body)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get('/', async (_, res) => {
  try {
    const data = await generateSpotifyCardData()

    res.setHeader('Content-Type', 'image/svg+xml')
    res.status(200).send(generateSpotifyCard(data))
  } catch (error) {
    res.status(500).send('Failed to generate Spotify card.')
  }
})

if (process.env.NODE_ENV !== 'production') {
  const baseUrl = process.env.BASE_URL

  app.listen(3000, () => {
    console.log(`Server running at ${baseUrl}`)
  })
}

export default app
