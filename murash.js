/*var rname;
var x=0;
function asd(){
        return "nana";}
function Register_ig(){
    rname = document.getElementById('fname').value;
    let tname=document.getElementById('lname').value;
    let farcode=document.getElementById('barcode').value;
    let ps1=document.getElementById('id1').value;
    let ps2=document.getElementById('id2').value;
    if (ps1.length<6){
        alert("The password must be at least 6 characters long");
    }
    else if(ps1!=ps2)
    {
        alert("You should put correct password second time");
    }
    else{
        document.getElementById('i52').innerHTML = asd();
        x=1;
        window.open('file:///C:/Users/User/Desktop/muratali/menu.html');
    }
}
*/
let form=document.querySelector('.form_01'),
    formInputs=document.querySelectorAll('.js-input'),
    inputPAS=document.querySelector('.js-input-ps'),
    inputPAS1=document.querySelector('.js-input-ps1'),
    inputBarc=document.querySelector('.js-input-bar'),
    inputName=document.querySelector('.js-input-FN'),
    Fns=null;
    function ValidateBarc(Barc){
        let re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(Barc).toLocaleLowerCase());
    }

form.onsubmit=function(){
    let pasVal=inputPAS.value,
        pas1Val1=inputPAS1.value,
        barcVal=inputBarc.value;
        nameVal=inputName.value;
        emptyInputs=Array.from(formInputs).filter(input=>input.value=="");
    
        formInputs.forEach(function(input){
            if(input.value==""){
                input.classList.add('error');
            }
            else {
                 input.classList.remove('error');
            }   
        })
        if(emptyInputs.length!=0){
            alert('inputs not filled');
            return false;
        }
        if(pasVal!=pas1Val1)
            {
                alert('second password not correct');
                inputPAS1.classList.add('error');
                return false;
            }
        else{
            inputPAS1.classList.remove('error');
        }

        if(!ValidateBarc(barcVal)){
            alert('barcode not valid');
            inputBarc.classList.add('error');
            return false;
        }
    else{
        inputBarc.classList.remove('error');
        inputBarc.classList.add('accept');
    }
    Fns=nameVal;
    document.getElementById('i52').innerHTML=Fns;  
    window.open('file:///C:/Users/User/Desktop/muratali/menu.html');
}
document.querySelector("AH").addEventListener("click",function(){
    var audio= new Audio('bump.mp3');
    audio.play();
});
