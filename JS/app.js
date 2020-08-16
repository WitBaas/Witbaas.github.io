// ^^^background changer^^^
var images = [
  '../img/land1.jpg',
  '../img/land2.jpg',
  '../img/land3.jpg',
  '../img/land4.jpg',
  '../img/land5.jpg',
];

var img = document.getElementById('bgimg');

function displayImage(x) {
  bgimg.style.backgroundImage = 'url(' + images[x] + ')';
  // bgimg.innerText = images[x];
}
function startTimer() {
  var x = 0;
  displayImage(x);
  setInterval(function () {
    x = x + 1 >= images.length ? 0 : x + 1;
    displayImage(x);
  }, 15000);
}
// ^^^background changer^^^

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  preloadImages: true,
  updateOnImagesReady: true,
  observer: true,
  observeParents: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    540: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    690: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    1150: {
      slidesPerView: 3,
      spaceBetween: 1,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    5000: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  loopedSlides: 50,
});

function Home() {
  document.getElementById('logo').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('Mallard').style.display = 'none';
  document.getElementById('Jackrabbit').style.display = 'none';
  document.getElementById('Coyote').style.display = 'none';
  document.getElementById('Blacktail').style.display = 'none';
  document.getElementById('Whitetail').style.display = 'none';
  document.getElementById('Black_Bear').style.display = 'none';
  document.getElementById('Roosevelt').style.display = 'none';
  document.getElementById('Moose').style.display = 'none';
  document.getElementById('CanadaGoose').style.display = 'none';
  document.getElementById('RedFox').style.display = 'none';
  document.getElementById('Roedeer').style.display = 'none';
  document.getElementById('FallowDeer').style.display = 'none';
  document.getElementById('WildBoar').style.display = 'none';
  document.getElementById('RedDeer').style.display = 'none';
  document.getElementById('EuropeanBison').style.display = 'none';
  document.getElementById('MuskDeer').style.display = 'none';
  document.getElementById('EurasianLynx').style.display = 'none';
  document.getElementById('WildBoarMT').style.display = 'none';
  document.getElementById('Reindeer').style.display = 'none';
  document.getElementById('EurasianBrownBear').style.display = 'none';
  document.getElementById('MooseMT').style.display = 'none';
  document.getElementById('ScrubHare').style.display = 'none';
  document.getElementById('SideStripedJackal').style.display = 'none';
  document.getElementById('Springbok').style.display = 'none';
  document.getElementById('Warthog').style.display = 'none';
  document.getElementById('LesserKudu').style.display = 'none';
  document.getElementById('BlueWildebeest').style.display = 'none';
  document.getElementById('Gemsbok').style.display = 'none';
  document.getElementById('CapeBuffalo').style.display = 'none';
  document.getElementById('Lion').style.display = 'none';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('CinnamonTeal').style.display = 'none';
  document.getElementById('Blackbuck').style.display = 'none';
  document.getElementById('AxisDeer').style.display = 'none';
  document.getElementById('Puma').style.display = 'none';
  document.getElementById('Puma').style.display = 'none';
  document.getElementById('MuleDeer').style.display = 'none';
  document.getElementById('RedDeerPF').style.display = 'none';
  document.getElementById('WaterBuffalo').style.display = 'none';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('HarlequinDuck').style.display = 'none';
  document.getElementById('RedFoxYV').style.display = 'none';
  document.getElementById('GrayWolf').style.display = 'none';
  document.getElementById('Caribou').style.display = 'none';
  document.getElementById('GrizzlyBear').style.display = 'none';
  document.getElementById('MooseYV').style.display = 'none';
  document.getElementById('PlainsBison').style.display = 'none';
  document.getElementById('EuropeanHare').style.display = 'none';
  document.getElementById('RoeDeerCC').style.display = 'none';
  document.getElementById('IberianMouflon').style.display = 'none';
  document.getElementById('RondaIbex').style.display = 'none';
  document.getElementById('BeceiteIbex').style.display = 'none';
  document.getElementById('GredosIbex').style.display = 'none';
  document.getElementById('SpanishIbex').style.display = 'none';
  document.getElementById('WildBoarCC').style.display = 'none';
  document.getElementById('IberianWolf').style.display = 'none';
  document.getElementById('RedDeerCC').style.display = 'none';
  document.getElementById('Turkey').style.display = 'none';
  document.getElementById('Pronghorn').style.display = 'none';
  document.getElementById('MountainGoat').style.display = 'none';
  document.getElementById('BighornSheep').style.display = 'none';
  document.getElementById('MountainLion').style.display = 'none';
  document.getElementById('MuleDeerSR').style.display = 'none';
  document.getElementById('BlackBearSR').style.display = 'none';
  document.getElementById('RockyMountainElk').style.display = 'none';
  document.getElementById('PlainsBisonSR').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
}

