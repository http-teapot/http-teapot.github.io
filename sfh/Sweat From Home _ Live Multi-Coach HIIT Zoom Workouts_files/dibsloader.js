var _dibs_config = _dibs_config || {};

(function(){
  if (document.currentScript) {
    var currentScript = document.currentScript;
  } else {
    var scripts = document.getElementsByTagName('script');
    var index = scripts.length - 1;
    var currentScript = scripts[index];
  }
  var queryString = currentScript.src.replace(/^[^\?]+\??/,'');
  _dibs_config.studio_id = queryString.split('=')[1];
  _dibs_config.new_id_format = 1;
  function loadDibs() {
       var d = document.createElement('div');
       d.setAttribute('id', 'dibs-container');
       document.body.appendChild(d);
       var e = document.createElement('script');
       e.setAttribute('language', 'javascript');
       e.setAttribute('type', 'text/javascript');
       e.setAttribute('src', '//www.ondibs.com/widget/dibs.js');
       console.log(e.addEventListener)
       e.addEventListener('error', function() {
        var data = {
          dibsStudioId: _dibs_config.studio_id,
          locationObj: JSON.stringify(window.location, null, 2)
        };
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://www.ondibs.com/webhooks/errors/dibsloader');
        xhr.setRequestHeader('Content-type', 'applicaton/json');
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.send(data);
       });
       document.body.appendChild(e);
  }
  var checkBody = setInterval(function() {
    if(document.body) {
      clearInterval(checkBody);
      loadDibs();
    }
  }, 100)
})();
