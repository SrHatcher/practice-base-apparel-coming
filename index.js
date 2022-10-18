const button = document.querySelector('.subscription__button')
const input= document.querySelector('.subscription__input')
const errorIcon= document.querySelector('.subscription__error_icon')
const errorMessage = document.querySelector('.subscription__error_message')

button.addEventListener('click', submitFunction)

function submitFunction(){
    const text = input.value;
    //i got this validation expresion from the web: http://w3.unpocodetodo.info/utiles/regex-ejemplos.php?type=email
    //that page is in spanish
    const expresion = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    const result = expresion.test(text);

    if(result){
        errorMessage.innerText="The email is valid"
        errorIcon.style.display = "none";
        errorMessage.style.display = "block";
        errorMessage.style.color = "#749F82"

        setTimeout(()=>{
            errorMessage.style.display = "none";
        }, 3000)
        
    }else{
        errorMessage.innerText="Please provide a valid email"
        errorIcon.style.display = "block";
        errorMessage.style.display = "block";
        errorMessage.style.color = "hsl(0, 100%, 74%)"
    }
}
