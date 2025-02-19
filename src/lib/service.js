import { readFileSync } from 'fs'
import path from 'path'

import { createDefaultData, processTrackData } from '../utils/index.js'
import { getCurrentPlayingTrack, spotifyRefreshAccessToken } from './spotify.js'

function generateSpotifyCard({ externalLink, cardImg, cardTitle, cardSubtitle, playing }) {
  const assetsPath = path.resolve('assets')
  const logoSvg = readFileSync(path.join(assetsPath, 'spotify-logo.svg'), { encoding: 'base64' })

  return `
  <svg fill="none" viewBox="0 0 300 150" width="300" height="150" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <style>
          * { box-sizing: border-box; }
          .external-link { text-decoration: none; display: flex; width: 300px; height: 150px; border-radius: 8px; overflow: hidden; background-color: #222; transition: transform 0.3s; }
          .card { display: flex; width: 100%; height: 100%; }
          .card__img { flex: 0 0 50%; background-image: ${cardImg}; background-repeat: no-repeat; background-size: cover; border-top-left-radius: 8px; border-bottom-left-radius: 8px; }
          .card__body { flex: 0 0 50%; display: flex; position: relative; flex-direction: column; justify-content: center; padding: 12px; }
          .card__logo { width: 80px; height: 40px; object-fit: contain; position: absolute; top: 0; left: 50%; transform: translateX(-50%); }
          .card__title { font: 600 15px 'Segoe UI', Ubuntu, Sans-Serif; color: #fff; margin-bottom: 4px; }
          .card__subtitle { font: 600 10px 'Segoe UI', Ubuntu, Sans-Serif; color: #fff; }
          .overlay { position: absolute; right: 0; top: 0; left: 0; bottom: 0; background-image: linear-gradient(transparent 0%, rgba(30, 215, 96, 0.1) 50%); background-size: 150px 2px; pointer-events: none; }
        </style>
        <a class="external-link" href="${externalLink}" target="_blank">
          <div class="card">
            <div class="card__img"></div>
            <div class="card__body">
              <img class="card__logo" src="data:image/svg+xml;base64,${logoSvg}" />
              <div class="card__title">${cardTitle}</div>
              <div class="card__subtitle">${cardSubtitle}</div>
            </div>
            <div class="${playing ? '' : 'overlay'}"></div>
          </div>
        </a>
      </div>
    </foreignObject>
  </svg>`
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
