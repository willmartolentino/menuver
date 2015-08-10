(function() {
	$.fn.menuver = function() {
		var content = $( '.menuver-content' ); 

		this.on( 'mouseenter', function( e ) {
			e.preventDefault();

			content.slideToggle( 'slow' ).toggleClass( 'show' );
		});
	}

	$( '.menuver' ).menuver();
})();