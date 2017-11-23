    function add(x,y){
        var sum = x+y;
        return sum;
    }

    function multiply(x,y) {
        var multiple = x*y;
        return multiple;
    }

    function substract(x,y){
        var substracted = x-y;
        return substracted;
    }

    function divide(x,y){
        return x/y
    }
    
    var zero = document.getElementById('zero');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var four = document.getElementById('four');
    var five = document.getElementById('five');
    var six = document.getElementById('six');
    var seven = document.getElementById('seven');
    var eight = document.getElementById('eight');
    var nine = document.getElementById('nine');

    var ac = document.getElementById('ac');
    var ce = document.getElementById('ce');
    var opAdd = document.getElementById('op-add');
    var opMultiply = document.getElementById('op-multiply');
    var opSubstract = document.getElementById('op-substract');
    var opDivide = document.getElementById('op-divide');
    var opResult = document.getElementById('op-result');
    var dot = document.getElementById('dot');

    var screen = document.getElementById('screen');
    
    zero.addEventListener('click', function(e){
        valueClick = e.target.innerText;
        updateString(valueClick);
    });
    one.addEventListener('click', function(e){
        valueClick = e.target.innerText;
        updateString(valueClick);
    });
    two.addEventListener('click', function(e){
        valueClick = e.target.innerText;
        updateString(valueClick);
    });
    three.addEventListener('click', function(e){
        valueClick = e.target.innerText;
        updateString(valueClick);
    });
    four.addEventListener('click', function(e){
        valueClick = e.target.innerText;
        updateString(valueClick);
    });
    five.addEventListener('click', function(e){
        valueClick = e.target.innerText;
        updateString(valueClick);
    });
    six.addEventListener('click', function(e){
        valueClick = e.target.innerText;
        updateString(valueClick);
    });
    seven.addEventListener('click', function(e){
        valueClick = e.target.innerText;
        updateString(valueClick);
    });
    eight.addEventListener('click', function(e){
        valueClick = e.target.innerText;
        updateString(valueClick);
    });
    nine.addEventListener('click', function(e){
        valueClick = e.target.innerText;
        updateString(valueClick);
    });
    ac.addEventListener('click', function(e){
        valueClick = e.target.innerText;
        updateString(valueClick);
    });
    ce.addEventListener('click', function(e){
        valueClick = e.target.innerText;
        updateString(valueClick);
    });
    opAdd.addEventListener('click', function(e){
        valueClick = e.target.innerText;
        updateString(valueClick);
    });
    opMultiply.addEventListener('click', function(e){
        valueClick = e.target.innerText;
        updateString(valueClick);
    });
    opSubstract.addEventListener('click', function(e){
        valueClick = e.target.innerText;
        updateString(valueClick);
    });
    opDivide.addEventListener('click', function(e){
        valueClick = e.target.innerText;
        updateString(valueClick);
    });
    opResult.addEventListener('click', function(e){
        valueClick = e.target.innerText;
        updateString(valueClick);
    });
    dot.addEventListener('click', function(e){
        valueClick = e.target.innerText;
        updateString(valueClick);
    });

    let recentlyCalculated = false;
    let displayScreen= "";
    let calculalorString ="";
    let op = ["+","-","/","*"]
    let numbers = ["0","1","2","3","4","5","6","7","8","9"]

    function resetStrings(){
        displayScreen= "";
        calculalorString ="";
    }

    function updateDisplay(){
        screen.innerText = displayScreen
    }

    function ceStrings(){
        if (calculalorString.length >0) {
            if (op.includes(calculalorString.slice(-1))){;
            displayScreen= "";
            calculalorString = calculalorString.slice(0, -1);
            } else {
            displayScreen = displayScreen.slice(0, -1);
            calculalorString = calculalorString.slice(0, -1);
            }
        } }
    