<template>
  <l-map style="height: 100vh" :center="[-10.8333, -58.71093]" zoom="5" :zoomAnimation='true'>
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    ></l-tile-layer>
    <l-geo-json :geojson="geojson" :options="geojsonOptions" />
  </l-map>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LGeoJson, LTileLayer } from "@vue-leaflet/vue-leaflet";
import data from "../assets/mapData.json";

export default {
  components: {
    LMap,
    LGeoJson,
    LTileLayer,
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
    const { icon, marker } = await import("leaflet/dist/leaflet-src.esm");

    var areaType1 = {
      color: "#b1743d",
      weight: 5,
      opacity: 0.65,
    };

    var areaType2 = {
      color: "#3baf21",
      weight: 5,
      opacity: 0.65,
    };

    var boxIcon = icon({
      iconUrl: "assets/box_cesta.png",

      iconSize: [40, 40], // size of the icon
      iconAnchor: [22, 49], // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    var sustIcon = icon({
      iconUrl: "assets/sust_leaf.png",

      iconSize: [38, 95], // size of the icon
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    var box2Icon = icon({
      iconUrl: "assets/box_cesta_2.png",

      iconSize: [40, 40], // size of the icon
      iconAnchor: [22, 49], // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    this.geojsonOptions = {
      pointToLayer: function (geoJsonPoint, latlng) {
        console.log(geoJsonPoint);
        switch (geoJsonPoint.properties.markerColor) {
          case "box2Icon":
            return marker(latlng, { icon: box2Icon });
          case "sustIcon":
            return marker(latlng, { icon: sustIcon });

          default:
            return marker(latlng, { icon: boxIcon });
        }
      },

      style: function (feature) {
        switch (feature.properties.areaType) {
          case "typ1":
            return areaType1;
          case "typ2":
            return areaType2;
        }
      },
      onEachFeature: function onEachFeature(feature, layer) {
        if (feature.properties && feature.properties.popupContent) {
          layer.bindPopup(feature.properties.popupContent);
        }
      },
    };
  },
};
</script>

<style scoped></style>
