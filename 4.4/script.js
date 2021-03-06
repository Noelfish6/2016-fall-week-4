console.log('4.3');

var margin = {t:50,r:50,b:50,l:50};
var width = document.getElementsByClassName('canvas')[0].clientWidth - margin.l - margin.r,
    height = document.getElementsByClassName('canvas')[0].clientHeight - margin.t - margin.b;

console.log(width,height);

var numOfTrials = 500;

//Part 1: visualize Math.random()
var plot1 = d3.select('#random').select('.canvas')
    .append('svg')
    .attr('width',width+margin.l+margin.r)
    .attr('height',height+margin.t+margin.b)
    .append('g')
    .attr('transform','translate('+ margin.l+','+margin.t+')');

/*for(var i = 0; i<numOfTrials; i++){
    var result = Math.random();

    plot1.append('circle')
        .attr('cy',height/2+(Math.random() -.5)*50)
        .attr('cx',result/1 * width)
        .attr('r',3)
        .style('fill-opacity',.2);
}*/
var i = 0;

setInterval(runTrial,50);

function runTrial(){
    if(i >= numOfTrials){ return; }

    var result = Math.random();

    plot1.append('circle')
        .attr('cy',height/2+(Math.random() -.5)*50)
        .attr('cx',result/1 * width)
        .attr('r',10)
        .style('fill','red')
        .transition()
        .duration(300)
        .style('fill','black')
        .style('fill-opacity',.5)
        .attr('r',3);

    i++;
}



//Part 2: visualize a normal distribution
var plot2 = d3.select('#normal-dist').select('.canvas')
    .append('svg')
    .attr('width',width+margin.l+margin.r)
    .attr('height',height+margin.t+margin.b)
    .append('g')
    .attr('transform','translate('+ margin.l+','+margin.t+')');

var j = 0;
var normalDist = d3.randomNormal(.5,.1),
    normalDist2 = d3.randomNormal(.5,.25),
    normalDist3 = d3.randomNormal(.5,.5);

setInterval(runNormalDist,50);

function runNormalDist(){
    if(j >= numOfTrials){ return; }

    var result = normalDist();

    plot2.append('circle')
        .attr('cy',height/2+(Math.random() -.5)*50)
        .attr('cx',result/1 * width)
        .attr('r',10)
        .style('fill','blue')
        .transition()
        .duration(300)
        .style('fill','blue')
        .style('fill-opacity',.5)
        .attr('r',3);

    plot2.append('circle')
        .attr('cy',height/2+(Math.random() -.5)*50)
        .attr('cx',normalDist2()/1 * width)
        .attr('r',10)
        .style('fill','red')
        .transition()
        .duration(300)
        .style('fill','red')
        .style('fill-opacity',.5)
        .attr('r',3);

    plot2.append('circle')
        .attr('cy',height/2+(Math.random() -.5)*50)
        .attr('cx',normalDist3()/1 * width)
        .attr('r',10)
        .style('fill','green')
        .transition()
        .duration(300)
        .style('fill','green')
        .style('fill-opacity',.5)
        .attr('r',3);


    j++;
}
