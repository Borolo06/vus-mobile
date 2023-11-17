//Contenedor del menu para que se cierre  automaticamente
let contenedorHeader = document.getElementById("contenedorHeader")
let mainPrincipal = document.getElementById("main")
let botonIrInicio = document.getElementById("volverInicio")

//contenedores de los diferentes menus (falta info y contacto)
let mainDeporte = document.getElementById("mainEventoDeporte")
let mainPolitica = document.getElementById("mainEventoPolitica")
let mainFestividades = document.getElementById("mainEventoFestividades")
let mainMusica = document.getElementById("mainEventoMusica")
let mainJuegos = document.getElementById("mainEventoJuegos")
let mainReligiones = document.getElementById("mainEventoReligion")
let mainBares = document.getElementById("mainEventoBares")

//botones para abrir cada evento
let eventoDeporte = document.getElementById("botonAbrirEventoDeportes")
let eventoPolitica = document.getElementById("botonAbrirEventoPolitica")
let eventoFestividades = document.getElementById("botonAbrirEventoFestividades")
let evenetoMusica = document.getElementById("botonAbrirEventoMusica")
let eventoJuegos = document.getElementById("botonAbrirEventoJuegos")
let eventoReligiones = document.getElementById("botonAbrirEventoReligiones")
let eventoBares = document.getElementById("botonAbrirEventoBares")

//boton para ir al contacto
let botonContacto = document.getElementById("botonContacto")
let botonInfo = document.getElementById("botonInfo")

//conteenedor contacto e info
let mainContacto = document.getElementById("mainContacto")
let mainInfo = document.getElementById("mainInformacion")

//login
let inicio = document.getElementById("mainLogin")
let registro = document.getElementById("mainRegistro")

//codigo que abre la siguiente opcion
eventoDeporte.addEventListener("click", () => {
    mainPrincipal.classList.add("d-none")
    mainDeporte.style.display = "flex"
    mainPolitica.style.display = "none"
    mainFestividades.style.display = "none"
    mainMusica.style.display = "none"
    mainJuegos.style.display = "none"
    mainReligiones.style.display = "none"
    mainBares.style.display = "none"
    contenedorHeader.style.display = "none"
    window.scrollTo(0, 0)
    inicio.style.display = "none"
    registro.style.display = "none"
})

//codigo que abre la siguiente opcion
eventoPolitica.addEventListener("click", () => {
    mainPrincipal.classList.add("d-none")
    mainDeporte.style.display = "none"
    mainPolitica.style.display = "flex"
    mainFestividades.style.display = "none"
    mainMusica.style.display = "none"
    mainJuegos.style.display = "none"
    mainReligiones.style.display = "none"
    mainBares.style.display = "none"
    contenedorHeader.style.display = "none"
    window.scrollTo(0, 0)
    inicio.style.display = "none"
    registro.style.display = "none"
})

//codigo que abre la siguiente opcion
eventoFestividades.addEventListener("click", () => {
    mainPrincipal.classList.add("d-none")
    mainDeporte.style.display = "none"
    mainPolitica.style.display = "none"
    mainFestividades.style.display = "flex"
    mainMusica.style.display = "none"
    mainJuegos.style.display = "none"
    mainReligiones.style.display = "none"
    mainBares.style.display = "none"
    contenedorHeader.style.display = "none"
    window.scrollTo(0, 0)
    inicio.style.display = "none"
    registro.style.display = "none"
})

//codigo que abre la siguiente opcion
evenetoMusica.addEventListener("click", () => {
    mainPrincipal.classList.add("d-none")
    mainDeporte.style.display = "none"
    mainPolitica.style.display = "none"
    mainFestividades.style.display = "none"
    mainMusica.style.display = "flex"
    mainJuegos.style.display = "none"
    mainReligiones.style.display = "none"
    mainBares.style.display = "none"
    contenedorHeader.style.display = "none"
    window.scrollTo(0, 0)
    inicio.style.display = "none"
    registro.style.display = "none"
})

//codigo que abre la siguiente opcion
eventoJuegos.addEventListener("click", () => {
    mainPrincipal.classList.add("d-none")
    mainDeporte.style.display = "none"
    mainPolitica.style.display = "none"
    mainFestividades.style.display = "none"
    mainMusica.style.display = "none"
    mainJuegos.style.display = "flex"
    mainReligiones.style.display = "none"
    mainBares.style.display = "none"
    contenedorHeader.style.display = "none"
    window.scrollTo(0, 0)
    inicio.style.display = "none"
    registro.style.display = "none"
})

