
{
    function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
        localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
    }
    function obtenerAlmacenamientoLocal(llave) {
        const datos = JSON.parse(localStorage.getItem(llave))
        return datos
    }
    let productos = obtenerAlmacenamientoLocal('productos') || [];

    const informacionCompra = document.getElementById('informacionCompra');
const contenedorCompra = document.getElementById('contenedorCompra');
const productosCompra = document.getElementById('productosCompra');
const contenedor = document.getElementById('contenedor');
const carrito = document.getElementById('carrito');
const numero = document.getElementById("numero");
const header = document.querySelector("#header");
const total = document.getElementById('total');
const body = document.querySelector("body");
const x = document.getElementById('x')
let lista = []
let valortotal = 0


window.addEventListener("scroll", function () {
    if (contenedor.getBoundingClientRect().top < 10) {
        header.classList.add("scroll")
    }
    else {
        header.classList.remove("scroll")
    }
})


window.addEventListener('load', () => {
    visualizarProductos();
    contenedorCompra.classList.add("none")
})

function visualizarProductos() {
    contenedor.innerHTML = ""
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].existencia > 0) {
            contenedor.innerHTML += `<div><img src="${productos[i].urlImagen}"><div class="informacion"><p>${productos[i].nombre}</p><p class="precio">$${productos[i].valor}</p><button onclick=comprar(${i})>Comprar</button></div></div>`
        }
        else {
            contenedor.innerHTML += `<div><img src="${productos[i].urlImagen}"><div class="informacion"><p>${productos[i].nombre}</p><p class="precio">$${productos[i].valor}</p><p class="soldOut">Sold Out</p></div></div>`
        }
    }
}

function comprar(indice) {
    lista.push({ nombre: productos[indice].nombre, precio: productos[indice].valor })

    let van = true
    let i = 0
    while (van == true) {
        if (productos[i].nombre == productos[indice].nombre) {
            productos[i].existencia -= 1
            if (productos[i].existencia == 0) {
                visualizarProductos()
            }
            van = false
        }
        guardarAlmacenamientoLocal("productos", productos)
        i += 1
    }
    numero.innerHTML = lista.length
    numero.classList.add("diseñoNumero")
    return lista
}

carrito.addEventListener("click", function(){
    body.style.overflow = "hidden"
    contenedorCompra.classList.remove('none')
    contenedorCompra.classList.add('contenedorCompra')
    informacionCompra.classList.add('informacionCompra')
    mostrarElemtrosLista()
})

function mostrarElemtrosLista() {
    productosCompra.innerHTML = ""
    valortotal = 0
    for (let i = 0; i < lista.length; i++){
        productosCompra.innerHTML += `<div><div class="img"><button onclick=eliminar(${i}) class="botonTrash"><img src="/img/trash.png"></button><p>${lista[i].nombre}</p></div><p> $${lista[i].precio}</p></div>`
        valortotal += parseInt(lista[i].precio)
    }
    total.innerHTML = `<p>Valor Total</p> <p><span>$${valortotal}</span></p>`
}

function eliminar(indice){
    let van = true
    let i = 0
    while (van == true) {
        if (productos[i].nombre == lista[indice].nombre) {
            productos[i].existencia += 1
            lista.splice(indice, 1)
            van = false
        }
        i += 1
    }
    guardarAlmacenamientoLocal("productos", productos)

    numero.innerHTML = lista.length
    if (lista.length == 0){
        numero.classList.remove("diseñoNumero")
    }
    visualizarProductos()
    mostrarElemtrosLista()
}

x.addEventListener("click", function(){
    body.style.overflow = "auto"
    contenedorCompra.classList.add('none')
    contenedorCompra.classList.remove('contenedorCompra')
    informacionCompra.classList.remove('informacionCompra')
})
}

