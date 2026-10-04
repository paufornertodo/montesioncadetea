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
    /* Clasificación oficial FFIB. nos:true marca al Montesión. */
    tabla: [
      {eq:"Entreculturas Montesión A", nos:true, j:2, g:2, e:0, p:0, gf:34, gc:0,  pts:6},
      {eq:"C.F.S Joves d'Inca A",                j:1, g:1, e:0, p:0, gf:6,  gc:3,  pts:3},
      {eq:"Sant Joan C.E.",                      j:2, g:1, e:0, p:1, gf:6,  gc:12, pts:3},
      {eq:"C.E. Sagrat Cor F.S. B",              j:2, g:0, e:0, p:2, gf:4,  gc:12, pts:0},
      {eq:"Manacor Fisiomedia FS C",             j:1, g:0, e:0, p:1, gf:0,  gc:23, pts:0}
    ],
    tablaNota: "Tras la jornada 2. Esta jornada descansó el Manacor; la anterior, el Joves d'Inca.",
    /* Calendario oficial FFIB. casa:true = jugamos en casa. descansa:true = jornada libre.
       Cuando se juegue, el partido se añade abajo con jornada:N y el calendario muestra el resultado. */
    /* otros = el resto de partidos de la jornada (gl/gv = goles; null si no se ha jugado)
       descansaEq = equipo que descansa esa jornada */
    calendario: [
      {j:1,  fecha:"26 sep", rival:"Manacor Fisiomedia C", casa:true,  hora:"11:15", campo:"Pab. San Pedro Claver",
       descansaEq:"Joves d'Inca A",
       otros:[{l:"Sagrat Cor B", v:"Sant Joan", gl:1, gv:6}]},
      {j:2,  fecha:"3 oct",  rival:"Sant Joan",            casa:false, hora:"12:00", campo:"P.M. Son Juny",
       descansaEq:"Manacor Fisiomedia C",
       otros:[{l:"Joves d'Inca A", v:"Sagrat Cor B", gl:6, gv:3}]},
      {j:3,  fecha:"10 oct", rival:"Joves d'Inca A",       casa:true, hora:"11:30", campo:"Pab. San Pedro Claver",
       descansaEq:"Sagrat Cor B",
       otros:[{l:"Manacor Fisiomedia C", v:"Sant Joan", gl:null, gv:null}]},
      {j:4,  fecha:"17 oct", rival:"Sagrat Cor B",         casa:false,
       descansaEq:"Sant Joan",
       otros:[{l:"Joves d'Inca A", v:"Manacor Fisiomedia C", gl:null, gv:null}]},
      {j:5,  fecha:"24 oct", descansa:true,
       otros:[{l:"Sant Joan", v:"Joves d'Inca A", gl:null, gv:null},
              {l:"Manacor Fisiomedia C", v:"Sagrat Cor B", gl:null, gv:null}]},
      {j:6,  fecha:"31 oct", rival:"Manacor Fisiomedia C", casa:false,
       descansaEq:"Joves d'Inca A",
       otros:[{l:"Sant Joan", v:"Sagrat Cor B", gl:null, gv:null}]},
      {j:7,  fecha:"7 nov",  rival:"Sant Joan",            casa:true,
       descansaEq:"Manacor Fisiomedia C",
       otros:[{l:"Sagrat Cor B", v:"Joves d'Inca A", gl:null, gv:null}]},
      {j:8,  fecha:"14 nov", rival:"Joves d'Inca A",       casa:false,
       descansaEq:"Sagrat Cor B",
       otros:[{l:"Sant Joan", v:"Manacor Fisiomedia C", gl:null, gv:null}]},
      {j:9,  fecha:"21 nov", rival:"Sagrat Cor B",         casa:true,
       descansaEq:"Sant Joan",
       otros:[{l:"Manacor Fisiomedia C", v:"Joves d'Inca A", gl:null, gv:null}]},
      {j:10, fecha:"28 nov", descansa:true,
       otros:[{l:"Joves d'Inca A", v:"Sant Joan", gl:null, gv:null},
              {l:"Sagrat Cor B", v:"Manacor Fisiomedia C", gl:null, gv:null}]}
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
      },
      {
        jornada: 2,
        fecha: "3 oct 2026",
        rival: "Sant Joan C.E.",
        casa: false,
        estado: "final",
        campo: "P.M. Son Juny",
        gf: 11, gc: 0,
        descanso: "0-5",
        goles: [
          {m:"0-1",  n:"Jose",   a:"Sebas"},
          {m:"0-2",  n:"Luis",   a:"Jose"},
          {m:"0-3",  n:"Alonso", a:"Jose"},
          {m:"0-4",  n:"Álvaro", a:"Luis"},
          {m:"0-5",  n:"Marcos", a:"Nico", nota:"asistencia desde la portería"},
          {m:"0-6",  n:"Jose",   a:"Sebas", nota:"de saque de centro"},
          {m:"0-7",  n:"Jose",   a:"Sebas"},
          {m:"0-8",  n:"Alonso", a:""},
          {m:"0-9",  n:"Sebas",  a:"Alonso"},
          {m:"0-10", n:"Alonso", a:"Sebas"},
          {m:"0-11", n:"Sebas",  a:""}
        ],
        goleadores: [],
        porteros: [ {n:"Nico", ge:0}, {n:"Guille", ge:0} ]
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
    rival: "C.F.S Joves d'Inca A",
    jornada: "Jornada 3",
    fecha: "Sábado 10 de octubre de 2026",
    convocatoria: "",
    hora: "11:30 h",
    campo: "Pab. San Pedro Claver · En casa",
    mapa: "https://www.google.com/maps/search/?api=1&query=Pabellon+San+Pedro+Claver+Montesion+Palma",
    clasificacion: { puesto:2, pj:1, pts:3, gf:6, gc:3 },
    ultimos: [
      "J2 · Joves d'Inca 6 – 3 Sagrat Cor B (en casa)",
      "J1 · descansó"
    ],
    goleadores: [
      {n:"Xavier Vallés",  d:9,  g:3},
      {n:"Miguel Noguera", d:22, g:2},
      {n:"Jorge Llizo",    d:23, g:1}
    ],
    nota: "Llega segundo y con un solo partido jugado, el 6-3 al Sagrat Cor B en Inca. Lo llamativo es la plantilla: siete jugadores en el acta, cinco titulares y dos suplentes. Con ritmo alto se les pueden hacer largos los minutos finales. Arriba manda Xavier Vallés (9), tres de los seis goles, dos de ellos seguidos en el minuto 40. Encajaron tres, así que atrás se les llega."
  }
];

