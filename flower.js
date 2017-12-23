var surface, center, petal, props, i=1, howmany = 5, petals = [], ptls, g;

surface = Snap('#paper');

center = surface.circle(400,300,90)
center.attr({fill:'#432e13'});

petal = surface.path('M85,40 C40,60,-80,335,100,300 C100,300,320,330,85 40z');

props = {
  fill:'#fee22b',
  class:'petal'
}

petal.attr(props);

/* Clone and add more petals to the DOM */
while(i < howmany){
		petals[i] = petal.clone();
		i++;	
}

ptls = Snap.selectAll('.petal');
	
Array.prototype.map.call(ptls, function(p,ind){
		var tilt, petalAttr = {};
		tilt = ind * (360 / howmany);
	   petalAttr.transform = 'rotate(' + tilt + ') translate(-60,-60)';
		p.attr(petalAttr); 
});

g = surface.g(ptls).attr({id:'petals', transform:'translate(400,300)'});

