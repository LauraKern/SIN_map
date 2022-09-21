var indimap = L.map('map').setView([-10.83330, -58.71093], 5);

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
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 20434.046436287834,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": " (9) TI Karipuna <b> Karipuna </b> (69 pessoas)",
                "markerColor": "box2Icon"
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
                "radius": 2595.3295694591966,
                "name": "Unnamed Layer",
                "category": "default",
                "markerColor" : "box2Icon",
                "popupContent": "<b> Tembé, Kayapó, Muduruku, Kaxuyana </b>, Sede/Itwuaçu/Pino'a/Ypydhô, ? /no partners ",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-48.273521, -2.68243]
            },
            "id": "cf3e51a4-f0ff-4065-a4ea-3340a41f6373"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 1276.6092469992286,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": " (10) Centro Huwa Karu Yuxibu, <b> Kaxinawa Huni Kuin </b>, Jacobina, (5 famílias)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-72.558725, -9.089384]
            },
            "id": "4133fef6-fb79-4343-9c37-3182375ab4ab"
        },

        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 8033.51429479349,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": " (22) TI <b> Tupinambá </b> de Olivença, (6 aldeias), (320 famílias), [Grito, TAOCA]",
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
                "radius": 2616.283820325464,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": "(20) Lalima; Passarinho, <b> Terena </b>, " [CIMI],
                "markerColor": "sustIcon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-56.282252, -20.186813]
            },
            "id": "f22a0226-dbe5-4e76-b31a-1427da7e780b"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 2284.570618808987,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": "(6) Laranjeira Nhanderu, <b> Guarani-Kaiowá </b> (49 pessoas) [Abá e.V., CIMI]",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-54.542949, -21.800467]
            },
            "id": "a2cda499-d256-4edb-b3e0-5d0f785950e3"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 947.032612275276,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": "(8) Capoeirão / Tekoa Arandu, <b> Guarani-Mbya </b>, (10 famílias) [Greenpeace, AMIBRA, FUNAI, SESAI]",
                "markerColor": "sustIcon"
            },
            "geometry": {
                    "type": "Point",
                    "coordinates": [-47.175249, -24.290469]
                },
                "id": "77507d0d-5180-4ff1-82ba-a0e6f0d3ff34"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 867.1046389069276,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": "<b> ? </b> Jabuticabeira, <b> Guarani </b>, ?",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-48.994798, -28.577135]
            },
            "id": "4dcd3dd8-56de-4713-9069-93668aa8ce15"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 5362.428376569104,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": "(3) Arariboia; TI Bacurizinho <b> Guajajara </b> - 24 aldeias do muncicípio de Grajaú (150 famílias / 630 pessoas), [incomíndios]",
                "markerColor": "box2Icon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-46.054248, -4.919253]
            },
            "id": "681463c4-b017-4c95-ad5a-00c0ccde07ae"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 6583.597990712116,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": " (11) TI Kiriri, <b> Kiriri </b> (120 famílias)",
                "markerColor": "sustIcon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-38.632001, -10.65521]
            },
            "id": "7924956f-15b3-4f6d-b57f-f40bef6a5df5"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 3220.295121205639,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": " (23) <b> Yawalapiti </b> / PI Xingu (262 famílias)",
                "markerColor": "box2Icon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-52.255717, -13.572577]
            },
            "id": "6908480b-a556-4d68-b2b5-f4a49f3cd9f0"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 2116.1155333484667,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": " (14) Bahetá <b> Pataxó Bahetá </b> (310 famílias), [TAOCA, Grito, Ceta]",
                "markerColor": "box2Icon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-39.722083, -15.160453]
            },
            "id": "6f09b561-47de-473b-8e79-7c8ef5b2e5bc"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 745.9320243608846,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": " (15) Naô Xohã, <b> Pataxó Hãhãhãe </b> (39 famílias/120 pessoas), [CIMI]",
                "markerColor": "box2Icon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-44.272998, -20.048836]
            },
            "id": "1cdbb9bf-8e1e-4264-a08a-28a08d895141"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 31998.865551634008,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": " XXXXXXX <b> ? </b> [3 aldeias], <b> Guajajara </b>, ?",
                "markerColor": "sustIcon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-46.354236, -5.751273]
            },
            "id": "f608d223-d3e0-4e14-bb5f-63f22f19a1c1"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 626.1532123264052,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": "(12) Pradinho, <b> Maxakali </b>, (2 aldeias + urbano), (320 famílias), [CIMI]",
                "markerColor": "box2Icon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-40.573432, -17.0622]
            },
            "id": "717b1a54-6fce-4d34-90c9-31f92ce00e1e"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 1010.6493777473594,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": "Água Boa, <b> Maxakali </b>, [CIMI, ALda]",
                "markerColor": "box2Icon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-42.391499, -17.99604]
            },
            "id": "30d8012b-5b7f-4c24-a2b2-dc7f406b08e0"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 192.90118777546311,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": "Aldeia Verde, <b> Maxakali </b>,[CIMI, Alda]",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-41.666797, -17.649788]
            },
            "id": "5ba82fe8-d5c7-406d-b50f-885db230e6e8"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 12113.828078768349,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": ", <b> Guarani </b>: Pindoty; Tarumã; Piraí, ?",
                "markerColor": "box2Icon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-48.712006, -26.445369]
            },
            "id": "c9d96857-45db-4fee-84f8-3c62e76fc978"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 3560.1343684439807,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": "(1) Japuara, <b> Anacé </b> (459 famílias/1,687 pessoas), [Grito, TAOCA]",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-38.716679, -3.70924]
            },
            "id": "7c8b8a29-b0de-41d6-b610-56c4243a5785"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 11010.050383179241,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": " (17) TI Taunay Ipegue, <b> Terena </b>, [8 aldeias], (ca. 1000 famílias)",
                "markerColor": "sustIcon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-56.067696, -20.247381]
            },
            "id": "a5683a2c-b4d2-4a15-b1ee-99dbc3b22c6b"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 31451.984540327925,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": " (2) Vila Nova Barbecho, <b> Chiquitano </b> (25 famílias), ",
                "markerColor": "sustIcon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-59.532166, -16.169835]
            },
            "id": "df7b11bb-aba5-46dd-b249-86c135b07e61"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 6014.235168861085,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": " (7) TI Amambaí, <b>Guarani-Kaiowá </b>, (160 famílias), [Abá e.V.] ?",
                "markerColor": "box2Icon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-55.184326, -23.077205]
            },
            "id": "7714ea47-231f-4096-8cf0-e784629bfec9"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 21954.425180306916,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": "(13) Boca da Mata, <b> Pataxó </b>, (320 pessoas), [Grito, TAOCA]",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-39.27475, -16.949097]
            },
            "id": "f49a0630-76dc-4d7b-bd37-6e4d9cf4dac8",
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 6001.252422453803,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": "(18) TI Limão Verde, <b> Terena </b>, (2 aldeias), (16 famílias +)",
                "markerColor": "sustIcon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-55.692444, -20.333682]
            },
            "id": "40722fc0-bbc3-4c12-848c-bc1be31cd942"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 3493.5521762930452,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": "(19) Mãe Terra/Ser Vir a Vida (60 crianças)",
                "markerColor": "box2Icon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-56.380806, -20.238684]
            },
            "id": "a5e0b633-5080-4686-a225-30cd507fb157"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 45371.7785159628,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": " (16) [Aldeia urbana Belém]: <b> Tembé, Kayapó, Muduruku, Kaxuyana </b> (Sede Itwuaçu, Pino'a, Ypydhô) (34 famílias)",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-48.468933, -1.441803]
            },
            "id": "c3f483ee-aa22-4193-81f7-ad9b93e4f71a"
        },
        {
            "type": "Feature",
            "properties": {
                "shape": "Circle",
                "radius": 3039.4098175153554,
                "name": "Unnamed Layer",
                "category": "default",
                "popupContent": " (21) Wotchimaücü, <b> Tikuna </b> (117 famílias), [incomíndios, APIB]",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-59.947071, -3.018298]
            },
            "id": "604d73ad-14ff-432e-9852-ff80a95afd5f"
        },
        {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {
                    "shape": "Circle",
                    "radius": 6580.985886455395,
                    "name": "Unnamed Layer",
                    "category": "default",
                    "popupContent": "TI Piaçaguara, <b>Tupi-Guarani/Guarani Nhandeva </b> : Piaçaguera, Awa Porungawa Dju, Kuaraytsapé (Djodjawi), Nhamandu, Tabaçu, Tapirema, Takoa Gwyradjá, Tekoa Kwaray, Tekoa Porã, Tenguaeté, Tanigwá (350 p.) [Greenpeace]"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [-46.963057, -24.221606]
                },
                "id": "ea6f58f3-2c8b-4c52-bdef-9afc0ff39097"
            }




    ]
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