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

    yesBtn.style.transform = `scale(${scale})`;

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

"You're kind to the people around you.",
"You make people feel welcome.",
"You stay true to yourself.",
"You leave a positive impression on others.",
"You know how to make ordinary moments memorable.",
"You always bring your own energy into a room.",
"You're stronger than you give yourself credit for.",
"You genuinely care about the people around you.",
"You have a smile that brightens a day.",
"You never stop growing as a person.",
"You have a way of making memories special.",
"You're someone worth admiring.",
"You make friendships feel meaningful.",
"You carry yourself with grace.",
"You've touched more lives than you realize.",
"You make school memories worth remembering.",
"You're becoming an amazing person.",
"And because being you is reason enough ❤️"

];

startJourney.addEventListener("click", startReasons);

function startReasons(){

    showScene(reasonsPage);

    reasonsBox.innerHTML = "";

    let index = 0;

    const interval = setInterval(() => {

        const div = document.createElement("div");

        div.className = "reason";

        div.innerHTML = `${index+1}. ${reasons[index]}`;

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
img:"images/photo1.jpg",
caption:"The very moment two strangers became a small part of each other's story."
},

{
img:"images/photo2.jpg",
caption:"Our first Onam together. The beginning of a beautiful journey."
},

{
img:"images/photo3.jpg",
caption:"The first trip. A day filled with laughter, adventures, and memories that followed us long after the journey ended."
},

{
img:"images/photo4.jpg",
caption:"Just one of those ordinary moments that somehow became unforgettable."
},

{
img:"images/photo5.jpg",
caption:"Christmas, smiles, friends, and memories."
},

{
img:"images/photo6.jpg",
caption:"Our final Onam at school. We didn't know it then, but some of our best school memories were already becoming memories."
},

{
img:"images/photo7.jpg",
caption:"A day when all of us were together, creating memories we'd carry long after school ended."
},

{
img:"images/photo8.jpg",
caption:"Forming Capacity 😅 Some moments don't need an explanation."
},

{
img:"images/photo9.jpg",
caption:"Oru normal lab memory made a thousand times more memorable by someone special 💞"
},

{
img:"images/photo10.jpg",
caption:"🫣😅🤐 UK when?"
},

{
img:"images/photo11.jpg",
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

- Kunju`;

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
