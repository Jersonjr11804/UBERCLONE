import axios from 'axios';

const DIRECTIONS_KEY = process.env.GOOGLE_DIRECTIONS_API_KEY;

export const getDirections = async (origin, destination) => {
  const res = await axios.get(
    `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${DIRECTIONS_KEY}`
  );
  return res.data;
};

export const getDistanceMatrix = async (origin, destination) => {
  const res = await axios.get(
    `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${DIRECTIONS_KEY}`
  );
  return res.data;
};