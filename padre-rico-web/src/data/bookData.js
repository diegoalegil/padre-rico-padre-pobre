// Contenido estructurado a partir de la lectura completa del PDF
// "Padre Rico, Padre Pobre" (Kiyosaki). Parafraseado y resumido — no copia literal.

export const heroQuote = {
  text: 'No se trata de hacerte rico mañana. Se trata de dejar de ir a ciegas.',
  attribution: 'Espíritu del libro, en cristiano',
}

export const mindsetCompare = [
  {
    topic: 'Frase favorita',
    poor: '"No puedo pagarlo"',
    rich: '"¿Cómo puedo pagarlo?"',
    note: 'Una cierra el cerebro. La otra lo enciende.',
  },
  {
    topic: 'Educación',
    poor: 'Estudia, saca buenas notas, busca empleo fijo',
    rich: 'Aprende cómo funciona el dinero y haz que trabaje para ti',
    note: 'No es contra estudiar. Es sumar otra capa.',
  },
  {
    topic: 'La casa',
    poor: 'Mi mayor inversión',
    rich: 'Casi siempre un pasivo: saca dinero de tu bolsillo cada mes',
    note: 'Hipoteca, impuestos, mantenimiento, reformas.',
  },
  {
    topic: 'Riesgo',
    poor: 'Juega seguro, no corras riesgos',
    rich: 'Aprende a gestionar el riesgo',
    note: 'El verdadero riesgo es no saber.',
  },
  {
    topic: 'Trabajo',
    poor: 'Trabaja por dinero',
    rich: 'Haz que el dinero trabaje para ti',
    note: 'Empleado vs propietario de activos.',
  },
  {
    topic: 'Impuestos',
    poor: 'Cobra → impuestos → gasta lo que queda',
    rich: 'Gana (vía sociedad) → gasta → tributa sobre lo que queda',
    note: 'Cultura general, no consejo fiscal.',
  },
  {
    topic: 'Errores',
    poor: 'Los errores son malos. Evítalos.',
    rich: 'Los errores son la forma en que se aprende',
    note: 'Caerse de la bici es parte de andar en bici.',
  },
  {
    topic: 'Hijos',
    poor: '"No soy rico porque los tengo a ustedes"',
    rich: '"Debo ser rico porque los tengo a ustedes"',
    note: 'Misma situación, marco mental opuesto.',
  },
]

