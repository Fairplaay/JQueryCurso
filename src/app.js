import page from 'page';
import { getShows, searchShows } from 'src/api-tvmaze/index.js';
import {renderShows, renderSearch} from 'src/app-container/render/index.js';
import { $loader } from 'src/app-container/index.js';
import 'src/api-search/'
import qs from 'qs';


page('/', function (ctx, next) {
	if (!localStorage.shows) {
		getShows((shows) => 
			localStorage.shows = JSON.stringify(shows),
			renderShows(shows))
	}else{
		getShows((shows) => renderShows(JSON.parse(localStorage.shows)));
	};
});

page('/search', function (ctx, next) {
	const busqueda = qs.parse(ctx.querystring)
    searchShows(busqueda.q,function (res) {
         var shows = res.map(function (el) {
            return el.show;
          })
         renderSearch(shows);   
   	})
});
page()