/* Fotos de portada: en cada visita se elige una al azar.
   pos = qué parte de la foto se ve cuando se recorta (horizontal vertical). */
const PORTADA = [
  {src:"foto-huddle.jpg",    pos:"52% 32%", alt:"Charla del entrenador antes de saltar a la pista"},
  {src:"foto-aficion.jpg",     pos:"50% 38%", alt:"La afición del Montesión en la grada"},
  {src:"foto-equipo-portico.jpg",   pos:"50% 42%", alt:"Foto de equipo con el cuerpo técnico"},
  {src:"foto-equipo-pista.jpg", pos:"50% 46%", alt:"El Cadete A posando en la portería"},
  {src:"foto-vestuario.jpg", pos:"50% 34%", alt:"Últimos minutos en el vestuario"},
  {src:"foto-tunel.jpg",     pos:"48% 40%", alt:"Camino de la pista"},
  {src:"foto-equipo-azul.jpg",   pos:"50% 40%", alt:"El Cadete A antes del partido"}
];

const FOTOS = [
  {src:"foto-equipo-pista.jpg", pie:"El Cadete A al completo, temporada 26/27"},
  {src:"foto-aficion.jpg",   pie:"La afición del Montesión en la grada"},
  {src:"foto-equipo-azul.jpg", pie:"El Cadete A antes del partido"},
  {src:"foto-equipo-portico.jpg", pie:"Foto de equipo con el cuerpo técnico"},
  {src:"foto-vestuario.jpg", pie:"Últimos minutos en el vestuario"},
  {src:"foto-tunel.jpg",   pie:"Camino de la pista"}
];

