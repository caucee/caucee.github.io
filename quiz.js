/* =========================================================
   ENCUESTA "ENCUENTRA TU CAUCE" — gratis
   15 preguntas (5 por pilar). Cada opción puntúa 0–3.
   Al final, se calcula el pilar con puntuación más baja
   y se muestra una orientación asociada, sin coste.
   ========================================================= */
const QUIZ = [
  {pillar:'nutricion', q:'¿Con qué frecuencia cocinas tú mismo/a tus comidas principales?', options:[
    {t:'Casi nunca, dependo de comida ya preparada', s:0},{t:'Alguna vez a la semana', s:1},{t:'La mayoría de días', s:2},{t:'Prácticamente siempre', s:3}]},
  {pillar:'nutricion', q:'Cuando comes, ¿sueles hacerlo prestando atención o distraído/a (móvil, TV...)?', options:[
    {t:'Casi siempre distraído/a', s:0},{t:'Distraído/a más de la mitad del tiempo', s:1},{t:'Distraído/a alguna vez', s:2},{t:'Casi siempre con atención', s:3}]},
  {pillar:'nutricion', q:'¿Cómo te hablas a ti mismo/a después de comer algo que consideras "poco sano"?', options:[
    {t:'Con bastante culpa o autocrítica', s:0},{t:'Un poco de culpa', s:1},{t:'Lo noto pero lo dejo pasar rápido', s:2},{t:'No le doy ninguna carga moral', s:3}]},
  {pillar:'nutricion', q:'¿Notas cuándo tienes hambre real frente a comer por otro motivo (aburrimiento, estrés)?', options:[
    {t:'Casi nunca lo distingo', s:0},{t:'A veces', s:1},{t:'Casi siempre', s:2},{t:'Siempre lo tengo claro', s:3}]},
  {pillar:'nutricion', q:'¿Con qué regularidad comes a horas muy variables o te saltas comidas por falta de tiempo?', options:[
    {t:'Casi a diario', s:0},{t:'Varias veces por semana', s:1},{t:'Alguna vez al mes', s:2},{t:'Casi nunca', s:3}]},

  {pillar:'mente', q:'Cuando terminas tu jornada, ¿sientes que has descansado de verdad al final del día?', options:[
    {t:'Casi nunca', s:0},{t:'Pocas veces', s:1},{t:'Bastantes veces', s:2},{t:'Casi siempre', s:3}]},
  {pillar:'mente', q:'¿Con qué facilidad dices que no a algo que no te apetece o no puedes hacer?', options:[
    {t:'Me cuesta mucho, casi siempre acabo diciendo que sí', s:0},{t:'Me cuesta, pero a veces lo consigo', s:1},{t:'Lo consigo bastantes veces', s:2},{t:'Lo hago con naturalidad', s:3}]},
  {pillar:'mente', q:'¿Tienes momentos en el día sin pantallas ni estímulos constantes?', options:[
    {t:'Prácticamente ninguno', s:0},{t:'Muy pocos', s:1},{t:'Algunos', s:2},{t:'Varios, de forma habitual', s:3}]},
  {pillar:'mente', q:'Cuando algo te preocupa, ¿tienes a quién contárselo o con quién procesarlo?', options:[
    {t:'No, suelo guardármelo', s:0},{t:'Rara vez encuentro el momento', s:1},{t:'Normalmente sí', s:2},{t:'Sí, con facilidad', s:3}]},
  {pillar:'mente', q:'¿Cómo describirías tu nivel general de ansiedad o activación mental últimamente?', options:[
    {t:'Alto, de forma bastante constante', s:0},{t:'Moderado, con picos frecuentes', s:1},{t:'Bajo, con picos ocasionales', s:2},{t:'Bajo y estable', s:3}]},

  {pillar:'movimiento', q:'¿Cuántos días a la semana te mueves de forma activa (caminar a paso ligero, deporte, bici...)?', options:[
    {t:'Ninguno o casi ninguno', s:0},{t:'1–2 días', s:1},{t:'3–4 días', s:2},{t:'5 días o más', s:3}]},
  {pillar:'movimiento', q:'¿Disfrutas de la actividad física que haces (cuando la haces)?', options:[
    {t:'No hago ninguna / no la disfruto nada', s:0},{t:'La tolero, pero no la disfruto especialmente', s:1},{t:'Me gusta bastante', s:2},{t:'La disfruto de verdad', s:3}]},
  {pillar:'movimiento', q:'¿Con qué facilidad subes varios pisos de escaleras o cargas peso (compra, maletas) sin fatiga notable?', options:[
    {t:'Me cuesta bastante', s:0},{t:'Me cuesta un poco', s:1},{t:'Sin demasiado esfuerzo', s:2},{t:'Con total normalidad', s:3}]},
  {pillar:'movimiento', q:'¿Cuánto tiempo pasas sentado/a de forma continuada en un día típico?', options:[
    {t:'Casi todo el día, con pocas pausas', s:0},{t:'La mayor parte, con alguna pausa', s:1},{t:'Bastante, pero con pausas regulares', s:2},{t:'Poco tiempo seguido, me levanto con frecuencia', s:3}]},
  {pillar:'movimiento', q:'¿Has mantenido alguna rutina de movimiento durante más de 2 meses seguidos en el último año?', options:[
    {t:'No, suelo abandonar pronto', s:0},{t:'Alguna vez, poco tiempo', s:1},{t:'Sí, al menos una temporada', s:2},{t:'Sí, de forma bastante constante', s:3}]}
];

