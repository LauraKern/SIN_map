var indimap = L.map('map').setView([-10.83330, -58.71093], 5);

// "popupContent": "This is where the Rockies play!",
// "areaType": "typ2"

var indigenGeoJSON =

var areaType1 = {
    "color": "#b1743d",
    "weight": 5,
    "opacity": 0.65
};

var areaType2 = {
    "color": "#3baf21",
    "weight": 5,
    "opacity": 0.65
};

var boxIcon = L.icon({
    iconUrl: "box_cesta.png",

    iconSize:      [40, 40], // size of the icon
    iconAnchor:    [22,49],  // point of the icon which will correspond to marker's location
    popupAnchor:   [-3, -76], // point from which the popup should open relative to the iconAnchor
});

var sustIcon = L.icon ({
    iconUrl: "sust_leaf.png",

    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var box2Icon = L.icon({
    iconUrl: "box_cesta_2.png",

    iconSize:      [40, 40], // size of the icon
    iconAnchor:    [22,49],  // point of the icon which will correspond to marker's location
    popupAnchor:   [-3, -76], // point from which the popup should open relative to the iconAnchor
});

var boxLocalIcon = L.icon({
    iconUrl: "cesta_local.png",

    iconSize:      [40, 40], // size of the icon
    iconAnchor:    [22,49],  // point of the icon which will correspond to marker's location
    popupAnchor:   [-3, -76], // point from which the popup should open relative to the iconAnchor
});

//add World map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(indimap);


//add geoJSON with style and popups
L.geoJSON(indigenGeoJSON, {
    onEachFeature: function onEachFeature(feature, layer) {
        if (feature.properties && feature.properties.popupContent) {
            layer.bindPopup(feature.properties.popupContent);
        }
    },
    pointToLayer: function(geoJsonPoint, latlng) {
        console.log(geoJsonPoint);
        switch (geoJsonPoint.properties.markerColor) {
            case "box2Icon": return L.marker(latlng, {icon: box2Icon});
            case "sustIcon": return L.marker(latlng, {icon: sustIcon});
            default: return L.marker(latlng, {icon: boxIcon});
        }
    },
    style: function(feature) {

        switch (feature.properties.areaType) {
            case 'typ1': return areaType1;
            case 'typ2':   return areaType2;
        }
    }
}).addTo(indimap);