// Variables globales
let recetas = null;
let recetaActual = 0;
let totalRecetas = 0;

// Elementos del DOM
const vistaCuadricula = document.getElementById('vista-cuadricula');
const vistaDetalle = document.getElementById('vista-detalle');
const tituloReceta = document.getElementById('titulo-receta');
const imagenReceta = document.getElementById('imagen-receta');
const infoDuracion = document.getElementById('info-duracion');
const infoPorciones = document.getElementById('info-porciones');
const listaIngredientes = document.getElementById('lista-ingredientes');
const listaProcedimiento = document.getElementById('lista-procedimiento');
const contenedorDetalle = document.getElementById('contenedor-detalle');

// Cargar las recetas al iniciar
cargarRecetas();

async function cargarRecetas() {
    // Simulamos que cargamos el JSON directamente aquí para que sea más fácil editar
    // En un futuro podrías guardar esto en un archivo "loreto.json"
    recetas = {
        "El Juane Loretano": {
            "Info": {
                "duracion": "Prep: 2 horas",
                "porciones": "Plato Principal",
                "dificultad": "Media",
                "categoria": "Gastronomía",
                "calorias": "Alto valor energético",
                "descripcion": "El plato más representativo de la fiesta de San Juan. Representa la cabeza de Juan el Bautista."
            },
            "Ingredientes": ["Arroz", "Gallina de chacra", "Aceitunas y Huevo", "Hojas de Bijao (para envolver)", "Palillo y especias de la selva"],
            "Procedimiento": ["Preparar el arroz con palillo y especias.", "Presar la gallina y aderezarla.", "Envolver la mezcla en hojas de bijao en forma redonda.", "Hervir los juanes por aproximadamente una hora."],
            "Imagen": "https://www.peru.travel/Contenido/General/Imagen/es/411/1.1/juane_portada.jpg",
            "color": "#4caf50"
        },
        "Tacacho con Cecina": {
            "Info": {
                "duracion": "Prep: 40 min",
                "porciones": "Desayuno/Almuerzo",
                "dificultad": "Fácil",
                "categoria": "Gastronomía",
                "descripcion": "Deliciosas bolas de plátano verde machacado con manteca, acompañadas de carne ahumada de cerdo."
            },
            "Ingredientes": ["Plátano verde (bellaco)", "Cecina (cerdo ahumado)", "Manteca de cerdo", "Sal al gusto", "Ají de cocona (acompañamiento)"],
            "Procedimiento": ["Asar o freír los plátanos verdes.", "Machacarlos calientes con manteca y trozos de chicharrón.", "Formar bolas con la masa.", "Freír la cecina y servir junto al tacacho."],
            "Imagen": "https://cocineroperu.com/wp-content/uploads/2018/07/tacacho-con-cecina-selva-1.jpg",
            "color": "#ff9800"
        },
        "Inchicapi de Gallina": {
            "Info": {
                "duracion": "Prep: 1 hora",
                "porciones": "Sopa",
                "dificultad": "Media",
                "categoria": "Gastronomía",
                "descripcion": "Sopa espesa y nutritiva a base de maní molido, maíz y gallina de chacra."
            },
            "Ingredientes": ["Gallina en presas", "Maní tostado molido", "Harina de maíz", "Sacha culantro", "Yuca sancochada"],
            "Procedimiento": ["Hervir la gallina hasta que esté suave.", "Licuar el maní con el maíz y el culantro.", "Agregar al caldo y mover para que espese.", "Servir con yuca."],
            "Imagen": "https://www.recetasnestle.com.pe/sites/default/files/srh_recipes/1a2d0d95ce149a2498fa185799376a1f.jpg",
            "color": "#FFF176"
        },
        "Ensalada de Chonta": {
            "Info": {
                "duracion": "Prep: 15 min",
                "porciones": "Entrada",
                "dificultad": "Fácil",
                "categoria": "Gastronomía",
                "descripcion": "Fresca ensalada hecha con el corazón de la palmera (palmito)."
            },
            "Ingredientes": ["Chonta (Palmito) fresco", "Limones", "Aceite de oliva", "Tomates", "Palta"],
            "Procedimiento": ["Deshilachar la chonta en tiras finas.", "Lavar bien y escurrir.", "Mezclar con limón, sal, pimienta y aceite.", "Servir como acompañamiento."],
            "Imagen": "https://www.comeperuano.pe/wp-content/uploads/2023/02/Ensalada-de-chonta-paso-a-paso.jpg",
            "color": "#DCEDC8"
        },
        "Patarashca": {
            "Info": {
                "duracion": "Prep: 45 min",
                "porciones": "Plato Principal",
                "dificultad": "Media",
                "categoria": "Gastronomía",
                "descripcion": "Pescado de río entero envuelto en hojas y asado al carbón."
            },
            "Ingredientes": ["Pescado entero (Bocachico)", "Hojas de Bijao", "Cebolla y ajos", "Sacha culantro", "Ají dulce"],
            "Procedimiento": ["Limpiar el pescado.", "Rellenar con el aderezo de verduras y especias.", "Envolver en hoja de bijao.", "Asar a la parrilla 20 min."],
            "Imagen": "https://i.pinimg.com/736x/a0/50/66/a05066e46cb07cbb4f0b960a67063258.jpg",
            "color": "#FFCCBC"
        },
        // --- SECCIÓN LUGARES TURÍSTICOS ---
        "Río Amazonas": {
            "Info": {
                "duracion": "Full Day / Varios días",
                "porciones": "Nauta / Iquitos",
                "dificultad": "Aventura",
                "categoria": "Turismo",
                "descripcion": "Navega por el río más caudaloso y largo del mundo, una de las 7 maravillas naturales."
            },
            "Ingredientes": ["Delfines rosados", "Naturaleza exuberante", "Comunidades nativas", "Puestas de sol increíbles", "Observación de aves"],
            "Procedimiento": ["Viajar a Iquitos (Vía aérea o fluvial).", "Tomar un bote desde el puerto de Bellavista-Nanay.", "Se recomienda contratar un tour guiado.", "Llevar repelente, bloqueador y ropa ligera."],
            "Imagen": "https://www.peru.travel/Contenido/General/Imagen/es/995/1.1/Rio-Amazonas-desktop.jpg",
            "color": "#2196f3"
        },
        "Reserva Pacaya Samiria": {
            "Info": {
                "duracion": "3 a 5 días",
                "porciones": "Requena / Loreto",
                "dificultad": "Ecoturismo",
                "categoria": "Turismo",
                "descripcion": "Conocida como 'La selva de los espejos', es la segunda área natural protegida más grande del Perú."
            },
            "Ingredientes": ["Reflejos en el agua", "Paiche y tortugas taricayas", "Biodiversidad única", "Caminatas nocturnas", "Camping en la selva"],
            "Procedimiento": ["Ir de Iquitos a Nauta (aprox 2 horas en auto).", "Tomar una embarcación hacia la reserva.", "Es obligatorio ingresar con un guía autorizado.", "Vacunarse contra la fiebre amarilla antes de ir."],
            "Imagen": "https://www.peru.travel/Contenido/Atractivo/Imagen/es/65/1.1/Principal/rn-pacaya-samiria.jpg",
            "color": "#00695c"
        },
        "Isla de los Monos": {
            "Info": {
                "duracion": "3 horas",
                "porciones": "Río Amazonas",
                "dificultad": "Fácil",
                "categoria": "Turismo",
                "descripcion": "Centro de rescate donde los monos viven libres. Puedes interactuar con ellos."
            },
            "Ingredientes": ["Frutas (proporcionadas allá)", "Sin joyas ni lentes", "Amor por animales", "Donación voluntaria", "Respeto"],
            "Procedimiento": ["Navegar 30km desde Iquitos.", "Ingresar al refugio.", "Dejar que los monos se acerquen a ti.", "No agarrarlos, ellos te abrazan."],
            "Imagen": "https://www.peru.travel/Contenido/General/Imagen/es/390/1.1/Isla-de-monos.jpg",
            "color": "#8D6E63"
        },
        "Complejo Quistococha": {
            "Info": {
                "duracion": "Medio día",
                "porciones": "Carretera Nauta",
                "dificultad": "Fácil",
                "categoria": "Turismo",
                "descripcion": "Zoológico natural con playa de arena blanca artificial ('Tunchi Playa')."
            },
            "Ingredientes": ["Ropa de baño", "Entrada popular", "Almuerzo regional", "Caminata", "Descanso"],
            "Procedimiento": ["Tomar mototaxi o bus al km 6.5.", "Recorrer el zoológico de fauna amazónica.", "Almorzar en los restaurantes típicos.", "Bañarse en la playa de la laguna."],
            "Imagen": "https://iquitosperu.net/uploads/large/laguna-quistococha.jpg",
            "color": "#66BB6A"
        },
        "Mariposario Pilpintuwasi": {
            "Info": {
                "duracion": "2 horas",
                "porciones": "Nanay",
                "dificultad": "Fácil",
                "categoria": "Turismo",
                "descripcion": "Un santuario de mariposas y centro de rescate de animales silvestres."
            },
            "Ingredientes": ["Paciencia", "Cámara macro", "Silencio", "Guía del lugar", "Bote"],
            "Procedimiento": ["Cruzar el río Nanay en bote.", "Caminar 15 min hasta el mariposario.", "Ver el ciclo de vida de la mariposa.", "Conocer al jaguar Pedro (si está despierto)."],
            "Imagen": "https://iquitosperu.net/uploads/large/mariposario-pilpintuwasi.jpg",
            "color": "#AB47BC"
        },
        // --- SECCIÓN HOSPEDAJES (Añadir al final del objeto recetas) ---
        "Amazon Eco Lodge": {
            "Info": {
                "duracion": "Desde S/ 250",
                "porciones": "Noche p/p",
                "dificultad": "Selva Baja",
                "categoria": "Hospedaje",
                "descripcion": "Cabañas ecológicas construidas con materiales locales, perfectas para desconectarse."
            },
            "Ingredientes": ["Cabañas con mosquiteros", "Alimentación completa", "Excursiones guiadas", "Traslado fluvial incluido", "Energía solar"],
            "Procedimiento": ["Reservar con 1 semana de anticipación.", "Llegar al puerto de Iquitos para el recojo.", "Disfrutar de la estancia sin Wi-Fi para conexión total.", "Seguir las normas de conservación de la reserva."],
            "Imagen": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/2d/40/09/amazonas-eco-lodge.jpg?w=900&h=500&s=1",
            "color": "#81C784"
        },
        "DoubleTree by Hilton": {
            "Info": {
                "duracion": "Desde S/ 480",
                "porciones": "Centro Iquitos",
                "dificultad": "Lujo",
                "categoria": "Hospedaje",
                "descripcion": "El hotel más lujoso de la ciudad, ubicado frente a la Plaza de Armas de Iquitos."
            },
            "Ingredientes": ["Piscina al aire libre", "Gimnasio y Spa", "Restaurante internacional", "Aire acondicionado", "Vista a la ciudad"],
            "Procedimiento": ["Check-in a partir de las 3:00 PM.", "Disfrutar del buffet de desayuno regional.", "Solicitar transporte al aeropuerto si es necesario.", "Visitar el bar del último piso para ver el atardecer."],
            "Imagen": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/528743335.jpg?k=5a1d522e294879bdf20be5d11769286c98ed7708ed3d933199578dbebb3df049&o=",
            "color": "#5C6BC0"
        },
        "Flying Dog Hostel": {
            "Info": {
                "duracion": "Desde S/ 45",
                "porciones": "Económico",
                "dificultad": "Cerca al Malecón",
                "categoria": "Hospedaje",
                "descripcion": "Opción ideal para mochileros y viajeros jóvenes en el corazón de Iquitos."
            },
            "Ingredientes": ["Camas en dormitorios", "Cocina compartida", "Área de hamacas", "Agua caliente", "Información turística"],
            "Procedimiento": ["Registrarse en recepción.", "Guardar objetos de valor en los lockers.", "Socializar en las áreas comunes.", "Consultar por tours económicos en el front desk."],
            "Imagen": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/248595397.jpg?k=175e6de80364ed001a000d75b0e15b9da4867e7d3f7d1029521db0d751009e1c&o=",
            "color": "#FF7043"
        }
    };
    iniciarApp();
}

