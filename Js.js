function addition() {
    var a = parseInt(document.getElementById('num').value);
    var b = parseInt(document.getElementById('num2').value);

    if (isNaN(a)==true) a=0;
    if (isNaN(b)==true) b=0;

    var c = a + b;

    document.getElementById('result').innerHTML = c;
}


function JS_Click() {
    content.style.backgroundColor = "green";
}