const QUIZ_RESULTS = {
  nutricion:{
    tag:'Nutrición', tagClass:'moss', title:'Tu área a trabajar: Nutrición',
    body:[
      'Tus respuestas apuntan a que la relación con la comida es, ahora mismo, la parte de tu bienestar que más margen de mejora tiene — no por lo que comes exactamente, sino por el patrón que hay alrededor: rapidez, distracción o cierta carga de culpa.',
      'Un punto de partida realista no es cambiarlo todo de golpe, sino elegir un solo hábito pequeño y sostenerlo: por ejemplo, comer sin pantalla al menos una vez al día, o cocinar en casa dos días más por semana de los que haces ahora.',
      'Presta especial atención a cómo te hablas a ti mismo/a después de comer. Soltar el lenguaje de "bien" y "mal" suele tener más impacto a medio plazo que cualquier cambio en el menú.',
      'Te recomendamos empezar por los artículos "Cómo comer sin culpa: guía de alimentación consciente" y "¿Existen los alimentos malos? La verdad sobre este mito" en la sección de Nutrición.'
    ]
  },
  mente:{
    tag:'Mente', tagClass:'sky', title:'Tu área a trabajar: Mente',
    body:[
      'Tus respuestas sugieren que la parte mental y emocional es, ahora mismo, donde tienes menos margen de recuperación: descanso insuficiente, dificultad para poner límites o poco espacio sin estímulo constante.',
      'Un buen primer paso es identificar qué tipo de descanso te falta de verdad —físico, mental, sensorial o social— en lugar de asumir que "descansar" siempre significa lo mismo. A veces no es dormir más, sino tener un rato sin pantallas ni exigencias.',
      'Si notas que la activación o la ansiedad son altas y persistentes, no es algo que un test online pueda resolver: hablar con un profesional de salud mental es el paso más importante que puedes dar, y no sustituye nada de lo que leas aquí.',
      'Te recomendamos empezar por los artículos "Cómo descansar de verdad cuando estás agotado mentalmente" y "Cómo poner límites sin sentirte culpable" en la sección de Mente. Si en algún momento sientes que no puedes con esto, contacta con el 112 o el Teléfono de la Esperanza (717 003 717).'
    ]
  },
  movimiento:{
    tag:'Movimiento', tagClass:'clay', title:'Tu área a trabajar: Movimiento',
    body:[
      'Tus respuestas indican que el movimiento es, ahora mismo, tu área con más margen de mejora — ya sea por poca actividad, por pasar mucho tiempo sentado/a, o porque no has encontrado todavía algo que disfrutes de verdad.',
      'El error más común aquí es empezar por lo más exigente. Un punto de partida mucho más sostenible es sumar movimiento a los márgenes del día: caminar trayectos cortos, subir escaleras, levantarte con más frecuencia si pasas muchas horas sentado/a.',
      'Antes de buscar la rutina "perfecta", prueba varias actividades sin presión hasta encontrar una que te apetezca repetir. La constancia importa mucho más que la intensidad al principio.',
      'Te recomendamos empezar por los artículos "Cómo mantener la motivación para hacer ejercicio" y "Cómo hacer ejercicio si no tienes tiempo" en la sección de Movimiento.'
    ]
  }
};

