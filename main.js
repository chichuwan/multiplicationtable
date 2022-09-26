function performCalculations(num1, num2){

    num1 = Number(num1);
    num2 = Number(num2);

    document.getElementById('additionOutput').innerText = num1+" + "+num2+" = "+(num1+num2);

    document.getElementById('subtractionOutput').innerText = num1+" - "+num2+" = "+ (num1-num2);

    document.getElementById('multiplicationOutput').innerText = num1+" x "+num2+" = "+ (num1*num2);

    document.getElementById('divisionOutput').innerText = num1+" / "+num2+" = "+ (num1/num2);

}

function makeMultiplcationTable(num1){

    num1 = Number(num1);
    tableName = ("Table for: ");


    document.getElementById('tableName').innerText = tableName + num1;

    document.getElementById('a').innerText = num1 + "x" + "1";
    document.getElementById('b').innerText = (num1*1);

    document.getElementById('c').innerText = num1 + "x" + "2";
    document.getElementById('d').innerText = (num1*2);

    document.getElementById('e').innerText = num1 + "x" + "3";
    document.getElementById('f').innerText = (num1*3);

    document.getElementById('g').innerText = num1 + "x" + "4";
    document.getElementById('h').innerText = (num1*4);

    document.getElementById('i').innerText = num1 + "x" + "5";
    document.getElementById('j').innerText = (num1*5);

    document.getElementById('k').innerText = num1 + "x" + "6";
    document.getElementById('l').innerText = (num1*6);

    document.getElementById('m').innerText = num1 + "x" + "7";
    document.getElementById('n').innerText = (num1*7);

    document.getElementById('o').innerText = num1 + "x" + "8";
    document.getElementById('p').innerText = (num1*8);

    document.getElementById('q').innerText = num1 + "x" + "9";
    document.getElementById('r').innerText = (num1*9);

    document.getElementById('s').innerText = num1 + "x" + "10";
    document.getElementById('t').innerText = (num1*10);
}