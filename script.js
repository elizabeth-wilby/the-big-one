// flippy cards
document.querySelectorAll('.theme-card').forEach(function(card) {
  card.addEventListener('mouseenter', () => {
    card.querySelector('.theme-card-inner').style.transform = 'rotateY(180deg)';
  });
  card.addEventListener('mouseleave', () => {
    card.querySelector('.theme-card-inner').style.transform = 'rotateY(0deg)';
  });
});

console.log('hotspots found:', document.querySelectorAll('.hotspot').length);

// map tooltips

// const tooltip = document.querySelector('.map-tooltip');
const tooltip = document.getElementById('map-tooltip');

const regionData = {
mountains: { name: "The Dawnmarked Spindals", description: "Jagged peaks claw into the northern skies of the eastern peninsula. Few paths cross this range, and those that do are watched by old, ancient forces." },
desert: { name: "The Dunes of Histren", description: "A compact but brutal stretch of sand and stone in the far south-east. Caravans skirt its edges, following hidden wells and ancient waystones." },
jungle: { name: "The Veridian Shroud", description: "A dense, humid jungle cloaking the southern reaches of the western peninsula. The canopy is so thick that daylight fades to green twilight beneath it. It's been deemed impenetrable and is vastly unexplored." },
channel: { name: "The Shard Sea", description: "The narrow sea that almost splits the continent in two. Sailors tell of strange tides and ruins resting just below the water's surface." },
city: { name: "Brasshaven", description: "A city layered in dirty truth, hard bargain, with even harder citizens." },
city2: { name: "Centralia", description: "The stronghold of the Centralian Empire, controlled by Emperor Lassiter and his Army. A beautiful city with awful governance attempting to imperialize the rest of the continent." },
temple: { name: "Temple of the First Flame", description: "A sacred temple believed to be myth. It houses students of magic, learning the keys to elemental magic use." },
town: { name: "Cindermoor Crossing", description: "A small remote fishing village that meets both sea and mountain. Impoverished, gray, and sad." },
town2: { name: "Brackenport", description: "A port town, home of the Dawnhook. A secret rebel ship run by Sorren Dawnhook and her crew." },
town3: { name: "Folgenfort", description: "A small trade town split down the middle by more than just its creek."},
citadel: { namme: "The Citadel", description: "Where soldiers are trained in the Centrailian military. Experiments using magic and alchemy occur here."}
};

//  hover
document.querySelectorAll('.hotspot').forEach(function(hs) {
var region = hs.dataset.region;

  hs.addEventListener('mouseenter', e => {
    const data = regionData[region];
    if (!data) return;
    // to set the text
    tooltip.querySelector('strong').textContent = data.name;
    tooltip.querySelector('p').textContent = data.description;
    tooltip.style.display = 'block';
    tooltip.style.left = e.clientX + 12 + 'px';
      tooltip.style.top = e.clientY - 20 + 'px';
  });

  hs.addEventListener('mousemove', function(e) {
    tooltip.style.left = e.clientX + 12 + 'px';
    tooltip.style.top = e.clientY - 20 + 'px';
  });

  hs.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});

// same map on writing page - copied this and adjusted
const tooltipWriting = document.getElementById('map-tooltip-writing');
// const writingHotspots = document.querySelectorAll('.hotspot');

document.querySelectorAll('.hotspot').forEach(hs => {
  hs.addEventListener('mouseenter', function(e) {
    if (!tooltipWriting) return;
    var region = hs.dataset.region;
    const data = regionData[region];
    if (!data) return;
    tooltipWriting.querySelector('strong').textContent = data.name;
    tooltipWriting.querySelector('p').textContent = data.description;
    tooltipWriting.style.display = 'block';
    tooltipWriting.style.left = e.clientX + 12 + 'px';
    tooltipWriting.style.top = e.clientY - 20 + 'px';
  });

  hs.addEventListener('mousemove', e => {
      if (!tooltipWriting) return;
    tooltipWriting.style.left = e.clientX + 12 + 'px';
    tooltipWriting.style.top = e.clientY - 20 + 'px';
  });

  hs.addEventListener('mouseleave', function() {
    if (!tooltipWriting) return;
    tooltipWriting.style.display = 'none';
  });
});

// fun facts
const facts = [
  
"Top three favorite movies are Practical Magic, Focus, and The Talented Mr. Ripley",

"Top three favorite books are Turn of the Screw, Carmilla, and the Witcher Series." ,

"Top three favorite shows are Game of Thrones, Industry, and The Haunting of Bly Manor.",

"She has been classically trained in paino since the age of 4.",

"Liz prefers dogs over cats.",

"Her favorite sport to watch is basketball, but her favorite sport to play is soccer.",

"Liz likes to think she's decent at speaking Spanish, but she still struggles with when to use 'te quiero' or 'te amo'.",

"Liz is an only child!",

"Her favorite music artists are Rosalía, Palace, Carole King, ABBA, and Yebba.",

"Her favorite fruit is a pear.",

"Liz is known for her love of chicken cutlets.",

"She has an ABBA tattoo that she got in Vegas.",

"Liz is very afraid of large birds.",

"Her drink of choice is either a sazerac or a dirty martini",

"Liz loves to cook, she makes a decent all day bolognese."

];

function newFact() {
const random = Math.floor(Math.random() * facts.length);
document.getElementById("fact-text").textContent = facts[random];
}