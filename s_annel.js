arswap = function(a,b,heap){
    var ch = heap;
    var tmp=ch[a];
    ch[a]=ch[b];
    ch[b]=tmp;
    return ch;
};

function annel() {
    var currentHeap = app.places;
    var s = currentHeap.length;
    var best = currentHeap;
    var newHeap = [];
    var temperature = app.temperature;
    var r1, r2;
    var cr = app.coolrate;

    gauge.maxValue = temperature;

    while (temperature > 1)
    {
        r1 = Math.floor(Math.random()*s);
        r2 = Math.floor(Math.random()*s);
        newHeap = arswap(r1,r2,currentHeap);

        if(acceptance(distance(newHeap),distance(currentHeap),temperature) > Math.random())
        {
            currentHeap = newHeap;
        }

        if(distance(currentHeap) < distance(best))
        {
            best = currentHeap;
            app.solution = distance(best);
        }

        drawLines(best,'red');

        temperature *= 1-cr;
        app.ctemp = temperature;
        gauge.set(temperature);
        console.log("COOOLING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }
    app.places = best;
    drawLines(best,'green');
    app.solution = distance(best);
    console.log(best);
}

function acceptance(nd,od,t1) {
    if(nd > od) return 1;
    return Math.exp((od - nd) / t1)
}