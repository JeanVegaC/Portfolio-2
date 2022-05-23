"use Strict";

const container = document.querySelector('.container'),
    estadio = document.querySelector('.estadio');

for (let i = 0; i < 15; i++) {
    
    if(i==8){
        circulo = document.createElement('DIV');
        circulo.classList.add('circulo');
        circulo.setAttribute('style','display:flex;height:200px;position:absolute;top:312.5px;left:608px;')

        circulo.innerHTML = `<div style='width:100px;height:200px;border:2px solid #fff;border-radius:500px 0 0 500px;background-color:rgb(76, 255, 100)'></div>
        <div style='width:100px;border-right:2px solid #fff;border-top:2px solid #fff;border-bottom:2px solid #fff;height:200px;border-radius:0 500px 500px 0;background-color:rgb(6, 141, 6)'></div>`   
        estadio.appendChild(circulo);
        
    }else{
        columna = document.createElement('DIV');
        columna.classList.add('columna');
        
        if(i>8){
            if(i%2==0){
                columna.classList.add('oscuro');
            }else{
                columna.classList.add('claro');
            }
        }else{
            if(i%2==0){
                columna.classList.add('claro');
            }else{
                columna.classList.add('oscuro');
            }
        }

        if(i==6){
            columna.setAttribute('style','border-right:2px solid #fff')
        }
        estadio.appendChild(columna);
    }
    
}


