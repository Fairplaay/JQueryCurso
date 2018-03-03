import $ from 'jquery';
import page from 'page';
import { $container } from 'src/app-container/index.js';
$('#search')
    .submit(function (ev) {
      ev.preventDefault();
      var busqueda = $(this)
        .find('input[type="search"]')
        .val();
    $container.find('.content').remove();
    page(`/search?q=${busqueda}`)
	});