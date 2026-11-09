const trips = [
  { id: "havsvik", year: 2026, place: "Havsvik", country: "Fiktiv kust", title: "Vind, vänner & vida vyer", summary: "En långhelg där saltstänk mötte generösa fairways.", courses: ["Havsvik Links", "Fyren Golfklubb", "Sandudden"], tone: "sand" },
  { id: "ekedalen", year: 2024, place: "Ekedalen", country: "Fiktivt landskap", title: "Bland ekar och gamla historier", summary: "Tre dagar med stilla morgnar, tajta matcher och långa middagar.", courses: ["Ekedalens GK", "Kronängen"], tone: "forest" },
  { id: "solkusten", year: 2022, place: "Solkusten", country: "Fiktiv destination", title: "Säsongen som aldrig tog slut", summary: "Varma kvällar och en final som avgjordes på sista green.", courses: ["Luz del Sur", "Campo Colina", "Mar Azul"], tone: "terracotta" },
  { id: "bergslaget", year: 2019, place: "Bergslaget", country: "Fiktiv region", title: "Mellan dimma och dramatik", summary: "En höstklassiker som fortfarande lever i klubbens berättelser.", courses: ["Bergslaget Golf", "Morgondalen"], tone: "burgundy" }
];

const honours = [
  { initials: "AL", name: "Alex Lind", label: "Fiktiv profil", merit: "Årets klubbkamrat", year: 2026 },
  { initials: "MN", name: "Mika Nor", label: "Fiktiv profil", merit: "Matchspelsmästare", year: 2024 },
  { initials: "SK", name: "Sam Kihl", label: "Fiktiv profil", merit: "Resans ögonblick", year: 2022 }
];

const main = document.querySelector("main");
const menu = document.querySelector(".menu-button");
const nav = document.querySelector(".primary-nav");

const imagePlaceholder = (label, tone = "sand") => `<div class="image-placeholder ${tone}" role="img" aria-label="Bildplatshållare: ${label}"><span>Bildplats</span><strong>${label}</strong></div>`;

function timeline() {
  return `<section class="journey section" id="journey" aria-labelledby="journey-title">
    <div class="section-heading"><div><p class="eyebrow">Kapitel för kapitel</p><h2 id="journey-title">Vår resa</h2></div><p>Från första utslag till senaste minnet. Välj ett år för att kliva in i berättelsen.</p></div>
    <div class="timeline" aria-label="Resornas tidslinje">${trips.map((trip, index) => `<a class="timeline-item" href="#trip/${trip.id}">
      <span class="timeline-year">${trip.year}</span>${imagePlaceholder(trip.place, trip.tone)}<div class="timeline-copy"><small>${trip.country}</small><h3>${trip.title}</h3><p>${trip.summary}</p><span class="text-link">Upptäck resan <b aria-hidden="true">↗</b></span></div>
    </a>`).join("")}</div>
  </section>`;
}

function home() {
  return `<section class="hero"><div class="hero-art" aria-hidden="true"><span class="sun"></span><span class="hill hill-back"></span><span class="hill hill-front"></span><span class="flag">◆</span></div><div class="hero-content"><p class="eyebrow light">Välkommen in</p><h1>Mer än golf.<br><em>En berättelse vi delar.</em></h1><p>Resorna, människorna och ögonblicken som blev våra. Samlade på en plats att återvända till.</p><a class="button light-button" href="#journey">Följ vår resa <span>↓</span></a></div><p class="prototype-label">Designprototyp · Allt innehåll är fiktivt</p></section>
    ${timeline()}
    <section class="feature section"><div class="feature-art">${imagePlaceholder("Troféarkiv — ingen pokal avbildad", "burgundy")}</div><div><p class="eyebrow">Tradition & triumf</p><h2>Trophy Room</h2><p>En värdig plats för klubbens fiktiva tävlingar, format och mästarlistor. I en framtida produkt visas bara verifierade fakta och autentiska bilder.</p><a class="button dark-button" href="#trophy-room">Kliv in i arkivet <span>→</span></a></div></section>
    <section class="hof-preview section"><div class="section-heading"><div><p class="eyebrow">Människorna bakom minnena</p><h2>Hall of Fame</h2></div><a class="text-link" href="#hall-of-fame">Se alla fiktiva profiler <b>→</b></a></div><div class="portrait-grid">${honours.map(person => `<article class="portrait-card"><div class="avatar">${person.initials}</div><small>${person.label}</small><h3>${person.name}</h3><p>${person.merit} · ${person.year}</p></article>`).join("")}</div></section>`;
}

