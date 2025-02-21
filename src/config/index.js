export const keyframesStyle = {
  noise: `@keyframes noise {
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
    }`,
  spin: `@keyframes spin {
        0% { transform: rotate(0deg); }
        50% { transform: rotate(180deg); }
        100% { transform: rotate(360deg); }
    }`,
  sound: `@keyframes sound {
        0% { opacity: .35; height: 3px; }
        100% { opacity: 1; height: 14px; }
    }`,
  pulse: `@keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }`,
}

export const textStyles = {
  vertical: `  
    .card__title,
    .card__subtitle {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .card__title {
      font: 600 16px -apple-system, Segoe UI, Helvetica, Arial, sans-serif;
    }
    .card__subtitle {
      font: 400 13px -apple-system, Segoe UI, Helvetica, Arial, sans-serif;
    }`,

  horizontal: `      
    .card__title {
      font: 600 16px -apple-system, Segoe UI, Helvetica, Arial, sans-serif;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      animation: noise 2s infinite linear;
      max-width: 100%;
      word-wrap: break-word;
    }

    .card__subtitle {
      font: 400 13px -apple-system, Segoe UI, Helvetica, Arial, sans-serif;
      white-space: nowrap;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
    }`,

  spin: `
    .card__title {
      font: 600 16px -apple-system, Segoe UI, Helvetica, Arial, sans-serif;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      word-wrap: break-word;
    }
    .card__subtitle {
      font: 400 13px -apple-system, Segoe UI, Helvetica, Arial, sans-serif;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      word-wrap: break-word;
    }`,
}
