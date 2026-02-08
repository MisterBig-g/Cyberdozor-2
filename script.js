let score=0;
function goTo(id){document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
document.getElementById(id).classList.add("active");}

function phishFound(){document.getElementById("phishResult").innerText=
"✅ Верно! Подмена буквы в адресе — признак фишинга.";score++;}

function downloadChoice(correct){
document.getElementById("downloadResult").innerText=correct?
"✅ Правильно! Официальный сайт безопасен.":"❌ Ошибка! Торренты часто содержат вирусы.";
if(correct)score++;}

function checkPassword(){
let pass=document.getElementById("passwordInput").value;
let strong=pass.length>=8 && /[0-9]/.test(pass) && /[^A-Za-z0-9]/.test(pass);
document.getElementById("passwordStrength").innerText=strong?"✅ Надёжный пароль!":"❌ Слабый пароль";
if(strong)score++;}

const quiz=[
{q:"Если письмо требует срочно ввести пароль — это фишинг?",a:true,exp:"Да, срочность — приём мошенников."},
{q:"Можно ли скачивать игры с торрент-сайтов?",a:false,exp:"Нет, туда часто встраивают вирусы."},
{q:"Троян может маскироваться под полезную программу?",a:true,exp:"Да, это его основная опасность."},
{q:"Надёжный пароль должен быть коротким?",a:false,exp:"Нет, чем длиннее — тем лучше."},
{q:"Обновления системы повышают безопасность?",a:true,exp:"Да, они закрывают уязвимости."}
];

function loadQuiz(){
let box=document.getElementById("quizBox");box.innerHTML="";
quiz.forEach((it,i)=>{box.innerHTML+=`
<div class="task">
<p><b>${i+1}. ${it.q}</b></p>
<button onclick="answer(${i},true)">Да</button>
<button onclick="answer(${i},false)">Нет</button>
<p id="exp${i}"></p>
</div>`;});}

function answer(i,choice){
let it=quiz[i];let exp=document.getElementById("exp"+i);
if(choice===it.a){score++;exp.innerText="✅ Верно! "+it.exp;}
else{exp.innerText="❌ Неверно. "+it.exp;}}

function finishQuiz(){
goTo("result");
document.getElementById("finalText").innerText=`Ваш результат: ${score} баллов`;
document.getElementById("finalTip").innerText=score>=8?"🔥 Отлично!":
score>=5?"👍 Хорошо, но будь внимательнее.":"⚠ Нужно повторить теорию.";
}

function restart(){location.reload();}
window.onload=loadQuiz;