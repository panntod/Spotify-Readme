export function generateSpinLayout(data, direction) {
  const { img, cardTitle, cardSubtitle, externalLink, playing } = data

  if (direction == 'vertical') {
    return `<svg fill="none" viewBox="0 0 220 280" width="220" height="280" xmlns="http://www.w3.org/2000/svg">
          <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml">

            <style>
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
                }

                .card__img {
                    width: 100%;
                    height: 190px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .card__img img {
                    animation: ${playing ? 'spin 10s infinite linear' : 'none'};
                    width: 170px;
                    height: 170px;
                    border-radius: 100%;
                    object-fit: cover;
                }

                .card__body {
                    display: flex;
                    flex-direction: column;
                    text-align: start;
                    color: white;
                    padding: 10px;
                }

                .card__title {
                    font: 600 16px -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
                    color: #fff;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                    animation: 'noise 2s infinite linear';
                    max-width: 100%;
                }

                .card__subtitle {
                    font: 400 12px -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
                    color: #fff;
                    white-space: nowrap;
                    max-width: 100%;
                }

                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }

                    50% {
                        transform: rotate(180deg);
                    }

                    100% {
                        transform: rotate(360deg);
                    }
                }
            </style>
            <a class="card-wrapper" href="${externalLink}" target="_blank">
                <div class="card__img">
                    <img src="${img}" alt="Logo"></img>
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
  } else {
    return `<svg fill="none" viewBox="0 0 400 140" width="400" height="140" xmlns="http://www.w3.org/2000/svg">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml">
          
            <style>
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
                }

                .card__img {
                    width: 180px;
                    padding: 12px;
                }

                .card__img img {
                    animation: ${playing ? 'spin 10s infinite linear' : 'none'};
                    width: 120px;
                    height: 120px;
                    border-radius: 100%;
                    object-fit: cover;
                }

                .card__body {
                    display: flex;
                    flex-direction: column;
                    text-align: start;
                    color: white;
                    width: 100%;
                }

                .card__title {
                    font: 600 16px 'Segoe UI', Ubuntu, Sans-Serif;
                    color: #fff;
                    margin-bottom: 4px;
                }

                .card__subtitle {
                    font: 400 12px 'Segoe UI', Ubuntu, Sans-Serif;
                    color: #fff;
                    overflow: hidden;
                    white-space: wrap;
                }

                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }

                    50% {
                        transform: rotate(180deg);
                    }

                    100% {
                        transform: rotate(360deg);
                    }
                }
            </style>
            <a class="card-wrapper" href="${externalLink}" target="_blank">
                <div class="card__img">
                    <img src="${img}" alt="Logo"></img>
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
}
