import 'dotenv/config'
import express from 'express'

import { generateDefaultLayout } from './layout/default.js'
import { getCurrentPlayingTrack } from './lib/spotify.js'
import { generateSpotifyCard, generateSpotifyCardData } from './service/index.js'

const app = express()

app.get('/api', async (_, res) => {
  try {
    const { body } = await getCurrentPlayingTrack()
    res.status(200).json(body)
  } catch (error) {
    console.error('Error During Fetching Data: ', error)
    res.status(204).json({})
  }
})

app.get('/card', async (req, res) => {
  try {
    const options = req.query
    const data = await generateSpotifyCardData()

    res.setHeader('Content-Type', 'image/svg+xml')
    res.status(200).send(generateSpotifyCard(data, options))
  } catch (error) {
    console.error('Failed to generate Spotify card:', error)
    res.status(500).send('Failed to generate Spotify card.')
  }
})

app.get('/', async (_, res) => {
  try {
    const data = await generateSpotifyCardData()
    res.setHeader('Content-Type', 'image/svg+xml')
    res.status(200).send(generateDefaultLayout(data))
  } catch (error) {
    console.error('Error During Fetching Data: ', error)
    res.status(500).send('Error During Fetching Data')
  }
})

if (process.env.NODE_ENV !== 'production') {
  const baseUrl = process.env.BASE_URL

  app.listen(3000, () => {
    console.log(`Server running at ${baseUrl}`)
  })
}

export default app
