import { readFileSync } from 'fs'
import path from 'path'

export function generateDefaultLayout({ externalLink, cardImg, cardTitle, cardSubtitle, playing }) {
  const assetsPath = path.resolve('assets')
  const logoSvg = readFileSync(path.join(assetsPath, 'spotify-logo.svg'), { encoding: 'base64' })

  return `<svg fill="none" viewBox="0 0 320 180" width="320" height="180" xmlns="http://www.w3.org/2000/svg">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
      <style>
        * {
            box-sizing: border-box;
        }

        .wrapper {
            text-decoration: none;
            display: flex;
            width: 320px;
            height: 180px;
            border-radius: 8px;
            overflow: hidden;
            background-color: #222222;
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
            background-position: center;
        }

        .card__body {
            flex: 0 0 50%;
            display: flex;
            position: relative;
            flex-direction: column;
            justify-content: center;
            padding: 4px;
        }

        .card__logo {
            width: 80px;
            height: 40px;
            object-fit: contain;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }

        .card__title {
            font: 600 16px 'Segoe UI', Ubuntu, Sans-Serif;
            color: #fff;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            animation:  ${cardSubtitle ? 'none' : 'noise 2s infinite linear'};
            max-width: 100%;
        }

        .card__subtitle {
            font: 400 10px 'Segoe UI', Ubuntu, Sans-Serif;
            color: #fff;
            white-space: wrap;
            overflow: hidden;
            max-width: 100%;
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

            0%,
            3%,
            5%,
            42%,
            44%,
            63%,
            65%,
            92%,
            94%,
            100% {
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
    <a class="wrapper" href="${externalLink}" target="_blank">
        <div class="card">
            <div class="card__img"></div>
            <div class="card__body">
                <img class="card__logo" src="data:image/svg+xml;base64,${logoSvg}"></img>
                <div class="card__title">
                    <![CDATA[${cardTitle}]]>
                </div>
                <div class="card__subtitle">
                    <![CDATA[${cardSubtitle}]]>
                </div>
            </div>
            <div class="${playing ? '' : 'overlay'}"></div>
        </div>
    </a>
    </div>
  </foreignObject>
</svg>`
}
