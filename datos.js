/* ==========================================================
   DATOS DE LA WEB — Entreculturas Montesión Cadete A
   Este es el único archivo que hay que tocar para actualizar.
   ========================================================== */

/* =====================================================================
   DATOS — todo lo que hay que tocar para actualizar la web está aquí.
   Para añadir un partido: copia un bloque y cámbialo.
     casa:true  -> jugamos en casa (Montesión aparece a la izquierda)
     gf/gc      -> goles a favor / en contra del Montesión
     goleadores -> [{n:'Nombre', g:goles}]
     porteros   -> [{n:'Nombre', ge:goles encajados}]
   ===================================================================== */

const EQUIPO = "Montesión";

/* Nombres que son la misma persona. Izquierda: como lo escribes a veces.
   Derecha: como quieres que salga en la web. */
const NOMBRES = {
  "Luis": "Luis Magre",
  "Guille": "Guillermo",
  "Jose": "José María"
};
const nombre = n => NOMBRES[n] || n;

const COMPETICIONES = [
  {
    id: "clasificacion",
    nombre: "Fase de clasificación",
    grupo: "Grupo F",
    /* Calendario oficial FFIB. casa:true = jugamos en casa. descansa:true = jornada libre.
       Cuando se juegue, el partido se añade abajo con jornada:N y el calendario muestra el resultado. */
    calendario: [
      {j:1,  fecha:"26 sep", rival:"Manacor Fisiomedia C", casa:true,  hora:"11:15", campo:"Pab. San Pedro Claver"},
      {j:2,  fecha:"3 oct",  rival:"Sant Joan",            casa:false, hora:"",      campo:"P.M. Son Juny"},
      {j:3,  fecha:"10 oct", rival:"Joves d'Inca A",       casa:true},
      {j:4,  fecha:"17 oct", rival:"Sagrat Cor B",         casa:false},
      {j:5,  fecha:"24 oct", descansa:true},
      {j:6,  fecha:"31 oct", rival:"Manacor Fisiomedia C", casa:false},
      {j:7,  fecha:"7 nov",  rival:"Sant Joan",            casa:true},
      {j:8,  fecha:"14 nov", rival:"Joves d'Inca A",       casa:false},
      {j:9,  fecha:"21 nov", rival:"Sagrat Cor B",         casa:true},
      {j:10, fecha:"28 nov", descansa:true}
    ],
    formato: [
      ["Fechas", "Del 26/09/2026 al 28/11/2026"],
      ["Formato", "31 equipos repartidos en 6 grupos (uno de 6 y cinco de 5), a doble vuelta."],
      ["Qué reparte", "División de Honor (10 equipos): los 6 primeros + los 4 mejores segundos. Preferente (10): los 2 segundos restantes + los 6 terceros + los 2 mejores cuartos. 1.ª Regional (11): los 4 cuartos restantes + los 6 quintos + el 6.º del grupo de seis."]
    ],
    partidos: [
      {
        jornada: 1,
        fecha: "26 sep 2026",
        rival: "Manacor Fisiomedia C",
        casa: true,
        estado: "final",
        campo: "Pab. San Pedro Claver",
        gf: 23, gc: 0,
        descanso: "10-0",
        goles: [
          {m:"1-0",  n:"Álvaro", a:"Sebas"},
          {m:"2-0",  n:"Kiko",   a:"Álvaro"},
          {m:"3-0",  n:"Alonso", a:"", nota:"tras robo"},
          {m:"4-0",  n:"Lluc",   a:"Álvaro"},
          {m:"5-0",  n:"Sebas",  a:"Lluc"},
          {m:"6-0",  n:"Luis",   a:"Sebas"},
          {m:"7-0",  n:"Alonso", a:"Sebas"},
          {m:"8-0",  n:"Alonso", a:"Lluc"},
          {m:"9-0",  n:"Lluc",   a:"", nota:"al rebote"},
          {m:"10-0", n:"Alonso", a:"Álvaro"},
          {m:"11-0", n:"Nico",   a:"Kiko"},
          {m:"12-0", n:"Alonso", a:"Álvaro"},
          {m:"13-0", n:"Alonso", a:"Lluc"},
          {m:"14-0", n:"Lluc",   a:"Alonso"},
          {m:"15-0", n:"Sebas",  a:"", nota:"tras robo"},
          {m:"16-0", n:"Marcos", a:"", nota:"tras robo"},
          {m:"17-0", n:"Nico",   a:"Kiko"},
          {m:"18-0", n:"Nico",   a:"", nota:"al rechace"},
          {m:"19-0", n:"Lluc",   a:"Álvaro"},
          {m:"20-0", n:"Luis",   a:"Lluc"},
          {m:"21-0", n:"Luis",   a:""},
          {m:"22-0", n:"Kiko",   a:"Nico"},
          {m:"23-0", n:"Nico",   a:"Sebas"}
        ],
        goleadores: [],
        porteros: [ {n:"Guille", ge:0}, {n:"Nico", ge:0} ]
      }
    ]
  },
  {
    id: "liga",
    nombre: "Liga · 2.ª fase",
    formato: [
      ["Fechas", "Del 12/12/2026 al 22/05/2027 (División de Honor y Preferente). 1.ª Regional hasta el 05/06/2027."],
      ["Formato", "A doble vuelta, en la división que salga de la fase de clasificación."]
    ],
    partidos: []
  },
  {
    id: "copa",
    nombre: "Copa de la Liga",
    formato: [
      ["Fechas", "6 y 7 de marzo de 2027. En 1.ª Regional, 27 y 28 de marzo."],
      ["Formato", "Una copa por división, con los 4 primeros clasificados al acabar la primera vuelta. Semifinales 1.º–4.º y 2.º–3.º el sábado; final el domingo."],
      ["Sede", "Siempre en la pista del equipo mejor clasificado en la liga regular."]
    ],
    partidos: []
  },
  {
    id: "copa-ffib",
    nombre: "Copa FFIB · Campeonato de Mallorca",
    formato: [
      ["Fechas", "29 y 30 de mayo de 2027 (División de Honor y Preferente). 1.ª Regional, el 12 de junio."],
      ["Formato", "20 equipos repartidos en 5 cuadros de 4."]
    ],
    partidos: []
  },
  {
    id: "espana",
    nombre: "Campeonato de España de clubes",
    formato: [
      ["Fechas", "Del 4 al 6 de junio de 2027"],
      ["Formato", "Solo para los equipos de División de Honor. Hay que ganárselo."]
    ],
    partidos: []
  },
  {
    id: "amistosos",
    nombre: "Amistosos",
    plegado: true,                 // true = llega plegado, se abre al tocarlo
    formato: [
      ["Fechas", "Septiembre de 2026"],
      ["Formato", "Partidos de pretemporada, sin clasificación."]
    ],
    partidos: [
      {
        fecha: "5 sep 2026",
        rival: "Son Oliva Juvenil",
        casa: true,
        gf: 12, gc: 1,
        descanso: "4-0",                  // marcador al descanso

        goleadores: [
          {n:"José María", g:4},
          {n:"Nico", g:3},
          {n:"Álvaro", g:3},
          {n:"Luis", g:1},
          {n:"Sebas", g:1}
        ],
        porteros: [ {n:"Guille", ge:1}, {n:"Nico", ge:0} ]
      },
      {
        fecha: "6 sep 2026",
        rival: "Juan de Ávila Senior Regional",
        casa: false,
        gf: 13, gc: 1,
        descanso: "1-3",                  // marcador al descanso

        goleadores: [
          {n:"José María", g:3},
          {n:"Kiko", g:2},
          {n:"Nico", g:2},
          {n:"Alonso", g:2},
          {n:"Marcos", g:1},
          {n:"Sebas", g:1},
          {n:"Álvaro", g:1},
          {n:"Luis Magre", g:1}
        ],
        porteros: [ {n:"Nico", ge:1}, {n:"Guille", ge:0} ]
      }
,
      {
        fecha: "11 sep 2026",
        rival: "Son Ferrer",
        casa: false,
        estado: "final",               // "descanso" | "jugando" | "final"
        campo: "Pabellón de Son Ferrer",
        gf: 7, gc: 1,
        descanso: "0-3",               // marcador al descanso, tal como se lee en la web

        /* Cronología. Gol nuestro: {m, n, a, nota}. Del rival: {tipo:"rival", m, encaja}.
           Parada: {tipo:"parada", n, penalti:true, nota}. nota "de falta" cuenta en el ranking. */
        goles: [
          {m:"0-1", n:"Jose", a:"", nota:"de falta"},
          {m:"0-2", n:"Jose", a:"Sebas"},
          {m:"0-3", n:"Sebas", a:"Marcos"},
          {m:"0-4", n:"Jose", a:"Marcos"},
          {tipo:"rival", m:"1-4", encaja:"Guille"},
          {m:"1-5", n:"Kiko", a:"Alonso"},
          {m:"1-6", n:"Luis Magre", a:"Jose"},
          {tipo:"parada", n:"Guille", penalti:true, nota:"que no era"},
          {m:"1-7", n:"Lluc", a:"", nota:"de falta"}
        ],
        goleadores: [],
        porteros: [ {n:"Guille", ge:1}, {n:"Nico", ge:0} ]
      }
,
      {
        fecha: "19 sep 2026",
        rival: "Montesión Juvenil B",
        casa: true,
        estado: "final",
        gf: 10, gc: 2,
        descanso: "5-2",
        goles: [
          {m:"1-0", n:"Sebas", a:"", nota:"tras robo"},
          {tipo:"rival", m:"1-1", encaja:"Nico"},
          {m:"2-1", n:"Sebas", a:"Marcos"},
          {tipo:"rival", m:"2-2", encaja:"Guille"},
          {m:"3-2", n:"Sebas", a:"", nota:"tras robo"},
          {m:"4-2", n:"Sebas", a:"Alonso"},
          {m:"5-2", n:"Álvaro", a:"Nico"},
          {m:"6-2", n:"Alonso", a:"Sebas"},
          {m:"7-2", n:"Sebas", a:"", nota:"tras robo"},
          {m:"8-2", n:"Nico", a:"", nota:"tras robo"},
          {m:"9-2", n:"Marcos", a:""},
          {m:"10-2", n:"Kiko", a:"Alonso"}
        ],
        goleadores: [],
        porteros: [ {n:"Nico", ge:1}, {n:"Guille", ge:1} ]
      }
    ]
  }
];

