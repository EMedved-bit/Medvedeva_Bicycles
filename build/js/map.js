const MAP_COORDS_DEFAULT = {
  lat: 59.938635,
  lng: 30.323118,
};
const MAP_ZOOM_DEFAULT = 17;
const LAYER_TEMPLATE = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const map = L.map('map');

L.tileLayer(
  LAYER_TEMPLATE,
  {
    attribution: ATTRIBUTION,
  },
).addTo(map);

map
  .setView(MAP_COORDS_DEFAULT, MAP_ZOOM_DEFAULT);
