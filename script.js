document.addEventListener("DOMContentLoaded", () => {

/* =========================
SCENES
========================= */

const scenes = document.querySelectorAll(".scene");

function showScene(scene) {
  scenes.forEach(s => s.classList.remove("active"));
  scene.classList.add("active");
}

/* =========================
ELEMENTS
========================= */

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
bgMusic.volume = 0.5;

/* =========================
NO BUTTON ESCAPE FIX
========================= */

let scale = 1;

noBtn.addEventListener("mouseover", () => {
  scale = Math.min(scale + 0.15, 2);

  yesBtn.style.transform = `scale(${scale})`;

  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 80);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

/* =========================
YES BUTTON
========================= */

yesBtn.addEventListener("click", async () => {
  try {
    await bgMusic.play();
  } catch (e) {
    console.log("Autoplay blocked");
  }
  showScene(birthdayIntro);
});

/* =========================
REASONS
========================= */

const reasons = [
  "Your smile makes people feel safe.",
  "Your kindness shows in small actions.",
  "You have a strong and calm personality.",
  "You make conversations meaningful.",
  "You keep going even when things are hard.",
  "You inspire people without trying.",
  "You have a unique way of seeing life.",
  "You value people who matter.",
  "You grow stronger every year.",
  "You are genuinely one of a kind."
];

function startReasons() {
  showScene(reasonsPage);

  const box = document.getElementById("reasonsBox");
  box.innerHTML = "";

  let i = 0;

  const interval = setInterval(() => {
    if (i >= reasons.length) {
      clearInterval(interval);
      setTimeout(startMemoryLane, 2000);
      return;
    }

    const div = document.createElement("div");
    div.className = "reason";
    div.textContent = `${i + 1}. ${reasons[i]}`;

    box.appendChild(div);
    div.scrollIntoView({ behavior: "smooth" });

    i++;
  }, 1500);
}

startJourney.addEventListener("click", startReasons);

/* =========================
MEMORY LANE
========================= */

const memories = [
  { img: "Images/IMG-20220918-WA0010.jpg", caption: "First memories together." },
  { img: "Images/Screenshot_20220902-114252_WhatsApp.jpg", caption: "Our Onam memory." },
  { img: "Images/IMG-20231129-WA0002.jpg", caption: "First trip together." }
];

function startMemoryLane() {
  showScene(memoryLane);

  let i = 0;

  const img = document.getElementById("memoryImage");
  const cap = document.getElementById("memoryCaption");

  function next() {
    if (i >= memories.length) {
      startLetter();
      return;
    }

    img.src = memories[i].img;
    cap.textContent = memories[i].caption;

    i++;
    setTimeout(next, 2500);
  }

  next();
}

/* =========================
LETTER
========================= */

function startLetter() {
  showScene(letterPage);

  const text = `Hi Nada,
Thank you for everything.
These memories will stay forever.`;

  const box = document.getElementById("typedLetter");
  box.innerHTML = "";

  let i = 0;

  const interval = setInterval(() => {
    box.innerHTML += text[i];
    i++;

    if (i >= text.length) {
      clearInterval(interval);

      setTimeout(() => {
        showScene(finalBirthday);

        setTimeout(() => {
          showScene(theEnd);
        }, 4000);
      }, 2000);
    }
  }, 40);
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
VIEWER
========================= */

document.querySelectorAll(".polaroid").forEach(card => {
  card.addEventListener("click", () => {
    const viewer = document.getElementById("viewer");
    const viewerImage = document.getElementById("viewerImage");

    viewer.style.display = "flex";
    viewerImage.src = card.dataset.img;
  });
});

document.getElementById("closeViewer").addEventListener("click", () => {
  document.getElementById("viewer").style.display = "none";
});

});

