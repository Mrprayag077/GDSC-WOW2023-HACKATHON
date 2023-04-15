function createRealtimeLayer(url, container) {
    return L.realtime(url, {
        interval: 3 * 6000,
        getFeatureId: function(f) {
            return 0
        },
        cache: true,
        container: container,
        onEachFeature(f, l) {
            l.bindPopup(function() {
                return 0;
            });
        }
    });
}

fetch('https://github.com/rohitlohar45/sih/blob/main/map.json')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
    })


var url = './map.json'
    fetch(url)
        .then(function (response){
            return response.json()
        })
        .then(function (data){
            

        var count = 0
        
            // console.log(data)
            var map = L.map('map'),
            clusterGroup = L.markerClusterGroup().addTo(map),
            subgroup1 = L.featureGroup.subGroup(clusterGroup),
            subgroup2 = L.featureGroup.subGroup(clusterGroup),
            realtime1 = createRealtimeLayer('https://github.com/rohitlohar45/sih/blob/main/map.json', subgroup1).addTo(map),
            realtime2 = createRealtimeLayer(data, subgroup2);

            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php">USGS Earthquake Hazards Program</a>, &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.control.layers(null, {
                'Earthquakes 2.5+': realtime1,
                'All Earthquakes': realtime2
            }).addTo(map);

            realtime1.once('update', function() {
                map.fitBounds(realtime1.getBounds(), {maxZoom: 3});
            });
            var greenIcon = L.icon({
                iconUrl: './assets/images/icon.png',
  
                iconSize:     [38, 38], // size of the icon
                shadowSize:   [50, 64], // size of the shadow
                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                shadowAnchor: [4, 62],  // the same for the shadow
                popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
            });

            
            for (let i = 0; i< data.features.length; i++) {
            
            if(data.features[i].properties.mag >3){
            }else{
                L.marker([data.features[i].geometry.coordinates[0], data.features[i].geometry.coordinates[1]], {icon: greenIcon}).addTo(map);    
                console.log(i +". "+ data.features[i].geometry.coordinates[0] + " " +  data.features[i].geometry.coordinates[1]);
            }
            L.geoJSON(data).addTo(map)

            }

            // console.log(count + " " + data.features.length);

        })




