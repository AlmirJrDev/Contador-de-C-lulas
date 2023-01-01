document.getElementById('sum-button').addEventListener('click', function() {
    // Obtenha os valores dos inputs
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;
    var num5 = document.getElementById('num5').value;
    var num6 = document.getElementById('num6').value;
    var num7 = document.getElementById('num7').value;
    var num8 = document.getElementById('num8').value;
    var num9 = document.getElementById('num9').value;
    var num10 = document.getElementById('num10').value;
    var num11 = document.getElementById('num11').value;
    var num12 = document.getElementById('num12').value;
    
    // Converta os valores para números inteiros
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);
    num4 = parseInt(num4);
    num5 = parseInt(num5);
    num6 = parseInt(num6);
    num7 = parseInt(num7);
    num8 = parseInt(num8);
    num9 = parseInt(num9);
    num10 = parseInt(num10);
    num11 = parseInt(num11);
    num12 = parseInt(num12);
    // Some os números
    var result = (num1 * num2) + (num3 * num4) + (num5 * num6) + (num7 * num8) + (num9 * num10) + (num11 * num12);
    
    // Exiba o resultado
    document.getElementById('result').innerHTML = result;

  
  });
