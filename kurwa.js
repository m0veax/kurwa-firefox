console.log('kurwafie this website :D');

document.querySelectorAll('*').forEach(function(element) {
  var content = element.innerHTML.trim().replace(/ +(?= )/g, '');
  var wordList = content.split(' ');
  var numberOfKurwa = Math.max(1, Math.round(wordList.length * 0.2));
  var randomPosition;
  var i;

  if (content.indexOf('<') === -1 && wordList.length > 1) {
    while (numberOfKurwa--) {
      randomPosition = Math.max(
        1, 
        Math.floor(Math.random() * wordList.length)
      );
      wordList.splice(randomPosition, 0, 'kurwa');
    }
    element.innerHTML = wordList.join(' ');
  }
});

