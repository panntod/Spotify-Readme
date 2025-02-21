<p align="center">
  <img src="assets/spotify-logo.svg" width="400" alt="Spotify logo" />
</p>

# Spotify Currently Playing Track

Dynamically generate Spotify currently playing tracks for your GitHub README or anywhere you want.

## Overview

This API fetches the currently playing track from your Spotify account and generates a **dynamic card** displaying the track information.

### Demo

![Listen to Spotify](https://panntod-spotify-readme.vercel.app/)

---

## **How to Use**

### 1. Set Up Your Spotify App

#### 1.1 Create an App

- Go to the [Spotify Dashboard](https://developer.spotify.com/dashboard/)
- Create a new app
- Click **Edit Settings** and add **Redirect URIs** (e.g., `http://localhost:3000` for development, `https://your-domain.vercel.app` for production)

#### 1.2 Configure `.env` File

- Rename `.env.example` to `.env`
- Copy the following values from your Spotify App and paste them into the `.env` file:
  - **Client ID** → `YOUR_CLIENT_ID`
  - **Client Secret** → `YOUR_CLIENT_SECRET`
  - **Redirect URI** → `YOUR_REDIRECT_URI`

---

### 2. Installation

```sh
npm install
```

### 3. Get Authorization URL

```sh
npm run get-authorize-url
```

Paste the generated link into your browser and copy the **"code"** from the URL query string.

### 4. Get Refresh Token

```sh
npm run get-refresh-token <code>
```

Copy and paste the generated refresh token into `YOUR_REFRESH_TOKEN` in your `.env` file.

### 6. Start Development Server

```sh
npm run dev
```

### 5. Start the Server

```sh
npm start
```

---

## **API Documentation**

### **Endpoint: Get Currently Playing Track**

**URL:** `/api`

**Method:** `GET`

#### **Response Example**

```json
{
  "timestamp": 1739924939565,
  "context": {
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/30CcenmFhhITmOoxQ66X8u"
    },
    "href": "https://api.spotify.com/v1/playlists/30CcenmFhhITmOoxQ66X8u",
    "type": "playlist",
    "uri": "spotify:playlist:30CcenmFhhITmOoxQ66X8u"
  },
  "progress_ms": 107761,
  "item": {
    "album": {
      "album_type": "album",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4RzbexUO843fc5SLqKEQCr"
          },
          "href": "https://api.spotify.com/v1/artists/4RzbexUO843fc5SLqKEQCr",
          "id": "4RzbexUO843fc5SLqKEQCr",
          "name": "Aaryan Shah",
          "type": "artist",
          "uri": "spotify:artist:4RzbexUO843fc5SLqKEQCr"
        }
      ],
      "available_markets": [],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3L97oMfs3NwT7rhC6JARH3"
      },
      "href": "https://api.spotify.com/v1/albums/3L97oMfs3NwT7rhC6JARH3",
      "id": "3L97oMfs3NwT7rhC6JARH3",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273a21b22bea3992eb630bba71a",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02a21b22bea3992eb630bba71a",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851a21b22bea3992eb630bba71a",
          "width": 64
        }
      ],
      "name": "The Arrival",
      "release_date": "2020-01-03",
      "release_date_precision": "day",
      "total_tracks": 10,
      "type": "album",
      "uri": "spotify:album:3L97oMfs3NwT7rhC6JARH3"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4RzbexUO843fc5SLqKEQCr"
        },
        "href": "https://api.spotify.com/v1/artists/4RzbexUO843fc5SLqKEQCr",
        "id": "4RzbexUO843fc5SLqKEQCr",
        "name": "Aaryan Shah",
        "type": "artist",
        "uri": "spotify:artist:4RzbexUO843fc5SLqKEQCr"
      }
    ],
    "external_urls": {
      "spotify": "https://open.spotify.com/track/2e0Zxf8VntbuwfosHQbIT1"
    },
    "id": "2e0Zxf8VntbuwfosHQbIT1",
    "name": "Renegade",
    "type": "track",
    "uri": "spotify:track:2e0Zxf8VntbuwfosHQbIT1"
  },
  "is_playing": true
}
```

### **Response Fields**

| Field        | Type      | Description                            |
| ------------ | --------- | -------------------------------------- |
| `timestamp`  | `number`  | Timestamp of the data retrieval        |
| `context`    | `object`  | Playlist or album context              |
| `item`       | `object`  | Currently playing track details        |
| `is_playing` | `boolean` | Whether the track is currently playing |

**URL:** `/card`

**Method:** `GET`

#### **Query Parameters**

| Parameter   | Type     | Default      | Description                                         |
| ----------- | -------- | ------------ | --------------------------------------------------- |
| `type`      | `string` | `default`    | Type of card (`chord`, `spin`)                      |
| `direction` | `string` | `horizontal` | Card layout (`horizontal`, `vertical`)              |
| `textAlign` | `string` | `-`          | Text alignment (`left`, `center`, `right`)          |
| `color`     | `string` | `#1DB954`    | Only for Chord Color (Hex, URL encoded `%230044FF`) |

#### **Example Request**

```sh
GET http://localhost:3000/card?type=chord&direction=horizontal&textAlign=center&color=%230044FF
```

![Example Listen To Spotify](https://panntod-spotify-readme.vercel.app/card?type=chord&direction=horizontal&textAlign=center&color=%230044FF)

## **Contributing**

Feel free to submit issues or pull requests if you want to improve this project!

### **License**

This project is licensed under the [MIT License](LICENSE).