/* ==========================================================
   TOP GOLEADORES DE LA COMPETICIÓN (datos oficiales FFIB)
   nos:true = jugador del Montesión (sale en negrita)
   d = dorsal. Déjalo fuera si no se sabe.
   ========================================================== */
const TOP_GOLEADORES = {
  titulo: "Top 20 goleadores",
  ambito: "Fase de clasificación cadete futsal, todos los grupos.",
  cuantos: 20,
  nota: "Datos de la FFIB tras la jornada 2. A partir del empate a goles, el orden es el de la federación.",
  lista: [
    {n:"Alonso Bestard",      eq:"Entreculturas Montesión A", gr:"Grupo F", g:9, d:10, nos:true},
    {n:"Fausto García",       eq:"S.E. Alcúdia Futsal A",     gr:"Grupo D", g:8, d:14},
    {n:"Adrià Descastelli",   eq:"S.E. Alcúdia Futsal A",     gr:"Grupo D", g:6, d:5},
    {n:"Daniel García",       eq:"S.E. Alcúdia Futsal A",     gr:"Grupo D", g:6, d:15},
    {n:"Adrián Cabra",        eq:"S.E. Alcúdia Futsal A",     gr:"Grupo D", g:5, d:10},
    {n:"Mauri Ríos",          eq:"Son Ferrer Atlètic",        gr:"Grupo D", g:4, d:8},
    {n:"Omar Abazine",        eq:"Bar Gost-Sagrat Cor A",     gr:"Grupo A", g:4, d:14},
    {n:"Javier Rus",          eq:"Bar Gost-Sagrat Cor A",     gr:"Grupo A", g:4, d:7},
    {n:"Lluc Cardona",        eq:"Entreculturas Montesión A", gr:"Grupo F", g:4, d:20, nos:true},
    {n:"Aitor Tejero",        eq:"S.E. Alcúdia Futsal A",     gr:"Grupo D", g:4, d:11},
    {n:"Lluc Cladera",        eq:"Bar Gost-Sagrat Cor B",     gr:"Grupo E", g:4, d:21},
    {n:"Nicolás Forner",      eq:"Entreculturas Montesión A", gr:"Grupo F", g:4, d:1,  nos:true},
    {n:"Sebastián Calvo",     eq:"Entreculturas Montesión A", gr:"Grupo F", g:4, d:8,  nos:true},
    {n:"Luis Magre",          eq:"Entreculturas Montesión A", gr:"Grupo F", g:4, d:7,  nos:true},
    {n:"Oliver Pérez",        eq:"Bar Gost-Sagrat Cor A",     gr:"Grupo A", g:3, d:9},
    {n:"Alan Artigao",        eq:"Son Ferrer Atlètic",        gr:"Grupo D", g:3, d:20},
    {n:"Xavier Vallés",       eq:"C.F.S Joves d'Inca A",      gr:"Grupo F", g:3, d:9},
    {n:"Javier Jiménez",      eq:"Bar Gost-Sagrat Cor A",     gr:"Grupo A", g:3, d:21},
    {n:"Sebastián Moreno",    eq:"Racing Club Andratx B",     gr:"Grupo C", g:3, d:5},
    {n:"José María Bauzá",    eq:"Entreculturas Montesión A", gr:"Grupo F", g:3, d:2,  nos:true}
  ]
};

/* ==========================================================
   PANORAMA DE LA FASE — cómo va el resto de grupos
   en = sección donde aparece. Deja titulo en "" para ocultarlo.
   ========================================================== */
