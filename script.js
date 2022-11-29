

/*set up Leaflet map*/

function setUpMap() {
    const successCallback = (position) => {
        console.log(position)
        
        /*get user latitude and longitude*/
        
        let userLat = position.coords.latitude;
        let userLong = position.coords.longitude;
        let map = L.map('map').setView([userLat, userLong], 15);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minZoom: 10,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        
        /*map userLocation on Leaflet map*/
        var userMarker = L.marker([userLat, userLong]);
        userMarker.addTo(map);
        userMarker.bindPopup("This may or may not be where you are.").openPopup();

        /*business type locations
        -----Since I can't make a Foursquare account for whatever reason, I made random locations instead
        */
        let PlaceBoOne = L.marker([(userLat - .010), (userLong - .010)]).bindPopup("One")
        let PlaceBoTwo = L.marker([(userLat - .029), (userLong + .011)]).bindPopup("Two")
        let PlaceBoThree = L.marker([(userLat + .022), (userLong - .006)]).bindPopup("Three")
        let PlaceBoFour = L.marker([(userLat + .011), (userLong + .004)]).bindPopup("Four")
        let PlaceBoFive = L.marker([(userLat - .03), (userLong - .022)]).bindPopup("Five")
        /*adding options*/

        let userSpot = L.layerGroup([userMarker])
        let RandomLocations = L.layerGroup([PlaceBoOne, PlaceBoTwo, PlaceBoThree, PlaceBoFour, PlaceBoFive])
        var overlayMaps = {
            "Location": userSpot,
            "Places": RandomLocations,
        };
        L.control.layers(null, overlayMaps).addTo(map);
    }
    
    const errorCallback = (error) => {
        console.log(error);
    }
    
    /*obtain users current location*/
    
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

setUpMap();