//codigo que abre la siguiente opcion
eventoReligiones.addEventListener("click", () => {
    mainPrincipal.classList.add("d-none")
    mainDeporte.style.display = "none"
    mainPolitica.style.display = "none"
    mainFestividades.style.display = "none"
    mainMusica.style.display = "none"
    mainJuegos.style.display = "none"
    mainReligiones.style.display = "flex"
    mainBares.style.display = "none"
    contenedorHeader.style.display = "none"
    window.scrollTo(0, 0)
    inicio.style.display = "none"
    registro.style.display = "none"
})

//codigo que abre la siguiente opcion
eventoBares.addEventListener("click", () => {
    mainPrincipal.classList.add("d-none")
    mainDeporte.style.display = "none"
    mainPolitica.style.display = "none"
    mainFestividades.style.display = "none"
    mainMusica.style.display = "none"
    mainJuegos.style.display = "none"
    mainReligiones.style.display = "none"
    mainBares.style.display = "flex"
    contenedorHeader.style.display = "none"
    window.scrollTo(0, 0)
    inicio.style.display = "none"
    registro.style.display = "none"
})

//volver inicio
volverInicio.addEventListener("click", () => {
    mainPrincipal.classList.remove("d-none")
    mainDeporte.style.display = "none"
    mainPolitica.style.display = "none"
    mainFestividades.style.display = "none"
    mainMusica.style.display = "none"
    mainJuegos.style.display = "none"
    mainReligiones.style.display = "none"
    mainBares.style.display = "none"
    contenedorHeader.style.display = "none"
    window.scrollTo(0, 0)
    inicio.style.display = "none"
    registro.style.display = "none"
    mainInfo.style.display = "none"
    mainContacto.style.display = "none"
})

inicio.addEventListener("click", () => {
    mainPrincipal.classList.add("d-none")
    mainDeporte.style.display = "none"
    mainPolitica.style.display = "none"
    mainFestividades.style.display = "none"
    mainMusica.style.display = "none"
    mainJuegos.style.display = "none"
    mainReligiones.style.display = "none"
    mainBares.style.display = "none"
    contenedorHeader.style.display = "none"
    window.scrollTo(0, 0)
    mainInfo.style.display = "none"
    mainContacto.style.display = "none"
})
registro.addEventListener("click", () => {
    mainPrincipal.classList.add("d-none")
    mainDeporte.style.display = "none"
    mainPolitica.style.display = "none"
    mainFestividades.style.display = "none"
    mainMusica.style.display = "none"
    mainJuegos.style.display = "none"
    mainReligiones.style.display = "none"
    mainBares.style.display = "none"
    contenedorHeader.style.display = "none"
    window.scrollTo(0, 0)
    mainInfo.style.display = "none"
    mainContacto.style.display = "none"
})

//Codigo que permite ir a la parte del contacto de la pagina
botonContacto.addEventListener("click", () => {
    mainContacto.style.display = "flex"
    mainInfo.style.display = "none"
    mainPrincipal.classList.add("d-none")
    mainDeporte.style.display = "none"
    mainPolitica.style.display = "none"
    mainFestividades.style.display = "none"
    mainMusica.style.display = "none"
    mainJuegos.style.display = "none"
    mainReligiones.style.display = "none"
    mainBares.style.display = "none"
    contenedorHeader.style.display = "none"
    window.scrollTo(0, 0)
    inicio.style.display = "none"
    registro.style.display = "none"
    registro.style.display = "none"
    inicio.style.display = "none"
})

//Codigo para ir a la parte de la info de la pagina
botonInfo.addEventListener("click", () => {
    mainInfo.style.display = "flex"
    mainContacto.style.display = "none"
    mainPrincipal.classList.add("d-none")
    mainDeporte.style.display = "none"
    mainPolitica.style.display = "none"
    mainFestividades.style.display = "none"
    mainMusica.style.display = "none"
    mainJuegos.style.display = "none"
    mainReligiones.style.display = "none"
    mainBares.style.display = "none"
    contenedorHeader.style.display = "none"
    window.scrollTo(0, 0)
    inicio.style.display = "none"
    registro.style.display = "none"
    registro.style.display = "none"
    inicio.style.display = "none"
})

//MODO OSCURO