function iniciarApp() {
totalRecetas = Object.keys(recetas).length;
mostrarCuadricula();
}

function mostrarCuadricula() {
    vistaCuadricula.innerHTML = '';
    vistaCuadricula.className = ''; 

    const nombres = Object.keys(recetas);
    
    // 1. Separamos los grupos
    const gastronomia = nombres.filter(n => recetas[n].Info.categoria === 'Gastronomía');
    const turismo = nombres.filter(n => recetas[n].Info.categoria === 'Turismo');
    const hospedaje = nombres.filter(n => recetas[n].Info.categoria === 'Hospedaje');

    // 2. Definimos la función para crear cada sección
    const crearSeccion = (titulo, listaItems) => {
        if (listaItems.length === 0) return;

        // Crear el subtítulo de la sección
        const subtitulo = document.createElement('h2');
        subtitulo.textContent = titulo;
        subtitulo.className = "subtitulo-seccion"; // Puedes darle estilo en CSS
        subtitulo.style.color = '#fff';
        subtitulo.style.textAlign = 'center';
        subtitulo.style.width = '100%';
        subtitulo.style.padding = '20px 0 10px 0';
        subtitulo.style.borderBottom = '2px solid rgba(255,255,255,0.2)';
        subtitulo.style.marginBottom = '20px';
        vistaCuadricula.appendChild(subtitulo);

        // Crear el contenedor de tarjetas (Grid)
        const gridContainer = document.createElement('div');
        gridContainer.className = 'cuadricula'; // Usa tu clase de CSS
        
        listaItems.forEach(nombre => {
            const item = recetas[nombre];
            
            // --- LÓGICA DE ICONOS DINÁMICOS ---
            let icon1 = '⏱️', icon2 = '👥';
            if (item.Info.categoria === 'Turismo') { icon1 = '📍'; icon2 = '🗺️'; }
            if (item.Info.categoria === 'Hospedaje') { icon1 = '💰'; icon2 = '🏠'; }

            const tarjeta = document.createElement('div');
            tarjeta.className = 'tarjeta mostrar';
            
            tarjeta.innerHTML = `
                <img src="${item.Imagen}" alt="${nombre}">
                <div class="tarjeta-contenido">
                    <h3 class="tarjeta-titulo">${nombre}</h3>
                    <div class="tarjeta-info">${icon1} ${item.Info.duracion} &nbsp; ${icon2} ${item.Info.porciones}</div>
                    <p class="tarjeta-descripcion">${item.Info.descripcion}</p>
                </div>
            `;
            
            const indiceOriginal = nombres.indexOf(nombre);
            tarjeta.onclick = () => mostrarDetalle(indiceOriginal);
            
            gridContainer.appendChild(tarjeta);
        });

        vistaCuadricula.appendChild(gridContainer);
    };

    // 3. Renderizamos las tres secciones en orden
    crearSeccion("🍽️ Gastronomía Loretana", gastronomia);
    crearSeccion("🌴 Lugares Turísticos", turismo);
    crearSeccion("🏨 Dónde Hospedarse", hospedaje);
}

