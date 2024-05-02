<p align="center">
  <img src="assets/spotify-logo.svg" width="400" alt="Spotify logo" />
</p>

# Spotify Currently Playing Track

Dynamically generate Spotify currently playing tracks for your github readme or everywhere.

## Overview

![Listen to Spotify](https://panntod-spotify-readme.vercel.app/api)

### How to use

#### 1. Go to [Spotify Dashboard](https://developer.spotify.com/dashboard/) create an app.

1. Go **edit settings** and add **Redirect URIs**.
   i.e. White-listed addresses to redirect to after authentication success OR failure.
   For example development is http://localhost:3000, production is https://panntod-spotify-readme.vercel.app/api.

1. Rename `.env.example` to `.env` file.
   Copy **Redirect URIs**, **Client ID**, **Client Secret** and paste into `YOUR_REDIRECT_URI` ,`YOUR_CLIENT_ID` and `YOUR_CLIENT_SECRET` field.

#### 2. Installation

```
$ npm install
```

#### 3. Get Authorize URL

```
$ npm run get-authorize-url
```

Paste the entire link into your browser and copy the url query string named **"code"**.

#### 4. Get Refresh Token

```
$ npm run get-refresh-token <code>
```

Copy and paste it into the `YOUR_REFRESH_TOKEN` field.

#### 5. Run start

```
$ npm run start
```
