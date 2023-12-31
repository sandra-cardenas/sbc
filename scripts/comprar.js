//PRODUCTOS OBTENIDOS DE PRODUCTOS.JSON

const main = document.querySelector("div.p-productos")
async function getData(){
    const res = await fetch("/mocks/productos.json")
    const photos = await res.json()
    photos.forEach(p => {
      
        const card= document.createElement("article")
        card.className ="p-producto"

    const img = document.createElement("img")
    img.src= p.imagen
    
    const titulo = document.createElement("h3")
    titulo.textContent= p.nombre
    
    const contenido = document.createElement("p")
    contenido.className= "info-p-producto"
    contenido.textContent= p.descripcion

   const precio = document.createElement("h3")
   precio.className= "precio"
   precio.textContent= "S/."+p.precio +".00"

    const boton = document.createElement("button")

    boton.className= "addToCart"
    boton.textContent = "AÑADIR AL CARRITO"
    

    card.append(img, titulo,contenido,precio,boton)
    main.append(card)
       
    })

    //
    const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
    addToShoppingCartButtons.forEach((addToCartButton) => {
      addToCartButton.addEventListener('click', addToCartClicked);
    });
    const comprarButton = document.querySelector('.comprarButton');
   comprarButton.addEventListener('click', comprarButtonClicked);
    const shoppingCartItemsContainer =document.querySelector('.shoppingCartItemsContainer')
    //FUNCION PARA QUE AL MOMENTO DE DAR CLICK SE ADICIONE TITULO, PRECIO E IMAGEN
    function addToCartClicked(event) { 
        const button = event.target;
       const item = button.closest('.p-producto')
       const itemTitle =item.querySelector("h3").textContent;
       const itemPrice = item.querySelector(".precio").textContent;
       const itemImage = item.querySelector("img").src
   
      addItemToShoppingCart( itemTitle, itemPrice, itemImage);
    }
     //FUNCION PARA QUE NO SE REPITA LOS PRODUCTOS Y SOLO SE SUMEN SI YA ESTAN AÑADIDOS AL CARRITO
    function addItemToShoppingCart (itemTitle, itemPrice, itemImage){
      const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
        'shoppingCartItemTitle'
      );
      for (let i = 0; i < elementsTitle.length; i++) {
        if (elementsTitle[i].innerText === itemTitle) {
          let elementQuantity = elementsTitle[
            i
          ].parentElement.parentElement.parentElement.querySelector(
            '.shoppingCartItemQuantity'
          );
          elementQuantity.value++;
         
          updateShoppingCartTotal() 
          return;
        }
      }
    //CREAR LOS ELEMENTOS AÑADIDOS AL CARRITO
     const shoppingCartRow = document.createElement('div')
     const shoppingCartContent = `
     <div class="row shoppingCartItem">
     <div class="col-6">
         <div class="shopping-cart-item d-flex align-items-center h-100 
            border-bottom pb-2 pt-3">
             <img src=${itemImage} class="shopping-cart-image">
             <h6 class="shopping-cart-item-title shoppingCartItemTitle 
           text-truncate ml-3 mb-0">${itemTitle}
             </h6>
         </div>
     </div>
     <div class="col-2">
         <div class="shopping-cart-price d-flex align-items-center h-100 
        border-bottom pb-2 pt-3">
             <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}  </p>
         </div>
     </div>
     <div class="col-4">
         <div
             class="shopping-cart-quantity d-flex justify-content-between 
       align-items-center h-100 border-bottom pb-2 pt-3">
             <input class="shopping-cart-quantity-input 
     shoppingCartItemQuantity" type="number"
                 value="1">
             <button class="btn btn-danger buttonDelete" type="button">X</
         button>
         </div>
     </div>
    </div>`;
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);
    shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);
    shoppingCartRow
  .querySelector('.shoppingCartItemQuantity')
  .addEventListener('change', quantityChanged);


    updateShoppingCartTotal()

    }
    //CALCULAR EL TOTAL EN SOLES (MONEDA PERUANA)DE LOS PRODUCTOS AÑADIDOS AL CARRITO
    function updateShoppingCartTotal() {
      let total = 0;
      const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
    
      const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
    
      shoppingCartItems.forEach((shoppingCartItem) => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
          '.shoppingCartItemPrice'
        );
        const shoppingCartItemPrice = Number(
          shoppingCartItemPriceElement.textContent.replace('S/.', '','.00')
        );
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
          '.shoppingCartItemQuantity'
        );
        const shoppingCartItemQuantity = Number(
          shoppingCartItemQuantityElement.value
        );
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
      });
      shoppingCartTotal.innerHTML = `S/.${total.toFixed(2)}`;
    }
    // PARA ELIMINAR PRODUCTOS DEL CARRITO
    function removeShoppingCartItem(event) {
      const buttonClicked = event.target;
      buttonClicked.closest('.shoppingCartItem').remove();
      updateShoppingCartTotal();
    }
    // FUNCION PARA QUE EL CONTADOR NO SEA MENOR A 1
    function quantityChanged(event) {
      const input = event.target;
      input.value <= 0 ? (input.value = 1) : null;
      updateShoppingCartTotal();
    }
    function comprarButtonClicked() {
      shoppingCartItemsContainer.innerHTML = '';
      updateShoppingCartTotal();
    }                
     }
    

getData()














