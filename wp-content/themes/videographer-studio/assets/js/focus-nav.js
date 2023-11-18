( function( window, document ) {
  function videographer_studio_keepFocusInMenu() {
    document.addEventListener( 'keydown', function( e ) {
      const videographer_studio_nav = document.querySelector( '.sidenav' );
      if ( ! videographer_studio_nav || ! videographer_studio_nav.classList.contains( 'open' ) ) {
        return;
      }
      const elements = [...videographer_studio_nav.querySelectorAll( 'input, a, button' )],
        videographer_studio_lastEl = elements[ elements.length - 1 ],
        videographer_studio_firstEl = elements[0],
        videographer_studio_activeEl = document.activeElement,
        tabKey = e.keyCode === 9,
        shiftKey = e.shiftKey;
      if ( ! shiftKey && tabKey && videographer_studio_lastEl === videographer_studio_activeEl ) {
        e.preventDefault();
        videographer_studio_firstEl.focus();
      }
      if ( shiftKey && tabKey && videographer_studio_firstEl === videographer_studio_activeEl ) {
        e.preventDefault();
        videographer_studio_lastEl.focus();
      }
    } );
  }
  videographer_studio_keepFocusInMenu();
} )( window, document );