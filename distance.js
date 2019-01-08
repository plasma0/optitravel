function distance(heap) {
    if(heap.length < 2)return 0;
    var i = 1;
    var dist = 0;
    for (i;i<heap.length;i++)
    {
        dist += s_dist(heap[i-1],heap[i]);
    }
    return dist/1000;
}

function s_dist(x,y) {

    if (Number.prototype.toRadians === undefined) {
        Number.prototype.toRadians = function() { return this * Math.PI / 180; };
    }

    var lat1 = x.lat;
    var lon1 = x.lng;
    var lat2 = y.lat;
    var lon2 = y.lng;

    var R = 6371e3; // metres
    var φ1 = asRad(lat1);
    var φ2 = asRad(lat2);
    var Δφ = asRad(lat2-lat1);
    var Δλ = asRad(lon2-lon1);

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = R * c;

    return d;
}

function asRad(n) {
    return n * Math.PI / 180;
}