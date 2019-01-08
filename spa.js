var app = new Vue({
    el: '#app',
    data : {
        places: [],
        addForm: false,
        cname : "",
        clat : 0,
        clng : 0,
        methodDefault : true,
        temperature : 0,
        ctemp : 0,
        coolrate : 0,
        population : 0,
        giter : 0,
        solution : 0
    }
});

var mymap = L.map('mapid').setView([50.004, 21.01], 4);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

function drawLines(heap, c) {
    var lays = [];
    var i = 0;
    for(i;i<heap.length;i++)
    {
        lays.push([heap[i].lat,heap[i].lng]);
    }
    var polyline = L.polyline(lays, {color: c}).addTo(mymap);
}

function Place(name, lat, lng) {
    this.name = name;
    this.lat = lat;
    this.lng = lng;

}

function placeAdd() {
    app.places.push(new Place(app.cname, app.clat, app.clng));
    var marker = L.marker([app.clat, app.clng]).addTo(mymap);
    marker.bindPopup(app.cname);
    app.addForm = false;
    app.cname = "";
    app.clat = "";
    app.clng = "";
}

var popup = L.popup();

var addButton = "<button type=\"button\" onclick='app.addForm = true;'>Dodaj!</button> "

function onMapClick(e) {
    app.clat = e.latlng.lat.toFixed(3);
    app.clng = e.latlng.lng.toFixed(3);
    popup
        .setLatLng(e.latlng)
        .setContent("Wybrałeś współrzędne " + app.clat + " x " + app.clng + "<br>" + addButton)
        .openOn(mymap);
}

mymap.on('click', onMapClick);