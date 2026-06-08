/* =========================
ELEMENTS
========================= */

const scenes = document.querySelectorAll(".scene");

const apologyPage = document.getElementById("apologyPage");
const birthdayIntro = document.getElementById("birthdayIntro");
const reasonsPage = document.getElementById("reasonsPage");
const memoryLane = document.getElementById("memoryLane");
const letterPage = document.getElementById("letterPage");
const finalBirthday = document.getElementById("finalBirthday");
const theEnd = document.getElementById("theEnd");
const loadingPage = document.getElementById("loadingPage");
const albumPage = document.getElementById("albumPage");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const startJourney = document.getElementById("startJourney");
const albumBtn = document.getElementById("albumBtn");

const bgMusic = document.getElementById("bgMusic");

const reasonsBox = document.getElementById("reasonsBox");

const memoryImage = document.getElementById("memoryImage");
const memoryCaption = document.getElementById("memoryCaption");

const typedLetter = document.getElementById("typedLetter");

const viewer = document.getElementById("viewer");
const viewerImage = document.getElementById("viewerImage");
const closeViewer = document.getElementById("closeViewer");

/* =========================
HELPERS
========================= */

function showScene(scene) {

scenes.forEach(s => {
s.classList.remove("active");
});

scene.classList.add("active");
}

function typeText(element, text, speed = 40) {

element.innerHTML = "";

let i = 0;

const interval = setInterval(() => {

element.innerHTML += text.charAt(i);

i++;

if(i >= text.length){
clearInterval(interval);
}

}, speed);
}

/* =========================
APOLOGY PAGE
========================= */

let scale = 1;

noBtn.addEventListener("mouseover", () => {

scale += 0.15;

yesBtn.style.transform = scale(${scale})`;

const x = Math.random() * (window.innerWidth - 120);
const y = Math.random() * (window.innerHeight - 80);

noBtn.style.position = "absolute";
noBtn.style.left = x + "px";
noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {

bgMusic.play();

showScene(birthdayIntro);
});

/* =========================
18 REASONS
========================= */

const reasons = [

"Your smile has a way of making people feel comfortable.",

"You carry yourself with a quiet confidence that stands out.",

"Your kindness often shows in the little things you do.",

"You have a genuine and memorable personality.",

"You make ordinary conversations feel meaningful.",

"Your determination is stronger than you probably realize.",

"You continue moving forward even when life becomes difficult.",

"You have a unique way of seeing the world.",

"You leave a positive impression on the people around you.",

"Your sense of responsibility reflects your maturity.",

"You inspire others simply by being yourself.",

"You have a natural elegance that cannot be taught.",

"Your presence brings warmth to a room.",

"You value the people who matter to you.",

"You have dreams worth chasing and the potential to achieve them.",

"You continue growing into a stronger version of yourself every year.",

"You remind people that authenticity is something rare and beautiful.",

"Most importantly, you're special because there is no one else quite like you."

];


startJourney.addEventListener("click", startReasons);

function startReasons(){

showScene(reasonsPage);

reasonsBox.innerHTML = "";

let index = 0;

const interval = setInterval(() => {

const div = document.createElement("div");

div.className = "reason";

div.innerHTML = ``${index+1}. ${reasons[index]}`;

reasonsBox.appendChild(div);

div.scrollIntoView({
behavior:"smooth",
block:"end"
});

index++;

if(index >= reasons.length){

clearInterval(interval);

setTimeout(() => {

startMemoryLane();

}, 4000);
}

}, 2500);
}

/* =========================
MEMORY LANE
========================= */
const memories = [

{
img:"images/IMG-20220918-WA0010.jpg",
caption:"The very moment two strangers became a small part of each other's story."
},

{
img:"images/Screenshot_20220902-114252_WhatsApp.jpg",
caption:"Our first Onam together. The beginning of a beautiful journey."
},

{
img:"images/IMG-20231129-WA0002.jpg",
caption:"The first trip. A day filled with laughter, adventures, and memories that followed us long after the journey ended."
},

{
img:"images/IMG-20240216-WA0002.jpg",
caption:"Just one of those ordinary moments that somehow became unforgettable."
},

{
img:"images/Screenshot_2024-12-22-12-06-33-718.jpeg",
caption:"Christmas, smiles, friends, and memories."
},

{
img:"images/20250829_131253.jpg",
caption:"Our final Onam at school. We didn't know it then, but some of our best school memories were already becoming memories."
},

{
img:"images/IMG-20251006-WA0295.jpg",
caption:"A day when all of us were together, creating memories we'd carry long after school ended."
},

{
img:"images/IMG-20260104-WA0010.jpg",
caption:"Forming Capacity 😅 Some moments don't need an explanation."
},

{
img:"images/IMG-20260112-WA0018.jpg",
caption:"Oru normal lab memory made a 1000 folds more memorable by someone special 💞"
},

{
img:"images/IMG-20260131-WA0000.jpg",
caption:"🫣😅🤐 UK when"
},

{
img:"images/20260129_095211.jpg",
caption:"Farewell. The end of our time together at school. The end of one chapter. The beginning of another."
}

];



function startMemoryLane(){

showScene(memoryLane);

let index = 0;

function nextMemory(){

const memory = memories[index];

memoryImage.src = memory.img;

memoryCaption.innerHTML = "";

setTimeout(() => {

typeText(memoryCaption, memory.caption, 25);

}, 500);

let duration = 3000;

if(index === memories.length - 1){
duration = 5000;
}

setTimeout(() => {

index++;

if(index < memories.length){

nextMemory();

}else{

startLetter();
}

}, duration);
}

nextMemory();
}

/* =========================
LETTER
========================= */

const finalLetter = `Hi Nada,

Finally our time together in school has come to an end.

These are some of the wonderful memories I had the chance to share with you.

From the first picture to our farewell day, every memory carries a story.

I've always been grateful to have had you in my life.

No matter where life takes us next, these are memories I will cherish for a lifetime.

Thank you for everything you've given me Nada.

Yours truly,

• Kunju`;

function startLetter(){

showScene(letterPage);

typeWriterLetter(finalLetter);
}

function typeWriterLetter(text){

typedLetter.innerHTML = "";

let i = 0;

const interval = setInterval(() => {

typedLetter.innerHTML += text.charAt(i);

i++;

if(i >= text.length){

clearInterval(interval);

setTimeout(() => {

showScene(finalBirthday);

setTimeout(() => {

showScene(theEnd);

}, 5000);

}, 4000);
}

}, 35);
}

/* =========================
MEMORY ALBUM
========================= */

albumBtn.addEventListener("click", () => {

showScene(loadingPage);

setTimeout(() => {

showScene(albumPage);

}, 2000);
});

/* =========================
FULLSCREEN VIEWER
========================= */

document.querySelectorAll(".polaroid").forEach(card => {

card.addEventListener("click", () => {

viewer.style.display = "flex";

viewerImage.src =
card.getAttribute("data-img");
});

});

closeViewer.addEventListener("click", () => {

viewer.style.display = "none";
});

viewer.addEventListener("click", (e) => {

if(e.target === viewer){

viewer.style.display = "none";
}
});