export const lessons = [
  {
    id: 'l1',
    number: 1,
    title: 'Los ricos no trabajan por dinero',
    short: 'Si trabajas solo por el sueldo, te encadenas. Si trabajas por aprender a usar el dinero, te liberas.',
    timeMin: 6,
    difficulty: 'Fácil',
    summary: [
      'El miedo y el deseo manejan a la mayoría: miedo de no llegar a fin de mes, deseo de comprar.',
      'Ese bucle se llama "carrera de ratas": cobras → gastas → necesitas más → cobras...',
      'El primer paso no es ganar más, es ver cómo funciona el bucle desde fuera.',
    ],
    easy:
      'Imagina un hámster en una rueda. Corre rapidísimo. Pero la rueda no va a ningún lado. La mayoría corremos así con el dinero: ganamos, gastamos, repetimos. Lo importante no es correr más rápido, es bajar de la rueda.',
    ultraSimple:
      'No es solo "ganar más". Es entender por qué tu dinero se va casi todo cada mes, incluso cuando ganas más. Si no lo ves, vas a correr toda la vida sin avanzar.',
    example:
      'Recibes un aumento de 200€. Antes de cobrarlo ya pensaste qué móvil, qué cena, qué suscripción. Tres meses después, estás igual de apretado, pero con un gasto fijo más.',
    mistake:
      'Pensar que más sueldo arregla el problema. A mayor sueldo, suele crecer el estilo de vida en paralelo. Resultado: igual de atrapado, pero con más cosas.',
    challenge:
      'Anota durante 7 días en qué se va tu dinero. Sin juzgar. Solo mira. Casi todo el mundo se sorprende.',
    keyPhrase: 'El dinero no resuelve los problemas con el dinero. La educación financiera, sí.',
  },
  {
    id: 'l2',
    number: 2,
    title: '¿Por qué enseñar especialización financiera?',
    short: 'Activo: pone dinero en tu bolsillo. Pasivo: lo saca. Si entiendes esa frase, entiendes el 80% del libro.',
    timeMin: 7,
    difficulty: 'Fácil',
    summary: [
      'Lo único que tienes que aprender de verdad: distinguir activo de pasivo.',
      'Los ricos compran activos. La clase media compra pasivos pensando que son activos.',
      'Tu casa, tu coche y muchas "inversiones" están en el lado equivocado de la balanza.',
    ],
    easy:
      'Imagina dos cubos. Uno tiene un grifo que mete agua (activos). Otro tiene un agujero que la saca (pasivos). Cada compra va a uno u otro cubo. Punto.',
    ultraSimple:
      'Si compras algo y, sin que tú hagas nada, te genera dinero cada mes → activo. Si te cobra cada mes → pasivo. Tu coche te cobra (gasolina, seguro, ITV). Una habitación alquilada te paga. Fácil.',
    example:
      'Coche nuevo a crédito: pierde el 25% al salir del concesionario y suma cuota, seguro, mantenimiento. Pasivo claro. Curso que te enseña una habilidad rentable y luego cobras por ella: activo mental.',
    mistake:
      'Llamar "inversión" a un bien que solo gasta. Sentimentalmente puede valer la pena. Pero contablemente no es lo mismo.',
    challenge:
      'Haz una lista rápida de tus 10 cosas más caras. Marca al lado: A (entra dinero) / P (sale dinero). Sin trampas.',
    keyPhrase: 'No define un activo lo que diga el diccionario. Lo define la dirección del dinero.',
  },
  {
    id: 'l3',
    number: 3,
    title: 'Ocúpate de tu propio negocio',
    short: 'Mantén tu trabajo. Pero a la vez construye, despacio, una columna de activos que sea tuya.',
    timeMin: 5,
    difficulty: 'Media',
    summary: [
      'Profesión ≠ negocio. Tu profesión te paga. Tu "negocio" es tu columna de activos.',
      'No hace falta dejarlo todo. Hace falta empezar a meter dinero en cosas que generen ingresos.',
      'Los lujos vienen al final, pagados por los activos. No al principio, pagados con deuda.',
    ],
    easy:
      'Tu sueldo es la batería. Tus activos son los paneles solares. Si solo tiras de batería, te quedas sin luz. Si pones paneles, un día la batería deja de ser imprescindible.',
    ultraSimple:
      'Sigue cobrando. No te lances al vacío. Pero cada mes mete dinero en cosas que generen más dinero. Pequeñito. Con cabeza.',
    example:
      'McDonald\'s no es solo el negocio de las hamburguesas. Es uno de los mayores propietarios de bienes raíces del mundo. La hamburguesa paga la tierra.',
    mistake:
      'Confundir tu profesión con tu negocio. "Trabajo en un banco" no significa que el banco sea tuyo. Tu sueldo paga la jubilación del dueño.',
    challenge:
      'Aparta el 5–10% de cualquier ingreso este mes y mételo en una cuenta separada. No la toques. Es tu primera semilla.',
    keyPhrase: 'Los ricos compran lujos al final. Las clases media y pobre los compran primero, con deuda.',
  },
  {
    id: 'l4',
    number: 4,
    title: 'Impuestos y el poder de las estructuras',
    short: 'Los ricos no juegan con tus reglas. Conocen estructuras legales que minimizan el desgaste fiscal.',
    timeMin: 8,
    difficulty: 'Media',
    note: 'Esto es cultura financiera general, no asesoría legal ni fiscal.',
    summary: [
      'Los impuestos al principio se vendieron como "castiguemos a los ricos". Terminaron pagándolos sobre todo las clases medias.',
      'Los ricos usan estructuras legales (sociedades, holdings, vehículos) para reorganizar ingresos y gastos.',
      'No es magia ni evasión. Es conocer reglas que están escritas y aplicarlas.',
    ],
    easy:
      'Imagina dos colas de caja. En una tributas primero y compras con lo que sobra. En la otra compras primero (lo que es deducible) y tributas sobre lo que queda. Misma vida, números distintos.',
    ultraSimple:
      'Las reglas del juego son distintas según quién juega. No es injusto. Es que casi nadie aprende esas reglas. El libro dice: aprende las que apliquen a ti.',
    example:
      'Un autónomo bien estructurado puede deducir formación, dietas y herramientas. Un asalariado paga esos mismos gastos con dinero que ya tributó. Punto.',
    mistake:
      'Pensar que esto es solo para "los muy ricos". Hay vehículos accesibles a cualquier persona que se informa.',
    challenge:
      'Busca esta semana 1 deducción fiscal que aplique a tu situación y de la que no estabas usando. Solo 1.',
    keyPhrase: 'Los ricos no tienen sin más. Controlan. Controlar y poseer no es lo mismo.',
  },
  {
    id: 'l5',
    number: 5,
    title: 'Los ricos inventan el dinero',
    short: 'La oportunidad la crea quien ve lo que otros no ven. La inteligencia financiera reduce el riesgo, no lo evita.',
    timeMin: 7,
    difficulty: 'Media',
    summary: [
      'No es esperar la suerte. Es entrenar el ojo para detectar oportunidades.',
      'La inteligencia financiera tiene 4 piernas: contabilidad, inversiones, mercado y leyes.',
      'Lo más importante no son los conocimientos técnicos. Es la valentía para actuar con ellos.',
    ],
    easy:
      'No esperes a que la ola venga sola. Aprende a leer el mar. Quien lee el mar no necesita olas grandes, le bastan las pequeñas.',
    ultraSimple:
      'Mientras unos lloran cuando baja la bolsa, otros aprovechan para comprar barato. Mientras unos huyen del barrio, otros ven una casa abandonada como una oportunidad. La diferencia es educación + valentía.',
    example:
      'Comprar una casa subastada por 20.000 y revenderla en 60.000 unas semanas después no es magia: es información + acción. Hay 100 ahorradores por cada persona que se mueve así.',
    mistake:
      'Esperar al "momento perfecto". El momento perfecto casi nunca llega. Mientras tanto, otros aprenden equivocándose.',
    challenge:
      'Sal a tu calle 10 minutos. Mira carteles "Se vende", locales cerrados, cambios de barrio. ¿Qué está cambiando? Eso es entrenar el ojo.',
    keyPhrase: 'Las grandes oportunidades no se ven con los ojos. Se ven con la mente entrenada.',
  },
  {
    id: 'l6',
    number: 6,
    title: 'Trabaja para aprender, no por el dinero',
    short: 'A los 20–30 elige trabajos por lo que te van a enseñar, no por lo que pagan. Te volverá rico después.',
    timeMin: 6,
    difficulty: 'Fácil',
    summary: [
      'Especializarte demasiado pronto te encierra. Aprender un poco de todo te abre puertas.',
      'Habilidades clave: ventas, marketing, comunicación, negociación, gestión del dinero y de personas.',
      'Saber vender es la habilidad universal. Vender ideas, productos, propuestas, a ti mismo.',
    ],
    easy:
      'Imagina dos caminos. Uno: cobras 100, aprendes 10. Otro: cobras 60, aprendes 80. A los 5 años, el del segundo camino gana muchísimo más. Porque "lo que sabes" empieza a producir.',
    ultraSimple:
      'No vendas tus 20s y 30s al sueldo. Véndelos a las habilidades. El sueldo viene solo después si las habilidades son buenas.',
    example:
      'Kiyosaki dejó la marina mercante (sueldo alto) para volar en la marina (aprender a liderar bajo presión). Luego entró en ventas en Xerox (era tímido y necesitaba aprender). Cada paso aumentó sus habilidades, no su salario inmediato.',
    mistake:
      'Quedarse 10 años en el mismo puesto porque "pagan bien", sin sumar habilidades nuevas. Cuando llega el ERE, ese perfil no se vende.',
    challenge:
      'Elige 1 habilidad que te dé miedo (hablar en público, vender, negociar) y dedícale 30 minutos cada día durante 2 semanas.',
    keyPhrase: 'La pregunta no es "¿cuánto pagan?". Es "¿qué voy a saber dentro de 2 años si acepto esto?".',
  },
]

