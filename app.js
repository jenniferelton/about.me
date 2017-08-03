alert('Hello');

function askCoding() {
  var years = prompt('How many years have you been coding?');
  console.log( 'They have been coding: ' + years );
  prompt( 'You have been coding for ' + years + '?');
}
askCoding();

function askLearning() {
  var current = prompt( 'what are you currently learning?');
  alert("Lets hope I get as good at " + current + 'as you are! ');
  console.log( 'They are currently learning ' + current);
}
askLearning();

function askBorn() {
  alert('Hello');
  var answer = 'England';
  for( var i = 0; i < 4; i ++ ) {
    var born = prompt( 'What country was I born in?' );
    console.log('What country was I born?');
    if (born === 'england')str.toUpperCase;  {
      alert('You are correct!');
      break;
    }
  }
}
askBorn();