import $ from 'jquery'
$(function () {
	/*
	**Submit form
	*/
	const $container = $('#app-body');
	const $busqueda = $('#busqueda');
	function renderShows(shows){
		$container.find('.loader').remove();
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
				$container.append($article.fadeIn(3000));
			})
	}
	function renderSearch(shows){
		shows.forEach(function(show){
						var article   = tempalte
							.replace(':name:', show.name ? show.name : '')
							.replace(':summary:', show.summary ? show.summary : '')
							.replace(':image:', show.image ? show.image.medium : '')
							.replace(':premiered:', show.premiered ? show.premiered : '')
							.replace(':runtime:', show.runtime ? show.runtime : '')
							.replace(':status:', show.status ? show.status : '')
							.replace(':alt:', show.name ? show.name + 'logo' : '')
							.replace(':Officialsite:', show.officialSite ? show.officialSite : '');
				var $article = $(article);
				$article.hide();
				$busqueda.append($article.fadeIn(3000));
			})
	}

	$container.on('click', 'a.like',function(ev){
		ev.preventDefault();
		var $this = $(this);
		$this.toggleClass('text');
		$this.closest('#liked').toggleClass('liked')
	});


	$('#search')
    .submit(function (ev) {
      ev.preventDefault();
      var busqueda = $(this)
        .find('input[type="search"]')
        .val();
		$container.remove()
		$.ajax({
        url: 'http://api.tvmaze.com/search/shows',
        data: { q : busqueda },
        success: function (res) {
         var shows = res.map(function (el) {
            return el.show;
          })
         renderSearch(shows);   
        }
      })
    })
	var tempalte = '<div class="row filas img shows-tv">'+
						'<div class="col-12 col-md-3 text-center">'+
							'<img src=":image:" alt=":alt:">'+
						'</div>'+
					'<div class="col-12 col-md-9 shows-tv">'+
						'<div id="liked" class="row">'+
							'<div class="col-12 col-md-7 text-center text-md-left">'+
								'<h4>:name:</h4>'+
								'<p>:summary:'+
								'<a href="#" class="badge badge-info like">Like</a>'+
							'</div>'+
							'<div class="card col-12 col-md-5">'+
								'<div class="card bg-light mb-3" style="max-width: 18rem;">'+
									'<div class="card-header">Show Info</div>'+
										'<div class="card-body">'+
											'<h5 class="card-title"> <a href=":Officialsite:">Official web</a> </h5>'+
												'<p class="card-text"> <b>Airs on: </b> :premiered: <br>'+
												'<b>Runtime: </b>:runtime:<br>'+
												'<b>Status: </b>:status: <br>'+
												'<b>Rating: </b>:rating: </p> <br>'+
										'</div>'+
									'</div>'+
								'</div>'+
							'</div>	'+
						'</div>'+
					'</div>'+
					'<hr>';

	if (!localStorage.shows) {
		$.ajax('http://api.tvmaze.com/shows')
	 	.then( function (shows) {
	 	localStorage.shows=JSON.stringify(shows);

		renderShows(shows);
	})
	}else{
		renderShows(JSON.parse(localStorage.shows));
	}
})