//todos los elementos (algunos ya estaban cargados)
let botonNoche = document.getElementById("botonNoche")
let botonDia = document.getElementById("botonDia")
let header = document.getElementById("header")
let titulo = document.getElementById("titulo")
let botonMenu = document.getElementById("botonMenu")
let contenedorBlanco = document.getElementById("blanco")
let tituloMain = document.getElementById("eventosDia")
let h6 = document.getElementById("h6")
let contenedorPincipalFarruko = document.getElementById("contenedorFarruko")
let contenedorPincipalPlaya = document.getElementById("contenedorPlaya")
let contenedorPincipalFutbol = document.getElementById("contenedorFutbol")
let footer = document.getElementById("footer")

//Modo oscuro
botonNoche.addEventListener("click", () => {
    header.style.background = "black"
    botonMenu.classList.add("invierte-color")
    botonDia.classList.add("invierte-color")
    botonNoche.classList.add("invierte-color")
    titulo.style.color = "wheat"
    contenedorBlanco.classList.add("invierte-color")
    mainPrincipal.style.background = "#23242a"
    tituloMain.style.color = "wheat"
    h6.style.color = "wheat"
    contenedorPincipalFarruko.classList.add("modo-noche-contenedor")
    contenedorPincipalFutbol.classList.add("modo-noche-contenedor")
    contenedorPincipalPlaya.classList.add("modo-noche-contenedor")
    footer.classList.add("footer-oscuro")

    //contenedores de los eventos para .. el modo oscuro
    mainDeporte.classList.add("fondo-contenedores")
    mainPolitica.classList.add("fondo-contenedores")
    mainFestividades.classList.add("fondo-contenedores")
    mainMusica.classList.add("fondo-contenedores")
    mainJuegos.classList.add("fondo-contenedores")
    mainReligiones.classList.add("fondo-contenedores")
    mainBares.classList.add("fondo-contenedores")
    mainInfo.classList.add("fondo-contenedores")
    mainContacto.classList.add("fondo-contenedores")
})

//Modo claro
botonDia.addEventListener("click", () => {
    header.style.background = "gray"
    botonMenu.classList.remove("invierte-color")
    botonDia.classList.remove("invierte-color")
    botonNoche.classList.remove("invierte-color")
    titulo.style.color = "black"
    contenedorBlanco.classList.remove("invierte-color")
    mainPrincipal.style.background = "#FFF"
    tituloMain.style.color = "black"
    h6.style.color = "black"
    contenedorPincipalFarruko.classList.remove("modo-noche-contenedor")
    contenedorPincipalFutbol.classList.remove("modo-noche-contenedor")
    contenedorPincipalPlaya.classList.remove("modo-noche-contenedor")
    footer.classList.remove("footer-oscuro")

    //contenedores de los eventos para .. el modo oscuro
    mainDeporte.classList.remove("fondo-contenedores")
    mainPolitica.classList.remove("fondo-contenedores")
    mainFestividades.classList.remove("fondo-contenedores")
    mainMusica.classList.remove("fondo-contenedores")
    mainJuegos.classList.remove("fondo-contenedores")
    mainReligiones.classList.remove("fondo-contenedores")
    mainBares.classList.remove("fondo-contenedores")
    mainInfo.classList.remove("fondo-contenedores")
    mainContacto.classList.remove("fondo-contenedores")

})

/* ------------------------------------------------------------------ */
//CARGAMOS LOS BOTONES de deporte PARA ABRIR CADA MODAL
let abrirDeporteUno = document.getElementById("botonVerInfoUno")
let abrirDeporteDos = document.getElementById("botonVerInfoDos")
let abrirDeporteTres = document.getElementById("botonVerInfoTres")
let abrirDeporteCuatro = document.getElementById("botonVerInfoCuatro")
let abrirDeporteCinco = document.getElementById("botonVerInfoCinco")
let abrirDeporteSeis = document.getElementById("botonVerInfoSeis")

//CARGAMOS LOS BOTONES de deporte PARA CERRAR CADA MODAL
let cerrarDeporteUno = document.getElementById("cierraDeporteUno")
let cerrarDeporteDos = document.getElementById("cierraDeporteDos")
let cerrarDeporteTres = document.getElementById("cierraDeporteTres")
let cerrarDeporteCuatro = document.getElementById("cierraDeporteCuatro")
let cerrarDeporteCinco = document.getElementById("cierraDeporteCinco")
let cerrarDeporteSeis = document.getElementById("cierraDeporteSeis")

//LOS MODALES DE CADA UNO DE LOS DEPORTES
let modalDeporteUno = document.getElementById("mainDeporteUno")
let modalDeporteDos = document.getElementById("mainDeporteDos")
let modalDeporteTres = document.getElementById("mainDeporteTres")
let modalDeporteCuatro = document.getElementById("mainDeporteCuatro")
let modalDeporteCinco = document.getElementById("mainDeporteCinco")
let modalDeporteSeis = document.getElementById("mainDeporteSeis")