const PANORAMA = {
  en: "clasificacion",
  titulo: "Cómo va el resto de la fase",
  mejoresSegundos: 4,
  notaTabla: "A División de Honor van los seis primeros y los cuatro mejores segundos. El orden de los segundos es una estimación por puntos y diferencia de goles; con los grupos a medio jugar puede cambiar, y la federación aplicará su propio criterio.",
  /* Dos primeros de cada grupo, tras la jornada 2 */
  equipos: [
    {g:"A", pos:1, eq:"Racing Club Andratx A",     pj:2, gf:22, gc:3,  pts:6},
    {g:"A", pos:2, eq:"Bar Gost-Sagrat Cor A",     pj:2, gf:23, gc:3,  pts:3},
    {g:"B", pos:1, eq:"F.S. Atlètic Mercadal",     pj:1, gf:7,  gc:1,  pts:3},
    {g:"B", pos:2, eq:"C.E. Sagrat Cor F.S. A",    pj:1, gf:4,  gc:2,  pts:3},
    {g:"C", pos:1, eq:"S.E. Alcúdia Futsal B",     pj:1, gf:14, gc:2,  pts:3},
    {g:"C", pos:2, eq:"Manacor Fisiomedia FS A",   pj:1, gf:3,  gc:1,  pts:3},
    {g:"D", pos:1, eq:"S.E. Alcúdia Futsal A",     pj:2, gf:36, gc:1,  pts:6},
    {g:"D", pos:2, eq:"Son Ferrer Atlètic",        pj:1, gf:15, gc:0,  pts:3},
    {g:"E", pos:1, eq:"Bar Gost-Sagrat Cor B",     pj:2, gf:12, gc:1,  pts:6},
    {g:"E", pos:2, eq:"Entreculturas Montesión B", pj:1, gf:5,  gc:2,  pts:3, nos:true},
    {g:"F", pos:1, eq:"Entreculturas Montesión A", pj:2, gf:34, gc:0,  pts:6, nos:true},
    {g:"F", pos:2, eq:"C.F.S Joves d'Inca A",      pj:1, gf:6,  gc:3,  pts:3}
  ],
  texto: [
    "La fase son 31 equipos en seis grupos y solo diez pasan a División de Honor: los seis primeros más los cuatro mejores segundos. Después de dos jornadas hay cuatro equipos con pleno de victorias, y dos de ellos van muy por delante del resto.",
    "<b>S.E. Alcúdia Futsal A (grupo D)</b> es el rival de referencia. Lleva 36 goles a favor y uno en contra, cifras casi calcadas a las nuestras, y es el equipo con más representación en el top de goleadores: cuatro jugadores entre los quince primeros, con Fausto García (14) en 8 goles, solo por detrás de Alonso. Si los dos hacemos los deberes, el cruce llegará en la segunda fase.",
    "Detrás aparecen tres nombres que conviene fichar. <b>Racing Club Andratx A (grupo A)</b> firma 22-3 en dos partidos. <b>Bar Gost-Sagrat Cor B (grupo E)</b> es el otro pleno, con 12-1 y Lluc Cladera (21) ya en el top 20. Y <b>Son Ferrer Atlètic</b>, segundo del grupo D por detrás del Alcúdia, ganó 15-0 su estreno: tiene plaza de mejor segundo pese a compartir grupo con el líder.",
    "Caso aparte es el <b>Bar Gost-Sagrat Cor A (grupo A)</b>: 23 goles a favor en dos jornadas, el ataque más repartido de toda la fase con cinco jugadores en el top 20, pero ya ha perdido un partido. Mucha pólvora y poco colchón.",
    "Y un apunte de casa: el club tiene cuatro equipos en esta fase. Además de nosotros en el F, el Montesión B es segundo del grupo E y hoy entraría también en División de Honor; el Colegio Montesión A va tercero en el B y el Colegio Montesión B cierra el grupo A."
  ]
};

