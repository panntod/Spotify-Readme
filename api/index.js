require('dotenv').config()
const { readFileSync } = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const SpotifyWebApi = require('spotify-web-api-node')
const axios = require('axios')
const baseUrl = process.env.BASE_URL

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.YOUR_CLIENT_ID,
  clientSecret: process.env.YOUR_CLIENT_SECRET,
  redirectUri: process.env.YOUR_REDIRECT_URI,
  refreshToken: process.env.YOUR_REFRESH_TOKEN,
})

app.get('/api', async (req, res) => {
  try {
    const assetsPath = path.resolve(__dirname, '../assets')
    const logoSvg = readFileSync(path.join(assetsPath, 'spotify-logo.svg'), {
      encoding: 'base64',
    })

    const data = await spotifyApi.refreshAccessToken()
    spotifyApi.setAccessToken(data.body['access_token'])
    const currentPlayingTrack = await spotifyApi.getMyCurrentPlayingTrack()

    let externalLink = '#'
    let cardImg = 'radial-gradient(#222922, #000500)'
    let cardTitle = 'No tracks'
    let cardSubtitle = ''
    let cardTitleAnimation = 'noise 2s linear infinite'
    let playing = false

    if (Object.keys(currentPlayingTrack.body).length > 0) {
      if (currentPlayingTrack.body.item) {
        externalLink = currentPlayingTrack.body.item.album.external_urls.spotify
        const imgUrl = currentPlayingTrack.body.item.album.images.filter(
          (image) => image.height === 300
        )[0].url

        const response = await axios.get(imgUrl, {
          responseType: 'arraybuffer',
        })

        cardImg = `url(data:image/png;base64,${Buffer.from(response.data, 'binary').toString(
          'base64'
        )})`
        cardTitle = currentPlayingTrack.body.item.name
        cardSubtitle = currentPlayingTrack.body.item.artists.map((artist) => artist.name).join(', ')
        cardTitleAnimation = ''
        playing = true
      }
    }

    res.setHeader('Content-Type', 'image/svg+xml')
    res.send(
      `<svg fill="none" viewBox="0 0 300 150" width="300" height="150" xmlns="http://www.w3.org/2000/svg">
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <style>
            * {
              box-sizing: border-box;
            }
    
            .external-link {
              text-decoration: none;
              display: flex;
              width: 300px;
              height: 150px;
              border-radius: 8px;
              overflow: hidden;
              background-color: #222;
              transition: transform 0.3s;
            }
    
            .card {
              display: flex;
              width: 100%;
              height: 100%;
            }
    
            .card__img {
              flex: 0 0 50%;
              background-image: ${cardImg};
              background-repeat: no-repeat;
              background-size: cover;
              border-top-left-radius: 8px;
              border-bottom-left-radius: 8px;
            }
    
            .card__body {
              flex: 0 0 50%;
              display: flex;
              position: relative;
              flex-direction: column;
              justify-content: center;
              padding: 12px;
            }
    
            .card__logo {
              width: 80px;
              height: 40px;
              object-fit: contain;
              position: absolute;
              top:0;
              left: 50%;
              transform: translateX(-50%);
            }
    
            .card__title {
              font: 600 16px 'Segoe UI', Ubuntu, Sans-Serif;
              color: #fff;
              overflow: hidden;
              white-space: wrap;
              animation: ${cardTitleAnimation};
              text-overflow: ellipsis;
              margin-bottom: 4px;
            }
            
            .card__subtitle {
              font: 600 12px 'Segoe UI', Ubuntu, Sans-Serif;
              color: #fff;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
    
            .overlay {
              position: absolute;
              right: 0;
              top: 0;
              left: 0;
              bottom: 0;
              background-image: linear-gradient(transparent 0%, rgba(30, 215, 96, 0.1) 50%);
              background-size: 150px 2px;
              content: '';
              pointer-events: none;
            }
    
            @keyframes noise {
              0%, 3%, 5%, 42%, 44%, 63%, 65%, 92%, 94%, 100% {
                opacity: 1;
                transform: scaleY(1);
              }
              4.3% {
                opacity: 1;
                transform: scaleY(4);
              }
              43% {
                opacity: 1;
                transform: scaleX(10) rotate(60deg);
              }
              64.3% {
                opacity: 1;
                transform: scaleY(4);
              }
              93% {
                opacity: 1;
                transform: scaleX(20) rotate(-60deg);
              }
            }
          </style>
          <a class="external-link" href="${externalLink}" target="_blank">
            <div class="card">
              <div class="card__img"></div>
              <div class="card__body">
                <img class="card__logo" src="data:image/svg+xml;base64,${logoSvg}" />
                <div class="card__title"><![CDATA[${cardTitle}]]></div>
                <div class="card__subtitle"><![CDATA[${cardSubtitle}]]></div>
              </div>
              <div class="${playing ? '' : 'overlay'}"></div>
            </div>
          </a>
        </div>
      </foreignObject>
    </svg>`
    )
    res.end()
  } catch (error) {
    console.error(error)
  }
})

if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => {
    console.log(`Server running at ${baseUrl}/api`)
  })
}

module.exports = app
