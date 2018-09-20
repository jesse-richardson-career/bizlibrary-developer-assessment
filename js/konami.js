
// from https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html


  function onKonamiCode(cb) {
    var input = '';
    var key = '38384040373937396665';
    document.addEventListener('keydown', function (e) {
      input += ("" + e.keyCode);
      if (input === key) {
        return cb();
      }
      if (!key.indexOf(input)) return;
      input = ("" + e.keyCode);
    });
  }

  onKonamiCode(function () {
     $(".easter-egg").show();
  })
