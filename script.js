async function getNumberFact() {
    param = document.getElementById('numberInput').value
    
    if (param && isPositiveInteger(param)) {
        var response;
        document.getElementById('date').innerHTML = ``;
        document.getElementById('year').innerHTML = ``;
        
        document.getElementById('dateInput').value = ''
        document.getElementById('yearInput').value = ''
        try {
            response = await fetch(`https://cors-anywhere.herokuapp.com/http://numbersapi.com/${param}`, {
                headers:{
                  'x-requested-with': 'text/plain'
                }
            });
        } catch(error) {
        }
        const text = await response.text();
        document.getElementById('number').innerHTML = `<p class="text-area"><i class="fas fa-quote-left" style="padding: 0 10px 5px 0"></i>  Here is an  interesting fact 😎 <br/>${text}</p`;
    } else {
        document.getElementById('date').innerHTML = ``;
        document.getElementById('year').innerHTML = ``;
        
        document.getElementById('dateInput').value = ''
        document.getElementById('yearInput').value = ''
        document.getElementById('number').innerHTML = `<p class="text-area" style="color: red"><i class="fas fa-quote-left" style="padding: 0 10px 5px 0"></i> 
        ${!isPositiveInteger(param) ? 'Enter a valid positive integer' : 'Input field cannot be empty'}</p`;
    }
}

async function getDateFact() {
    param = document.getElementById('dateInput').value

    if (param && isValidDate(param)) {
        var response;
        document.getElementById('number').innerHTML = ``;
        document.getElementById('year').innerHTML = ``;
    
        document.getElementById('numberInput').value = ''
        document.getElementById('yearInput').value = ''

        try {
            response = await fetch(`https://cors-anywhere.herokuapp.com/http://numbersapi.com/${param}/date`, {
                headers:{
                  'x-requested-with': 'text/plain'
                }
            });
        } catch(error) {
        }
        const text = await response.text();
        document.getElementById('date').innerHTML = `<p class="text-area"><i class="fas fa-quote-left" style="padding: 0 10px 5px 0"></i>  Here is an  interesting fact 😎 <br/>${text}</p`;
    } else {
        document.getElementById('number').innerHTML = ``;
        document.getElementById('year').innerHTML = ``;
    
        document.getElementById('numberInput').value = ''
        document.getElementById('yearInput').value = ''
    
        document.getElementById('date').innerHTML = `<p class="text-area" style="color: red"><i class="fas fa-quote-left" style="padding: 0 10px 5px 0"></i> 
        ${!isValidDate(param) ? 'Enter Valid date, Ex: mm/dd' : 'Input field cannot be empty'}</p`;
    }
}

async function getYearFact() {
    var response;
    param = document.getElementById('yearInput').value

    if (param) {
    document.getElementById('date').innerHTML = ``;
    document.getElementById('number').innerHTML = ``;

    document.getElementById('numberInput').value = ''
    document.getElementById('dateInput').value = ''
    
    try {
        response = await fetch(`https://cors-anywhere.herokuapp.com/http://numbersapi.com/${param}/year`, {
            headers:{
                'x-requested-with': 'text/plain'
            }
        });
    } catch(error) {
    }

    const text = await response.text();
    document.getElementById('year').innerHTML = `<p class="text-area"><i class="fas fa-quote-left" style="padding: 0 10px 5px 0"></i>  Here is an  interesting fact 😎 <br/>${text}</p`;
    } else {
        document.getElementById('date').innerHTML = ``;
        document.getElementById('number').innerHTML = ``;

        document.getElementById('numberInput').value = ''
        document.getElementById('dateInput').value = ''
        document.getElementById('year').innerHTML = `<p class="text-area" style="color: red"><i class="fas fa-quote-left" style="padding: 0 10px 5px 0"></i>  Input field cannot be empty</p`;
    }
}

function isValidDate(param) {
    const regEx = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/
    console.log(regEx.test(param));
    return regEx.test(param);
}

function isPositiveInteger(n) {
    return n >>> 0 === parseFloat(n);
}

function shareOnTwitter() {
    document.getElementById('twitter').href = "http://twitter.com/share?text=I am sharing on Twitter&url=https://jolly-poitras-6c41a0.netlify.app&hashtags=Number_Facts,Fun_With_Num";
}

// function shareOnInstagram() {
//     // document.getElementById('instagram').href = "http://twitter.com/share?text=I am sharing on Twitter&url=http://url goes here&hashtags=Number_Facts,Fun_With_Num";
// }

// function shareOnFacebook() {
//     document.getElementById('facebook').href = "https://www.facebook.com/dialog/feed?app_id=1389892087910588&redirect_uri=https://jolly-poitras-6c41a0.netlify.app/&link=https://jolly-poitras-6c41a0.netlify.app/";
// }

function shareOnLinkedIn() {
    document.getElementById('linkedin').href = "https://www.linkedin.com/shareArticle?mini=true&url=https://jolly-poitras-6c41a0.netlify.app/&title=The Fun Num App";
}
