<template>
  <l-map style="height:50vh" :center="[-10.83330, -58.71093]" zoom="5" >
    <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    ></l-tile-layer>
    <l-geo-json :geojson="geojson" :options="geojsonOptions"/>
  </l-map>

</template>

<script>
import "leaflet/dist/leaflet.css"
import {LMap, LGeoJson, LTileLayer} from "@vue-leaflet/vue-leaflet";
import data from '../assets/mapData.json'

export default {
  components: {
    LMap,
    LGeoJson,
    LTileLayer
  },
  data() {
    return {
      geojson: data.features,
      geojsonOptions: {
        // Options that don't rely on Leaflet methods.

      },
    };
  },
  async beforeMount() {
    // HERE is where to load Leaflet components!
    const { circleMarker } = await import("leaflet/dist/leaflet-src.esm");

    this.geojsonOptions.pointToLayer = function(geoJsonPoint, latlng) {
      console.log(geoJsonPoint);
      switch (geoJsonPoint.properties.markerColor) {
        case "box2Icon": return circleMarker(latlng, { radius: 8 });
        case "sustIcon": return circleMarker(latlng, { radius: 8 });
        // default: return L.marker(latlng, {icon: boxIcon});
      }
    };

    this.geojsonOptions.onEachFeature = function onEachFeature(feature, layer) {
      if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
      }
    }



    this.mapIsReady = true;
  },
};

</script>

<style scoped>

</style>
