var indimap = L.map('map').setView([-10.83330, -58.71093], 5);
popup = L.popup()
    .setContent("Erstkontakt")
    .openOn(indimap)

// "popupContent": "This is where the Rockies play!",
// "areaType": "typ2"

var indigenGeoJSON = {
    "type": "FeatureCollection",
    "features": [
        {
        "type": "Feature",
        "properties": {
            "shape": "Polygon",
            "name": "Unnamed Layer",
            "category": "default",
            "areaType": "typ1",
            "popupContent": "TI_imaginada",
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [-48.048409, -21.488852],
                    [-47.366491, -22.659641],
                    [-46.316116, -21.017855],
                    [-48.048409, -21.488852]
                ]
            ]
        },
        "id": "f0ebd99a-1ab9-46f6-9ee4-b6fb3acfcae2"
    },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 20434.046436287834,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": "TI_Karipuna (Porto Velho)",
                "marker.bindPopup": ("Erstkontakt").openPopup()
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-64.331541, -9.974261]
            },
            "id": "77a61271-c54c-4834-bd62-607a7335cbda"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 8033.51429479349,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": "Tupinambá de Olivença (Ilheus)",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-39.084616, -14.971983]
            },
            "id": "a64062aa-956a-4468-ad5b-001edb4601b4"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 2595.3295694591966,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": "Sede/Itwuaçu/Pino'a/Ypydhô,Tembé (Santa Luzia do Pará)",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-48.273521, -2.68243]
            },
            "id": "cf3e51a4-f0ff-4065-a4ea-3340a41f6373"
        },
        {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {
                    "shape": "Circle",
                    "radius": 1276.6092469992286,
                    "name": "Unnamed Layer",
                    "category": "default",
                    "popupContent": "Jacobina, Kaxinawa Huni Kuin (Marechal Thaumaturgo)"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-72.558725, -9.089384]
                },
                "id": "4133fef6-fb79-4343-9c37-3182375ab4ab"
            }]
        },
        {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {
                    "shape": "Circle",
                    "radius": 3362.120357318045,
                    "name": "Unnamed Layer",
                    "category": "default",
                    "popupContent": "Aldeia Fulni-ô (Águas Belas)"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-37.120311, -9.110911]
                },
                "id": "30d3546c-9937-4fa1-9dc4-86d1a9521661"
            },

        {
            "type": "Feature",
            "properties": {
                "shape": "Line",
                "name": "Unnamed Layer",
                "category": "default"
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-47.837216, -20.997343],
                    [-48.274414, -21.184412]
                ]
            },
            "id": "fcc4f00c-9e69-44f3-8c00-6067241fe9fc"
        }]
}

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
    style: function(feature) {

        switch (feature.properties.areaType) {
            case 'typ1': return areaType1;
            case 'typ2':   return areaType2;
        }
    }
}).addTo(indimap);
