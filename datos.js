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
    id: "amistosos",
    nombre: "Amistosos",
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
        porteros: [ {n:"Guille", ge:1} ]
      }
    ]
  },
  {
    id: "clasificacion",
    nombre: "Fase de clasificación",
    formato: [
      ["Fechas", "Del 26/09/2026 al 28/11/2026"],
      ["Formato", "31 equipos repartidos en 6 grupos (uno de 6 y cinco de 5), a doble vuelta."],
      ["Qué reparte", "División de Honor (10 equipos): los 6 primeros + los 4 mejores segundos. Preferente (10): los 2 segundos restantes + los 6 terceros + los 2 mejores cuartos. 1.ª Regional (11): los 4 cuartos restantes + los 6 quintos + el 6.º del grupo de seis."]
    ],
    partidos: []
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
  }
];

/* Próximos partidos. Uno por competición o varios; se pintan en su bloque.
   Deja vacío lo que no sepas todavía. */
const PROXIMOS = [
  {
    competicion: "clasificacion",
    rival: "Manacor C",
    jornada: "Jornada 1",
    fecha: "",
    convocatoria: "",
    hora: "",
    campo: "",
    clasificacion: { puesto:null, pj:null, pts:null, gf:null, gc:null },
    ultimos: [],
    goleadores: [],
    nota: "Primera jornada de la fase: el Manacor C todavía no ha jugado ningún partido oficial."
  }
];

const FOTOS = [
  {src:"fotos/aficion.jpg",   pie:"La afición del Montesión en la grada"},
  {src:"fotos/equipo-azul.jpg", pie:"El Cadete A antes del partido"},
  {src:"fotos/equipo-portico.jpg", pie:"Foto de equipo con el cuerpo técnico"},
  {src:"fotos/vestuario.jpg", pie:"Últimos minutos en el vestuario"},
  {src:"fotos/tunel.jpg",   pie:"Camino de la pista"}
];

