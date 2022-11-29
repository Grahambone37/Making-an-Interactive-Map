/*button event listeners*/
let coffeeButton = document.querySelector('#coffee-button');
let restaurantButton = document.querySelector('#restaurant-button');
let hotelButton = document.querySelector('#hotel-button');
let marketButton = document.querySelector('#market-button');

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
        let userMarker = L.marker([userLat, userLong]).addTo(map);
        userMarker.bindPopup("This may or may not be where I am").openPopup();
    }
    const errorCallback = (error) => {
        console.log(error);
    }
    /*obtain users current location*/
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}
setUpMap();



/*business type locations*/