export const obstacles = [
  {
    id: 'fear',
    name: 'Miedo',
    icon: 'shield',
    everyday:
      'Aparece cuando piensas en invertir, en pedir un aumento, en lanzar algo tuyo. "¿Y si pierdo?", "¿Y si fracaso?".',
    damage:
      'Te quedas en el mismo trabajo durante años. Pones tu dinero en cuentas que rinden 0. Vives "por si acaso" en vez de vivir.',
    fix:
      'Empieza pequeño y temprano. Ahorrar e invertir 50€/mes a los 22 supera con creces empezar fuerte a los 40. El miedo se reduce con conocimiento, no con voluntad.',
    action:
      'Esta semana, abre 1 cuenta de inversión (la que sea) y mete una cantidad ridícula. El gesto > la cantidad.',
  },
  {
    id: 'cynicism',
    name: 'Cinismo',
    icon: 'cloud',
    everyday:
      '"Eso no funciona aquí", "El mercado va a caer", "Mi primo lo intentó y le fue mal". Frases que matan acción antes de empezar.',
    damage:
      'Pierdes oportunidades por escuchar dudas de gente que nunca lo intentó. El cinismo es contagioso.',
    fix:
      'Distingue crítica útil (analiza, cita datos, propone alternativas) de cinismo (solo niega). Filtra fuentes. Aprende a decir "déjame investigarlo yo".',
    action:
      'Cuando alguien te diga "eso no funciona", pregunta: "¿lo has hecho tú?". Si la respuesta es no, sigue tu camino.',
  },
  {
    id: 'laziness',
    name: 'Pereza',
    icon: 'bed',
    everyday:
      'A veces se disfraza de "estoy muy ocupado". Trabajar 12 horas para evitar pensar en tu salud, tu dinero o tu pareja también es pereza.',
    damage:
      'Pasan los años y tus finanzas siguen exactamente igual. Te dices "ya lo veré", "cuando tenga tiempo".',
    fix:
      'Un poco de ambición. Pregúntate: "¿qué hay para mí?". Visualiza la vida concreta que te daría aprender esto.',
    action:
      'Bloquea 20 minutos a la semana en el calendario para "mis finanzas". Solo 20. Innegociable.',
  },
  {
    id: 'habits',
    name: 'Malos hábitos',
    icon: 'repeat',
    everyday:
      'Pagas a todos primero (alquiler, suscripciones, deudas) y a ti último. Resultado: nunca queda nada para ti.',
    damage:
      'Tu columna de activos no crece nunca. Vives mes a mes, indefinidamente.',
    fix:
      'Págate primero. Aparta un % automáticamente apenas cobras. La presión de las cuentas te obligará a buscar más ingresos, no a comerte tus ahorros.',
    action:
      'Configura una transferencia automática del día 1 al 2 de cada mes hacia una cuenta separada. Aunque sean 10€.',
  },
  {
    id: 'arrogance',
    name: 'Arrogancia',
    icon: 'crown',
    everyday:
      '"Yo ya sé de esto", "No necesito leerlo". La arrogancia es ego + ignorancia.',
    damage:
      'Pierdes dinero en lo que crees que dominas. Por no preguntar. Por no admitir lo que no sabes.',
    fix:
      'Cuando notes que no entiendes algo, búscate un experto, un libro, un curso. Pagar por conocimiento es la mejor inversión.',
    action:
      'Identifica 1 área financiera donde estás flojo y compra/lee algo concreto sobre ella este mes.',
  },
]

