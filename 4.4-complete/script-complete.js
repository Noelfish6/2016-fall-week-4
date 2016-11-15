console.log('4.3');

var margin = {t:100,r:100,b:100,l:100};
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

var i = 0;

setInterval(runTrial,50);

function runTrial(){
    if(i >= numOfTrials){ return; }

    var result = Math.random();

    plot1.append('circle')
        .attr('cy',height/2+(Math.random() -.5)*50)
        .attr('cx',result/1 * width)
        .attr('r',10)
        .style('fill','#F5EB91')
        .transition()
        .duration(300)
        .style('fill','#2A3035')
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
        .style('fill','#F5EB91')
        .transition()
        .duration(300)
        .style('fill','#F5EB91')
        .style('fill-opacity',.5)
        .attr('r',3);

    plot2.append('circle')
        .attr('cy',height/2+(Math.random() -.5)*50)
        .attr('cx',normalDist2()/1 * width)
        .attr('r',10)
        .style('fill','#8AB07F')
        .transition()
        .duration(300)
        .style('fill','#8AB07F')
        .style('fill-opacity',.5)
        .attr('r',3);

    plot2.append('circle')
        .attr('cy',height/2+(Math.random() -.5)*50)
        .attr('cx',normalDist3()/1 * width)
        .attr('r',10)
        .style('fill','#3A4E4F')
        .transition()
        .duration(300)
        .style('fill','#3A4E4F')
        .style('fill-opacity',.5)
        .attr('r',3);


    j++;
}
