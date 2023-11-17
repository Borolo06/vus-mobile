/* variables para abrir y cerrar el menu */
let botonAbrirMenu = document.getElementById("botonMenu")
let botonCerrarMenu = document.getElementById("botonCierre")
let contenedor = document.getElementById("contenedorHeader")

//funcion para abrir
botonAbrirMenu.addEventListener("click", () => {
    contenedor.style.display = "flex"
})

//funcion para cerrar
botonCerrarMenu.addEventListener("click", () => {
    contenedor.style.display = "none"
})


/* Variables para abrir el modal de los contenedores */
let botonContenedorFarruko = document.getElementById("contenedorFarruko")
let botonContenedorPlaya = document.getElementById("contenedorPlaya")
let botonContenedorFutbol = document.getElementById("contenedorFutbol")
let contenedorFarruko = document.getElementById("modalOscuroUno")
let contenedorPlaya = document.getElementById("modalOscuroDos")
let contenedorFutbol = document.getElementById("modalOscuroTres")
let botonConfirmarFarruko = document.getElementById("botonConfirmarFarruko")
let botonConfirmarPlaya = document.getElementById("botonConfirmarPlaya")
let botonConfirmarFutbol = document.getElementById("botonConfirmarFutbol")
let botonCancelarFarruko = document.getElementById("botonCancelarFarruko")
let botonCancelarPlaya = document.getElementById("botonCancelarPlaya")
let botonCancelarFutbol = document.getElementById("botonCancelarFutbol")
let main = document.getElementById("main")

/* funciones para abrir los contenedores */
botonContenedorFarruko.addEventListener("click", () => {
    contenedorFarruko.style.display = "flex"
    main.classList.add("d-none")
    window.scrollTo(0, 0)
})

botonContenedorPlaya.addEventListener("click", () => {
    contenedorPlaya.style.display = "flex"
    main.classList.add("d-none")
    window.scrollTo(0, 0)
})

botonContenedorFutbol.addEventListener("click", () => {
    contenedorFutbol.style.display = "flex"
    main.classList.add("d-none")
    window.scrollTo(0, 0)
})

/* Función para cerrar los contenedores */
botonCancelarFarruko.addEventListener("click", () => {
    contenedorFarruko.style.display = "none"
    main.classList.remove("d-none")
    window.scrollTo(0, 0)
})

botonCancelarPlaya.addEventListener("click", () => {
    contenedorPlaya.style.display = "none"
    main.classList.remove("d-none")
    window.scrollTo(0, 0)
})

botonCancelarFutbol.addEventListener("click", () => {
    contenedorFutbol.style.display = "none"
    main.classList.remove("d-none")
    window.scrollTo(0, 0)
})


/* Falta lo de hacer el evento que escuche el boton de "voy a participar" */


/* codigo que hace lo de abrir el login */
let contenedorIniciarSesion = document.getElementById("mainLogin")
let botonLoginInicio = document.getElementById("botonIniciarSesion")
let volverInicio = document.getElementById("volverInicio") //boton que manda a la pag inicial


botonLoginInicio.addEventListener("click", () => {
    main.classList.add("d-none")
    contenedorIniciarSesion.style.display = "flex"
    window.scrollTo(0, 0)
    contenedor.style.display = "none"
    contenedorRegistro.style.display = "none"
})

/* boton para volver a la pagina principal */

volverInicio.addEventListener("click", () => {
    main.classList.remove("d-none")
    contenedorRegistro.style.display = "none"
    contenedorIniciarSesion.style.display = "none" //poner d none a todos los contenedores que vayan funcionando como funciona el login
    window.scrollTo(0, 0)
    contenedor.style.display = "none" //para cerrar automatico el menu
})

/* codigo para registro */
let contenedorRegistro = document.getElementById("mainRegistro")
let botonRegistro = document.getElementById("botonRegistroCuenta")

botonRegistro.addEventListener("click", () => {
    main.classList.add("d-none")
    contenedorRegistro.style.display = "flex"
    window.scrollTo(0, 0)
    contenedor.style.display = "none"
    contenedorIniciarSesion.style.display = "none" //esto se hace en caso de que al estar en inicio se cierre el registro y/o viceversa
})