function maps_list() {
  document.getElementById('maps_list').style.display = 'block';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('Mallard').style.display = 'none';
  document.getElementById('Jackrabbit').style.display = 'none';
  document.getElementById('Coyote').style.display = 'none';
  document.getElementById('Blacktail').style.display = 'none';
  document.getElementById('Whitetail').style.display = 'none';
  document.getElementById('Black_Bear').style.display = 'none';
  document.getElementById('Roosevelt').style.display = 'none';
  document.getElementById('Moose').style.display = 'none';
  document.getElementById('CanadaGoose').style.display = 'none';
  document.getElementById('RedFox').style.display = 'none';
  document.getElementById('Roedeer').style.display = 'none';
  document.getElementById('FallowDeer').style.display = 'none';
  document.getElementById('WildBoar').style.display = 'none';
  document.getElementById('RedDeer').style.display = 'none';
  document.getElementById('EuropeanBison').style.display = 'none';
  document.getElementById('MuskDeer').style.display = 'none';
  document.getElementById('EurasianLynx').style.display = 'none';
  document.getElementById('WildBoarMT').style.display = 'none';
  document.getElementById('Reindeer').style.display = 'none';
  document.getElementById('EurasianBrownBear').style.display = 'none';
  document.getElementById('MooseMT').style.display = 'none';
  document.getElementById('ScrubHare').style.display = 'none';
  document.getElementById('SideStripedJackal').style.display = 'none';
  document.getElementById('Springbok').style.display = 'none';
  document.getElementById('Warthog').style.display = 'none';
  document.getElementById('LesserKudu').style.display = 'none';
  document.getElementById('BlueWildebeest').style.display = 'none';
  document.getElementById('Gemsbok').style.display = 'none';
  document.getElementById('CapeBuffalo').style.display = 'none';
  document.getElementById('Lion').style.display = 'none';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('CinnamonTeal').style.display = 'none';
  document.getElementById('Blackbuck').style.display = 'none';
  document.getElementById('AxisDeer').style.display = 'none';
  document.getElementById('Puma').style.display = 'none';
  document.getElementById('Puma').style.display = 'none';
  document.getElementById('MuleDeer').style.display = 'none';
  document.getElementById('RedDeerPF').style.display = 'none';
  document.getElementById('WaterBuffalo').style.display = 'none';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('HarlequinDuck').style.display = 'none';
  document.getElementById('RedFoxYV').style.display = 'none';
  document.getElementById('GrayWolf').style.display = 'none';
  document.getElementById('Caribou').style.display = 'none';
  document.getElementById('GrizzlyBear').style.display = 'none';
  document.getElementById('MooseYV').style.display = 'none';
  document.getElementById('PlainsBison').style.display = 'none';
  document.getElementById('EuropeanHare').style.display = 'none';
  document.getElementById('RoeDeerCC').style.display = 'none';
  document.getElementById('IberianMouflon').style.display = 'none';
  document.getElementById('RondaIbex').style.display = 'none';
  document.getElementById('BeceiteIbex').style.display = 'none';
  document.getElementById('GredosIbex').style.display = 'none';
  document.getElementById('SpanishIbex').style.display = 'none';
  document.getElementById('WildBoarCC').style.display = 'none';
  document.getElementById('IberianWolf').style.display = 'none';
  document.getElementById('RedDeerCC').style.display = 'none';
  document.getElementById('Turkey').style.display = 'none';
  document.getElementById('Pronghorn').style.display = 'none';
  document.getElementById('MountainGoat').style.display = 'none';
  document.getElementById('BighornSheep').style.display = 'none';
  document.getElementById('MountainLion').style.display = 'none';
  document.getElementById('MuleDeerSR').style.display = 'none';
  document.getElementById('BlackBearSR').style.display = 'none';
  document.getElementById('RockyMountainElk').style.display = 'none';
  document.getElementById('PlainsBisonSR').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
}

function Layton_info() {
  document.getElementById('animals_Layton').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('Jackrabbit').style.display = 'none';
  document.getElementById('Coyote').style.display = 'none';
  document.getElementById('Mallard').style.display = 'none';
  document.getElementById('Blacktail').style.display = 'none';
  document.getElementById('Whitetail').style.display = 'none';
  document.getElementById('Black_Bear').style.display = 'none';
  document.getElementById('Roosevelt').style.display = 'none';
  document.getElementById('Moose').style.display = 'none';
  document.getElementById('CanadaGoose').style.display = 'none';
  document.getElementById('RedFox').style.display = 'none';
  document.getElementById('Roedeer').style.display = 'none';
  document.getElementById('FallowDeer').style.display = 'none';
  document.getElementById('WildBoar').style.display = 'none';
  document.getElementById('RedDeer').style.display = 'none';
  document.getElementById('EuropeanBison').style.display = 'none';
  document.getElementById('MuskDeer').style.display = 'none';
  document.getElementById('EurasianLynx').style.display = 'none';
  document.getElementById('WildBoarMT').style.display = 'none';
  document.getElementById('Reindeer').style.display = 'none';
  document.getElementById('EurasianBrownBear').style.display = 'none';
  document.getElementById('MooseMT').style.display = 'none';
  document.getElementById('ScrubHare').style.display = 'none';
  document.getElementById('SideStripedJackal').style.display = 'none';
  document.getElementById('Springbok').style.display = 'none';
  document.getElementById('Warthog').style.display = 'none';
  document.getElementById('LesserKudu').style.display = 'none';
  document.getElementById('BlueWildebeest').style.display = 'none';
  document.getElementById('Gemsbok').style.display = 'none';
  document.getElementById('CapeBuffalo').style.display = 'none';
  document.getElementById('Lion').style.display = 'none';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('CinnamonTeal').style.display = 'none';
  document.getElementById('Blackbuck').style.display = 'none';
  document.getElementById('AxisDeer').style.display = 'none';
  document.getElementById('Puma').style.display = 'none';
  document.getElementById('Puma').style.display = 'none';
  document.getElementById('MuleDeer').style.display = 'none';
  document.getElementById('RedDeerPF').style.display = 'none';
  document.getElementById('WaterBuffalo').style.display = 'none';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('HarlequinDuck').style.display = 'none';
  document.getElementById('RedFoxYV').style.display = 'none';
  document.getElementById('GrayWolf').style.display = 'none';
  document.getElementById('Caribou').style.display = 'none';
  document.getElementById('GrizzlyBear').style.display = 'none';
  document.getElementById('MooseYV').style.display = 'none';
  document.getElementById('PlainsBison').style.display = 'none';
  document.getElementById('EuropeanHare').style.display = 'none';
  document.getElementById('RoeDeerCC').style.display = 'none';
  document.getElementById('IberianMouflon').style.display = 'none';
  document.getElementById('RondaIbex').style.display = 'none';
  document.getElementById('BeceiteIbex').style.display = 'none';
  document.getElementById('GredosIbex').style.display = 'none';
  document.getElementById('SpanishIbex').style.display = 'none';
  document.getElementById('WildBoarCC').style.display = 'none';
  document.getElementById('IberianWolf').style.display = 'none';
  document.getElementById('RedDeerCC').style.display = 'none';
  document.getElementById('Turkey').style.display = 'none';
  document.getElementById('Pronghorn').style.display = 'none';
  document.getElementById('MountainGoat').style.display = 'none';
  document.getElementById('BighornSheep').style.display = 'none';
  document.getElementById('MountainLion').style.display = 'none';
  document.getElementById('MuleDeerSR').style.display = 'none';
  document.getElementById('BlackBearSR').style.display = 'none';
  document.getElementById('RockyMountainElk').style.display = 'none';
  document.getElementById('PlainsBisonSR').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  swiper();
  // document.getElementById('animals_Hirschfelden').style.display = 'none';
}