//PARA ABRIR LOS MODALES DE LOS DEPORTES UNO
abrirDeporteUno.addEventListener("click", () => {
    modalDeporteUno.style.display = "flex"
    mainDeporte.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirDeporteDos.addEventListener("click", () => {
    modalDeporteDos.style.display = "flex"
    mainDeporte.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirDeporteTres.addEventListener("click", () => {
    modalDeporteTres.style.display = "flex"
    mainDeporte.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirDeporteCuatro.addEventListener("click", () => {
    modalDeporteCuatro.style.display = "flex"
    mainDeporte.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirDeporteCinco.addEventListener("click", () => {
    modalDeporteCinco.style.display = "flex"
    mainDeporte.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirDeporteSeis.addEventListener("click", () => {
    modalDeporteSeis.style.display = "flex"
    mainDeporte.classList.add("main-editado")
    window.scrollTo(0, 90)
})


//PARA CERRAR LOS MODALES DE LOS DEPORTES 1
cerrarDeporteUno.addEventListener("click", () => {
    modalDeporteUno.style.display = "none"
    mainDeporte.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarDeporteDos.addEventListener("click", () => {
    modalDeporteDos.style.display = "none"
    mainDeporte.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarDeporteTres.addEventListener("click", () => {
    modalDeporteTres.style.display = "none"
    mainDeporte.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarDeporteCuatro.addEventListener("click", () => {
    modalDeporteCuatro.style.display = "none"
    mainDeporte.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarDeporteCinco.addEventListener("click", () => {
    modalDeporteCinco.style.display = "none"
    mainDeporte.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarDeporteSeis.addEventListener("click", () => {
    modalDeporteSeis.style.display = "none"
    mainDeporte.classList.remove("main-editado")
    window.scrollTo(0, 0)
})

/* ---------------------------------------------------------- */

let abrirPoliticaUno = document.getElementById("botonVerInfoPoliticaUno")
let abrirPoliticaDos = document.getElementById("botonVerInfoPoliticaDos")
let abrirPoliticaTres = document.getElementById("botonVerInfoPoliticaTres")
let abrirPoliticaCuatro = document.getElementById("botonVerInfoPoliticaCuatro")
let abrirPoliticaCinco = document.getElementById("botonVerInfoPoliticaCinco")
let abrirPoliticaSeis = document.getElementById("botonVerInfoPoliticaSeis")

//CARGAMOS LOS BOTONES de deporte PARA CERRAR CADA MODAL de politica
let cerrarPoliticaUno = document.getElementById("cierraPoliticaUno")
let cerrarPoliticaDos = document.getElementById("cierraPoliticaDos")
let cerrarPoliticaTres = document.getElementById("cierraPoliticaTres")
let cerrarPoliticaCuatro = document.getElementById("cierraPoliticaCuatro")
let cerrarPoliticaCinco = document.getElementById("cierraPoliticaCinco")
let cerrarPoliticaSeis = document.getElementById("cierraPoliticaSeis")

//LOS MODALES DE CADA UNO DE La politica
let modalPoliticaUno = document.getElementById("mainPoliticaUno")
let modalPoliticaDos = document.getElementById("mainPoliticaDos")
let modalPoliticaTres = document.getElementById("mainPoliticaTres")
let modalPoliticaCuatro = document.getElementById("mainPoliticaCuatro")
let modalPoliticaCinco = document.getElementById("mainPoliticaCinco")
let modalPoliticaSeis = document.getElementById("mainPoliticaSeis")

//ABRIR LOS CONTENEDORES DE POLITICA
abrirPoliticaUno.addEventListener("click", () => {
    modalPoliticaUno.style.display = "flex"
    mainPolitica.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirPoliticaDos.addEventListener("click", () => {
    modalPoliticaDos.style.display = "flex"
    mainPolitica.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirPoliticaTres.addEventListener("click", () => {
    modalPoliticaTres.style.display = "flex"
    mainPolitica.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirPoliticaCuatro.addEventListener("click", () => {
    modalPoliticaCuatro.style.display = "flex"
    mainPolitica.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirPoliticaCinco.addEventListener("click", () => {
    modalPoliticaCinco.style.display = "flex"
    mainPolitica.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirPoliticaSeis.addEventListener("click", () => {
    modalPoliticaSeis.style.display = "flex"
    mainPolitica.classList.add("main-editado")
    window.scrollTo(0, 90)
})

//CERRAR LOS CONTENEDORES DE POLITICA
cerrarPoliticaUno.addEventListener("click", () => {
    modalPoliticaUno.style.display = "none"
    mainPolitica.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarPoliticaDos.addEventListener("click", () => {
    modalPoliticaDos.style.display = "none"
    mainPolitica.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarPoliticaTres.addEventListener("click", () => {
    modalPoliticaTres.style.display = "none"
    mainPolitica.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarPoliticaCuatro.addEventListener("click", () => {
    modalPoliticaCuatro.style.display = "none"
    mainPolitica.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarPoliticaCinco.addEventListener("click", () => {
    modalPoliticaCinco.style.display = "none"
    mainPolitica.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarPoliticaSeis.addEventListener("click", () => {
    modalPoliticaSeis.style.display = "none"
    mainPolitica.classList.remove("main-editado")
    window.scrollTo(0, 0)
})


/* ------------------------ */
let abrirFestividadesUno = document.getElementById("botonVerInfoFestividadesUno")
let abrirFestividadesDos = document.getElementById("botonVerInfoFestividadesDos")
let abrirFestividadesTres = document.getElementById("botonVerInfoFestividadesTres")
let abrirFestividadesCuatro = document.getElementById("botonVerInfoFestividadesCuatro")
let abrirFestividadesCinco = document.getElementById("botonVerInfoFestividadesCinco")
let abrirFestividadesSeis = document.getElementById("botonVerInfoFestividadesSeis")

//CARGAMOS LOS BOTONES de deporte PARA CERRAR CADA MODAL
let cerrarFestividadesUno = document.getElementById("cierraFestividadesUno")
let cerrarFestividadesDos = document.getElementById("cierraFestividadesDos")
let cerrarFestividadesTres = document.getElementById("cierraFestividadesTres")
let cerrarFestividadesCuatro = document.getElementById("cierraFestividadesCuatro")
let cerrarFestividadesCinco = document.getElementById("cierraFestividadesCinco")
let cerrarFestividadesSeis = document.getElementById("cierraFestividadesSeis")

//LOS MODALES DE CADA UNO DE LOS Festividades
let modalFestividadesUno = document.getElementById("mainFestividadesUno")
let modalFestividadesDos = document.getElementById("mainFestividadesDos")
let modalFestividadesTres = document.getElementById("mainFestividadesTres")
let modalFestividadesCuatro = document.getElementById("mainFestividadesCuatro")
let modalFestividadesCinco = document.getElementById("mainFestividadesCinco")
let modalFestividadesSeis = document.getElementById("mainFestividadesSeis")

//ABRIR LOS CONTENEDORES DE Festividades
abrirFestividadesUno.addEventListener("click", () => {
    modalFestividadesUno.style.display = "flex"
    mainFestividades.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirFestividadesDos.addEventListener("click", () => {
    modalFestividadesDos.style.display = "flex"
    mainFestividades.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirFestividadesTres.addEventListener("click", () => {
    modalFestividadesTres.style.display = "flex"
    mainFestividades.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirFestividadesCuatro.addEventListener("click", () => {
    modalFestividadesCuatro.style.display = "flex"
    mainFestividades.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirFestividadesCinco.addEventListener("click", () => {
    modalFestividadesCinco.style.display = "flex"
    mainFestividades.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirFestividadesSeis.addEventListener("click", () => {
    modalFestividadesSeis.style.display = "flex"
    mainFestividades.classList.add("main-editado")
    window.scrollTo(0, 90)
})

//CERRAR LOS CONTENEDORES DE Festividades
cerrarFestividadesUno.addEventListener("click", () => {
    modalFestividadesUno.style.display = "none"
    mainFestividades.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarFestividadesDos.addEventListener("click", () => {
    modalFestividadesDos.style.display = "none"
    mainFestividades.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarFestividadesTres.addEventListener("click", () => {
    modalFestividadesTres.style.display = "none"
    mainFestividades.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarFestividadesCuatro.addEventListener("click", () => {
    modalFestividadesCuatro.style.display = "none"
    mainFestividades.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarFestividadesCinco.addEventListener("click", () => {
    modalFestividadesCinco.style.display = "none"
    mainFestividades.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarFestividadesSeis.addEventListener("click", () => {
    modalFestividadesSeis.style.display = "none"
    mainFestividades.classList.remove("main-editado")
    window.scrollTo(0, 0)
})

/* ---------------------------------------------------- */
let abrirMusicaUno = document.getElementById("botonVerInfoMusicaUno")
let abrirMusicaDos = document.getElementById("botonVerInfoMusicaDos")
let abrirMusicaTres = document.getElementById("botonVerInfoMusicaTres")
let abrirMusicaCuatro = document.getElementById("botonVerInfoMusicaCuatro")
let abrirMusicaCinco = document.getElementById("botonVerInfoMusicaCinco")
let abrirMusicaSeis = document.getElementById("botonVerInfoMusicaSeis")

//CARGAMOS LOS BOTONES de deporte PARA CERRAR CADA MODAL
let cerrarMusicaUno = document.getElementById("cierraMusicaUno")
let cerrarMusicaDos = document.getElementById("cierraMusicaDos")
let cerrarMusicaTres = document.getElementById("cierraMusicaTres")
let cerrarMusicaCuatro = document.getElementById("cierraMusicaCuatro")
let cerrarMusicaCinco = document.getElementById("cierraMusicaCinco")
let cerrarMusicaSeis = document.getElementById("cierraMusicaSeis")

//LOS MODALES DE CADA UNO DE LOS MUSICA
let modalMusicaUno = document.getElementById("mainMusicaUno")
let modalMusicaDos = document.getElementById("mainMusicaDos")
let modalMusicaTres = document.getElementById("mainMusicaTres")
let modalMusicaCuatro = document.getElementById("mainMusicaCuatro")
let modalMusicaCinco = document.getElementById("mainMusicaCinco")
let modalMusicaSeis = document.getElementById("mainMusicaSeis")

//ABRIR LOS CONTENEDORES DE MUSICA
abrirMusicaUno.addEventListener("click", () => {
    modalMusicaUno.style.display = "flex"
    mainMusica.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirMusicaDos.addEventListener("click", () => {
    modalMusicaDos.style.display = "flex"
    mainMusica.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirMusicaTres.addEventListener("click", () => {
    modalMusicaTres.style.display = "flex"
    mainMusica.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirMusicaCuatro.addEventListener("click", () => {
    modalMusicaCuatro.style.display = "flex"
    mainMusica.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirMusicaCinco.addEventListener("click", () => {
    modalMusicaCinco.style.display = "flex"
    mainMusica.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirMusicaSeis.addEventListener("click", () => {
    modalMusicaSeis.style.display = "flex"
    mainMusica.classList.add("main-editado")
    window.scrollTo(0, 90)
})

//CERRAR LOS CONTENEDORES DE MUSICA
cerrarMusicaUno.addEventListener("click", () => {
    modalMusicaUno.style.display = "none"
    mainMusica.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarMusicaDos.addEventListener("click", () => {
    modalMusicaDos.style.display = "none"
    mainMusica.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarMusicaTres.addEventListener("click", () => {
    modalMusicaTres.style.display = "none"
    mainMusica.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarMusicaCuatro.addEventListener("click", () => {
    modalMusicaCuatro.style.display = "none"
    mainMusica.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarMusicaCinco.addEventListener("click", () => {
    modalMusicaCinco.style.display = "none"
    mainMusica.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarMusicaSeis.addEventListener("click", () => {
    modalMusicaSeis.style.display = "none"
    mainMusica.classList.remove("main-editado")
    window.scrollTo(0, 0)
})

/* ---------------------------------------------------- */
let abrirJuegosUno = document.getElementById("botonVerInfoJuegosUno")
let abrirJuegosDos = document.getElementById("botonVerInfoJuegosDos")
let abrirJuegosTres = document.getElementById("botonVerInfoJuegosTres")
let abrirJuegosCuatro = document.getElementById("botonVerInfoJuegosCuatro")
let abrirJuegosCinco = document.getElementById("botonVerInfoJuegosCinco")
let abrirJuegosSeis = document.getElementById("botonVerInfoJuegosSeis")

//CARGAMOS LOS BOTONES de deporte PARA CERRAR CADA MODAL
let cerrarJuegosUno = document.getElementById("cierraJuegosUno")
let cerrarJuegosDos = document.getElementById("cierraJuegosDos")
let cerrarJuegosTres = document.getElementById("cierraJuegosTres")
let cerrarJuegosCuatro = document.getElementById("cierraJuegosCuatro")
let cerrarJuegosCinco = document.getElementById("cierraJuegosCinco")
let cerrarJuegosSeis = document.getElementById("cierraJuegosSeis")

//LOS MODALES DE CADA UNO DE LOS JUEGOS
let modalJuegosUno = document.getElementById("mainJuegosUno")
let modalJuegosDos = document.getElementById("mainJuegosDos")
let modalJuegosTres = document.getElementById("mainJuegosTres")
let modalJuegosCuatro = document.getElementById("mainJuegosCuatro")
let modalJuegosCinco = document.getElementById("mainJuegosCinco")
let modalJuegosSeis = document.getElementById("mainJuegosSeis")

//ABRIR LOS CONTENEDORES DE JUEGOS
abrirJuegosUno.addEventListener("click", () => {
    modalJuegosUno.style.display = "flex"
    mainJuegos.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirJuegosDos.addEventListener("click", () => {
    modalJuegosDos.style.display = "flex"
    mainJuegos.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirJuegosTres.addEventListener("click", () => {
    modalJuegosTres.style.display = "flex"
    mainJuegos.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirJuegosCuatro.addEventListener("click", () => {
    modalJuegosCuatro.style.display = "flex"
    mainJuegos.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirJuegosCinco.addEventListener("click", () => {
    modalJuegosCinco.style.display = "flex"
    mainJuegos.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirJuegosSeis.addEventListener("click", () => {
    modalJuegosSeis.style.display = "flex"
    mainJuegos.classList.add("main-editado")
    window.scrollTo(0, 90)
})

//CERRAR LOS CONTENEDORES DE JUEGOS
cerrarJuegosUno.addEventListener("click", () => {
    modalJuegosUno.style.display = "none"
    mainJuegos.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarJuegosDos.addEventListener("click", () => {
    modalJuegosDos.style.display = "none"
    mainJuegos.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarJuegosTres.addEventListener("click", () => {
    modalJuegosTres.style.display = "none"
    mainJuegos.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarJuegosCuatro.addEventListener("click", () => {
    modalJuegosCuatro.style.display = "none"
    mainJuegos.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarJuegosCinco.addEventListener("click", () => {
    modalJuegosCinco.style.display = "none"
    mainJuegos.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarJuegosSeis.addEventListener("click", () => {
    modalJuegosSeis.style.display = "none"
    mainJuegos.classList.remove("main-editado")
    window.scrollTo(0, 0)
})


/* ---------------------------------------------------- */
let abrirReligionesUno = document.getElementById("botonVerInfoReligionesUno")
let abrirReligionesDos = document.getElementById("botonVerInfoReligionesDos")
let abrirReligionesTres = document.getElementById("botonVerInfoReligionesTres")
let abrirReligionesCuatro = document.getElementById("botonVerInfoReligionesCuatro")
let abrirReligionesCinco = document.getElementById("botonVerInfoReligionesCinco")
let abrirReligionesSeis = document.getElementById("botonVerInfoReligionesSeis")

//CARGAMOS LOS BOTONES de deporte PARA CERRAR CADA MODAL
let cerrarReligionesUno = document.getElementById("cierraReligionesUno")
let cerrarReligionesDos = document.getElementById("cierraReligionesDos")
let cerrarReligionesTres = document.getElementById("cierraReligionesTres")
let cerrarReligionesCuatro = document.getElementById("cierraReligionesCuatro")
let cerrarReligionesCinco = document.getElementById("cierraReligionesCinco")
let cerrarReligionesSeis = document.getElementById("cierraReligionesSeis")

//LOS MODALES DE CADA UNO DE LOS JUEGOS
let modalReligionesUno = document.getElementById("mainReligionesUno")
let modalReligionesDos = document.getElementById("mainReligionesDos")
let modalReligionesTres = document.getElementById("mainReligionesTres")
let modalReligionesCuatro = document.getElementById("mainReligionesCuatro")
let modalReligionesCinco = document.getElementById("mainReligionesCinco")
let modalReligionesSeis = document.getElementById("mainReligionesSeis")

//ABRIR LOS CONTENEDORES DE JUEGOS
abrirReligionesUno.addEventListener("click", () => {
    modalReligionesUno.style.display = "flex"
    mainReligiones.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirReligionesDos.addEventListener("click", () => {
    modalReligionesDos.style.display = "flex"
    mainReligiones.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirReligionesTres.addEventListener("click", () => {
    modalReligionesTres.style.display = "flex"
    mainReligiones.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirReligionesCuatro.addEventListener("click", () => {
    modalReligionesCuatro.style.display = "flex"
    mainReligiones.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirReligionesCinco.addEventListener("click", () => {
    modalReligionesCinco.style.display = "flex"
    mainReligiones.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirReligionesSeis.addEventListener("click", () => {
    modalReligionesSeis.style.display = "flex"
    mainReligiones.classList.add("main-editado")
    window.scrollTo(0, 90)
})

//CERRAR LOS CONTENEDORES DE JUEGOS
cerrarReligionesUno.addEventListener("click", () => {
    modalReligionesUno.style.display = "none"
    mainReligiones.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarReligionesDos.addEventListener("click", () => {
    modalReligionesDos.style.display = "none"
    mainReligiones.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarReligionesTres.addEventListener("click", () => {
    modalReligionesTres.style.display = "none"
    mainReligiones.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarReligionesCuatro.addEventListener("click", () => {
    modalReligionesCuatro.style.display = "none"
    mainReligiones.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarReligionesCinco.addEventListener("click", () => {
    modalReligionesCinco.style.display = "none"
    mainReligiones.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarReligionesSeis.addEventListener("click", () => {
    modalReligionesSeis.style.display = "none"
    mainReligiones.classList.remove("main-editado")
    window.scrollTo(0, 0)
})


/* ---------------------------------------------------- */
let abrirBaresUno = document.getElementById("botonVerInfoBaresUno")
let abrirBaresDos = document.getElementById("botonVerInfoBaresDos")
let abrirBaresTres = document.getElementById("botonVerInfoBaresTres")
let abrirBaresCuatro = document.getElementById("botonVerInfoBaresCuatro")
let abrirBaresCinco = document.getElementById("botonVerInfoBaresCinco")
let abrirBaresSeis = document.getElementById("botonVerInfoBaresSeis")

//CARGAMOS LOS BOTONES de deporte PARA CERRAR CADA MODAL
let cerrarBaresUno = document.getElementById("cierraBaresUno")
let cerrarBaresDos = document.getElementById("cierraBaresDos")
let cerrarBaresTres = document.getElementById("cierraBaresTres")
let cerrarBaresCuatro = document.getElementById("cierraBaresCuatro")
let cerrarBaresCinco = document.getElementById("cierraBaresCinco")
let cerrarBaresSeis = document.getElementById("cierraBaresSeis")

//LOS MODALES DE CADA UNO DE LOS JUEGOS
let modalBaresUno = document.getElementById("mainBaresUno")
let modalBaresDos = document.getElementById("mainBaresDos")
let modalBaresTres = document.getElementById("mainBaresTres")
let modalBaresCuatro = document.getElementById("mainBaresCuatro")
let modalBaresCinco = document.getElementById("mainBaresCinco")
let modalBaresSeis = document.getElementById("mainBaresSeis")

//ABRIR LOS CONTENEDORES DE JUEGOS
abrirBaresUno.addEventListener("click", () => {
    modalBaresUno.style.display = "flex"
    mainBares.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirBaresDos.addEventListener("click", () => {
    modalBaresDos.style.display = "flex"
    mainBares.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirBaresTres.addEventListener("click", () => {
    modalBaresTres.style.display = "flex"
    mainBares.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirBaresCuatro.addEventListener("click", () => {
    modalBaresCuatro.style.display = "flex"
    mainBares.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirBaresCinco.addEventListener("click", () => {
    modalBaresCinco.style.display = "flex"
    mainBares.classList.add("main-editado")
    window.scrollTo(0, 90)
})
abrirBaresSeis.addEventListener("click", () => {
    modalBaresSeis.style.display = "flex"
    mainBares.classList.add("main-editado")
    window.scrollTo(0, 90)
})

//CERRAR LOS CONTENEDORES DE JUEGOS
cerrarBaresUno.addEventListener("click", () => {
    modalBaresUno.style.display = "none"
    mainBares.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarBaresDos.addEventListener("click", () => {
    modalBaresDos.style.display = "none"
    mainBares.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarBaresTres.addEventListener("click", () => {
    modalBaresTres.style.display = "none"
    mainBares.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarBaresCuatro.addEventListener("click", () => {
    modalBaresCuatro.style.display = "none"
    mainBares.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarBaresCinco.addEventListener("click", () => {
    modalBaresCinco.style.display = "none"
    mainBares.classList.remove("main-editado")
    window.scrollTo(0, 0)
})
cerrarBaresSeis.addEventListener("click", () => {
    modalBaresSeis.style.display = "none"
    mainBares.classList.remove("main-editado")
    window.scrollTo(0, 0)
})


//nunca se entendio el error de poder ir a alguna seccion estando primero en login pero no se puede ir a login estando en una seccion