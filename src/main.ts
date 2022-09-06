import './style.css'
import { Map } from 'maplibre-gl'

new Map({
  container: 'map',
  style: 'https://api.maptiler.com/maps/voyager/style.json?key=r44DkzsHPk0Hg14mg2ey', // style URL
  center: [12.42304, 51.33479], // starting position [lng, lat]
  zoom: 16.4, // starting zoom
  customAttribution: '\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
});
