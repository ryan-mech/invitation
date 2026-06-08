const scenes = document.querySelectorAll(".scene");

function show(id){
  scenes.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

const music = document.getElementById("bgMusic");
music.volume = 0.5;

/* APOLOGY */
document.getElementById("yes").onclick = async () => {
  try{ await music.play(); } catch(e){}
  show("intro");
};

document.getElementById("no").onmouseover = () => {
  const b = document.getElementById("no");
  b.style.left = Math.random()*80 + "vw";
  b.style.top = Math.random()*80 + "vh";
};

/* START */
document.getElementById("start").onclick = () => {
  show("reasons");
  startReasons();
};

const reasons = Array.from({length:18}, (_,i)=>
`Reason ${i+1}: You are special ❤️`
);

function startReasons(){
  let i=0;
  const box = document.getElementById("reasonBox");
  box.innerHTML="";

  let t = setInterval(()=>{
    if(i>=reasons.length){
      clearInterval(t);
      setTimeout(startMemory,1000);
      return;
    }
    let d=document.createElement("div");
    d.innerText=reasons[i];
    box.appendChild(d);
    i++;
  },600);
}

/* MEMORY */
const memories=[
"Images/IMG-20220918-WA0010.jpg",
"Images/Screenshot_20220902-114252_WhatsApp.jpg",
"Images/IMG-20231129-WA0002.jpg"
];

let memIndex=0;

function startMemory(){
  show("memory");
  nextMem();
}

function nextMem(){
  if(memIndex>=memories.length){
    startLetter();
    return;
  }

  document.getElementById("memImg").src=memories[memIndex];
  document.getElementById("memText").innerText="Memory ❤️";

  memIndex++;
  setTimeout(nextMem,2000);
}

/* LETTER */
function startLetter(){
  show("letter");
  let text="Thank you for everything ❤️";
  let i=0;

  let t=setInterval(()=>{
    document.getElementById("letterText").innerHTML += text[i];
    i++;
    if(i>=text.length){
      clearInterval(t);
      setTimeout(()=>show("end"),1500);
    }
  },50);
}

/* ALBUM */
document.getElementById("album").onclick = () => {
  show("album");

  const imgs=[
    "Images/IMG-20220918-WA0010.jpg",
    "Images/IMG-20231129-WA0002.jpg"
  ];

  let grid=document.getElementById("grid");
  grid.innerHTML="";

  imgs.forEach(src=>{
    let img=document.createElement("img");
    img.src=src;
    img.onclick=()=>open(img.src);
    grid.appendChild(img);
  });
};

function open(src){
  document.getElementById("viewer").style.display="flex";
  document.getElementById("viewerImg").src=src;
}

document.getElementById("viewer").onclick=()=>{
  document.getElementById("viewer").style.display="none";
};
