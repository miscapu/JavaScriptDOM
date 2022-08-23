/*
* =============================
* Validate form
* =============================
* */
function validateForm()
{
    let x   =   document.forms["myForm"]["fname"].value;
    if ( x  === "" ){
        alert( "Name must be filled out" );
        return false;
    }
}

/*
* ======================
* submit number
* =====================
* */
function validateNumber()
{
    /**
     * find element for validate
     */
    let numberInput =   document.getElementById( 'number' ).value;
    /**
     * declare variable text for show validations
     */
    let text;

    if ( isNaN(numberInput) || numberInput < 1 || numberInput > 10 )
    {
        text        =   "Input not valid!";
    }else
        {
            text    =   "Input ok";
        }
    document.getElementById("demo").innerHTML= text;
}