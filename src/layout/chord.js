export function generateChordLayout(data, direction) {
  const { img, cardTitle, cardSubtitle, externalLink, playing } = data

  if (direction == 'vertical') {
    return `<svg fill="none" viewBox="0 0 220 280" width="220" height="280" xmlns="http://www.w3.org/2000/svg">
        <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
          
        <style>
            * {
                box-sizing: border-box;
            }

            .card-wrapper {
                background-color: #222222;
                text-decoration: none;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 280px;
                width: 220px;
                border-radius: 8px;
                padding: 12px;
            }

            .card__img {
                width: 100%;
                height: 190px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .card__img img {
                width: 100%;
                height: 100%;
                border-radius: 8px;
                object-fit: cover;
            }

            .card__body {
                display: flex;
                flex-direction: column;
                text-align: center;
                color: white;
                width: 100%;
            }

            .card__title, .card__subtitle {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .card__title {
                font: 600 16px -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
                color: #fff;
                margin-bottom: 4px;
            }

            .card__subtitle {
                font: 400 12px -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
                color: #fff;
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
                background: #1DB954;
                height: 3px;
                width: 6px;
                animation: sound 0.5s linear infinite alternate;
            }

            .bar:nth-child(1) {
                animation-delay: 0s;
            }

            .bar:nth-child(2) {
                animation-delay: 0.1s;
            }

            .bar:nth-child(3) {
                animation-delay: 0.2s;
            }

            .bar:nth-child(4) {
                animation-delay: 0.3s;
            }

            .bar:nth-child(5) {
                animation-delay: 0.4s;
            }

            .bar:nth-child(6) {
                animation-delay: 0.5s;
            }

            .bar:nth-child(7) {
                animation-delay: 0.6s;
            }

            .bar:nth-child(8) {
                animation-delay: 0.7s;
            }

            .bar:nth-child(9) {
                animation-delay: 0.8s;
            }

            .bar:nth-child(10) {
                animation-delay: 0.9s;
            }

            .bar:nth-child(11) {
                animation-delay: 1s;
            }

            .bar:nth-child(12) {
                animation-delay: 0.9s;
            }

            .bar:nth-child(13) {
                animation-delay: 0.8s;
            }

            .bar:nth-child(14) {
                animation-delay: 0.7s;
            }

            .bar:nth-child(15) {
                animation-delay: 0.6s;
            }

            .bar:nth-child(16) {
                animation-delay: 0.5s;
            }

            .bar:nth-child(17) {
                animation-delay: 0.4s;
            }

            .bar:nth-child(18) {
                animation-delay: 0.3s;
            }

            .bar:nth-child(19) {
                animation-delay: 0.2s;
            }

            .bar:nth-child(20) {
                animation-delay: 0.1s;
            }

            @keyframes sound {
                0% {
                    opacity: .35;
                    height: 3px;
                }

                100% {
                    opacity: 1;
                    height: 14px;
                }
            }
        </style>
      
          <a class="card-wrapper" href="${externalLink}" target="_blank">
              <div class="card__img">
                  <img src="${img}" alt="Logo" />
              </div>
              <div class="card__body">
                  <div class="card__title">
                      <![CDATA[${cardTitle}]]>
                  </div>
                  <div class="card__subtitle">
                      <![CDATA[${cardSubtitle}]]>
                  </div>
                  ${
                    playing
                      ? `
                  <div class="bars">
                      <div class="bar"></div>
                      <div class="bar"></div>
                      <div class="bar"></div>
                      <div class="bar"></div>
                      <div class="bar"></div>
                      <div class="bar"></div>
                      <div class="bar"></div>
                      <div class="bar"></div>
                      <div class="bar"></div>
                      <div class="bar"></div>
                      <div class="bar"></div>
                      <div class="bar"></div>
                      <div class="bar"></div>
                      <div class="bar"></div>
                      <div class="bar"></div>
                      <div class="bar"></div>
                      <div class="bar"></div>
                      <div class="bar"></div>
                      <div class="bar"></div>
                      <div class="bar"></div>
                      <div class="bar"></div>
                  </div>
                  `
                      : ''
                  }
                  </div>
          </a>
          </div>
        </foreignObject>
      </svg>`
  } else {
    return `<svg fill="none" viewBox="0 0 400 140" width="400" height="140" xmlns="http://www.w3.org/2000/svg">
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
        
        <style>
            * {
                box-sizing: border-box;
            }

            .card-wrapper {
                background-color: #222222;
                text-decoration: none;
                overflow: hidden;
                display: flex;
                flex-direction: row;
                align-items: center;
                width: 400px;
                height: 140px;
                border-radius: 8px;
                padding: 12px;
            }

            .card__img {
                width: 110px;
                height: auto;
                flex-shrink: 0;
            }

            .card__img img {
                width: 100%;
                height: 100%;
                border-radius: 10px;
                object-fit: cover;
            }

            .card__body {
                display: flex;
                flex-direction: column;
                text-align: center;
                color: white;
                padding: 10px;
                width: 100%;
                max-height: 120px;
                overflow: hidden;
            }

            .card__title {
                font: 600 16px -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
                color: #fff;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                text-overflow: ellipsis;
                animation: ${playing ? 'noise 2s infinite linear' : 'none'};
                max-width: 100%;
                word-wrap: break-word;
            }

            .card__subtitle {
                font: 400 12px -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
                color: #fff;
                white-space: nowrap;
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                word-wrap: break-word;
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
                background: #1DB954;
                height: 3px;
                width: 6px;
                animation: sound 0.5s linear infinite alternate;
            }

            .bar:nth-child(1) {
                animation-delay: 0s;
            }

            .bar:nth-child(2) {
                animation-delay: 0.1s;
            }

            .bar:nth-child(3) {
                animation-delay: 0.2s;
            }

            .bar:nth-child(4) {
                animation-delay: 0.3s;
            }

            .bar:nth-child(5) {
                animation-delay: 0.4s;
            }

            .bar:nth-child(6) {
                animation-delay: 0.5s;
            }

            .bar:nth-child(7) {
                animation-delay: 0.6s;
            }

            .bar:nth-child(8) {
                animation-delay: 0.7s;
            }

            .bar:nth-child(9) {
                animation-delay: 0.8s;
            }

            .bar:nth-child(10) {
                animation-delay: 0.9s;
            }

            .bar:nth-child(11) {
                animation-delay: 1s;
            }

            .bar:nth-child(12) {
                animation-delay: 0.9s;
            }

            .bar:nth-child(13) {
                animation-delay: 0.8s;
            }

            .bar:nth-child(14) {
                animation-delay: 0.7s;
            }

            .bar:nth-child(15) {
                animation-delay: 0.6s;
            }

            .bar:nth-child(16) {
                animation-delay: 0.5s;
            }

            .bar:nth-child(17) {
                animation-delay: 0.4s;
            }

            .bar:nth-child(18) {
                animation-delay: 0.3s;
            }

            .bar:nth-child(19) {
                animation-delay: 0.2s;
            }

            .bar:nth-child(20) {
                animation-delay: 0.1s;
            }

            @keyframes sound {
                0% {
                    opacity: .35;
                    height: 3px;
                }

                100% {
                    opacity: 1;
                    height: 14px;
                }
            }
        </style>
    
        <a class="card-wrapper" href="${externalLink}" target="_blank">
            <div class="card__img">
                <img src="${img}" alt="Logo" />
            </div>
            <div class="card__body">
                <div class="card__title">
                    <![CDATA[${cardTitle}]]>
                </div>
                <div class="card__subtitle">
                    <![CDATA[${cardSubtitle}]]>
                </div>
                ${
                  playing
                    ? `
                <div class="bars">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
                `
                    : ''
                }
                </div>
        </a>
        </div>
      </foreignObject>
    </svg>`
  }
}
