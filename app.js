alert('Hello');
var answer = 'England';
for( var i = 0; i < 4; i ++ ) {
  var born = prompt( 'What country was I born in?' );
  console.log('What country was I born?');
  if (born === 'England') {
    alert('You are correct!');
    break;
  }
}
