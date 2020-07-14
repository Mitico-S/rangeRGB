var red, green, blue;

var $redRange = document.querySelector('#red'),
    $redValue = document.querySelector('#redSpan');

$redRange.addEventListener('input', function() {
  $redValue.textContent = this.value;
});

var $greenRange = document.querySelector('#green'),
    $greenValue = document.querySelector('#greenSpan');

$greenRange.addEventListener('input', function() {
  $greenValue.textContent = this.value;
});

var $blueRange = document.querySelector('#blue'),
    $blueValue = document.querySelector('#blueSpan');

$blueRange.addEventListener('input', function() {
  $blueValue.textContent = this.value;
});





//pegar o valor dos range

//armazenar em variáveis

//pegar o valor do background

//alterar ele somando os valores de range
