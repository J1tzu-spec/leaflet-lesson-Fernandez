const map = L.map("map").setView(
    [8.3700, 124.8600], 13
);
L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
}
).addTo(map);



const marker = L.marker([8.37172, 124.85641]).addTo(map);
marker.bindPopup("<b>Manolo Fortich</b><p>Welcome to Bukidnon!</p>");

L.circle([8.37172, 124.85641], {
color: "blue",
fillColor: "#30a3ec",
fillOpacity: 0.3,
radius: 500
}).addTo(map);

map.on("click", function(event) {
const lat = event.latlng.lat;
const lng = event.latlng.lng;

L.popup()
.setLatLng(event.latlng)
.setContent(
"Latitude: " + lat.toFixed(5) +
"<br>Longitude: " + lng.toFixed(5)
)
.openOn(map);
});

const locations = [
{ name: "Manolo Fortich Municipality", lat: 8.37172, lng: 124.85641 },
{ name: "Kihare", lat: 8.36002, lng: 124.86543 },
{ name: "Tankulan", lat: 8.3650, lng: 124.86432 },
];

locations.forEach(function(place) {
L.marker([place.lat, place.lng]).addTo(map).bindPopup(place.name);
});