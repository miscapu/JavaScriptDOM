/*
* ========================
* @function sumNumbers
* =======================
* */
function sumNumbers( a, b )
{
    return document.getElementById(  "demo" ).innerHTML="The sum of numbers " + a + " and " + b + " is: " + (a + b);
}


/*
* =========================
* @function build menu main
* =========================
* */
function buildMenuHome()
{
    let $liElement  =   document.getElementsByTagName( 'li' );
    document.getElementById( 'home' ).innerHTML=$liElement[0].innerHTML;
}

function buildMenuAbout()
{
    let $liElement  =   document.getElementsByTagName( 'li' );
    document.getElementById( 'about' ).innerHTML=$liElement[1].innerHTML;
}

function buildMenuContact()
{
    let $liElement  =   document.getElementsByTagName( 'li' );
    document.getElementById( 'contact' ).innerHTML=$liElement[2].innerHTML;
}