function subHero(kicker, title, copy) { return `<section class="sub-hero"><a class="back-link" href="#home">← Till startsidan</a><p class="eyebrow light">${kicker}</p><h1>${title}</h1><p>${copy}</p></section>`; }

function tripsView() { return `${subHero("Alla kapitel", "Resor", "Fiktiva destinationer, banor och minnen — samlade år för år.")}<section class="section trip-list">${trips.map(trip => `<a class="trip-row" href="#trip/${trip.id}">${imagePlaceholder(trip.place, trip.tone)}<div><span class="year-pill">${trip.year}</span><small>${trip.country}</small><h2>${trip.place}</h2><p>${trip.summary}</p><span class="text-link">Visa ${trip.courses.length} banor <b>→</b></span></div></a>`).join("")}</section>`; }

function tripView(id) {
  const trip = trips.find(item => item.id === id) || trips[0];
  return `${subHero(`${trip.year} · ${trip.country}`, trip.place, trip.summary)}<section class="section trip-detail">${imagePlaceholder(`${trip.place}, stämningsbild`, trip.tone)}<div class="detail-intro"><p class="eyebrow">Fiktiv reseberättelse</p><h2>${trip.title}</h2><p>Det här är exempeltext för den klickbara prototypen. Inga personer, resultat eller historiska händelser gör anspråk på att vara verkliga.</p></div><h2>Banorna</h2><div class="course-grid">${trip.courses.map((course, i) => `<article class="course-card"><span>0${i + 1}</span>${imagePlaceholder(`${course}, banvy`, trip.tone)}<small>Fiktiv bana</small><h3>${course}</h3></article>`).join("")}</div><a class="button dark-button" href="#trips">← Alla resor</a></section>`;
}

function hallView() { return `${subHero("Fiktiva profiler", "Hall of Fame", "Ett rum för prestationer, personligheter och berättelser — utan verkliga personuppgifter.")}<section class="section"><div class="notice"><strong>Demoinnehåll</strong><p>Samtliga namn, initialer och meriter nedan är uttryckligen fiktiva.</p></div><div class="honour-grid">${honours.concat([{ initials: "TJ", name: "Toni Järn", label: "Fiktiv profil", merit: "Längsta putten", year: 2019 }]).map(person => `<article class="honour-card"><div class="avatar large">${person.initials}</div><div><small>${person.label}</small><h2>${person.name}</h2><p>${person.merit}</p><span>${person.year}</span></div></article>`).join("")}</div></section>`; }

function trophyView() { return `${subHero("Det fiktiva arkivet", "Trophy Room", "En formell vy för framtida, verifierad klubbhistoria.")}<section class="section trophy-layout">${imagePlaceholder("Reserverad plats för autentiskt troféfoto", "burgundy")}<div><p class="eyebrow">Ingen fabricerad trofé</p><h2>Historien förtjänar att vara sann.</h2><p>Prototypen använder därför en tydligt märkt bildplats. En framtida produkt kan visa ett autentiskt foto och verifierade inskriptioner här.</p><div class="archive-list"><div><span>01</span><p><strong>Individuella titlar</strong><small>Kommande verifierat arkiv</small></p></div><div><span>02</span><p><strong>Scramble honours</strong><small>Separat kommande kategori</small></p></div></div><a class="back-link dark" href="#home">← Till startsidan</a></div></section>`; }

function render() {
  const route = location.hash.slice(1) || "home";
  if (route.startsWith("trip/")) main.innerHTML = tripView(route.split("/")[1]);
  else if (route === "trips") main.innerHTML = tripsView();
  else if (route === "hall-of-fame") main.innerHTML = hallView();
  else if (route === "trophy-room") main.innerHTML = trophyView();
  else main.innerHTML = home();
  nav.querySelectorAll("a").forEach(link => link.removeAttribute("aria-current"));
  const current = nav.querySelector(`[href="#${route}"]`); if (current) current.setAttribute("aria-current", "page");
  nav.classList.remove("open"); menu.setAttribute("aria-expanded", "false");
  if (route === "journey") requestAnimationFrame(() => document.querySelector("#journey")?.scrollIntoView()); else window.scrollTo(0, 0);
}

menu.addEventListener("click", () => { const open = nav.classList.toggle("open"); menu.setAttribute("aria-expanded", String(open)); });
window.addEventListener("hashchange", render);
render();