export const obstaclesByEducation = {
  // (datos meramente narrativos para el rollover del mapa del libro)
}

export const assetLiabilityItems = [
  { id: 'rental', label: 'Habitación que alquilas', emoji: '🛏️', truth: 'asset', explain: 'Te genera dinero cada mes sin que tú trabajes activamente por él.' },
  { id: 'car', label: 'Coche que usas tú', emoji: '🚗', truth: 'liability', explain: 'Cuota, seguro, gasolina, ITV, mantenimiento. Te cuesta cada mes.' },
  { id: 'house-live', label: 'Casa donde vives (con hipoteca)', emoji: '🏠', truth: 'liability', explain: 'En el sentido del libro, mientras tú la pagues sin que genere ingresos, es un pasivo.' },
  { id: 'rental-house', label: 'Piso alquilado a inquilinos', emoji: '🔑', truth: 'asset', explain: 'Si la renta cubre hipoteca, gastos e impuestos y queda algo, es un activo.' },
  { id: 'credit-debt', label: 'Deuda de la tarjeta', emoji: '💳', truth: 'liability', explain: 'Intereses altísimos que te sacan dinero cada mes. Pasivo casi tóxico.' },
  { id: 'course', label: 'Curso que aumenta tus ingresos', emoji: '🎓', truth: 'asset', explain: 'No es contable, pero produce más dinero del que cuesta. Activo en el sentido amplio.' },
  { id: 'stocks', label: 'Acciones que pagan dividendos', emoji: '📈', truth: 'asset', explain: 'Te ingresan dinero periódicamente sin esfuerzo extra.' },
  { id: 'subscriptions', label: 'Suscripciones que no usas', emoji: '📺', truth: 'liability', explain: '5€ aquí, 9€ allá. Suma y resta cada mes contra ti.' },
  { id: 'tool-business', label: 'Herramienta que te da ingresos extra', emoji: '🛠️', truth: 'asset', explain: 'Cámara, ordenador, máquina: si genera dinero, es activo.' },
  { id: 'boat', label: 'Barco para fines de semana', emoji: '⛵', truth: 'liability', explain: 'Atraque, seguro, mantenimiento. Se come dinero.' },
  { id: 'royalties', label: 'Regalías de algo que creaste', emoji: '🎼', truth: 'asset', explain: 'Música, libro, software, patente: pagas una vez en esfuerzo, cobras varias.' },
  { id: 'second-home', label: 'Segunda casa que no alquilas', emoji: '🏖️', truth: 'liability', explain: 'IBI, comunidad, mantenimiento, luz. Si no produce, te cuesta.' },
]

