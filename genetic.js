function populi()
{
    var population = [];
    var iter = app.giter;
    var currentHeap = app.places;
    var i = 1;


    population.push(currentHeap);
    for(i;i<app.population;i++)
    {
        population.push(mutate(currentHeap));
    }

    i=0;
    for(i;i<iter;i++) {
        population.sort(function (a, b) {
            return distance(a) - distance(b);
        });
        var j =0;
        var newPopulation = [];
        for(j;j<population.length;j++)
        {
            if(j%2 == 0)newPopulation.push(population[j]);
            else newPopulation.push(mutate(population[Math.floor(j/2)]));
        }
        drawLines(population[0],'red');
    }
    app.places = population[0];
    drawLines(population[0],'green');
    app.solution = distance(population[0]);
}


function mutate(heap) {
    s = heap.length;
    r1 = Math.floor(Math.random()*s);
    r2 = Math.floor(Math.random()*s);
    newHeap = arswap(r1,r2,heap);
    console.log("MUTEME");
    return newHeap;
}