import $ from 'jquery';

export const $container = $('#app-body');

export const $loader= $('#app-body').find('.loader');

$('#app-body').on('click', 'a.like',function(ev){
		ev.preventDefault();
		var $this = $(this);
		$this.toggleClass('text');
		$this.closest('#liked').toggleClass('liked')
	});
