import './style.css';
import axios from 'axios';

const content=document.querySelector('.content');



initApp()
function initApp(){
  document.addEventListener('DOMContentLoaded', readJson);

}


async function readJson(){
    const data=await axios.get('http://localhost:3000/cats');
 
  
pintar(data.data);
}

function pintar(perros){
  let cards='';
 perros.forEach(elemento => {
  cards+=`
  <div class="content__card">
    <div class="content__card__icon">
      <p class="ocultar">Edit<i class="fa-sharp fa-solid fa-pen"></i></p>
      <img src="${elemento.img}" class="content__card__img">
      <p class="ocultar">Delete<i class="fa-solid fa-circle-xmark"></i></p>
    </div>
    <div class="content__card_text">
      <h2>${elemento.name}</h2>
      <h2>${elemento.telefono}|${elemento.pais}</h2>
      <p>${elemento.descripcion}</p>
    </div>
  </div>
  
  `

 });
 content.innerHTML=cards
 eliminar();
 
}


function eliminar(){
  const ocultar=document.querySelector('.ocultar').classList.value;
  const container__modal=document.querySelector('.container__modal');
  const btn__modal=document.querySelector('.btn__modal');
  const btn__cancelar=document.querySelector('.btn__cancelar');

  let cards
  
  content.addEventListener('click', deleteCard)
  btn__modal.addEventListener('click', cerrarModal)
  btn__cancelar.addEventListener('click',cerrarCard)

  function deleteCard(e){
    console.log(e.target.classList.value);

    if( e.target.classList.value===ocultar){
      container__modal.style='display:block'
    }
    
    cards=e.target.parentElement.parentElement;
    
  }

  function cerrarModal(){
    cards.remove();
    container__modal.style='display:none'
  }

  function cerrarCard(){
    container__modal.style='display:none'
  }


}