/* Resumen que abre la web. Deja titulo en "" para ocultarlo entero. */
const SUMARIO = {
  titulo: "La pretemporada",
  en: "amistosos",   // dentro de qué bloque aparece; "" = sección propia arriba
  datos: [
    ["4-0-0", "ganados-empatados-perdidos"],
    ["42", "goles a favor"],
    ["5", "goles en contra"],
    ["10", "de José María"]
  ],
  texto: [
    "Cuatro amistosos y cuatro victorias para abrir el curso: 12-1 al Son Oliva juvenil, 13-1 al Juan de Ávila senior regional, 7-1 al Son Ferrer y 10-2 al Juvenil B de casa. Cuarenta y dos goles a favor y cinco en contra, con el marcador siempre por delante en los cuatro descansos.",
    "El patrón se repite: el equipo sale serio y remata en la segunda mitad. Quince goles antes del descanso por veintisiete después. Arriba, José María manda con diez y Sebas aparece cuando se aprieta, con ocho y una exhibición de cinco contra el Juvenil B, tres de ellos robando la cartera al contrario. Desde atrás llegan las incorporaciones poderosas de Álvaro y Kiko, cinco y cuatro goles a base de sumarse con todo en cuanto el equipo roba y corre. Marcos y Alonso reparten tres asistencias cada uno, y la portería se turna sin despeinarse entre Guillermo y Nico, que alterna los minutos bajo palos con el puesto de pívot y se ha ido a seis goles como jugador de campo.",
    "Quedan cosas por ver. Jaime todavía no ha podido debutar por lesión y se le espera para cuando arranque lo serio. Lluc solo ha podido jugar uno de los cuatro y aun así se marchó con un gol de falta directa en la mochila. Y hay que apuntar el debut prometedor de Luis Magre, que ya lleva tres goles en sus primeros partidos de azul.",
    "Y en el banquillo, José empieza la temporada con mucha confianza, pese a que Chicho pida su dimisión cada dos por tres desde la grada."
  ]
};

