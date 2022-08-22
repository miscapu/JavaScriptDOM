/*
* ========================
* Finding HTML Elements with DOM
* ========================
* */
// Use document.getElementById()
function showMultiplication( a, b )
{
    return document.getElementById( 'demo1' ).innerHTML="The multiplication of " + a + " and " + b + " is: " + a * b;
}

// Use document.getElementByTagName
function firstElement()
{
    let listNames   =   document.getElementsByTagName( 'li' );
    document.getElementById( 'element1' ).innerHTML=listNames[0].innerHTML;
}

function secondElement()
{
    let listNames   =   document.getElementsByTagName( "li" );
    document.getElementById( 'element2' ).innerHTML=listNames[1].innerHTML;
}

function thirdElement()
{
    let listNames   =   document.getElementsByTagName( "li" );
    document.getElementById( 'element3' ).innerHTML=listNames[2].innerHTML;
}