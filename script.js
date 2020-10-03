function calculate() {
    var first = parseInt(document.getElementById('first').value);
    var oper = document.getElementById('operators').value;
    
    var second = parseInt(document.getElementById('second').value);
    
    if(oper === '+'){
        document.getElementById('result').value = first+second;
    }
    
    if(oper === '-'){
        document.getElementById('result').value = first-second;
    }
    
    if(oper === '/'){
        document.getElementById('result').value = first/second;
    }
    
    if(oper === '*'){
        document.getElementById('result').value = first*second;
    }
}