let quizIndex = 0;
let quizScores = {nutricion:0, mente:0, movimiento:0};
let quizResultKey = null;

function startQuiz(){
  quizIndex = 0;
  quizScores = {nutricion:0, mente:0, movimiento:0};
  quizResultKey = null;
  document.getElementById('quizOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderQuizQuestion();
}
function closeQuiz(){
  document.getElementById('quizOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('DOMContentLoaded', function(){
  const overlay = document.getElementById('quizOverlay');
  if(overlay){
    overlay.addEventListener('click', function(e){ if(e.target === this) closeQuiz(); });
  }
});
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    const overlay = document.getElementById('quizOverlay');
    if(overlay && overlay.classList.contains('open')) closeQuiz();
  }
});

function renderQuizQuestion(){
  const total = QUIZ.length;
  const q = QUIZ[quizIndex];
  const pct = Math.round((quizIndex / total) * 100);
  const optionsHtml = q.options.map((o) =>
    `<button class="quiz-option" onclick="answerQuiz(${o.s}, '${q.pillar}')">${o.t}</button>`
  ).join('');
  document.getElementById('quizContent').innerHTML = `
    <div class="quiz-progress-track"><div class="quiz-progress-fill" style="width:${pct}%;"></div></div>
    <div class="quiz-counter">Pregunta ${quizIndex + 1} de ${total}</div>
    <h2 class="quiz-question" id="quizHeading">${q.q}</h2>
    <div class="quiz-options">${optionsHtml}</div>
  `;
}

function answerQuiz(score, pillar){
  quizScores[pillar] += score;
  quizIndex++;
  if(quizIndex < QUIZ.length){
    renderQuizQuestion();
  } else {
    computeQuizResult();
  }
}

function computeQuizResult(){
  let weakest = 'nutricion';
  let minScore = Infinity;
  ['nutricion','mente','movimiento'].forEach(p => {
    if(quizScores[p] < minScore){ minScore = quizScores[p]; weakest = p; }
  });
  quizResultKey = weakest;
  renderQuizResult();
}

function renderQuizResult(){
  const data = QUIZ_RESULTS[quizResultKey];
  const bodyHtml = data.body.map(p => `<p>${p}</p>`).join('');
  document.getElementById('quizContent').innerHTML = `
    <div class="quiz-progress-track"><div class="quiz-progress-fill" style="width:100%;"></div></div>
    <div class="quiz-counter">Resultado</div>
    <div class="quiz-result-tag"><span class="tag ${data.tagClass}">${data.tag}</span></div>
    <h2 class="quiz-result-title" id="quizHeading">${data.title}</h2>
    <div class="quiz-result-wrap">
      <div class="quiz-result-body" id="quizResultBody">${bodyHtml}</div>
      <div class="quiz-unlocked-note">Recuerda: esto es contenido informativo, no un diagnóstico profesional.</div>
      <button class="btn btn-ghost quiz-restart" onclick="startQuiz()">Volver a hacer la encuesta</button>
    </div>
  `;
}
