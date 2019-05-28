
function createNode(element){

	return document.createElement(element);
}

function append(parent,el){
	return parent.appendChild(el);
}

const ul = document.getElementById('talli');
const url = "http://api.tvmaze.com/schedule?result=10";

 fetch(url)
 .then((resp) => resp.json())
 .then(function(data){
 	let shows = data.results;

 	return shows.map(function(shows){
 		let li =createNode('li'),
 		img = createNode('img'),
 		span = createNode('span');

 		span.innerHTML = `${shows.image},${shows.name};
 		                   `
 		    append(li,img);               
 		    append(li,span);
 		    append(ul,li);

 	})
 }) 
 .catch( function(error){
 	consle.log(JSON.stringify(error));
 })