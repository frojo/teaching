const faviconElm = document.querySelector("link[rel~='icon']");

const textElms = document.getElementsByClassName("text");

let ASSETS_DIR = "/assets/"

const BACKGROUNDS = [
  "tower.gif",
  "sunset.gif",
  "hem.gif",
  "rat.gif",
  "clouds.gif",
  "painting.gif",
  "ramen.gif",
  "birbs.gif",
  "fire.gif",
  "signal.gif"
];


let curr_bg = -1;
let wild_bg = false;
function applyBGHoverEffect() {
  // prep text to be legible with craaaazy backgrounds
  document.body.style.color = "white";
  for (textElm of textElms) {
    textElm.style.backgroundColor = "black";
  }
  
  // select a random background
  // we add 1 for the possibility of black background
  const possible = BACKGROUNDS.length + 1;
  let new_bg = Math.floor(Math.random() * possible);
  while (new_bg == curr_bg) {
    new_bg = Math.floor(Math.random() * possible);
  }
  curr_bg = new_bg;


  if (curr_bg < BACKGROUNDS.length) {
    const path = ASSETS_DIR + BACKGROUNDS[new_bg];
    document.body.style.backgroundImage = "url(" + path + ")"
    faviconElm.href = path;

  // theres a chance we just have a black background
  } else {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "black";
    
    faviconElm.href = ASSETS_DIR + "black-favicon.png";
  }
}

function unapplyBGHoverEffect() {
  document.body.style.color = "";
  for (textElm of textElms) {
    textElm.style.backgroundColor = "";
  }

  faviconElm.href = ASSETS_DIR + favicon;
  document.body.style.backgroundImage = "";
  document.body.style.backgroundColor = "";
}


// do not want to induce epilepsy
// https://www.w3.org/TR/WCAG21/#dfn-general-flash-and-red-flash-thresholds
const bg_toggle_cooldown_ms = 400;
let last_bg_toggle = Date.now();
function onHoverEffectOld(elm) {

  // debounce
  let ms_since_last_hover = Date.now() - last_bg_toggle;
  if (ms_since_last_hover < bg_toggle_cooldown_ms) {
    return;
  }
  last_bg_toggle = Date.now();

  applyBlackHighlight(elm);

  // if (wild_bg) {
  //   unapplyBGHoverEffect();
  //   applyNewBaseStyles();
  // } else {
  //   applyBGHoverEffect();
  // }

  // wild_bg = !wild_bg;
}

function onHoverEffect(elm) {
  // applyBlackHighlight(elm);
}

function onLeaveHoverEffect(elm) {
  // do nothing 
}



const FAVICONS = ["yellow-favicon.png", "purple-favicon.png", 
                  "blue-favicon.png", "green-favicon.png"];


/*
"yellow-link", "purple-link", 
                     "blue-link", "green-link"];

                     */

// backgrounds
// 3 different flowers
// maybe a subway video
// i should just look through my camera  for some videos
// but also a black bg one



let favicon;
let bg_color;
let link_color;

// this changes the page theme to a new random one
function applyNewBaseStyles() {
  const style = getComputedStyle(document.body);
  
  const BG_COLORS = [
    style.getPropertyValue('--yellow-bg'),
    style.getPropertyValue('--purple-bg'),
    style.getPropertyValue('--blue-bg'),
    style.getPropertyValue('--green-bg')
  ];

  const LINK_COLORS = [
    style.getPropertyValue('--yellow-text'),
    style.getPropertyValue('--purple-text'),
    style.getPropertyValue('--blue-text'),
    style.getPropertyValue('--green-text')
  ];


  const possible = BG_COLORS.length;
  let new_bg_color = Math.floor(Math.random() * possible);
  let new_link_color = Math.floor(Math.random() * possible);

  // chose link color that is different than bg color
  let failsafe_counter = 0;
  while (new_link_color == new_bg_color) {
    new_link_color = Math.floor(Math.random() * possible);

    failsafe_counter += 1;
    if (failsafe_counter > 10) {
      break;
    }
  }

  old_bg_color = bg_color;
  old_link_color = link_color;

  bg_color = BG_COLORS[new_bg_color];
  link_color = LINK_COLORS[new_link_color];
  favicon = FAVICONS[new_bg_color];

  console.log(link_color);
  document.documentElement.style.setProperty('--text-color', link_color);
  document.documentElement.style.setProperty('--bg-color', bg_color);
  

  faviconElm.href = ASSETS_DIR + favicon;

}

function applyBlackHighlight(projectItemElm) {


  console.log(projectItemElm);
  projectItemElm.style.backgroundColor = "black";

  // prep text to be legible with craaaazy backgrounds
  // document.body.style.color = "white";
  // for (textElm of textElms) {
  //   textElm.style.backgroundColor = "black";
  // }


  // make the font white

}



const NAMES = [
  "fran",
  "Fran Rojo"
  // "Francisco",
  // "Mo",
  // "blogzor",
  // "mojoz0",
  // "franrojo94",
  // "Franny",
  // "franathon",
  // "zar",
  // "/ˈfran/"
]
let curr_name = 0;

//header stuff

function onNameHover(elm) {
  const possible = NAMES.length;
  let new_name = Math.floor(Math.random() * possible);
  while (new_name == curr_name) {
    new_name = Math.floor(Math.random() * possible);
  }
  curr_name = new_name;


  elm.innerHTML = NAMES[new_name];
  const titleElm = document.getElementsByTagName("title")[0];
  titleElm.innerHTML = NAMES[new_name];
}

function onNameHoverLeave(elm) {

}

// BEGIN ABOUT
let selectElm;
let chillingElm;
let professionalElm;
function onContextChanged(elm) {
  if (elm.value == "chilling") {
    professionalElm.style.display = "none";
    chillingElm.style.display = "block";

  } else if (elm.value == "professional") {
    professionalElm.style.display = "block";
    chillingElm.style.display = "none";
  }
}
// END ABOUT

// filename_prefix is some hacky shit that i dont want to explain right now
// it has to do with subpages and directory structure
function init(filename_prefix) {
  if (filename_prefix) {
    ASSETS_DIR = filename_prefix + ASSETS_DIR
  }

  // every time someone visits this website, it's themed according
  // to one of four pre-chosen colors
  // AND
  // a certain "hover effect" is chosen
  applyNewBaseStyles()


  // BEGIN ABOUT
  const linkElms = document.getElementsByClassName("link");
  for (link of linkElms) {
    link.onmouseenter = onHoverEffect;
    link.onmouseleave = onLeaveHoverEffect;
  }

  selectElm = document.getElementsByTagName("select")[0];
  chillingElm = document.getElementById("chilling-about");
  professionalElm = document.getElementById("professional-about");
  // END ABOUT


}

