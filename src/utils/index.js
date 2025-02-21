import { spotifyIcon, spotifyLogo } from '../config/index.js'

// Fungsi untuk membuat objek data default
function createDefaultData() {
  return {
    spotifyLogo: 'data:image/svg+xml;base64,' + spotifyLogo,
    spotifyIcon: 'data:image/svg+xml;base64,' + spotifyIcon,
    playingImg: null,
    externalLink: '#',
    cardImg: 'radial-gradient(#222922, #000500)',
    cardTitle: 'No Tracks',
    cardSubtitle: 'None',
    playing: false,
    playlist: null,
    notFound: true,
  }
}

// Fungsi untuk memproses data track yang sedang diputar
async function processTrackData(currentPlayingTrack) {
  const track = currentPlayingTrack.body.item
  const isPlaying = currentPlayingTrack.body.is_playing
  const context = currentPlayingTrack.body.context

  const data = {
    spotifyLogo: 'data:image/svg+xml;base64,' + spotifyLogo,
    spotifyIcon: 'data:image/svg+xml;base64,' + spotifyIcon,
    externalLink: track.external_urls?.spotify || '#',
    cardTitle: track.name,
    cardSubtitle: track.artists.map((artist) => artist.name).join(', '),
    playing: isPlaying,
    notFound: false,
    playlist: context
      ? {
          link: context.external_urls?.spotify || '#',
          type: context.type,
        }
      : null,
  }

  const imgUrl = track.album.images.find((image) => image.height === 300)?.url

  if (imgUrl) {
    try {
      const base64Image = await getImageBuffer(imgUrl)
      data.cardImg = `url(data:image/png;base64,${base64Image})`
      data.playingImg = 'data:image/png;base64,' + base64Image
    } catch (error) {
      console.error('Failed to fetch image:', error)
    }
  }

  return data
}

async function getImageBuffer(url) {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.statusText}`)
  }

  const buffer = await response.arrayBuffer()
  return Buffer.from(buffer).toString('base64')
}

function isValidHexColor(str) {
  return /^#[0-9A-F]{6}$/i.test(str)
}

function isVerticalLayout(direction) {
  return direction === 'vertical'
}

function isValidAlignment(textAlign) {
  return ['center', 'start', 'end'].includes(textAlign)
}

export {
  createDefaultData,
  getImageBuffer,
  isValidAlignment,
  isValidHexColor,
  isVerticalLayout,
  processTrackData,
}