export const glossary = [
  { term: 'Activo', emoji: '🟢', short: 'Mete dinero en tu bolsillo.', long: 'Algo que genera ingresos para ti, idealmente sin requerir tu trabajo constante.' },
  { term: 'Pasivo', emoji: '🔴', short: 'Saca dinero de tu bolsillo.', long: 'Algo que te cuesta dinero cada mes, aunque parezca un símbolo de éxito.' },
  { term: 'Flujo de efectivo', emoji: '💧', short: 'Dinero que entra menos el que sale.', long: 'El movimiento real del dinero por tu vida cada mes. Más importante que tu sueldo bruto.' },
  { term: 'Carrera de ratas', emoji: '🐀', short: 'Bucle gano → gasto → repito.', long: 'Vivir trabajando solo para pagar cuentas, sin que tu patrimonio crezca.' },
  { term: 'Independencia financiera', emoji: '🗝️', short: 'Tus activos pagan tus gastos.', long: 'El punto en que puedes elegir trabajar o no, porque tus ingresos pasivos cubren tu vida.' },
  { term: 'Inteligencia financiera', emoji: '🧠', short: 'Cuántas soluciones se te ocurren.', long: 'No es saber muchos números, es saber resolver problemas de dinero con creatividad y herramientas.' },
  { term: 'Ingreso ganado', emoji: '💼', short: 'Cambias tiempo por dinero.', long: 'Tu sueldo. Es el más gravado y el más frágil: si no trabajas, no cobras.' },
  { term: 'Ingreso de portafolio', emoji: '📊', short: 'Acciones, bonos, fondos.', long: 'Ganancias por compra/venta o dividendos de instrumentos financieros.' },
  { term: 'Ingreso pasivo', emoji: '🛏️', short: 'Cobras durmiendo.', long: 'Alquileres, regalías, dividendos: ingresos que no requieren tu presencia continua.' },
  { term: 'Corporación', emoji: '🏛️', short: 'Vehículo legal.', long: 'Estructura jurídica que separa tu patrimonio personal del negocio. Cambia cómo tributas.' },
  { term: 'Impuestos', emoji: '🧾', short: 'Tu mayor gasto, casi siempre.', long: 'En muchos países, una persona normal trabaja entre 4 y 6 meses al año solo para pagar impuestos.' },
  { term: 'Inversión', emoji: '🌱', short: 'Pones dinero esperando que crezca.', long: 'No toda compra grande es inversión. Si no produce, no es inversión aunque lo llames así.' },
  { term: 'Riesgo', emoji: '⚖️', short: 'No saber lo que haces.', long: 'El riesgo financiero baja con conocimiento. Lo arriesgado es ir a ciegas.' },
]

