'use strict';


function printDate()
{
    let currentdate = new Date();
    return document.write(currentdate);
}

function lightDark()
{
    const StyleMode = prompt("Light or dark mode?");

    if(stylePreference == 'dark')
     {
        document.write('<link rel="stylesheet" href="dark-style.css"></link>');
     }
     else
     {
        document.write('<link rel="stylesheet" href="style.css"></link>');
     }

    return StyleMode;
}

function zoidberg()
{

    if(confirm("Do you like Zoidberg?"))
    {
        document.write('<html><img src="Zoidberg-Jesus.jpg" alt="You have good taste."></img></html>')
    }
    else
    {
        document.write('<html><img src="why-not-zoidberg-a3d22c7060.jpg" alt="We\'re ashamed of you"></img></html>')
    }

    return;
}


