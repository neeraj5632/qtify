import axios from "axios";

const BASE_URL = "https://qtify-backend.labs.crio.do";

export async function getTopAlbums() {
  const response = await axios.get(`${BASE_URL}/albums/top`);
  return response.data;
}

// 🔴 NEW: New albums ke liye API helper
export async function getNewAlbums() {
  const response = await axios.get(`${BASE_URL}/albums/new`);
  return response.data;
}

export async function getSongs() {
  const response = await axios.get(`${BASE_URL}/songs`);
  return response.data;
}

export async function getGenres() {
  const response = await axios.get(`${BASE_URL}/genres`);
  return response.data;
}
