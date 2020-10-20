document.addEventListener('DOMContentLoaded',() =>{
        changeTitle();
        modSection();
        Size();
        changeColorLink();
        buttonVerivication();
        
        
});
    // ejercicio 1:
    const changeTitle =()  => {
       
        document.title="Ahora trabajando con DOM dinámico" ;
        
    };

    // ejercicio 2:

    const modSection=() =>{

        const seccion= document.getElementsByTagName('section');
        [...seccion].forEach((section,index) => section.id='section-'+index);
    };
    

var seccion=document.getElementsByTagName('section');
console.log(seccion);

// ejercicio 3:

const Size=()=>{
    const text = document.getElementsByTagName('p');
    [...text].forEach(text => text.style.fontSize='0.5rem');
};

// ejercicio 4:

const changeColorLink=()=>{
    const colorLink = document.getElementsByTagName('a');
    [...colorLink].forEach(colorLink => colorLink.style.textDecoration='none');
};

// ejercicio 5:

const buttonVerivication=()=>{
    const text = document.getElementsByTagName('p');
    const check = document.createElement('input');
    check.type='checkbox';
    const titleCheck = document.createElement('titleCheck');
    titleCheck.appendChild(document.createTextNode('seleccionar imagen'));
    const button = document.getElementsByTagName('input');
    [...button].forEach(button => button.disabled=true);
    [...text].forEach(text =>{
        text.appendChild(titleCheck);
        text.appendChild(check);
    });

    check.addEventListener('click',() =>{
        if(check.checked) [...button].forEach(button => button.removeAttribute('disabled'));
        else[...button].forEach(button => button.disable=true);  
        

    });

}

// ejercicio 6: 

const changeImage=()=> {
    const images = document.getElementsByTagName('img');
    const changeColor= document.getElementsByTagName('body');
   
    [...images].forEach(images => images.src = 'https://somospnt.com/images/blog/cover/dom-portada.jpg');
    [...changeColor].forEach(changeColor => changeColor.style.backgroundColor='grey');
}

    