let products = {
    data: [
      {
        productName: "Manga Kimetsu no Yaiba",
        category: "Mangas",
        price: "179.99",
        image: "https://www.normaeditorial.com/upload/media/albumes/0001/07/thumb_6105_albumes_big.jpeg",
      },
      {
        productName: "Manga Jujutsu Kaisen",
        category: "Mangas",
        price: "189.98",
        image: "https://m.media-amazon.com/images/I/71PBZJaSmAL._AC_UF894,1000_QL80_.jpg",
      },
      {
        productName: "Manga Naruto",
        category: "Mangas",
        price: "139.99",
        image: "https://imagessl7.casadellibro.com/a/l/t5/57/9788484492757.jpg",
      },
      {
        productName: "Manga One Piece",
        category: "Mangas",
        price: "129.97",
        image: "https://m.media-amazon.com/images/I/51xRyPQYUmL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
      },
      {
        productName: "Manga Chainsaw",
        category: "Mangas",
        price: "159.95",
        image: "https://m.media-amazon.com/images/I/81s8xJUzWGL._AC_UF894,1000_QL80_.jpg",
      },
      {
        productName: "Cosplay anime Yor Forger",
        category: "Cosplays",
        price: "699.99",
        image: "https://m.media-amazon.com/images/I/61UieeST6rL._AC_UY1000_.jpg",
      },
      {
        productName: "Cosplay anime Tanjiro Kamado",
        category: "Cosplays",
        price: "799.99",
        image: "https://m.media-amazon.com/images/I/71lnfHtqcaL._AC_SX679_.jpg",
      },
      {
        productName: "Cosplay anime Akatsuki",
        category: "Cosplays",
        price: "599.99",
        image: "https://m.media-amazon.com/images/I/41mvxR0VVIL._AC_.jpg",
      },
      {
        productName: "Cosplay anime Kugisaki Nobara",
        category: "Cosplays",
        price: "499.99",
        image: "https://img.joomcdn.net/6cf0195fb821cd7262b0128a6dbf3bb61912d6b0_original.jpeg",
      },
      {
        productName: "Cosplay anime Traje Maid Lolita Kawaii",
        category: "Cosplays",
        price: "299.99",
        image: "https://http2.mlstatic.com/D_NQ_NP_949602-CBT51962255051_102022-O.webp",
      },
      {
        productName: "Poster Anime Shingeki No Kiojin",
        category: "Posters",
        price: "470",
        image: "https://http2.mlstatic.com/D_NQ_NP_990661-MLM49244991935_032022-O.webp",
      },
      {
        productName: "Poster Anime Naruto",
        category: "Posters",
        price: "99.99",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTdNa4tgejyDOavG7IH7pk4myLzNYZVpwu9shueGAxVQ5efJFyv6mob9UAI4YcHaZx8Wi9UQmRZ8dTmE8q-a_PlTkmzKvHgaKnKbcorcmtV&usqp=CAE",
      },
      {
        productName: "Poster Anime One Piece ",
        category: "Posters",
        price: "39.99",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7WcLWEBD-srVYhajme1QNpaa4G5HusmyAyUVFHaq1E2zp-S_w-R4RSqdULHM2M5pwhElENzx-qKGnMGYl5X4qbc1iQ967GJzkDScorBlMfKR9fMuPNcgfrg&usqp=CAE",
      },
      {
        productName: "Poster Anime Kimetsu No Yaiba",
        category: "Posters",
        price: "49.99",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTphy5bHFrOOIhM1Lct0AFMdTRxDhqqVSl6j9PQ1sQ--VVQ_36oIJQKempS8nUG5NZXVgWTQhwfrjMe5ShLs14c-BcNw7q-oOAnQFRsbxJVRpGXjqRsCkWn&usqp=CAE",
      },
      {
        productName: "5 Posters Anime Tokyo Revengers",
        category: "Posters",
        price: "389.99",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQUTlJsHMuVkKn7jtwBvtGbHKe_qi6o7CUpyq3Ra6Y2UfiecL7XTtz-qXJCGhdSe6LL4ZzG6sg9TlgEir7syLBRHUoKFgJ-hublsIOvXgz-hjb2aSUSXNGVAQ&usqp=CAE",
      },
      {
        productName: "Playera Anime Jujutsu Kaisen",
        category: "Playeras",
        price: "239.99",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSRY3iI-OC3E9T9mY_FyBLfLyrRNDbtooMkE9xtvdoV6u-bGrZUTmBviMozPV_OtfWrR2eWsHjpql8GzId_ceQJprqBozn5SYnZLBO3xKzTvBaBI1zpvZeX4w&usqp=CAE",
      },
      {
        productName: "Playera Anime Akatsuki Naruto",
        category: "Playeras",
        price: "179.99",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQVtzF1eu1jw9_vojlXlhjHbeZRiVrwYlxdtjWGbd82BcTsVFhkIuxUTNhCXx4YH5zxfh9_VtV8lvh2sE1tzS-F53mhGV3wm5O2ew1272hRY9lUoKGdEGjs&usqp=CAE",
      },
      {
        productName: "Playera Anime Kimetsu No Yaiba",
        category: "Playeras",
        price: "149.99",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxR55IWNXzX0q-oBvPUn1g77H-XDJfaB3QndnbdrGYTK2yeLdznXJbWdL6vsqnWVxiTYq2femoCwMdUX-BwFUXVFHg6qCA14UCm4FvmozJOiFLC9iqaRsw&usqp=CAE",
      },
      {
        productName: "Playera Anime Toros Negros",
        category: "Playeras",
        price: "159.99",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSoO-XSkB5ytIq3WG84oOD_ji7sHyHeYUBGWXAM_qEtQNKBMK6xoyNHi6fr7haLm1YyibnCih8SOxgWvm4PK7XevFMa2knPal-Y2XumsGqrlb1KkM93wEE5wg&usqp=CAE",
      },
      {
        productName: "Playera Anime Zoro One Piece",
        category: "Playeras",
        price: "199.99",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQx1N0i1XbD04sZ7L0n9YPLiRywXW6xkqa23heBdrEcYJeeoLhSqtu0TZQkvNJRnyiunSf29MGDWMdcReHZngVd7DOKU4lAEu8mm1vgIEFvm-it7lOg9jIw&usqp=CAE",
      },
      
    ],
  };
  
  for (let i of products.data) {

    let card = document.createElement("div");

    card.classList.add("card", i.category, "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");
   
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  function filterProduct(value) {

    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {

      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  

    let elements = document.querySelectorAll(".card");

    elements.forEach((element) => {

      if (value == "Todo") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(value)) {
        
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
  }

  document.getElementById("search").addEventListener("click", () => {

    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  

    elements.forEach((element, index) => {
  
      if (element.innerText.includes(searchInput.toUpperCase())) {

        cards[index].classList.remove("hide");
      } else {
 
        cards[index].classList.add("hide");
      }
    });
  });
  
 
  window.onload = () => {
    filterProduct("Todo");
  };
  document.getElementsByClassName('pagar')[0].addEventListener('click',pagarClicked)
  
  function pagarClicked(){
    alert("Gracias por la compra, ¡¡Vuelva Pronto!!");
    var carritoItems = document.getElementsByClassName('productosCompra')[0];
    while (carritoItems.hasChildNodes()){
        carritoItems.removeChild(carritoItems.firstChild)
    }
    actualizarTotalCarrito();
    ocultarCarrito();
}


