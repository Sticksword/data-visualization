var data = [{
    x: '25%',
    y: '25%',
    r: '5%',
    c: 'red'
}, {
    x: '50%',
    y: '50%',
    r: '5%',
    c: 'green'
}, {
    x: '75%',
    y: '75%',
    r: '5%',
    c: 'blue'
}];

var canvas = d3.select('#canvas');

var circles = canvas
    .selectAll('circle')
    .data(data);

circles
    .enter()
    .append('circle')
    .attr('cx', function(d) {
        return d.x;
    })
    .attr('cy', function(d) {
        return d.y;
    })
    .attr('fill', function(d) {
        return d.c;
    })
    .attr('r', function(d) {
        return d.r;
    });

$("#canvas").click(function() {

    // reset the `data` array with new circles:
    var data = [{
        x: '33%',
        y: '33%',
        r: '5%',
        c: 'orange'
    }, {
        x: '66%',
        y: '66%',
        r: '5%',
        c: 'cyan'
    }, {
        x: '25%',
        y: '25%',
        r: '5%',
        c: 'magenta'
    }];

    var circles = canvas
        .selectAll('circle')
        .data(data);

    // update (x,y) coordinates of existing elements:
    circles
        .transition()
        .attr('cx', function(d) {
            return d.x;
        })
        .attr('cy', function(d) {
            return d.y;
        });

    // create new elements:
    circles
        .enter()
        .append('circle')
        .attr('cx', function(d) {
            return d.x;
        })
        .attr('cy', function(d) {
            return d.y;
        })
        .attr('fill', function(d) {
            return d.c;
        })
        .attr('r', 0)
        .transition()
        .attr('r', function(d) {
            return d.r;
        });

    // remove old elements:
    circles
        .exit()
        .transition()
        .attr('r', 0)
        .remove();

});