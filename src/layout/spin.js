import { keyframesStyle, textStyles } from '../config/index.js'
import { isValidAlignment, isVerticalLayout } from '../utils/index.js'

export function generateSpinLayout(data, options) {
  const { spotifyIcon, playingImg, cardTitle, cardSubtitle, externalLink, playing } = data
  const { textAlign, direction } = options

  const keyframe = keyframesStyle['spin']
  const textStyle = textStyles['spin']

  const vertical = isVerticalLayout(direction)
  const textAlignment = isValidAlignment(textAlign) ? textAlign : 'start'

  const width = vertical ? 220 : 400
  const height = vertical ? 300 : 140
  const imgSize = vertical ? 170 : 120
  const imgContainerSize = vertical ? '100%' : '140px'
  const flexDirection = vertical ? 'column' : 'row'

  return `<svg fill="none" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <style>
            .card-wrapper {
                background-color: #222222;
                text-decoration: none;
                overflow: hidden;
                display: flex;
                flex-direction: ${flexDirection};
                align-items: center;
                width: ${width}px;
                height: ${height}px;
                border-radius: 8px;
            }
            .card__img {
                width: ${imgContainerSize};
                padding: 12px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .card__img img {
                animation: ${playing ? 'spin 10s infinite linear' : 'none'};
                width: ${imgSize}px;
                height: ${imgSize}px;
                border-radius: 100%;
                object-fit: cover;
            }
            .card__body {
                display: flex;
                flex-direction: column;
                text-align: ${textAlignment};
                justify-content: center;
                color: white;
                width: 100%;
                flex-grow: 1;
                padding: 8px;
                box-sizing: border-box;
            }
            ${keyframe}
            ${textStyle}
          </style>
          <a class="card-wrapper" href="${externalLink}" target="_blank">
            <div class="card__img">
              <img src="${playingImg || spotifyIcon}" alt="Cover"></img>
            </div>
            <div class="card__body">
              <div class="card__title">
                <![CDATA[${cardTitle}]]>
              </div>
              <div class="card__subtitle">
                <![CDATA[${cardSubtitle}]]>
              </div>
            </div>
          </a>
        </div>
      </foreignObject>
    </svg>`
}
