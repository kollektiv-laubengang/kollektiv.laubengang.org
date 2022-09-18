import './style.css'
import { Map } from 'maplibre-gl'

const map = new Map({
  container: 'map',
  style: 'https://api.maptiler.com/maps/voyager/style.json?key=r44DkzsHPk0Hg14mg2ey', // style URL
  center: [12.42258, 51.33479], // starting position [lng, lat]
  zoom: 18.7, // starting zoom
  customAttribution: '\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
});

map.on('load', () => {
  map.addSource('house', {
    type: 'raster',
    tiles: [
      '/tiles/{z}/{x}/{y}.png'
    ],
    maxzoom: 21,
    minzoom: 16,
    'tileSize': 256,
  })

  map.addLayer({
    'id': 'wms-test-layer',
    'type': 'raster',
    'source': 'house',
    'paint': {}
  })
});