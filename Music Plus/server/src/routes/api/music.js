import express from 'express';
import {retrievePlaylistByOwnerId} from "../../Database/Playlist-dao.js";

const router = express.Router();

router.get('/play/:id', async (req, res) => {
    const { id } = req.params;
    const response = await fetch('http://127.0.0.1:4000/song/url/v1?id='+id);
    const data = await response.json();

    return res.json(data[0].url)
});

export default router;
