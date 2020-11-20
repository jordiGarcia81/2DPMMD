let url;
let obj_form;
let currentPanel;

document.addEventListener('DOMContentLoaded',() =>{
    inicializar();

   
});
const inicializar=()=>{

    currentPanel=1;
    document.getElementById("paso2").style.display="none";
    document.getElementById("paso3").style.display="none";
    document.getElementById("paso4").style.display="none";

    document.getElementById("botonAtras").style.display="none";

    if(localStorage.getItem("datos_url") != undefined){
        document.getElementById("url").value = localStorage.getItem("datos_url");
        document.getElementById("url").disabled = true;
    }

}

 const barraProgres=(panel)=>{

    document.getElementById("errores").innerHTML="";
    if(panel==0){
        if(currentPanel!=1){
            
            document.getElementById("barra"+currentPanel).style.background="white";
            document.getElementById("paso"+currentPanel).style.display="none";
            currentPanel--;
            document.getElementById("paso"+currentPanel).style.display="block";
        } else {
            document.getElementById("botonAtras").style.display="none";
            document.getElementById("barra"+currentPanel).style.background="white";
        }
    }else{
        document.getElementById("botonAtras").style.display="flex";
        if(currentPanel==4){
            document.getElementById("barra"+currentPanel).style.background="blue";
            
        }

        if(currentPanel==3){
            document.getElementById("barra"+currentPanel).style.background="blue";
            document.getElementById("paso"+currentPanel).style.display="none";
            currentPanel++;
            document.getElementById("paso"+currentPanel).style.display="block";

        }
        
        if(currentPanel==2){
           
            obj_form = {
                nombre:document.getElementById("nombre").value,
                apellidos:document.getElementById("apellidos").value,
                fecha:document.getElementById("fecha").value,
                direccion:document.getElementById("direccion").value,
                codpostal:document.getElementById("codpostal").value,
                provincia:document.getElementById("provincia").value,
                municipio:document.getElementById("municipio").value

            };

            let res = checkData();
            if(res != "" ){
                document.getElementById("errores").innerHTML=res;
                return false;
            }
            else {
                user_LocalStorage(obj_form);
                document.getElementById("barra"+currentPanel).style.background="blue";
                document.getElementById("paso"+currentPanel).style.display="none";
                currentPanel++;
                document.getElementById("paso"+currentPanel).style.display="block";
                
                formData();
            }
        }

        if(currentPanel==1){
            if(checkUrl()){
                document.getElementById("barra"+currentPanel).style.background="blue";
                document.getElementById("paso"+currentPanel).style.display="none";
                currentPanel++;
                document.getElementById("paso"+currentPanel).style.display="block";

                saveUrl();

            }

            if(localStorage.getItem("datos_form") != undefined){
                document.getElementById("barra"+currentPanel).style.background="blue";
                document.getElementById("paso"+currentPanel).style.display="none";
                currentPanel++;
                document.getElementById("paso"+currentPanel).style.display="block";
                
                obj_form = JSON.parse(localStorage.getItem("datos_form"));
                console.log(obj_form);
                formData();
            }
        
        }

    }
    
}

const checkData = () =>{
    var error="";

  for (dato in obj_form){
        if(obj_form[dato]=="" || obj_form[dato]==null){
            error+=" - Falta el dato: "+dato+"</br>";
        }
    };

    return error;
}

const formData = () => {
    for (dato in obj_form){
        console.log(document.getElementById(dato));
        document.getElementById(dato+"PREV").value = obj_form[dato];
        document.getElementById(dato+"PREV").disabled = true;
   
    };
} 

const checkUrl = () => {
    if(document.getElementById("url").value!=""){
        // comprobar formato:
        url=document.getElementById("url").value;
        return true;
    }else{
        document.getElementById("errores").innerHTML=" No se ha introducido la URL, introduzca una URL porvafor.";
        return false;

    }
}
   


const message = () =>{
    alert("Datos enviados, Muchas gracias por su colaboración!");
    document.getElementById("barra"+currentPanel).style.background="blue";

    console.log(url);
    console.log(location.href);
    window.location.href = "https://"+url;
}
const saveUrl = () =>{    
localStorage.setItem("datos_url", url);

}

const user_LocalStorage = (obj_form) =>{
    localStorage.setItem("datos_form", JSON.stringify(obj_form));
    }
