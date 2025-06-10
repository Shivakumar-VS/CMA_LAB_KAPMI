function add(){
    var result= eval(document.forms[0].elements[0].value) + eval(document.forms[0].elements[1].value);
    alert("SUM = "+ result)
}
function  sub( ) 
{ 
    var result = eval(document.forms[0].elements[0].value) - eval(document.forms[0].elements[1].value); 
    alert("DIFFERENCE = " + result); 
} 
function  multiply( ) 
{ 
    var result = eval(document.forms[0].elements[0].value) * eval(document.forms[0].elements[1].value); 
    alert("PRODUCT = " + result); 
} 
function  divide( ) 
{ 
    var result = eval(document.forms[0].elements[0].value) / eval(document.forms[0].elements[1].value); 
    alert("QUOTIENT = " + result); 
} 