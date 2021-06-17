import markerPNG from '../marker/marker.png'

export const mapOptions = {
  disableDefaultUI: true,
  draggable: false,
  scrollwheel: false,
  disableDoubleClickZoom: true,
  keyboardShortcuts: false,
}

export const polylineOptions = {
  strokeColor: '#26c5ff',
  strokeOpacity: 1,
  strokeWeight: 3,
  fillColor: '#26c5ff',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1,
}

export const markerOptions = {
  icon: {
    url: markerPNG,
  },
}
