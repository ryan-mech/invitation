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
   MUSIC SETTINGS
========================= */

bgMusic.volume = 0.5;
bgMusic.loop = true;


/* =========================
   HELPERS
========================= */

function showScene(scene) {
    scenes.forEach(s => s.classList.remove("active"));
    scene.classList.add("active");
}

function typeText(element, text, speed = 40) {
    element.innerHTML = "";
    let i = 0;

    const interval = setInterval(() => {
        element.innerHTML += text.charAt(i);
        i++;
        if (i >= text.length) clearInterval(interval);
    }, speed);
}


/* =========================
   APOLOGY PAGE
========================= */

let scale = 1;

noBtn.addEventListener("mouseover", () => {
    scale += 0.15;
    yesBtn.style.transform = `scale(${scale})`;

    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});


/* =========================
   YES BUTTON (FIXED CORE ISSUE)
========================= */

yesBtn.addEventListener("click", () => {

    // Move to next page FIRST
    showScene(birthdayIntro);

    // Start music ONLY after transition
    setTimeout(() => {
        bgMusic.play().catch(() => {
            console.log("Autoplay blocked");
        });
    }, 500);
});


/* =========================
   18 REASONS
========================= */

const reasons = [
"You’re kind to the people around you.",
"You make people feel welcome.",
"You stay true to yourself.",
"You leave a positive impression on others.",
"You know how to make ordinary moments memorable.",
"You always bring your own energy into a room.",
"You’re stronger than you give yourself credit for.",
"You genuinely care about the people around you.",
"You have a smile that brightens a day.",
"You never stop growing as a person.",
"You have a way of making memories special.",
"You’re someone worth admiring.",
"You make friendships feel meaningful.",
"You carry yourself with grace.",
"You’ve touched more lives than you realize.",
"You make school memories worth remembering.",
"You’re becoming an amazing person.",
"And because being you is reason enough ❤️"
];

startJourney.addEventListener("click", startReasons);

function startReasons() {
    showScene(reasonsPage);
    reasonsBox.innerHTML = "";

    let index = 0;

    const interval = setInterval(() => {
        const div = document.createElement("div");
        div.className = "reason";
        div.innerHTML = `${index + 1}. ${reasons[index]}`;
        reasonsBox.appendChild(div);

        div.scrollIntoView({ behavior: "smooth", block: "end" });

        index++;

        if (index >= reasons.length) {
            clearInterval(interval);
            setTimeout(startMemoryLane, 2000);
        }
    }, 2000);
}


/* =========================
   MEMORY LANE
========================= */

const memories = [
{
img:"Images/IMG-20220918-WA0010.jpg",
caption:"The very moment two strangers became a small part of each other's story."
},
{
img:"Images/Screenshot_20220902-114252_WhatsApp.jpg",
caption:"Our first Onam together. The beginning of a beautiful journey."
},
{
img:"Images/IMG-31129.jpg", // keep your real name if different
caption:"The first trip. A day filled with laughter, adventures, and memories."
},
{
img:"Images/IMG-20240216-WA0002.jpg",
caption:"Just one of those ordinary moments that somehow became unforgettable."
},
{
img:"Images/Screenshot_2024-12-22-12-06-33-718.jpeg",
caption:"Christmas, smiles, friends, and memories."
},
{
img:"Images/20250829_131253.jpg",
caption:"Our final Onam at school. We didn’t know it then."
},
{
img:"Images/IMG-20251006-WA0295.jpg",
caption:"A day when all of us were together."
},
{
img:"Images/IMG-20260104-WA0010.jpg",
caption:"Forming Capacity 😅 Some moments don’t need explanation."
},
{
img:"Images/IMG-20260112-WA0018.jpg",
caption:"A normal lab memory made unforgettable 💞"
},
{
img:"Images/IMG-20260131-WA0000.jpg",
caption:"🫣😅🤐 UK when?"
},
{
img:"Images/20260129_095211.jpg",
caption:"Farewell. The end of one chapter."
}
];


function startMemoryLane() {

    showScene(memoryLane);

    let index = 0;

    function next() {

        const memory = memories[index];

        memoryImage.src = memory.img;
        memoryCaption.innerHTML = "";

        setTimeout(() => {
            typeText(memoryCaption, memory.caption, 25);
        }, 400);

        let time = 3000;
        if (index === memories.length - 1) time = 5000;

        setTimeout(() => {
            index++;
            if (index < memories.length) next();
            else startLetter();
        }, time);
    }

    next();
}


/* =========================
   LETTER
========================= */

const finalLetter = `
Hi Nada ❤️

Thank you for being part of my school life.

Every memory here carries a story I will never forget.

From strangers to farewell… everything mattered.

- Always grateful
`;

function startLetter() {
    showScene(letterPage);
    typeText(typedLetter, finalLetter, 35);

    setTimeout(() => {
        showScene(finalBirthday);

        setTimeout(() => {
            showScene(theEnd);
        }, 5000);

    }, 8000);
}


/* =========================
   ALBUM
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
        viewerImage.src = card.getAttribute("data-img");
    });
});

closeViewer.addEventListener("click", () => {
    viewer.style.display = "none";
});

viewer.addEventListener("click", (e) => {
    if (e.target === viewer) {
        viewer.style.display = "none";
    }
});

