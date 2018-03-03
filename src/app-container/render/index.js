import $ from 'jquery';
import { $container, $loader } from 'src/app-container/index.js';

var tempalte = `<div class="row filas img shows-tv">
					<div class="col-12 col-md-3 text-center">
						<img src=":image:" alt=":alt:">
					</div>
					<div class="col-12 col-md-9 shows-tv">
						<div id="liked" class="row">
							<div class="col-12 col-md-7 text-center text-md-left">
								<h4>:name:</h4>
								<p>:summary:</p>
								<a href="#" class="badge badge-info like">Like</a>
							</div>
							<div class="card col-12 col-md-5">
								<div class="card bg-light mb-3" style="max-width: 18rem;">
									<div class="card-header">Show Info
									</div>
									<div class="card-body">
										<h5 class="card-title"> <a href=":Officialsite:">Official web</a> </h5>
										<p class="card-text"> <b>Airs on: </b> :premiered: <br>
										<b>Runtime: </b>:runtime:<br>
										<b>Status: </b>:status: <br>
										<b>Rating: </b>:rating: </p> <br>
									</div>
								</div>
							</div>
						</div>	
					</div>
				</div>
				<hr>`;


export function renderShows(shows){
	$loader.remove();
	shows.forEach(function(show){
		var article   = tempalte
			.replace(':name:', show.name ? show.name : '')
			.replace(':summary:', show.summary ? show.summary : '')
			.replace(':image:', show.image ? show.image.medium : '')
			.replace(':premiered:', show.premiered ? show.premiered : '')
			.replace(':runtime:', show.runtime ? show.runtime : '')
			.replace(':status:', show.status ? show.status : '')
			.replace(':rating:', show.rating ? show.rating.average : '')
			.replace(':alt:', show.name ? show.name + 'logo' : '')
			.replace(':Officialsite:', show.officialSite ? show.officialSite : '');
	var $article = $(article);
	$article.hide();
	$container.find('.content').append($article.fadeIn(3000));	
	})
};

export function renderSearch(shows){
	shows.forEach(function(show){
		var article   = tempalte
			.replace(':name:', show.name ? show.name : '')
			.replace(':summary:', show.summary ? show.summary : '')
			.replace(':image:', show.image ? show.image.medium : '')
			.replace(':premiered:', show.premiered ? show.premiered : '')
			.replace(':runtime:', show.runtime ? show.runtime : '')
			.replace(':status:', show.status ? show.status : '')
			.replace(':rating:', show.rating ? show.rating.average : '')
			.replace(':alt:', show.name ? show.name + 'logo' : '')
			.replace(':Officialsite:', show.officialSite ? show.officialSite : '');
	var $article = $(article);
	$container.html(`<div class="content"></div>`);
	$article.hide();
	$container.find('.content').append($article.show());
	})
};