/* Próximos partidos. Uno por competición o varios; se pintan en su bloque.
   Deja vacío lo que no sepas todavía. */
const PROXIMOS = [
  {
    competicion: "amistosos",
    rival: "Montesión Juvenil B",
    jornada: "Amistoso",
    fecha: "Sábado 19 de septiembre de 2026",
    convocatoria: "",
    hora: "",
    campo: "",
    clasificacion: null,
    ultimos: [],
    goleadores: [],
    nota: "Derbi de casa contra el Juvenil B del club."
  },
  {
    competicion: "clasificacion",
    rival: "Sant Joan C.E.",
    jornada: "Jornada 2",
    fecha: "Sábado 3 de octubre de 2026",
    convocatoria: "",
    hora: "",                      // la FFIB aún no la ha fijado
    campo: "P.M. Son Juny · Fuera",
    clasificacion: { puesto:null, pj:null, pts:null, gf:null, gc:null },
    ultimos: [],
    goleadores: [],
    nota: "El Sant Joan debuta en la jornada 1 contra el Sagrat Cor B. En cuanto juegue, aquí irán su resultado, su puesto y sus goleadores."
  }
];

/* Fotos de portada: en cada visita se elige una al azar.
   pos = qué parte de la foto se ve cuando se recorta (horizontal vertical). */
const PORTADA = [
  {src:"foto-huddle.jpg",    pos:"52% 32%", alt:"Charla del entrenador antes de saltar a la pista"},
  {src:"foto-aficion.jpg",     pos:"50% 38%", alt:"La afición del Montesión en la grada"},
  {src:"foto-equipo-portico.jpg",   pos:"50% 42%", alt:"Foto de equipo con el cuerpo técnico"},
  {src:"foto-vestuario.jpg", pos:"50% 34%", alt:"Últimos minutos en el vestuario"},
  {src:"foto-tunel.jpg",     pos:"48% 40%", alt:"Camino de la pista"},
  {src:"foto-equipo-azul.jpg",   pos:"50% 40%", alt:"El Cadete A antes del partido"}
];

const FOTOS = [
  {src:"foto-aficion.jpg",   pie:"La afición del Montesión en la grada"},
  {src:"foto-equipo-azul.jpg", pie:"El Cadete A antes del partido"},
  {src:"foto-equipo-portico.jpg", pie:"Foto de equipo con el cuerpo técnico"},
  {src:"foto-vestuario.jpg", pie:"Últimos minutos en el vestuario"},
  {src:"foto-tunel.jpg",   pie:"Camino de la pista"}
];

