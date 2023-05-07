(function () {

var names = ["FRANK", "Joo", "Jed", "mali", "ali", "jasmin", "Larry", "Mohammed", "Patric"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