function Hirschfelden_info() {
  document.getElementById('animals_Hirschfelden').style.display = 'block';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('Jackrabbit').style.display = 'none';
  document.getElementById('Coyote').style.display = 'none';
  document.getElementById('Blacktail').style.display = 'none';
  document.getElementById('Whitetail').style.display = 'none';
  document.getElementById('Black_Bear').style.display = 'none';
  document.getElementById('Roosevelt').style.display = 'none';
  document.getElementById('Moose').style.display = 'none';
  document.getElementById('CanadaGoose').style.display = 'none';
  document.getElementById('RedFox').style.display = 'none';
  document.getElementById('Roedeer').style.display = 'none';
  document.getElementById('FallowDeer').style.display = 'none';
  document.getElementById('WildBoar').style.display = 'none';
  document.getElementById('RedDeer').style.display = 'none';
  document.getElementById('EuropeanBison').style.display = 'none';
  document.getElementById('MuskDeer').style.display = 'none';
  document.getElementById('EurasianLynx').style.display = 'none';
  document.getElementById('WildBoarMT').style.display = 'none';
  document.getElementById('Reindeer').style.display = 'none';
  document.getElementById('EurasianBrownBear').style.display = 'none';
  document.getElementById('MooseMT').style.display = 'none';
  document.getElementById('ScrubHare').style.display = 'none';
  document.getElementById('SideStripedJackal').style.display = 'none';
  document.getElementById('Springbok').style.display = 'none';
  document.getElementById('Warthog').style.display = 'none';
  document.getElementById('LesserKudu').style.display = 'none';
  document.getElementById('BlueWildebeest').style.display = 'none';
  document.getElementById('Gemsbok').style.display = 'none';
  document.getElementById('CapeBuffalo').style.display = 'none';
  document.getElementById('Lion').style.display = 'none';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('CinnamonTeal').style.display = 'none';
  document.getElementById('Blackbuck').style.display = 'none';
  document.getElementById('AxisDeer').style.display = 'none';
  document.getElementById('Puma').style.display = 'none';
  document.getElementById('Puma').style.display = 'none';
  document.getElementById('MuleDeer').style.display = 'none';
  document.getElementById('RedDeerPF').style.display = 'none';
  document.getElementById('WaterBuffalo').style.display = 'none';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('HarlequinDuck').style.display = 'none';
  document.getElementById('RedFoxYV').style.display = 'none';
  document.getElementById('GrayWolf').style.display = 'none';
  document.getElementById('Caribou').style.display = 'none';
  document.getElementById('GrizzlyBear').style.display = 'none';
  document.getElementById('MooseYV').style.display = 'none';
  document.getElementById('PlainsBison').style.display = 'none';
  document.getElementById('EuropeanHare').style.display = 'none';
  document.getElementById('RoeDeerCC').style.display = 'none';
  document.getElementById('IberianMouflon').style.display = 'none';
  document.getElementById('RondaIbex').style.display = 'none';
  document.getElementById('BeceiteIbex').style.display = 'none';
  document.getElementById('GredosIbex').style.display = 'none';
  document.getElementById('SpanishIbex').style.display = 'none';
  document.getElementById('WildBoarCC').style.display = 'none';
  document.getElementById('IberianWolf').style.display = 'none';
  document.getElementById('RedDeerCC').style.display = 'none';
  document.getElementById('Turkey').style.display = 'none';
  document.getElementById('Pronghorn').style.display = 'none';
  document.getElementById('MountainGoat').style.display = 'none';
  document.getElementById('BighornSheep').style.display = 'none';
  document.getElementById('MountainLion').style.display = 'none';
  document.getElementById('MuleDeerSR').style.display = 'none';
  document.getElementById('BlackBearSR').style.display = 'none';
  document.getElementById('RockyMountainElk').style.display = 'none';
  document.getElementById('PlainsBisonSR').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
}
function MedvedTaiga_info() {
  document.getElementById('MedvedTaiga_info').style.display = 'block';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('Jackrabbit').style.display = 'none';
  document.getElementById('Coyote').style.display = 'none';
  document.getElementById('Blacktail').style.display = 'none';
  document.getElementById('Whitetail').style.display = 'none';
  document.getElementById('Black_Bear').style.display = 'none';
  document.getElementById('Roosevelt').style.display = 'none';
  document.getElementById('Moose').style.display = 'none';
  document.getElementById('CanadaGoose').style.display = 'none';
  document.getElementById('RedFox').style.display = 'none';
  document.getElementById('Roedeer').style.display = 'none';
  document.getElementById('FallowDeer').style.display = 'none';
  document.getElementById('WildBoar').style.display = 'none';
  document.getElementById('RedDeer').style.display = 'none';
  document.getElementById('EuropeanBison').style.display = 'none';
  document.getElementById('MuskDeer').style.display = 'none';
  document.getElementById('EurasianLynx').style.display = 'none';
  document.getElementById('WildBoarMT').style.display = 'none';
  document.getElementById('Reindeer').style.display = 'none';
  document.getElementById('EurasianBrownBear').style.display = 'none';
  document.getElementById('MooseMT').style.display = 'none';
  document.getElementById('ScrubHare').style.display = 'none';
  document.getElementById('SideStripedJackal').style.display = 'none';
  document.getElementById('Springbok').style.display = 'none';
  document.getElementById('Warthog').style.display = 'none';
  document.getElementById('LesserKudu').style.display = 'none';
  document.getElementById('BlueWildebeest').style.display = 'none';
  document.getElementById('Gemsbok').style.display = 'none';
  document.getElementById('CapeBuffalo').style.display = 'none';
  document.getElementById('Lion').style.display = 'none';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('CinnamonTeal').style.display = 'none';
  document.getElementById('Blackbuck').style.display = 'none';
  document.getElementById('AxisDeer').style.display = 'none';
  document.getElementById('Puma').style.display = 'none';
  document.getElementById('Puma').style.display = 'none';
  document.getElementById('MuleDeer').style.display = 'none';
  document.getElementById('RedDeerPF').style.display = 'none';
  document.getElementById('WaterBuffalo').style.display = 'none';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('HarlequinDuck').style.display = 'none';
  document.getElementById('RedFoxYV').style.display = 'none';
  document.getElementById('GrayWolf').style.display = 'none';
  document.getElementById('Caribou').style.display = 'none';
  document.getElementById('GrizzlyBear').style.display = 'none';
  document.getElementById('MooseYV').style.display = 'none';
  document.getElementById('PlainsBison').style.display = 'none';
  document.getElementById('EuropeanHare').style.display = 'none';
  document.getElementById('RoeDeerCC').style.display = 'none';
  document.getElementById('IberianMouflon').style.display = 'none';
  document.getElementById('RondaIbex').style.display = 'none';
  document.getElementById('BeceiteIbex').style.display = 'none';
  document.getElementById('GredosIbex').style.display = 'none';
  document.getElementById('SpanishIbex').style.display = 'none';
  document.getElementById('WildBoarCC').style.display = 'none';
  document.getElementById('IberianWolf').style.display = 'none';
  document.getElementById('RedDeerCC').style.display = 'none';
  document.getElementById('Turkey').style.display = 'none';
  document.getElementById('Pronghorn').style.display = 'none';
  document.getElementById('MountainGoat').style.display = 'none';
  document.getElementById('BighornSheep').style.display = 'none';
  document.getElementById('MountainLion').style.display = 'none';
  document.getElementById('MuleDeerSR').style.display = 'none';
  document.getElementById('BlackBearSR').style.display = 'none';
  document.getElementById('RockyMountainElk').style.display = 'none';
  document.getElementById('PlainsBisonSR').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
}
function Vurhonga_Savanna_info() {
  document.getElementById('VurhongaSavanna').style.display = 'block';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('Jackrabbit').style.display = 'none';
  document.getElementById('Coyote').style.display = 'none';
  document.getElementById('Blacktail').style.display = 'none';
  document.getElementById('Whitetail').style.display = 'none';
  document.getElementById('Black_Bear').style.display = 'none';
  document.getElementById('Roosevelt').style.display = 'none';
  document.getElementById('Moose').style.display = 'none';
  document.getElementById('CanadaGoose').style.display = 'none';
  document.getElementById('RedFox').style.display = 'none';
  document.getElementById('Roedeer').style.display = 'none';
  document.getElementById('FallowDeer').style.display = 'none';
  document.getElementById('WildBoar').style.display = 'none';
  document.getElementById('RedDeer').style.display = 'none';
  document.getElementById('EuropeanBison').style.display = 'none';
  document.getElementById('MuskDeer').style.display = 'none';
  document.getElementById('EurasianLynx').style.display = 'none';
  document.getElementById('WildBoarMT').style.display = 'none';
  document.getElementById('Reindeer').style.display = 'none';
  document.getElementById('EurasianBrownBear').style.display = 'none';
  document.getElementById('MooseMT').style.display = 'none';
  document.getElementById('ScrubHare').style.display = 'none';
  document.getElementById('SideStripedJackal').style.display = 'none';
  document.getElementById('Springbok').style.display = 'none';
  document.getElementById('Warthog').style.display = 'none';
  document.getElementById('LesserKudu').style.display = 'none';
  document.getElementById('BlueWildebeest').style.display = 'none';
  document.getElementById('Gemsbok').style.display = 'none';
  document.getElementById('CapeBuffalo').style.display = 'none';
  document.getElementById('Lion').style.display = 'none';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('CinnamonTeal').style.display = 'none';
  document.getElementById('Blackbuck').style.display = 'none';
  document.getElementById('AxisDeer').style.display = 'none';
  document.getElementById('Puma').style.display = 'none';
  document.getElementById('Puma').style.display = 'none';
  document.getElementById('MuleDeer').style.display = 'none';
  document.getElementById('RedDeerPF').style.display = 'none';
  document.getElementById('WaterBuffalo').style.display = 'none';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('HarlequinDuck').style.display = 'none';
  document.getElementById('RedFoxYV').style.display = 'none';
  document.getElementById('GrayWolf').style.display = 'none';
  document.getElementById('Caribou').style.display = 'none';
  document.getElementById('GrizzlyBear').style.display = 'none';
  document.getElementById('MooseYV').style.display = 'none';
  document.getElementById('PlainsBison').style.display = 'none';
  document.getElementById('EuropeanHare').style.display = 'none';
  document.getElementById('RoeDeerCC').style.display = 'none';
  document.getElementById('IberianMouflon').style.display = 'none';
  document.getElementById('RondaIbex').style.display = 'none';
  document.getElementById('BeceiteIbex').style.display = 'none';
  document.getElementById('GredosIbex').style.display = 'none';
  document.getElementById('SpanishIbex').style.display = 'none';
  document.getElementById('WildBoarCC').style.display = 'none';
  document.getElementById('IberianWolf').style.display = 'none';
  document.getElementById('RedDeerCC').style.display = 'none';
  document.getElementById('Turkey').style.display = 'none';
  document.getElementById('Pronghorn').style.display = 'none';
  document.getElementById('MountainGoat').style.display = 'none';
  document.getElementById('BighornSheep').style.display = 'none';
  document.getElementById('MountainLion').style.display = 'none';
  document.getElementById('MuleDeerSR').style.display = 'none';
  document.getElementById('BlackBearSR').style.display = 'none';
  document.getElementById('RockyMountainElk').style.display = 'none';
  document.getElementById('PlainsBisonSR').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
}
function Parque_Fernando_info() {
  document.getElementById('ParqueFernando').style.display = 'block';
  document.getElementById('VurhongaSavanna').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('Jackrabbit').style.display = 'none';
  document.getElementById('Coyote').style.display = 'none';
  document.getElementById('Blacktail').style.display = 'none';
  document.getElementById('Whitetail').style.display = 'none';
  document.getElementById('Black_Bear').style.display = 'none';
  document.getElementById('Roosevelt').style.display = 'none';
  document.getElementById('Moose').style.display = 'none';
  document.getElementById('CanadaGoose').style.display = 'none';
  document.getElementById('RedFox').style.display = 'none';
  document.getElementById('Roedeer').style.display = 'none';
  document.getElementById('FallowDeer').style.display = 'none';
  document.getElementById('WildBoar').style.display = 'none';
  document.getElementById('RedDeer').style.display = 'none';
  document.getElementById('EuropeanBison').style.display = 'none';
  document.getElementById('MuskDeer').style.display = 'none';
  document.getElementById('EurasianLynx').style.display = 'none';
  document.getElementById('WildBoarMT').style.display = 'none';
  document.getElementById('Reindeer').style.display = 'none';
  document.getElementById('EurasianBrownBear').style.display = 'none';
  document.getElementById('MooseMT').style.display = 'none';
  document.getElementById('ScrubHare').style.display = 'none';
  document.getElementById('SideStripedJackal').style.display = 'none';
  document.getElementById('Springbok').style.display = 'none';
  document.getElementById('Warthog').style.display = 'none';
  document.getElementById('LesserKudu').style.display = 'none';
  document.getElementById('BlueWildebeest').style.display = 'none';
  document.getElementById('Gemsbok').style.display = 'none';
  document.getElementById('CapeBuffalo').style.display = 'none';
  document.getElementById('Lion').style.display = 'none';
  document.getElementById('CinnamonTeal').style.display = 'none';
  document.getElementById('Blackbuck').style.display = 'none';
  document.getElementById('AxisDeer').style.display = 'none';
  document.getElementById('Puma').style.display = 'none';
  document.getElementById('Puma').style.display = 'none';
  document.getElementById('MuleDeer').style.display = 'none';
  document.getElementById('RedDeerPF').style.display = 'none';
  document.getElementById('WaterBuffalo').style.display = 'none';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('HarlequinDuck').style.display = 'none';
  document.getElementById('RedFoxYV').style.display = 'none';
  document.getElementById('GrayWolf').style.display = 'none';
  document.getElementById('Caribou').style.display = 'none';
  document.getElementById('GrizzlyBear').style.display = 'none';
  document.getElementById('MooseYV').style.display = 'none';
  document.getElementById('PlainsBison').style.display = 'none';
  document.getElementById('EuropeanHare').style.display = 'none';
  document.getElementById('RoeDeerCC').style.display = 'none';
  document.getElementById('IberianMouflon').style.display = 'none';
  document.getElementById('RondaIbex').style.display = 'none';
  document.getElementById('BeceiteIbex').style.display = 'none';
  document.getElementById('GredosIbex').style.display = 'none';
  document.getElementById('SpanishIbex').style.display = 'none';
  document.getElementById('WildBoarCC').style.display = 'none';
  document.getElementById('IberianWolf').style.display = 'none';
  document.getElementById('RedDeerCC').style.display = 'none';
  document.getElementById('Turkey').style.display = 'none';
  document.getElementById('Pronghorn').style.display = 'none';
  document.getElementById('MountainGoat').style.display = 'none';
  document.getElementById('BighornSheep').style.display = 'none';
  document.getElementById('MountainLion').style.display = 'none';
  document.getElementById('MuleDeerSR').style.display = 'none';
  document.getElementById('BlackBearSR').style.display = 'none';
  document.getElementById('RockyMountainElk').style.display = 'none';
  document.getElementById('PlainsBisonSR').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
}
function Yukon_Valley_info() {
  document.getElementById('Yukon_Valley_info').style.display = 'block';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('Jackrabbit').style.display = 'none';
  document.getElementById('Coyote').style.display = 'none';
  document.getElementById('Blacktail').style.display = 'none';
  document.getElementById('Whitetail').style.display = 'none';
  document.getElementById('Black_Bear').style.display = 'none';
  document.getElementById('Roosevelt').style.display = 'none';
  document.getElementById('Moose').style.display = 'none';
  document.getElementById('CanadaGoose').style.display = 'none';
  document.getElementById('RedFox').style.display = 'none';
  document.getElementById('Roedeer').style.display = 'none';
  document.getElementById('FallowDeer').style.display = 'none';
  document.getElementById('WildBoar').style.display = 'none';
  document.getElementById('RedDeer').style.display = 'none';
  document.getElementById('EuropeanBison').style.display = 'none';
  document.getElementById('MuskDeer').style.display = 'none';
  document.getElementById('EurasianLynx').style.display = 'none';
  document.getElementById('WildBoarMT').style.display = 'none';
  document.getElementById('Reindeer').style.display = 'none';
  document.getElementById('EurasianBrownBear').style.display = 'none';
  document.getElementById('MooseMT').style.display = 'none';
  document.getElementById('ScrubHare').style.display = 'none';
  document.getElementById('SideStripedJackal').style.display = 'none';
  document.getElementById('Springbok').style.display = 'none';
  document.getElementById('Warthog').style.display = 'none';
  document.getElementById('LesserKudu').style.display = 'none';
  document.getElementById('BlueWildebeest').style.display = 'none';
  document.getElementById('Gemsbok').style.display = 'none';
  document.getElementById('CapeBuffalo').style.display = 'none';
  document.getElementById('Lion').style.display = 'none';
  document.getElementById('CinnamonTeal').style.display = 'none';
  document.getElementById('Blackbuck').style.display = 'none';
  document.getElementById('AxisDeer').style.display = 'none';
  document.getElementById('Puma').style.display = 'none';
  document.getElementById('Puma').style.display = 'none';
  document.getElementById('MuleDeer').style.display = 'none';
  document.getElementById('RedDeerPF').style.display = 'none';
  document.getElementById('WaterBuffalo').style.display = 'none';
  document.getElementById('HarlequinDuck').style.display = 'none';
  document.getElementById('RedFoxYV').style.display = 'none';
  document.getElementById('GrayWolf').style.display = 'none';
  document.getElementById('Caribou').style.display = 'none';
  document.getElementById('GrizzlyBear').style.display = 'none';
  document.getElementById('MooseYV').style.display = 'none';
  document.getElementById('PlainsBison').style.display = 'none';
  document.getElementById('EuropeanHare').style.display = 'none';
  document.getElementById('RoeDeerCC').style.display = 'none';
  document.getElementById('IberianMouflon').style.display = 'none';
  document.getElementById('RondaIbex').style.display = 'none';
  document.getElementById('BeceiteIbex').style.display = 'none';
  document.getElementById('GredosIbex').style.display = 'none';
  document.getElementById('SpanishIbex').style.display = 'none';
  document.getElementById('WildBoarCC').style.display = 'none';
  document.getElementById('IberianWolf').style.display = 'none';
  document.getElementById('RedDeerCC').style.display = 'none';
  document.getElementById('Turkey').style.display = 'none';
  document.getElementById('Pronghorn').style.display = 'none';
  document.getElementById('MountainGoat').style.display = 'none';
  document.getElementById('BighornSheep').style.display = 'none';
  document.getElementById('MountainLion').style.display = 'none';
  document.getElementById('MuleDeerSR').style.display = 'none';
  document.getElementById('BlackBearSR').style.display = 'none';
  document.getElementById('RockyMountainElk').style.display = 'none';
  document.getElementById('PlainsBisonSR').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
}
function Cuatro_Colinas_info() {
  document.getElementById('CuatroColinas').style.display = 'block';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('Jackrabbit').style.display = 'none';
  document.getElementById('Coyote').style.display = 'none';
  document.getElementById('Blacktail').style.display = 'none';
  document.getElementById('Whitetail').style.display = 'none';
  document.getElementById('Black_Bear').style.display = 'none';
  document.getElementById('Roosevelt').style.display = 'none';
  document.getElementById('Moose').style.display = 'none';
  document.getElementById('CanadaGoose').style.display = 'none';
  document.getElementById('RedFox').style.display = 'none';
  document.getElementById('Roedeer').style.display = 'none';
  document.getElementById('FallowDeer').style.display = 'none';
  document.getElementById('WildBoar').style.display = 'none';
  document.getElementById('RedDeer').style.display = 'none';
  document.getElementById('EuropeanBison').style.display = 'none';
  document.getElementById('MuskDeer').style.display = 'none';
  document.getElementById('EurasianLynx').style.display = 'none';
  document.getElementById('WildBoarMT').style.display = 'none';
  document.getElementById('Reindeer').style.display = 'none';
  document.getElementById('EurasianBrownBear').style.display = 'none';
  document.getElementById('MooseMT').style.display = 'none';
  document.getElementById('ScrubHare').style.display = 'none';
  document.getElementById('SideStripedJackal').style.display = 'none';
  document.getElementById('Springbok').style.display = 'none';
  document.getElementById('Warthog').style.display = 'none';
  document.getElementById('LesserKudu').style.display = 'none';
  document.getElementById('BlueWildebeest').style.display = 'none';
  document.getElementById('Gemsbok').style.display = 'none';
  document.getElementById('CapeBuffalo').style.display = 'none';
  document.getElementById('Lion').style.display = 'none';
  document.getElementById('CinnamonTeal').style.display = 'none';
  document.getElementById('Blackbuck').style.display = 'none';
  document.getElementById('AxisDeer').style.display = 'none';
  document.getElementById('Puma').style.display = 'none';
  document.getElementById('Puma').style.display = 'none';
  document.getElementById('MuleDeer').style.display = 'none';
  document.getElementById('RedDeerPF').style.display = 'none';
  document.getElementById('WaterBuffalo').style.display = 'none';
  document.getElementById('HarlequinDuck').style.display = 'none';
  document.getElementById('RedFoxYV').style.display = 'none';
  document.getElementById('GrayWolf').style.display = 'none';
  document.getElementById('Caribou').style.display = 'none';
  document.getElementById('GrizzlyBear').style.display = 'none';
  document.getElementById('MooseYV').style.display = 'none';
  document.getElementById('PlainsBison').style.display = 'none';
  document.getElementById('EuropeanHare').style.display = 'none';
  document.getElementById('RoeDeerCC').style.display = 'none';
  document.getElementById('IberianMouflon').style.display = 'none';
  document.getElementById('RondaIbex').style.display = 'none';
  document.getElementById('BeceiteIbex').style.display = 'none';
  document.getElementById('GredosIbex').style.display = 'none';
  document.getElementById('SpanishIbex').style.display = 'none';
  document.getElementById('WildBoarCC').style.display = 'none';
  document.getElementById('IberianWolf').style.display = 'none';
  document.getElementById('RedDeerCC').style.display = 'none';
  document.getElementById('Turkey').style.display = 'none';
  document.getElementById('Pronghorn').style.display = 'none';
  document.getElementById('MountainGoat').style.display = 'none';
  document.getElementById('BighornSheep').style.display = 'none';
  document.getElementById('MountainLion').style.display = 'none';
  document.getElementById('MuleDeerSR').style.display = 'none';
  document.getElementById('BlackBearSR').style.display = 'none';
  document.getElementById('RockyMountainElk').style.display = 'none';
  document.getElementById('PlainsBisonSR').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
}
function Silver_Ridge_Peaks_info() {
  document.getElementById('SilverRidgePeaks_info').style.display = 'block';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('Jackrabbit').style.display = 'none';
  document.getElementById('Coyote').style.display = 'none';
  document.getElementById('Blacktail').style.display = 'none';
  document.getElementById('Whitetail').style.display = 'none';
  document.getElementById('Black_Bear').style.display = 'none';
  document.getElementById('Roosevelt').style.display = 'none';
  document.getElementById('Moose').style.display = 'none';
  document.getElementById('CanadaGoose').style.display = 'none';
  document.getElementById('RedFox').style.display = 'none';
  document.getElementById('Roedeer').style.display = 'none';
  document.getElementById('FallowDeer').style.display = 'none';
  document.getElementById('WildBoar').style.display = 'none';
  document.getElementById('RedDeer').style.display = 'none';
  document.getElementById('EuropeanBison').style.display = 'none';
  document.getElementById('MuskDeer').style.display = 'none';
  document.getElementById('EurasianLynx').style.display = 'none';
  document.getElementById('WildBoarMT').style.display = 'none';
  document.getElementById('Reindeer').style.display = 'none';
  document.getElementById('EurasianBrownBear').style.display = 'none';
  document.getElementById('MooseMT').style.display = 'none';
  document.getElementById('ScrubHare').style.display = 'none';
  document.getElementById('SideStripedJackal').style.display = 'none';
  document.getElementById('Springbok').style.display = 'none';
  document.getElementById('Warthog').style.display = 'none';
  document.getElementById('LesserKudu').style.display = 'none';
  document.getElementById('BlueWildebeest').style.display = 'none';
  document.getElementById('Gemsbok').style.display = 'none';
  document.getElementById('CapeBuffalo').style.display = 'none';
  document.getElementById('Lion').style.display = 'none';
  document.getElementById('CinnamonTeal').style.display = 'none';
  document.getElementById('Blackbuck').style.display = 'none';
  document.getElementById('AxisDeer').style.display = 'none';
  document.getElementById('Puma').style.display = 'none';
  document.getElementById('Puma').style.display = 'none';
  document.getElementById('MuleDeer').style.display = 'none';
  document.getElementById('RedDeerPF').style.display = 'none';
  document.getElementById('WaterBuffalo').style.display = 'none';
  document.getElementById('HarlequinDuck').style.display = 'none';
  document.getElementById('RedFoxYV').style.display = 'none';
  document.getElementById('GrayWolf').style.display = 'none';
  document.getElementById('Caribou').style.display = 'none';
  document.getElementById('GrizzlyBear').style.display = 'none';
  document.getElementById('MooseYV').style.display = 'none';
  document.getElementById('PlainsBison').style.display = 'none';
  document.getElementById('EuropeanHare').style.display = 'none';
  document.getElementById('RoeDeerCC').style.display = 'none';
  document.getElementById('IberianMouflon').style.display = 'none';
  document.getElementById('RondaIbex').style.display = 'none';
  document.getElementById('BeceiteIbex').style.display = 'none';
  document.getElementById('GredosIbex').style.display = 'none';
  document.getElementById('SpanishIbex').style.display = 'none';
  document.getElementById('WildBoarCC').style.display = 'none';
  document.getElementById('IberianWolf').style.display = 'none';
  document.getElementById('RedDeerCC').style.display = 'none';
  document.getElementById('Turkey').style.display = 'none';
  document.getElementById('Pronghorn').style.display = 'none';
  document.getElementById('MountainGoat').style.display = 'none';
  document.getElementById('BighornSheep').style.display = 'none';
  document.getElementById('MountainLion').style.display = 'none';
  document.getElementById('MuleDeerSR').style.display = 'none';
  document.getElementById('BlackBearSR').style.display = 'none';
  document.getElementById('RockyMountainElk').style.display = 'none';
  document.getElementById('PlainsBisonSR').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
}
function Mallard_animal() {
  document.getElementById('Mallard').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
}
function Jackrabbit_animal() {
  document.getElementById('Jackrabbit').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
}
function Coyote_animal() {
  document.getElementById('Coyote').style.display = 'block';
  document.getElementById('Jackrabbit').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
}
function Blacktail_info() {
  document.getElementById('Blacktail').style.display = 'block';
  document.getElementById('Coyote').style.display = 'none';
  document.getElementById('Jackrabbit').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
}
function Whitetail_info() {
  document.getElementById('Whitetail').style.display = 'block';
  document.getElementById('Coyote').style.display = 'none';
  document.getElementById('Jackrabbit').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
}
function BlackBear_info() {
  document.getElementById('Black_Bear').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
}
function RooseveltElk_info() {
  document.getElementById('Roosevelt').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
}
function Moose_info() {
  document.getElementById('Moose').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
}
function CanadaGoose_info() {
  document.getElementById('CanadaGoose').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
}
function RedFox_info() {
  document.getElementById('RedFox').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
}
function Roedeer_info() {
  document.getElementById('Roedeer').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
}
function FallowDeer_info() {
  document.getElementById('FallowDeer').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
}
function WildBoar_info() {
  document.getElementById('WildBoar').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
}
function RedDeer_info() {
  document.getElementById('RedDeer').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
}
function EuropeanBison_info() {
  document.getElementById('EuropeanBison').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
}
function MuskDeer_info() {
  document.getElementById('MuskDeer').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
}
function EurasianLynx_info() {
  document.getElementById('EurasianLynx').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
}
function WildBoarMT_info() {
  document.getElementById('WildBoarMT').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
}
function Reindeer_info() {
  document.getElementById('Reindeer').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
}
function EurasianBrownBear_info() {
  document.getElementById('EurasianBrownBear').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
}
function MooseMT_info() {
  document.getElementById('MooseMT').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
}
// Savana map
function ScrubHare_info() {
  document.getElementById('ScrubHare').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
}
function SideStripedJackal_info() {
  document.getElementById('SideStripedJackal').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
}
function Springbok_info() {
  document.getElementById('Springbok').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
}
function Warthog_info() {
  document.getElementById('Warthog').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
}
function LesserKudu_info() {
  document.getElementById('LesserKudu').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
}
function BlueWildebeest_info() {
  document.getElementById('BlueWildebeest').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
}
function Gemsbok_info() {
  document.getElementById('Gemsbok').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
}
function CapeBuffalo_info() {
  document.getElementById('CapeBuffalo').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
}
function Lion_info() {
  document.getElementById('Lion').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  // document.getElementById('animals_Layton').style.display = 'none';
  // document.getElementById('animals_Hirschfelden').style.display = 'none';
  // document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
}
// Parque Fernando
function CinnamonTeal_info() {
  document.getElementById('CinnamonTeal').style.display = 'block';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function Blackbuck_info() {
  document.getElementById('Blackbuck').style.display = 'block';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function AxisDeer_info() {
  document.getElementById('AxisDeer').style.display = 'block';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function Puma_info() {
  document.getElementById('Puma').style.display = 'block';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function MuleDeer_info() {
  document.getElementById('MuleDeer').style.display = 'block';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function RedDeerPF_info() {
  document.getElementById('RedDeerPF').style.display = 'block';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function WaterBuffalo_info() {
  document.getElementById('WaterBuffalo').style.display = 'block';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
// Yukon_Valley
function HarlequinDuck_info() {
  document.getElementById('HarlequinDuck').style.display = 'block';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function RedFoxYV_info() {
  document.getElementById('RedFoxYV').style.display = 'block';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function GrayWolf_info() {
  document.getElementById('GrayWolf').style.display = 'block';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function Caribou_info() {
  document.getElementById('Caribou').style.display = 'block';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function GrizzlyBear_info() {
  document.getElementById('GrizzlyBear').style.display = 'block';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function MooseYV_info() {
  document.getElementById('MooseYV').style.display = 'block';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function PlainsBison_info() {
  document.getElementById('PlainsBison').style.display = 'block';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
// Cuatro Colinas animals
function EuropeanHare_info() {
  document.getElementById('EuropeanHare').style.display = 'block';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function RoeDeerCC_info() {
  document.getElementById('RoeDeerCC').style.display = 'block';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function IberianMouflon_info() {
  document.getElementById('IberianMouflon').style.display = 'block';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function RondaIbex_info() {
  document.getElementById('RondaIbex').style.display = 'block';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function BeceiteIbex_info() {
  document.getElementById('BeceiteIbex').style.display = 'block';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function GredosIbex_info() {
  document.getElementById('GredosIbex').style.display = 'block';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function SpanishIbex_info() {
  document.getElementById('SpanishIbex').style.display = 'block';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function WildboarCC_info() {
  document.getElementById('WildBoarCC').style.display = 'block';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function IberianWolf_info() {
  document.getElementById('IberianWolf').style.display = 'block';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function RedDeerCC_info() {
  document.getElementById('RedDeerCC').style.display = 'block';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
// SilverRidgePeaks_info
function Turkey_info() {
  document.getElementById('Turkey').style.display = 'block';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function Pronghorn_info() {
  document.getElementById('Pronghorn').style.display = 'block';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function MountainGoat_info() {
  document.getElementById('MountainGoat').style.display = 'block';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function BighornSheep_info() {
  document.getElementById('BighornSheep').style.display = 'block';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function MountainLion_info() {
  document.getElementById('MountainLion').style.display = 'block';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function MuleDeerSR_info() {
  document.getElementById('MuleDeerSR').style.display = 'block';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function BlackBearSR_info() {
  document.getElementById('BlackBearSR').style.display = 'block';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function RockyMountainElk_info() {
  document.getElementById('RockyMountainElk').style.display = 'block';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function PlainsBisonSR_info() {
  document.getElementById('PlainsBisonSR').style.display = 'block';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
function nfo() {
  document.getElementById('Puma').style.display = 'block';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
}
