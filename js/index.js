window.addEventListener('load', pickColor);

var body;

body = document.querySelector('.body');


    function pickColor(){
        var $redRange = document.querySelector('#red'),
            $redValue = document.querySelector('#redSpan');

        $redRange.addEventListener('input', function() {
        $redValue.textContent = this.value;
        body.style.backgroundColor = `rgb(${$redRange.value},${$greenRange.value}, ${$blueRange.value})`;
   
        });

        var $greenRange = document.querySelector('#green'),
            $greenValue = document.querySelector('#greenSpan');

        $greenRange.addEventListener('input', function() {
        $greenValue.textContent = this.value;
        body.style.backgroundColor = `rgb(${$redRange.value},${$greenRange.value}, ${$blueRange.value})`;
        });

        var $blueRange = document.querySelector('#blue'),
            $blueValue = document.querySelector('#blueSpan');

        $blueRange.addEventListener('input', function() {
        $blueValue.textContent = this.value;
        body.style.backgroundColor = `rgb(${$redRange.value},${$greenRange.value}, ${$blueRange.value})`;
        });
        
        




            
            
        
        }

  


//armazenar em variáveis

//pegar o valor do background

//alterar ele somando os valores de range
