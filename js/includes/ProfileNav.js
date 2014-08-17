(function () {
  var el = document.getElementById('ProfileSidebar-hamburger');
  var sidebarClasses = document.getElementById('ProfileSidebar').className;

  if (el.addEventListener) {
    el.addEventListener('click', function (event) {
      var classes = document.getElementById('ProfileSidebar').className;
      event.preventDefault();

      if (classes.indexOf('is-expanded') !== -1) {
        document.getElementById('ProfileSidebar').className = sidebarClasses;
      } else {
        document.getElementById('ProfileSidebar').className += ' is-expanded';
      }
    }, false);
  } else {
    el.style.display = 'none';
  }
})();
