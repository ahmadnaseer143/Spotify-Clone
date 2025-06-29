import { Song } from "../models/song.model.js";

export const getAllSongs = async (req, res, next) => {
  try {
    // -1 means descending i-e from newest to oldest
    const songs = await Song.find().sort({ createdAt: -1 });
    res.json(songs);
  } catch (error) {
    console.log("Error in getAllSongs controller", error.message);
    next(error);
  }
};

export const getFeaturedSongs = async (req, res, next) => {
  try {
    // fetch 6 random songs
    const songs = await Song.aggregate([
      {
        $sample: { size: 6 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        },
      },
    ]);
    res.json(songs);
  } catch (error) {
    console.log("Error in song controller getFeatured Songs", error.message);
    next(error);
  }
};

export const getMadeForYouSongs = async (req, res, next) => {
  try {
    // fetch 4 random songs
    const songs = await Song.aggregate([
      {
        $sample: { size: 4 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        },
      },
    ]);
    res.json(songs);
  } catch (error) {
    console.log("Error in song controller getFeatured Songs", error.message);
    next(error);
  }
};

export const getTrendingSongs = async (req, res, next) => {
  try {
    // fetch 4 random songs
    const songs = await Song.aggregate([
      {
        $sample: { size: 4 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          imageUrl: 1,
          audioUrl: 1,
        },
      },
    ]);
    res.json(songs);
  } catch (error) {
    console.log("Error in song controller getFeatured Songs", error.message);
    next(error);
  }
};