function mostrarDetalle(indice) {
recetaActual = indice;
actualizarDetalle();

// Cambiar vistas
vistaCuadricula.style.display = 'none';
vistaDetalle.style.display = 'block';

// OCULTAR la descripción de Loreto
document.getElementById('descripcion-loreto').style.display = 'none';

contenedorDetalle.classList.add('mostrar');
window.scrollTo(0, 0);
}

function volverACuadricula() {
vistaDetalle.style.display = 'none';
vistaCuadricula.style.display = 'grid';

// MOSTRAR la descripción de Loreto de nuevo
document.getElementById('descripcion-loreto').style.display = 'block';

}

function recetaAnterior() {
recetaActual--;
if (recetaActual < 0) {
    recetaActual = totalRecetas - 1;
}
actualizarDetalle();
window.scrollTo(0, 0);
}

function recetaSiguiente() {
recetaActual++;
if (recetaActual >= totalRecetas) {
    recetaActual = 0;
}
actualizarDetalle();
window.scrollTo(0, 0);
}

function actualizarDetalle() {
    const nombresRecetas = Object.keys(recetas);
    const nombre = nombresRecetas[recetaActual];
    const receta = recetas[nombre];

    // 1. Referencias a los elementos del detalle
    const labelIng = document.getElementById('label-ingredientes');
    const labelProc = document.getElementById('label-procedimiento');
    const campoDescripcion = document.getElementById('descripcion-detalle');

    // 2. CAMBIO DINÁMICO DE TEXTOS SEGÚN CATEGORÍA
    if (receta.Info.categoria === "Hospedaje") {
        if(labelIng) labelIng.textContent = "Servicios e Instalaciones";
        if(labelProc) labelProc.textContent = "Información de Reserva";
    } 
    else if (receta.Info.categoria === "Turismo") {
        if(labelIng) labelIng.textContent = "Atractivos principales";
        if(labelProc) labelProc.textContent = "Tips para el viajero";
    } 
    else {
        // Por defecto para Gastronomía
        if(labelIng) labelIng.textContent = "Ingredientes";
        if(labelProc) labelProc.textContent = "Preparación";
    }

    // 3. Actualizar textos básicos
    tituloReceta.textContent = nombre;
    imagenReceta.src = receta.Imagen;
    imagenReceta.alt = nombre;
    if(campoDescripcion) campoDescripcion.textContent = receta.Info.descripcion || "";

    // 4. Actualizar información de iconos (Duración/Precio y Ubicación)
    let icon1 = '⏱️', icon2 = '👥';
    if (receta.Info.categoria === 'Turismo') { icon1 = '📍'; icon2 = '🗺️'; }
    if (receta.Info.categoria === 'Hospedaje') { icon1 = '💰'; icon2 = '🏠'; }

    infoDuracion.innerHTML = `<strong>${icon1}</strong> ${receta.Info.duracion}`;
    infoPorciones.innerHTML = `<strong>${icon2}</strong> ${receta.Info.porciones}`;

    // 5. Limpiar y llenar listas (Ingredientes/Servicios)
    listaIngredientes.innerHTML = '';
    receta.Ingredientes.forEach(item => {
        const elemento = document.createElement('li');
        elemento.textContent = item;
        listaIngredientes.appendChild(elemento);
    });

    // 6. Limpiar y llenar procedimiento (Pasos/Reserva)
    listaProcedimiento.innerHTML = '';
    receta.Procedimiento.forEach(paso => {
        const elemento = document.createElement('li');
        elemento.textContent = paso;
        listaProcedimiento.appendChild(elemento);
    });

    // Color de borde dinámico
    if (receta.color) {
        contenedorDetalle.style.borderLeft = `5px solid ${receta.color}`;
    }
}