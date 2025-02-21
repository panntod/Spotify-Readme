import { keyframesStyle, textStyles } from '../config/index.js'
import { isValidAlignment, isValidHexColor, isVerticalLayout } from '../utils/index.js'

export function generateChordLayout(data, options) {
  const { img, cardTitle, cardSubtitle, externalLink, playing } = data
  const { textAlign, color, direction } = options

  const textStyle = textStyles[direction]
  const keyframe = keyframesStyle['sound']

  const vertical = isVerticalLayout(direction)
  const chordColor = isValidHexColor(color) ? color : '#1DB954'
  const textAlignment = isValidAlignment(textAlign) ? textAlign : 'center'

  const width = vertical ? 220 : 400
  const height = vertical ? 300 : 140
  const imgWidth = vertical ? '100%' : '110px'
  const imgHeight = vertical ? '190px' : 'auto'
  const bodyPadding = vertical ? '0 0 0 12px' : '0 0 0 12px'
  const flexDirection = vertical ? 'column' : 'row'

  const bars = playing
    ? `<div class="bars">
          ${Array.from(
            { length: 20 },
            (_, i) => `<div class="bar" style="animation-delay: ${1 + Math.sin(i) * 0.5}s;"></div>`
          ).join('')}
        </div>`
    : ''

  return `<svg fill="none" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <style>
            * { box-sizing: border-box; }
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
                padding: 12px;
            }
            .card__img {
                width: ${imgWidth};
                height: ${imgHeight};
                flex-shrink: 0;
            }
            .card__img img {
                width: 100%;
                height: 100%;
                border-radius: 8px;
                object-fit: cover;
            }
            .card__body {
                padding: ${bodyPadding};
                display: flex;
                flex-direction: column;
                text-align: ${textAlignment};
                color: white;
                padding: 10px;
                width: 100%;
                max-height: 120px;
                overflow: hidden;
            }
            .bars {
                display: flex;
                align-items: end;
                justify-content: space-around;
                width: 100%;
                height: 14px;
                margin-top: 10px;
            }
            .bar {
                background: ${chordColor};
                height: 3px;
                width: 6px;
                animation: sound 0.5s linear infinite alternate;
            }
            ${keyframe}
            ${textStyle}
          </style>
          <a class="card-wrapper" href="${externalLink}" target="_blank">
            <div class="card__img"><img src="${img}" alt="Logo" /></div>
            <div class="card__body">
              <div class="card__title"><![CDATA[${cardTitle}]]></div>
              <div class="card__subtitle"><![CDATA[${cardSubtitle}]]></div>
              ${bars}
            </div>
          </a>
        </div>
      </foreignObject>
    </svg>`
}