export const quizQuestions = [
  {
    id: 'q1',
    q: '¿Qué es un activo según el libro?',
    options: [
      'Cualquier cosa cara que tengas',
      'Algo que pone dinero en tu bolsillo',
      'Tu casa, porque siempre sube de valor',
      'Lo que diga el banco',
    ],
    correct: 1,
    explain: 'Activo = mete dinero. Pasivo = saca dinero. Es la regla núcleo del libro.',
  },
  {
    id: 'q2',
    q: '¿Cuál es el riesgo real, según Kiyosaki?',
    options: [
      'Invertir',
      'Trabajar como asalariado',
      'No saber qué estás haciendo',
      'Vivir en una ciudad cara',
    ],
    correct: 2,
    explain: 'El riesgo baja con conocimiento. Lo arriesgado es operar a ciegas.',
  },
  {
    id: 'q3',
    q: '¿Qué es la "carrera de ratas"?',
    options: [
      'Una rutina de gimnasio',
      'Trabajar, gastar todo y necesitar trabajar más',
      'Competir con tus vecinos',
      'Una técnica de inversión',
    ],
    correct: 1,
    explain: 'Cobras → gastas → necesitas más → cobras. Sin avanzar.',
  },
  {
    id: 'q4',
    q: '¿Cuándo compran los lujos los ricos, según el libro?',
    options: [
      'Apenas pueden, con deuda',
      'Cuando otros los ven y los envidian',
      'Después de que sus activos los paguen',
      'Nunca',
    ],
    correct: 2,
    explain: 'Las clases media y pobre los compran primero con deuda. Los ricos los compran al final con flujo de activos.',
  },
  {
    id: 'q5',
    q: '¿Por qué muchas casas no son "activos"?',
    options: [
      'Porque no son bonitas',
      'Porque te cuestan dinero cada mes y dependen de tu trabajo',
      'Porque solo cuentan los pisos',
      'Porque el libro las odia',
    ],
    correct: 1,
    explain: 'Hipoteca, IBI, comunidad, mantenimiento. Salen del bolsillo mientras tú la pagas.',
  },
  {
    id: 'q6',
    q: '¿Cuál de estas habilidades destaca el libro como CLAVE para casi todo?',
    options: [
      'Bailar',
      'Saber vender (y comunicar)',
      'Hablar 3 idiomas',
      'Programar',
    ],
    correct: 1,
    explain: 'Vender ideas, productos, propuestas, a ti mismo: la habilidad universal.',
  },
  {
    id: 'q7',
    q: '"No puedo pagarlo" vs "¿Cómo puedo pagarlo?"',
    options: [
      'Es lo mismo',
      'La primera cierra el cerebro; la segunda lo activa',
      'La segunda es solo positividad barata',
      'Da igual qué digas, importa el dinero',
    ],
    correct: 1,
    explain: 'La pregunta abre posibilidades. La afirmación las cierra.',
  },
  {
    id: 'q8',
    q: '¿Cuál NO es uno de los 5 obstáculos mentales del libro?',
    options: ['Miedo', 'Cinismo', 'Pereza', 'Pesimismo astrológico'],
    correct: 3,
    explain: 'Los cinco: miedo, cinismo, pereza, malos hábitos y arrogancia.',
  },
]

