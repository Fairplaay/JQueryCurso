export function getShows(fn) {
	const url = 'http://api.tvmaze.com/search/shows';
	fetch(url)
		.then(res => res.json())
		.then(data => fn(data))
		.catch(function(e){console.log(e);});
}

export function searchShows(busqueda, fn) {
	const url = `http://api.tvmaze.com/search/shows?q=${busqueda}`;
	fetch(url)
		.then(res => res.json())
		.then(data => fn(data))
		.catch(function(e){console.log(e);});
}