// File: api/lastfm.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        // Grab query params from the request (you can add more as needed).
        // e.g. /api/lastfm?method=user.getrecenttracks&user=zx111&limit=10
        const { method, user = 'zx111', limit = '1', nowplaying, page = '1' } = req.query;

        // Your Last.fm API key is set in an environment variable on Vercel.
        const apiKey = process.env.LASTFM_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: 'No Last.fm API key configured' });
        }

        // Build the Last.fm URL dynamically based on query params
        const lastfmUrl = `https://ws.audioscrobbler.com/2.0/?method=${method}&user=${user}&api_key=${apiKey}&format=json&limit=${limit}&page=${page}${
            nowplaying ? `&nowplaying=${nowplaying}` : ''
        }`;

        const response = await fetch(lastfmUrl);
        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Something went wrong fetching Last.fm data' });
    }
}