export const actionPlanTemplates = {
  student: {
    label: 'Estudiante',
    icon: '📚',
    days: [
      { d: 1, t: 'Anota tus ingresos y gastos del mes pasado en una hoja simple.' },
      { d: 2, t: 'Marca cada gasto como Necesidad (N) o Deseo (D). Sé honesto.' },
      { d: 3, t: 'Identifica 1 habilidad rentable que puedas aprender online gratis (ventas, copywriting, edición, idiomas).' },
      { d: 4, t: 'Mira 1 vídeo o lee 1 capítulo sobre cómo funciona el interés compuesto.' },
      { d: 5, t: 'Abre tu primera cuenta de ahorro/inversión, aunque metas 5€.' },
      { d: 6, t: 'Lista 3 trabajos de verano/becas que te enseñen algo, no solo que paguen.' },
      { d: 7, t: 'Escríbete una frase de 1 línea: en qué quieres ser bueno dentro de 3 años.' },
    ],
  },
  worker: {
    label: 'Trabajador con sueldo',
    icon: '💼',
    days: [
      { d: 1, t: 'Calcula tu sueldo neto real por hora trabajada (incluyendo horas extra y desplazamiento).' },
      { d: 2, t: 'Lista todas tus suscripciones. Cancela 1 que no uses cada semana hasta limpiarlas.' },
      { d: 3, t: 'Configura una transferencia automática de un % a una cuenta separada el día que cobras.' },
      { d: 4, t: 'Investiga deducciones fiscales que apliquen a ti y que no estés usando.' },
      { d: 5, t: 'Pregúntate: ¿qué habilidad puedo desarrollar en 6 meses que duplique mi valor?' },
      { d: 6, t: 'Habla con 1 persona que invierta y pregúntale cómo empezó. Solo escucha.' },
      { d: 7, t: 'Define tu primer mini-objetivo: ahorrar X€ en 3 meses para tu primera inversión.' },
    ],
  },
  none: {
    label: 'Sin ingresos ahora',
    icon: '🌱',
    days: [
      { d: 1, t: 'Haz una lista exhaustiva de tus habilidades, incluso las pequeñas.' },
      { d: 2, t: 'Cruza esa lista con "qué necesita la gente cerca de mí" (cuidar mascotas, repaso, mudanzas, redes...).' },
      { d: 3, t: 'Crea un anuncio de 4 líneas ofreciendo 1 de tus habilidades por un precio bajo.' },
      { d: 4, t: 'Publícalo en 3 grupos/lugares. Tu primer cliente vale más que perfeccionar el anuncio.' },
      { d: 5, t: 'Reduce 3 gastos no esenciales esta semana. Nota cuánto duele/no duele.' },
      { d: 6, t: 'Invierte 30 minutos en aprender algo que en 1 mes te haga cobrar más por hora.' },
      { d: 7, t: 'Pídele a alguien que admiras 15 minutos de consejo. Sin pedir trabajo. Solo escuchar.' },
    ],
  },
  debt: {
    label: 'Con deudas',
    icon: '🧯',
    days: [
      { d: 1, t: 'Lista todas tus deudas: importe, interés, cuota mensual. Sin esconderlo.' },
      { d: 2, t: 'Ordénalas por interés (más alta primero). Esa es la que sangra más.' },
      { d: 3, t: 'Corta cualquier nueva deuda hoy. Sin excepciones esta semana.' },
      { d: 4, t: 'Llama a 1 acreedor y pide reducir el interés o reestructurar. Funciona más veces de lo que crees.' },
      { d: 5, t: 'Identifica 1 gasto recurrente que recortar permanentemente.' },
      { d: 6, t: 'Identifica 1 ingreso extra posible esta semana, aunque sean 30€.' },
      { d: 7, t: 'Diseña tu "bola de nieve": mata la deuda más cara primero, luego usa esa cuota para la siguiente.' },
    ],
  },
  invest: {
    label: 'Quiero aprender a invertir',
    icon: '📈',
    days: [
      { d: 1, t: 'Define en 1 línea por qué quieres invertir. Sin esto, te rendirás al primer susto del mercado.' },
      { d: 2, t: 'Aprende 5 términos básicos: índice, ETF, dividendo, comisión, diversificación.' },
      { d: 3, t: 'Calcula cuánto puedes invertir cada mes sin tocar tu fondo de emergencia.' },
      { d: 4, t: 'Compara 3 brokers/plataformas. Mira comisiones, no la publicidad.' },
      { d: 5, t: 'Empieza con un ETF global (cultura general, no recomendación). El gesto importa más que el ticker.' },
      { d: 6, t: 'Configura aportaciones automáticas mensuales. "Sin pensar" es tu mejor aliado.' },
      { d: 7, t: 'Apunta en tu calendario una revisión cada 3 meses. Mira poco, ajusta menos.' },
    ],
  },
  biz: {
    label: 'Quiero montar un negocio',
    icon: '🚀',
    days: [
      { d: 1, t: 'Escribe en 1 párrafo a quién ayudas y con qué problema concreto.' },
      { d: 2, t: 'Lista 10 personas que tendrían ese problema. Por nombre. Real.' },
      { d: 3, t: 'Habla con 3 de ellas. No vendas. Pregunta.' },
      { d: 4, t: 'Diseña una versión mínima ridícula de tu solución. Que se pueda probar mañana.' },
      { d: 5, t: 'Pídele a 1 persona que pague aunque sea simbólicamente. Lo gratuito no valida nada.' },
      { d: 6, t: 'Anota qué te dijeron NO y por qué. Más oro que los SÍ.' },
      { d: 7, t: 'Decide: ¿lo sigues otra semana? Si sí, repite. Si no, mata el proyecto sin culpa y siguiente.' },
    ],
  },
}

export const finalGuidelines = [
  { t: 'Detente.', d: 'Para. Evalúa qué funciona y qué no. Hacer lo mismo esperando otro resultado es definición de locura.' },
  { t: 'Busca ideas nuevas.', d: 'Libros, podcasts, gente que ya hizo lo que tú quieres. Lo que no sabes te frena más que lo que sabes.' },
  { t: 'Encuentra alguien que ya lo hizo.', d: 'Invítale un café. Pregunta. La mayoría comparte si preguntas con humildad.' },
  { t: 'Toma cursos.', d: 'Pagar por aprender de quien sabe es una inversión, no un gasto.' },
  { t: 'Haz ofertas.', d: 'En propiedades, en negocios, en la vida. Nadie sabe el "precio correcto" hasta que negocias.' },
  { t: 'Camina por tu barrio.', d: 'Lo mismo durante meses. Detectarás cambios que nadie ve. Ahí están las oportunidades.' },
  { t: 'Aprende de la historia.', d: 'Las grandes empresas empezaron pequeñas. Tú también.' },
  { t: 'Actúa.', d: 'La acción siempre vence a la inacción. Mejor empezar mal que no empezar.' },
]
