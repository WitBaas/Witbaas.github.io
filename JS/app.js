
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
  bgimg.innerText = images[x];
}

function startTimer() {
  var x = 0;
  displayImage(x);
  setInterval(function () {
    x = x + 1 >= images.length ? 0 : x + 1;
    displayImage(x);
  }, 15000);
}

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

let Mallard = {
  Diamond0Requirements: { MaxRank: 3, Weight: '4.32 lbs', Trophyscore: 1.96 },
  Need0Zone0Times: {
    Resting: '00.00-00.00',
    Feeding: '00.00-00.00',
    Drinking: '00.00-00.00',
  },
  Recommended0Weapon0Class: 1,
  Behaviour: 'Vocal and social',
  Senses: 'Very good hearing, okay sense of vision, poor sense of smell',
  Active: 'Unknown',
  Difficulty: '1 (Trivial) - 3 (Very Easy)',
  Caller: 'Beacon Deluxe Duck Caller',
  Fur0Types: 'Common, Piebald, Blonde, Brown Hybrid, Melanistic, Leucistic',
  Trophy0score: {
    Trophy0type: 'Weight',
    Trophy0score: 'Silver:9.9 | Gold:15.4 | Diamond:19.6',
  },
  img: 'img/banner/MALLARD.png',
  animalmapvale: 'img/Laytonlake.jpg',
};
let Jackrabbit = {
  Diamond0Requirements: { MaxRank: 3, Weight: '19.97 lbs', Trophyscore: 6.34 },
  Need0Zone0Times: {
    Resting: '0:00-5.30 / 14:00-16:30',
    Feeding: '5:00-11.30 / 16:00-22:30',
    Drinking: '11:00-14:30 / 22:00-0:30',
  },
  Recommended0Weapon0Class: 1,
  Behaviour: 'Docile and somewhat skittish',
  Senses: 'Very good hearing and vision',
  Active: 'During dawn, late afternoon and dusk',
  Difficulty: '1 (Trivial) - 3 (Very Easy)',
  Caller: 'None',
  Fur0Types: 'Common, Grey, Light Brown, Brown, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Weight',
    Trophy0score: 'Silver:2.8 | Gold:4.8 | Diamond:6.3',
  },
  img: 'img/banner/jackRABBIT.png',
  animalmapvale: 'img/Laytonlake.jpg',
};
let Coyote = {
  Diamond0Requirements: { MaxRank: 9, Weight: '21 kg', Trophyscore: 56.88 },
  Need0Zone0Times: {
    Resting: '7:00-19:30',
    Feeding: '3:00-7.30',
    Drinking: '00:30-03:30',
  },
  Recommended0Weapon0Class: 2,
  Behaviour: 'Skittish',
  Senses: 'Excellent vision and a very good sense of smell',
  Active: 'During night',
  Difficulty: '1 (Trivial) - 9 (Legendary)',
  Caller: 'Predator "Jackrabbit" Caller',
  Fur0Types: 'Common, Piebald, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Weight',
    Trophy0score: 'Silver: 38.4 | Gold:48.9 | Diamond: 56.8',
  },
  img: 'img/banner/COYOTE.png',
  animalmapvale: 'img/Laytonlake.jpg',
};
let BlacktailDeer = {
  Diamond0Requirements: { MaxRank: 5, Weight: '179.3 lbs', Trophyscore: 189 },
  Need0Zone0Times: {
    Resting: '0:00-5:30 / 9:00-13:00 / 21:00-0:30',
    Feeding: '13:00-17.30',
    Drinking: '5:00-09:30 / 17:00-21:30',
  },
  Recommended0Weapon0Class: 4,
  Behaviour: 'Docile and somewhat skittish',
  Senses: 'Excellent sense of smell and hearing',
  Active: 'During dawn, dusk and night',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'Deer "Bleat" Caller, Deer "Grunt" Caller, Blacktail Deer Scent',
  Fur0Types: 'Common, Piebald, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Antlers',
    Trophy0score: 'Silver:76.90 | Gold:134.4 | Diamond:177.50',
  },
  img: 'img/banner/BLACKTAIL.png',
  animalmapvale: 'img/Laytonlake.jpg',
};
let WhitetailDeer = {
  Diamond0Requirements: { MaxRank: 3, Weight: '217.4 lbs', Trophyscore: 191.7 },
  Need0Zone0Times: {
    Resting: '0:00-5:30 / 9:00-12:30 / 21:00-0:30',
    Feeding: '5:00-9.30 / 15:00-21:30',
    Drinking: '12:00-15:30',
  },
  Recommended0Weapon0Class: 4,
  Behaviour: 'Docile and somewhat skittish',
  Senses: 'Excellent sense of smell',
  Active: 'During dawn, late afternoon and dusk',
  Difficulty: '1 (Trivial) - 3 (Very Easy) and 10 (Fabled)',
  Caller: 'Deer "Bleat" Caller, Deer "Grunt" Caller, Whitetail Scent',
  Fur0Types: 'Common, Piebald, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Antlers',
    Trophy0score: 'Silver:111 | Gold:206 | Diamond:277',
  },
  img: 'img/banner/WHITETAIL.png',
  animalmapvale: 'img/Laytonlake.jpg',
};
let BlackBear = {
  Diamond0Requirements: { MaxRank: 9, Weight: '584.23 lbs', Trophyscore: 22.8 },
  Need0Zone0Times: {
    Resting: '7:00-19:30',
    Feeding: '0:00-7:30',
    Drinking: '19:00-0:30',
  },
  Recommended0Weapon0Class: 7,
  Behaviour: 'Skittish and defensive',
  Senses: 'Skittish and defensive',
  Active: 'During night',
  Difficulty: '1 (Trivial) - 9 (Legendary)',
  Caller: 'Predator "Distressed Fawn" Caller',
  Fur0Types: 'Common, Blond, Brown, Cinnamon',
  Trophy0score: {
    Trophy0type: 'Skull',
    Trophy0score: 'Silver:14.4 | Gold:19.2 | Diamond:22.8',
  },
  img: 'img/banner/BLACKBEAR.png',
  animalmapvale: 'img/Laytonlake.jpg',
};
let RooseveltElk = {
  Diamond0Requirements: {
    MaxRank: 5,
    Weight: '1053.81 lbs',
    Trophyscore: 363.6,
  },
  Need0Zone0Times: {
    Resting: '13:00-17:30 / 21:00-0:30',
    Feeding: '0:00-5:30 / 9:00-13:30',
    Drinking: '5:00-9:30 / 17:00-21:30',
  },
  Recommended0Weapon0Class: 8,
  Behaviour: 'Docile and vocal',
  Senses:
    'Highly tuned senses in general, particularly excellent hearing and smell',
  Active: 'During dawn and dusk',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'Elk Caller | Elk Scent',
  Fur0Types: 'Common, Piebald, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Antlers',
    Trophy0score: 'Silver:128.7 | Gold:272.8 | Diamond:380.8',
  },
  img: 'img/banner/RoseVeltELK.png',
  animalmapvale: 'img/Laytonlake.jpg',
};
let Moose = {
  Diamond0Requirements: { MaxRank: 5, Weight: '1300.7', Trophyscore: 486.12 },
  Need0Zone0Times: {
    Resting: '0:00-5:30 / 13:00-17:30 / 21:00-0:30',
    Feeding: '5:00-9:30 / 17:00-21:30',
    Drinking: '9:00-13:30',
  },
  Recommended0Weapon0Class: 8,
  Behaviour: 'Docile, but easily defensive',
  Senses: 'Great sense of smell and good hearing',
  Active: 'During dusk and dawn',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'Moose Caller | Moose Scent',
  Fur0Types: 'Common, Piebald, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Antlers',
    Trophy0score: 'Silver: 40.5 | Gold: 68.4 | Diamond: 89.3',
  },
  img: 'img/banner/moose.png',
  animalmapvale: 'img/Laytonlake.jpg',
};

//   Hersfelden animals
let CanadaGoose = {
  Diamond0Requirements: { MaxRank: 5, Weight: '11.96 lbs', Trophyscore: 8.6 },
  Need0Zone0Times: {
    Resting: '0:00-0:00',
    Feeding: '0:00-0:00',
    Drinking: '0:00-0:00',
  },
  Recommended0Weapon0Class: 1,
  Behaviour: 'Easily agitated and generally vocal',
  Senses:
    'Highly social throughout the year, breeding geese form monogamous lifelong pairings',
  Active: 'From dawn to early evening',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'Short Reed Canada Goose Caller | Canada Goose Decoys',
  Fur0Types:
    'Common, Grey, Light Grey, Bald Hybrid, Brown Hybrid, Leucistic, Light Grey Leucistic, Bald Leucistic, Melanistic',
  Trophy0score: {
    Trophy0type: 'Weight',
    Trophy0score: 'Silver: 4.4 | Gold: 6.8 | Diamond: 8.6',
  },
  img: 'img/banner/canadaGOOSE.png',
  animalmapvale: 'img/Hirschfelden map.png',
};

let RedFox = {
  Diamond0Requirements: { MaxRank: 9, Weight: '31 lbs', Trophyscore: 14.1 },
  Need0Zone0Times: {
    Resting: '7:00-11:30 / 11:00-15:30 / 15:00-19:30',
    Feeding: '0:00-3:30 / 3:00-7:30',
    Drinking: '19:00-0:30',
  },
  Recommended0Weapon0Class: 2,
  Behaviour: 'Docile and skittish',
  Senses: 'Excellent vision and very good hearing',
  Active: 'During dawn and dusk',
  Difficulty: '1 (Trivial) - 9 (Legendary)',
  Caller: 'Predator "Jackrabbit" Caller',
  Fur0Types: 'Common, Piebald, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Weight',
    Trophy0score: 'Silver: 4.7 | Gold:10.0 | Diamond: 14.1',
  },
  img: 'img/banner/REDFOX.png',
  animalmapvale: 'img/Hirschfelden map.png',
};
let RoeDeer = {
  Diamond0Requirements: { MaxRank: 3, Weight: '72.75 lbs', Trophyscore: 89.3 },
  Need0Zone0Times: {
    Resting: '0:00-5:30 | 9:00-11:30 | 21:00-0:30',
    Feeding: '5:00-9:30 | 17:00-21:30',
    Drinking: '13:00-17:30',
  },
  Recommended0Weapon0Class: 3,
  Behaviour: 'Skittish and vocal when alarmed',
  Senses: 'Very good hearing and sense of smell',
  Active: 'During dawn and dusk',
  Difficulty: '1 (Trivial) - 3 (Very Easy)',
  Caller: 'Roe Deer Caller | Roe Deer Scent',
  Fur0Types: 'Common, Piebald, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Antlers',
    Trophy0score: 'Silver: 40.5 | Gold: 68.4 | Diamond: 89.3',
  },
  img: 'img/banner/ROEdeer.png',
  animalmapvale: 'img/Hirschfelden map.png',
};
let FallowDeer = {
  Diamond0Requirements: { MaxRank: 5, Weight: '220 lbs', Trophyscore: 251.7 },
  Need0Zone0Times: {
    Resting: '0:00-5:30 | 13:00-17:30 | 21:30-0:30',
    Feeding: '5:00-9:30 | 17:00-21:30',
    Drinking: '9:00-13:30',
  },
  Recommended0Weapon0Class: 4,
  Behaviour: 'Docile and generally vocal',
  Senses: 'Good senses overall, particularly excellent vision',
  Active: 'During dusk and dawn',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'Antler Rattler',
  Fur0Types: 'Common | Piebald | Albino | Melanistic',
  Trophy0score: {
    Trophy0type: 'Antlers',
    Trophy0score: 'Silver:68 | Gold:173 | Diamond:251.7',
  },
  img: 'img/banner/FALLOWDeer.png',
  animalmapvale: 'img/Hirschfelden map.png',
};
let WildBoar = {
  Diamond0Requirements: { MaxRank: 5, Weight: '481.7 lbs', Trophyscore: 143.8 },
  Need0Zone0Times: {
    Resting: '7:00-11:30 | 11:00-15:30 | 15:00-19:30',
    Feeding: '3:00-7:30 | 19:00-23:30',
    Drinking: '23:00-3:30',
  },
  Recommended0Weapon0Class: 4,
  Behaviour: 'Easily agitated and aggressive',
  Senses: 'Excellent hearing and sense of smell',
  Active: 'During late evening and early morning',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'Wild Boar Caller | Wild Boar Scent',
  Fur0Types: 'Common | Blackgold | Albino | Melanistic',
  Trophy0score: {
    Trophy0type: 'Tusks',
    Trophy0score: 'Silver:37.5 | Gold:98.5 | Diamond:144.2',
  },
  img: 'img/banner/WILDBOAR.png',
  animalmapvale: 'img/Hirschfelden map.png',
};
let RedDeer = {
  Diamond0Requirements: { MaxRank: 9, Weight: '511.47 lbs', Trophyscore: 251 },
  Need0Zone0Times: {
    Resting: '1:00-5:30 | 9:00-13:30 | 21:30-1:30',
    Feeding: '13:00-17:30',
    Drinking: '5:00-9:30 | 17:00-21:30',
  },
  Recommended0Weapon0Class: 6,
  Behaviour: 'Docile and not aggressive',
  Senses: 'Very good sense of smell',
  Active: 'During dawn and dusk',
  Difficulty: '1 (Trivial) - 9 (Legendary)',
  Caller: 'Red Deer Caller | Red Deer Scent',
  Fur0Types: 'Common | Piebald | Albino | Melanistic',
  Trophy0score: {
    Trophy0type: 'Antlers',
    Trophy0score: 'Silver:90.50 | Gold:182.20 | Diamond:251',
  },
  img: 'img/banner/REDDEER.png',
  animalmapvale: 'img/Hirschfelden map.png',
};
let EuropeanBison = {
  Diamond0Requirements: {
    MaxRank: 5,
    Weight: '1931.61 lbs',
    Trophyscore: 270.4,
  },
  Need0Zone0Times: {
    Resting: '7:00-11:30 <b>|</b> 11:00-15:30 <b>|</b> 15:00-19:30',
    Feeding: '0:00-3:30 <b>|</b> 19:00-23:30',
    Drinking: '3:00-7:30',
  },
  Recommended0Weapon0Class: 9,
  Behaviour: 'Aggressive at close range',
  Senses: 'Very good sense of smell',
  Active: 'During Dusk and Night',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'None...',
  Fur0Types: 'Common <b>|</b> Piebald <b>|</b> Albino <b>|</b> Melanistic',
  Trophy0score: {
    Trophy0type: 'Horns',
    Trophy0score: 'Silver:53.2 <b>|</b> Gold:148.9 <b>|</b> Diamond:270.4',
  },
  img: 'img/banner/EUROBISON.png',
  animalmapvale: 'img/Hirschfelden map.png',
};
//   ^^^^^^^^Medved Taiga National Park
let MuskDeer = {
  Diamond0Requirements: { MaxRank: 3, Weight: '35.27 lbs', Trophyscore: 249 },
  Need0Zone0Times: {
    Resting: '0:00-3:30 / 7:00-11:30 / 15:00-19:30',
    Feeding: '11:00-15:30 / 19:00-23:30',
    Drinking: '3:00-7:30',
  },
  Recommended0Weapon0Class: 2,
  Behaviour: 'Docile and somewhat skittish',
  Senses: 'Excellent hearing and good sense of smell',
  Active: 'During dusk and dawn',
  Difficulty: '1 (Trivial) - 3 (Very Easy)',
  Caller: 'Only Musk Deer Scent',
  Fur0Types: 'Common, Piebald, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Fangs',
    Trophy0score: 'Silver:60 | Gold:168 | Diamond:249',
  },
  img: 'img/banner/MUSKdeer.png',
  animalmapvale: 'img/Medved Taiga National Park.jpg',
};
let EurasianLynx = {
  Diamond0Requirements: { MaxRank: 9, Weight: '91.05 lbs', Trophyscore: 27.7 },
  Need0Zone0Times: {
    Resting: '7:00-11:30 / 11:00–15:30 / 15:00–19:30',
    Feeding: '00:00–7:30',
    Drinking: '19:00–23:30',
  },
  Recommended0Weapon0Class: 3,
  Behaviour: 'Skittish, elusive',
  Senses: 'Good hearing and excellent vision',
  Active: 'During night',
  Difficulty: '1 (Trivial) - 9 (Legendary)',
  Caller: 'Predator "Jackrabbit" Caller',
  Fur0Types: 'Common, Piebald, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Skull',
    Trophy0score: 'Silver:18.6 | Gold:23.8 | Diamond:27.7',
  },
  img: 'img/banner/EurasianLYNX.png',
  animalmapvale: 'img/Medved Taiga National Park.jpg',
};
let WildBoarMTNP = {
  Diamond0Requirements: { MaxRank: 5, Weight: '481.7 lbs', Trophyscore: 144.2 },
  Need0Zone0Times: {
    Resting: '7:00-11:30 | 11:00-15:30 | 15:00-19:30',
    Feeding: '3:00-7:30 | 19:00-23:30',
    Drinking: '23:00-3:30',
  },
  Recommended0Weapon0Class: 4,
  Behaviour: 'Easily agitated and aggressive',
  Senses: 'Excellent hearing and sense of smell',
  Active: 'During late evening and early morning',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'Wild Boar Caller | Wild Boar Scent',
  Fur0Types: 'Common | Blackgold | Albino | Melanistic',
  Trophy0score: {
    Trophy0type: 'Tusks',
    Trophy0score: 'Silver:37.5 | Gold:98.5 | Diamond:144.2',
  },
  img: 'img/banner/WILDBOAR.png',
  animalmapvale: 'img/Medved Taiga National Park.jpg',
};
let Reindeer = {
  Diamond0Requirements: {
    MaxRank: 5,
    Weight: '395.73 lbs',
    Trophyscore: 430.2,
  },
  Need0Zone0Times: {
    Resting: '0:00-5:30 / 13:00-17:30 / 21:00-0:30',
    Feeding: '9:00-13:30 / 15:00-21:30',
    Drinking: '5:00-9:30 / 17:00-21:30',
  },
  Recommended0Weapon0Class: 6,
  Behaviour: 'Docile and not aggressive',
  Senses: 'Excellent sense of smell',
  Active: 'During all times',
  Difficulty: '1 (Trival) - 5 (Medium)',
  Caller: 'Antler Rattler',
  Fur0Types: 'Common, Piebald, Albino, Melanistic, Leucistic',
  Trophy0score: {
    Trophy0type: 'Antlers',
    Trophy0score: 'Silver:134.4 | Gold:284.4 | Diamond:400.4',
  },
  img: 'img/banner/moose.png',
  animalmapvale: 'img/Medved Taiga National Park.jpg',
};
let EurasianBrownBear = {
  Diamond0Requirements: { MaxRank: 9, Weight: '980.62 lbs', Trophyscore: 27.7 },
  Need0Zone0Times: {
    Resting: '7:00-11:30 / 11:00-5:30 / 15:00-19:30',
    Feeding: '0:00-3:30 / 19:00-00:30',
    Drinking: '3:00-7:30',
  },
  Recommended0Weapon0Class: 7,
  Behaviour: 'Skittish and aggressive',
  Senses: 'Very good sense of smell',
  Active: 'During night',
  Difficulty: '1 (Trivial) - 9 (Legendary)',
  Caller: 'Predator "Distressed Fawn" Caller',
  Fur0Types:
    'Blond, Cinnamon, Grey, Light Brown, Red-brown, Dark-Brown, Gold, Albino, Melanistic, Spirit',
  Trophy0score: {
    Trophy0type: 'Skull',
    Trophy0score: 'Silver:18.6 | Gold:23.8 | Diamond:27.7',
  },
  img: 'img/banner/BROWNBEAR.png',
  animalmapvale: 'img/Medved Taiga National Park.jpg',
};
let MooseMTNP = {
  Diamond0Requirements: { MaxRank: 5, Weight: '1300.7', Trophyscore: 486.12 },
  Need0Zone0Times: {
    Resting: '0:00-5:30 / 13:00-17:30 / 21:00-0:30',
    Feeding: '5:00-9:30 / 17:00-21:30',
    Drinking: '9:00-13:30',
  },
  Recommended0Weapon0Class: 8,
  Behaviour: 'Docile, but easily defensive',
  Senses: 'Great sense of smell and good hearing',
  Active: 'During dusk and dawn',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'Moose Caller | Moose Scent',
  Fur0Types: 'Common, Piebald, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Antlers',
    Trophy0score: 'Silver: 40.5 | Gold: 68.4 | Diamond: 89.3',
  },
  img: 'img/banner/moose.png',
  animalmapvale: 'img/Laytonlake.jpg',
};
//   ^^^^^^^^Vurhonga Savanna Reserve
let ScrubHare = {
  Diamond0Requirements: { MaxRank: 3, Weight: '12.63 lbs', Trophyscore: 5.73 },
  Need0Zone0Times: {
    Resting: '9:00-12:30 / 12:00-15:30 / 20:00-0:30',
    Feeding: '4:00-9:30 / 15:00-20:30',
    Drinking: 'Drinking 0:00-4:30',
  },
  Recommended0Weapon0Class: 1,
  Behaviour: 'Jumpy when threatened but otherwise docile',
  Senses: 'Very good hearing and vision',
  Active: 'During dusk, dawn and night',
  Difficulty: '1 (Trival) - 3 (Very Easy)',
  Caller: 'None ......',
  Fur0Types: 'Light Grey, Grey, Brown, Chestnut',
  Trophy0score: {
    Trophy0type: 'Weight',
    Trophy0score: 'Silver:2.4 | Gold:4.1 | Diamond:5.1',
  },
  img: 'img/banner/scrubHARE.png',
  animalmapvale: 'img/Vurhonga_map.png',
};
let SideStripedJackal = {
  Diamond0Requirements: { MaxRank: 9, Weight: '29.1 lbs', Trophyscore: 29.1 },
  Need0Zone0Times: {
    Resting: '4:00-11:30 / 15:00-18:30',
    Feeding: '0:00-4:30 / 18:00-22:30',
    Drinking: '11:30-15:30 / 22:00-0:30',
  },
  Recommended0Weapon0Class: 2,
  Behaviour: 'Skittish and occasional defensive',
  Senses: 'Excellent smell, good hearing, excellent vision',
  Active: 'Mainly nocturnal, sometimes daytime-active (All times of day/night)',
  Difficulty: '1 (Trivial) - 9 (Legendary)',
  Caller: 'None ......',
  Fur0Types: 'Common, Grey, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Weight',
    Trophy0score: 'Silver:16.8 | Gold:23.8 | Diamond:29.1',
  },
  img: 'img/banner/SideStripedJackal.png',
  animalmapvale: 'img/Vurhonga_map.png',
};
let Springbok = {
  Diamond0Requirements: { MaxRank: 5, Weight: '89.84 lbs', Trophyscore: 110.1 },
  Need0Zone0Times: {
    Resting: '9:00-15:00',
    Feeding: '4:00-9:00 / 19:00-00:00',
    Drinking: '15:00-19:00',
  },
  Recommended0Weapon0Class: 3,
  Behaviour: 'Skttish, but distrait when in large groups',
  Senses: 'Excellent hearing and sense of smell but poor vision',
  Active: 'Dawn, morning, dusk and evening',
  Difficulty: '1 (Trival) - 5 (Medium)',
  Caller: 'None .....',
  Fur0Types: 'Common, Black-Brown,Dark-Brown, Albino',
  Trophy0score: {
    Trophy0type: 'Horns',
    Trophy0score: 'Silver:69.4 | Gold:93 | Diamond:110.7',
  },
  img: 'img/banner/SPRINGBOK.png',
  animalmapvale: 'img/Vurhonga_map.png',
};
let Warthog = {
  Diamond0Requirements: { MaxRank: 5, Weight: '307.54 lbs', Trophyscore: 58.2 },
  Need0Zone0Times: {
    Resting: '0:00-4:00 / 13:00-20:30',
    Feeding: '8:00-13:00 / 20:00-0:00',
    Drinking: '4:00-8:00',
  },
  Recommended0Weapon0Class: 4,
  Behaviour: 'Skittish and occasionally defensive',
  Senses: 'Poor eyesight, excellent smell, and hearing',
  Active: 'Exclusively daylight hours',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'None .....',
  Fur0Types: 'Common, Grey, Red-Brown, Red, Albino,',
  Trophy0score: {
    Trophy0type: 'Tusks',
    Trophy0score: 'Silver: 24.6 | Gold:43.8 | Diamond:58.2',
  },
  img: 'img/banner/WARTHOG.png',
  animalmapvale: 'img/Vurhonga_map.png',
};
let LesserKudu = {
  Diamond0Requirements: { MaxRank: 5, Weight: '196.21 lbs', Trophyscore: 31.5 },
  Need0Zone0Times: {
    Resting: '10:00-19:00',
    Feeding: '4:00-10:00 / 19:00-0:00',
    Drinking: '0:00-4:00',
  },
  Recommended0Weapon0Class: 4,
  Behaviour: 'Skittish and shy',
  Senses: 'Excellent hearing and very good vision and sense of smell',
  Active: 'Early evening to morning',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'Antler Rattler',
  Fur0Types: 'Common, Grey, Dark-Brown, Red-Brown, Dusky, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Antlers',
    Trophy0score: 'Silver:13.3 | Gold:24.2 | Diamond:32.2',
  },
  img: 'img/banner/lesserKUDU.png',
  animalmapvale: 'img/Vurhonga_map.png',
};
let BlueWildebeest = {
  Diamond0Requirements: { MaxRank: 5, Weight: '599.66 lbs', Trophyscore: 37.7 },
  Need0Zone0Times: {
    Resting: '0:00-3:00 / 9:00-16:00',
    Feeding: '3:00-9:00 / 16:00-20:00',
    Drinking: '20:00-0:00',
  },
  Recommended0Weapon0Class: 6,
  Behaviour: 'Gregarious and wary',
  Senses: 'Excellent sense of smell, good hearing and poor vision',
  Active: 'Early morning, late afternoon',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'None.....',
  Fur0Types: 'Common, Gold, Albino, Melanistic, Crowned*',
  Trophy0score: {
    Trophy0type: 'Horns',
    Trophy0score: 'Silver: 21.6 | Gold:30.8 | Diamond:37.7',
  },
  img: 'img/banner/WILDERBEEST.png',
  animalmapvale: 'img/Vurhonga_map.png',
};
let Gemsbok = {
  Diamond0Requirements: { MaxRank: 5, Weight: '529 lbs', Trophyscore: 337.6 },
  Need0Zone0Times: {
    Resting: '0:00-4:30 / 14:00-18:30',
    Feeding: '8:00-14:30',
    Drinking: '4:00-8:30 / 18:00-21:30',
  },
  Recommended0Weapon0Class: 8,
  Behaviour: 'Skittish, but distrait when in large groups',
  Senses: 'Excellent sense of vision, good hearing and sense of smell',
  Active: 'Dawn, early morning, night',
  Difficulty: '1 (Trival) - 5 (Medium)',
  Caller: 'Antler Rattler',
  Fur0Types: 'Common, Grey, Beige, Dark, Gold',
  Trophy0score: {
    Trophy0type: 'Horns',
    Trophy0score: 'Silver:194.8 | Gold:276.3 | Diamond:337.5',
  },
  img: 'img/banner/GEMSBOK.png',
  animalmapvale: 'img/Vurhonga_map.png',
};
let CapeBuffalo = {
  Diamond0Requirements: {
    MaxRank: 9,
    Weight: '1973.14 lbs',
    Trophyscore: 151.4,
  },
  Need0Zone0Times: {
    Resting: '0:00-5:00 / 16:00-19:00',
    Feeding: '5:00-8:00 / 12:00-16:00 / 22:00-0:00',
    Drinking: '8:00-12:0 / 19:00-22:00',
  },
  Recommended0Weapon0Class: 9,
  Behaviour: 'Aggressive and resilient',
  Senses: 'Very good hearing and vision',
  Active: 'During late morning until afternoon evening',
  Difficulty: '1 (Trivial) - 9 (Legendary)',
  Caller: 'None ....',
  Fur0Types: 'Black, Grey, Brown, Albino, Leucistic',
  Trophy0score: {
    Trophy0type: 'Horns',
    Trophy0score: 'Silver:73.3 | Gold:117.9 | Diamond:151.4',
  },
  img: 'img/banner/CAPEBUFFALO.png',
  animalmapvale: 'img/Vurhonga_map.png',
};
let Lion = {
  Diamond0Requirements: { MaxRank: 9, Weight: '565.49 lbs', Trophyscore: 48.5 },
  Need0Zone0Times: {
    Resting: '8:00-12:00 / 15:00-0:00',
    Feeding: '0:00-8:00',
    Drinking: '12:00-15:00',
  },
  Recommended0Weapon0Class: 9,
  Behaviour: 'Territorial, curious and confrontational',
  Senses: 'Legendary senses that befit an apex predator',
  Active: 'Dusk to Dawn, briefly in the afternoon',
  Difficulty: '1 (Trivial) - 9 (Legendary)',
  Caller: 'Predator "Distressed Fawn" Caller, Predator "Jackrabbit" Caller',
  Fur0Types: 'Common, Blonde, Dark Brown, Albino',
  Trophy0score: {
    Trophy0type: 'Skull',
    Trophy0score: 'Silver:38 | Gold:44 | Diamond:48.5',
  },
  img: 'img/banner/LION.png',
  animalmapvale: 'img/Vurhonga_map.png',
};
//   Parque Fernando^^^^^^
let CinnamonTeal = {
  Diamond0Requirements: { MaxRank: 3, Weight: '1.02 lbs', Trophyscore: 0.462 },
  Need0Zone0Times: {
    Resting: '0:00-0:00',
    Feeding: '0:00-0:00',
    Drinking: '0:00-0:00',
  },
  Recommended0Weapon0Class: 1,
  Behaviour: 'Calm, social',
  Senses: 'Very good hearing, okay sense of vision, poor sense of smell',
  Active: 'Dawn, early morning, night',
  Difficulty: '1 (Trivial) - 3 (Easy)',
  Caller: 'Beacon Deluxe Duck Caller, Cinnamon Teal Decoys',
  Fur0Types: 'Common, Piebald, Red, Beige, Melanistic',
  Trophy0score: {
    Trophy0type: 'Weight',
    Trophy0score: 'Silver:3.4 | Gold:4.1 | Diamond: 4.6',
  },
  img: 'img/banner/CinnamonTEAL.png',
  animalmapvale: 'img/Parque Fernando.jpg',
};
let Blackbuck = {
  Diamond0Requirements: {
    MaxRank: 5,
    Weight: '108.03 lbs',
    Trophyscore: 26.55,
  },
  Need0Zone0Times: {
    Resting: '0:00-6:30 / 12:00-14:30 / 19:00-0:30',
    Feeding: '6:00-9:30 / 14:00-17:30',
    Drinking: '9:00-12:30 / 17:00-19:30',
  },
  Recommended0Weapon0Class: 3,
  Behaviour:
    'Mainly sedentary, but may move longer distances in search of water and forage; extremely fast',
  Senses: 'Excellent vision, good sense of smell, but otherwise poor hearing',
  Active:
    'Active throughout the day, typically take long breaks during the hottest hours of the day',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'Antler Rattler',
  Fur0Types: 'Common, Black, Dark, Brown, Leucistic, Melanistic',
  Trophy0score: {
    Trophy0type: 'Horns',
    Trophy0score: 'Silver:19.9 | Gold: 24.7 | Diamond:28.3',
  },
  img: 'img/banner/BLACKBUCK.png',
  animalmapvale: 'img/Parque Fernando.jpg',
};
let AxisDeer = {
  Diamond0Requirements: {
    MaxRank: 5,
    Weight: '160.94 lbs',
    Trophyscore: 350.1,
  },
  Need0Zone0Times: {
    Resting: '0:00-4:30 / 12:00-18:30',
    Feeding: '8:00-12:30 / 21:00-0:30',
    Drinking: '4:00-8:30 / 18:00-21:30',
  },
  Recommended0Weapon0Class: 3,
  Behaviour:
    'Large groups are sedentary in warmer seasons, but otherwise skittish and alert',
  Senses: 'Strong sense of smell and hearing, good eyesight',
  Active: 'Drink Time',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'Axis Deer "Screamer" Caller',
  Fur0Types: 'Common, Piebald, Orange, Dark, Albino, Leucistic, Melanistic',
  Trophy0score: {
    Trophy0type: 'Antlers',
    Trophy0score: 'Silver:138.8 | Gold:264.4 | Diamond:358.6',
  },
  img: 'img/banner/AXISDEER.png',
  animalmapvale: 'img/Parque Fernando.jpg',
};
let Puma = {
  Diamond0Requirements: { MaxRank: 9, Weight: '214.73 lbs', Trophyscore: 39 },
  Need0Zone0Times: {
    Resting: '9:00-13:00 / 17:00-21:00',
    Feeding: '0:00-6:30',
    Drinking: '6:00-9:00 / 13:00-17:00 / 12:00-0:00',
  },
  Recommended0Weapon0Class: 5,
  Behaviour: 'Extremely aware and sensitive',
  Senses: 'Excellent sense of hearing, smell and vision',
  Active: 'Dusk to Dawn',
  Difficulty: '1(Trivial) - 9(Legendary)',
  Caller: 'Predator "Distressed Fawn" Caller',
  Fur0Types: 'Common, Dark Red, Grey, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Skull',
    Trophy0score: 'Silver:32 | Gold:36 | Diamond:39',
  },
  img: 'img/banner/PUMA.png',
  animalmapvale: 'img/Parque Fernando.jpg',
};
let MuleDeer = {
  Diamond0Requirements: { MaxRank: 5, Weight: '451.95 lbs', Trophyscore: 495 },
  Need0Zone0Times: {
    Resting: '4:00-9:30 / 12:00-17:30',
    Feeding: '0:00-4:30 / 17:00-21:30',
    Drinking: '9:00-12:30 / 21:00-0:30',
  },
  Recommended0Weapon0Class: 6,
  Behaviour: 'Calm',
  Senses: 'Excellent sense of hearing and smell, overall decent visual sense',
  Active: 'Dawn to dusk',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'Deer "Bleat" Caller | Mule Deer Scent',
  Fur0Types: 'Common, Blonde, Grey, Dilute, Piebald, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Antlers',
    Trophy0score: 'Silver:98.9 | Gold:222.2 | Diamond:314.8',
  },
  img: 'img/banner/Sign_MULEDEER.png',
  animalmapvale: 'img/Parque Fernando.jpg',
};
let RedDeerPF = {
  Diamond0Requirements: { MaxRank: 9, Weight: '511.47 lbs', Trophyscore: 251 },
  Need0Zone0Times: {
    Resting: '1:00-5:30 | 9:00-13:30 | 21:30-1:30',
    Feeding: '13:00-17:30',
    Drinking: '5:00-9:30 | 17:00-21:30',
  },
  Recommended0Weapon0Class: 6,
  Behaviour: 'Docile and not aggressive',
  Senses: 'Very good sense of smell',
  Active: 'During dawn and dusk',
  Difficulty: '1 (Trivial) - 9 (Legendary)',
  Caller: 'Red Deer Caller | Red Deer Scent',
  Fur0Types: 'Common | Piebald | Albino | Melanistic',
  Trophy0score: {
    Trophy0type: 'Antlers',
    Trophy0score: 'Silver:90.50 | Gold:182.20 | Diamond:251',
  },
  img: 'img/banner/REDDEER.png',
  animalmapvale: 'img/Parque Fernando.jpg',
};
let WaterBuffalo = {
  Diamond0Requirements: {
    MaxRank: 9,
    Weight: '2594.84 lbs',
    Trophyscore: 191.8,
  },
  Need0Zone0Times: {
    Resting: '0:00-5:30 / 13:00-17:30',
    Feeding: '5:00-10:30 / 17:00-21:30',
    Drinking: '10:00-13:30 / 21:00 0:30',
  },
  Recommended0Weapon0Class: 9,
  Behaviour: 'Aggressive and territorial',
  Senses:
    'Excellent sense of smell, great sense of hearing and movement, but still is quite bad',
  Active: 'Morning and evening',
  Difficulty: '1( Trivial ) - 9 ( Legendary )',
  Caller: 'None .....',
  Fur0Types: 'Common, Black, Orange, Grey, Brown, Albino',
  Trophy0score: {
    Trophy0type: 'Horns',
    Trophy0score: 'Silver:87.5 | Gold:147.1 | Diamond:191.8',
  },
  img: 'img/banner/WATERBUFFALO.png',
  animalmapvale: 'img/Parque Fernando.jpg',
};
//   Yukon Valley^^^^^^^^^^
let HarlequinDuck = {
  Diamond0Requirements: { MaxRank: 3, Weight: '4.33 lbs', Trophyscore: 7.2 },
  Need0Zone0Times: {
    Resting: '0:00-0:00',
    Feeding: '0:00-0:00',
    Drinking: '0:00-0:00',
  },
  Recommended0Weapon0Class: 1,
  Behaviour: 'Active, Social',
  Senses: 'Poor sense of smell and hearing, good eyesight',
  Active: 'Feeds all day long with occasional periods of rest',
  Difficulty: '1 (Trivial) - 3 (Easy)',
  Caller: 'Harlequin Duck Decoys',
  Fur0Types: 'Common, Dark, Piebald, Grey, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Weight',
    Trophy0score: 'Silver:5.3 | Gold:6.4 | Diamond:7.2',
  },
  img: 'img/banner/HAREQUIN.png',
  animalmapvale: 'img/Yukon Valley.jpg',
};
let RedFoxYV = {
  Diamond0Requirements: { MaxRank: 9, Weight: '31 lbs', Trophyscore: 14.1 },
  Need0Zone0Times: {
    Resting: '7:00-11:30 / 11:00-15:30 / 15:00-19:30',
    Feeding: '0:00-3:30 / 3:00-7:30',
    Drinking: '19:00-0:30',
  },
  Recommended0Weapon0Class: 2,
  Behaviour: 'Docile and skittish',
  Senses: 'Excellent vision and very good hearing',
  Active: 'During dawn and dusk',
  Difficulty: '1 (Trivial) - 9 (Legendary)',
  Caller: 'Predator "Jackrabbit" Caller',
  Fur0Types: 'Common, Piebald, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Weight',
    Trophy0score: 'Silver: 4.7 | Gold:10.0 | Diamond: 14.1',
  },
  img: 'img/banner/REDFOX.png',
  animalmapvale: 'img/Yukon Valley.jpg',
};
let GrayWolf = {
  Diamond0Requirements: { MaxRank: 9, Weight: '165.35 lbs', Trophyscore: 39 },
  Need0Zone0Times: {
    Resting: '7:00-19:00',
    Feeding: '3:00-7:30 / 19:00-0:00',
    Drinking: '0:00-3:00',
  },
  Recommended0Weapon0Class: 5,
  Behaviour: 'Social, territorial, defensive',
  Senses: 'Legendary sense of hearing and smell, excellent vision',
  Active: 'Dawn, Dusk and intermittently throughout the day',
  Difficulty: '1 (Trivial) - 9 (Legendary)',
  Caller: 'Predator "Distressed Fawn" Caller, Predator "Jackrabbit" Caller',
  Fur0Types: 'Common, Red-Brown, Eggwhite, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Skull',
    Trophy0score: 'Silver:32 | Gold:36 | Diamond:39',
  },
  img: 'img/banner/GRAYWOF.png',
  animalmapvale: 'img/Yukon Valley.jpg',
};
let Caribou = {
  Diamond0Requirements: {
    MaxRank: 5,
    Weight: '410.06 lbs',
    Trophyscore: 430.2,
  },
  Need0Zone0Times: {
    Resting: '0:00-5:30 / 13:00-17:30 / 21:00-0:30',
    Feeding: '9:00-13:30',
    Drinking: '5:00-9:30 / 17:00-21:30',
  },
  Recommended0Weapon0Class: 6,
  Behaviour: 'Gregarious, migratory',
  Senses: 'Excellent sense of smell',
  Active: 'Active throughout day and night, intermittent rest',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'Antler Rattler',
  Fur0Types: 'Common, Leucistic, Piebald, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Antlers',
    Trophy0score: 'Silver:152.5 | Gold:311.2 | Diamond:430.2',
  },
  img: 'img/banner/CARIBOU.png',
  animalmapvale: 'img/Yukon Valley.jpg',
};
let GrizzlyBear = {
  Diamond0Requirements: { MaxRank: 9, Weight: '1385.38 lbs', Trophyscore: 67 },
  Need0Zone0Times: {
    Resting: '7:00-11:00 / 11:00-15:30 / 15:00-19:30',
    Feeding: '19:00-23:30 / 23:00-3:00',
    Drinking: '3:00-7:30',
  },
  Recommended0Weapon0Class: 7,
  Behaviour: 'Solitary, defensive',
  Senses: 'Excellent sense of smell, keen senses overall',
  Active: 'Active day and night, but rest during midday',
  Difficulty: '1 (Trival) - 9 (Legendary)',
  Caller: 'Predator "Distressed Fawn" Caller',
  Fur0Types: 'Common, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Skull',
    Trophy0score: 'Silver:52.6 | Gold:60.8 | Diamond:67',
  },
  img: 'img/banner/GRIZZLYbear.png',
  animalmapvale: 'img/Yukon Valley.jpg',
};
let MooseYV = {
  Diamond0Requirements: { MaxRank: 5, Weight: '1300.7', Trophyscore: 486.12 },
  Need0Zone0Times: {
    Resting: '0:00-5:30 / 13:00-17:30 / 21:00-0:30',
    Feeding: '5:00-9:30 / 17:00-21:30',
    Drinking: '9:00-13:30',
  },
  Recommended0Weapon0Class: 8,
  Behaviour: 'Docile, but easily defensive',
  Senses: 'Great sense of smell and good hearing',
  Active: 'During dusk and dawn',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'Moose Caller | Moose Scent',
  Fur0Types: 'Common, Piebald, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Antlers',
    Trophy0score: 'Silver: 40.5 | Gold: 68.4 | Diamond: 89.3',
  },
  img: 'img/banner/moose.png',
  animalmapvale: 'img/Yukon Valley.jpg',
};
let PlainsBison = {
  Diamond0Requirements: { MaxRank: 5, Weight: '2458.15 lbs', Trophyscore: 221 },
  Need0Zone0Times: {
    Resting: '7:00-11:30 / 11:00-15:30',
    Feeding: '0:00-3:30 / 19:00-0:30',
    Drinking: '3:00-7:30',
  },
  Recommended0Weapon0Class: 9,
  Behaviour: 'Calm, confident, but aggressive when threatened',
  Senses: 'Poor eyesight but excellent sense of smell',
  Active: 'Morning and Evening',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'None......',
  Fur0Types: 'Common, Albino, Melanistic, Leucistic',
  Trophy0score: {
    Trophy0type: 'Horns',
    Trophy0score: 'Silver:46.7 | Gold:136 | Diamond:221',
  },
  img: 'img/banner/PlainsBISON.png',
  animalmapvale: 'img/Yukon Valley.jpg',
};
//   Cuatro Colinas Game Reserve
let EuropeanHare = {
  Diamond0Requirements: { MaxRank: 3, Weight: '15.4 lbs', Trophyscore: 6.5 },
  Need0Zone0Times: {
    Resting: '1:00-5:30 / 14:00-16:30',
    Feeding: '5:00-11:30 / 16:00-22:30',
    Drinking: '0:00-1:30 / 11:00-14:30 / 22:00-0:00',
  },
  Recommended0Weapon0Class: 1,
  Behaviour: 'Social, easily frightened',
  Senses: 'Very good senses of sight and hearing, decent sense of smell',
  Active: 'Night and dusk',
  Difficulty: '1 (Trivial) - 3 (Easy)',
  Caller: 'None.....',
  Fur0Types: 'Common, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Weight',
    Trophy0score: 'Silver: 3.5 | Gold: 5 | Diamond: 6.5',
  },
  img: 'img/banner/EUROHARE.png',
  animalmapvale: 'img/Cuatro Colinas.jpg',
};
let RoeDeerCCGR = {
  Diamond0Requirements: { MaxRank: 3, Weight: '72.75 lbs', Trophyscore: 89.3 },
  Need0Zone0Times: {
    Resting: '0:00-5:30 | 9:00-11:30 | 21:00-0:30',
    Feeding: '5:00-9:30 | 17:00-21:30',
    Drinking: '13:00-17:30',
  },
  Recommended0Weapon0Class: 3,
  Behaviour: 'Skittish and vocal when alarmed',
  Senses: 'Very good hearing and sense of smell',
  Active: 'During dawn and dusk',
  Difficulty: '1 (Trivial) - 3 (Very Easy)',
  Caller: 'Roe Deer Caller | Roe Deer Scent',
  Fur0Types: 'Common, Piebald, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Antlers',
    Trophy0score: 'Silver: 40.5 | Gold: 68.4 | Diamond: 89.3',
  },
  img: 'img/banner/ROEdeer.png',
  animalmapvale: 'img/Cuatro Colinas.jpg',
};
let IberianMouflon = {
  Diamond0Requirements: { MaxRank: 5, Weight: '132 lbs', Trophyscore: 179.6 },
  Need0Zone0Times: {
    Resting: '2:00-6:30 / 9:00-15:30 / 19:00-22:00',
    Feeding: '15:00-19:30',
    Drinking: '6:00-9:30',
  },
  Recommended0Weapon0Class: 4,
  Behaviour: 'Wary, Shy',
  Senses: 'Excellent senses of vision and hearing, decent sense of smell',
  Active: 'Dawn to dusk',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'None....',
  Fur0Types: 'Common, Albino, Melanistic, Grey',
  Trophy0score: {
    Trophy0type: 'Horns',
    Trophy0score: 'Silver: 97 | Gold: 144.2 | Diamond:179.6',
  },
  img: 'img/banner/iberianMOUFLAN.png',
  animalmapvale: 'img/Cuatro Colinas.jpg',
};
let RondaIbex = {
  Diamond0Requirements: { MaxRank: 5, Weight: '158.7 lbs', Trophyscore: 107.9 },
  Need0Zone0Times: {
    Resting: '4:00-8:30 / 11:00-17:30',
    Feeding: '0:00-4:30 / 17:00-21:30',
    Drinking: '8:00-11:30 / 21:00-0:30',
  },
  Recommended0Weapon0Class: 4,
  Behaviour: 'Wary, shy',
  Senses: 'Excellent sense of vision and hearing, decent sense of smell',
  Active: 'Dawn to dusk',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'None.....',
  Fur0Types: 'Common, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Horns',
    Trophy0score: 'Silver:68.6 | Gold:101.8 | Diamond:126.7',
  },
  img: 'img/banner/RONDA Ibex.png',
  animalmapvale: 'img/Cuatro Colinas.jpg',
};
let BeceiteIbex = {
  Diamond0Requirements: { MaxRank: 5, Weight: '242 lbs', Trophyscore: 191.6 },
  Need0Zone0Times: {
    Resting: '4:00-8:30 / 11:00-17:30',
    Feeding: '0:00-4:30 / 17:00-21:30',
    Drinking: '8:00-11:30 / 21:00-0:30',
  },
  Recommended0Weapon0Class: 4,
  Behaviour: 'Wary, shy',
  Senses: 'Excellent sense of vision and hearing, decent sense of smell',
  Active: 'Dawn to dusk',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'None....',
  Fur0Types: 'Common, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Horns',
    Trophy0score: 'Silver:78 | Gold:142.90| Diamond: 191.60',
  },
  img: 'img/banner/BECEITEibex.png',
  animalmapvale: 'img/Cuatro Colinas.jpg',
};
let GredosIbex = {
  Diamond0Requirements: { MaxRank: 5, Weight: '227 lbs', Trophyscore: 108.6 },
  Need0Zone0Times: {
    Resting: '4:00-8:30 / 11:00-17:30',
    Feeding: '0:00-4:30 / 17:00-21:30',
    Drinking: '8:00-11:30 / 21:00-0:30',
  },
  Recommended0Weapon0Class: 4,
  Behaviour: 'Wary, shy',
  Senses: 'Excellent sense of vision and hearing, decent sense of smell',
  Active: 'Dawn to dusk',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'None....',
  Fur0Types: 'Common, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Horns',
    Trophy0score: 'Silver: 53.9 | Gold: 85.1 | Diamond:108.6',
  },
  img: 'img/banner/GREDOSibex.png',
  animalmapvale: 'img/Cuatro Colinas.jpg',
};
let SoutheasternSpanishIbex = {
  Diamond0Requirements: { MaxRank: 5, Weight: '189 lbs', Trophyscore: 103.4 },
  Need0Zone0Times: {
    Resting: '4:00-8:30 / 11:00-17:30',
    Feeding: '0:00-4:30 / 17:00-21:30',
    Drinking: '8:00-11:30 / 21:00-0:30',
  },
  Recommended0Weapon0Class: 4,
  Behaviour: 'Wary, shy',
  Senses: 'Excellent sense of vision and hearing, decent sense of smell',
  Active: 'Dawn to dusk',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'None....',
  Fur0Types: 'Common, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Horns',
    Trophy0score: 'Silver:58 | Gold:84 | Diamond:103.4',
  },
  img: 'img/banner/SESPANISH.png',
  animalmapvale: 'img/Cuatro Colinas.jpg',
};
let WildBoarCCGR = {
  Diamond0Requirements: { MaxRank: 5, Weight: '481.7 lbs', Trophyscore: 143.8 },
  Need0Zone0Times: {
    Resting: '7:00-11:30 | 11:00-15:30 | 15:00-19:30',
    Feeding: '3:00-7:30 | 19:00-23:30',
    Drinking: '23:00-3:30',
  },
  Recommended0Weapon0Class: 4,
  Behaviour: 'Easily agitated and aggressive',
  Senses: 'Excellent hearing and sense of smell',
  Active: 'During late evening and early morning',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'Wild Boar Caller | Wild Boar Scent',
  Fur0Types: 'Common | Blackgold | Albino | Melanistic',
  Trophy0score: {
    Trophy0type: 'Tusks',
    Trophy0score: 'Silver:37.5 | Gold:98.5 | Diamond:144.2',
  },
  img: 'img/banner/WILDBOAR.png',
  animalmapvale: 'img/Cuatro Colinas.jpg',
};
let IberianWolf = {
  Diamond0Requirements: { MaxRank: 9, Weight: '110 lbs', Trophyscore: 39 },
  Need0Zone0Times: {
    Resting: '7:00-11:30 / 11:00-15:30 / 15:00-19:30',
    Feeding: '3:00-7:30 / 19:00-23:30',
    Drinking: '0:00-3:30 / 23:00-0:30',
  },
  Recommended0Weapon0Class: 5,
  Behaviour: 'Social, territorial, defensive',
  Senses: 'Legendary sense of hearing and smell, excellent vision',
  Active: 'Mainly dawn and dusk, and intermittent throughout the day',
  Difficulty: '1 (Trivial) - 9 (Legendary)',
  Caller: 'Predator "Distressed Fawn" Caller, Predator "Jackrabbit" Caller',
  Fur0Types: 'Common, Grey, Winter, Olive, Albino, Melanistic, Pristine',
  Trophy0score: {
    Trophy0type: 'Skull',
    Trophy0score: 'Silver:32 | Gold:36 | Diamond:39',
  },
  img: 'img/banner/IBERIAN_WOLF.png',
  animalmapvale: 'img/Cuatro Colinas.jpg',
};
let RedDeerCCGR = {
  Diamond0Requirements: { MaxRank: 9, Weight: '511.47 lbs', Trophyscore: 251 },
  Need0Zone0Times: {
    Resting: '1:00-5:30 | 9:00-13:30 | 21:30-1:30',
    Feeding: '13:00-17:30',
    Drinking: '5:00-9:30 | 17:00-21:30',
  },
  Recommended0Weapon0Class: 6,
  Behaviour: 'Docile and not aggressive',
  Senses: 'Very good sense of smell',
  Active: 'During dawn and dusk',
  Difficulty: '1 (Trivial) - 9 (Legendary)',
  Caller: 'Red Deer Caller | Red Deer Scent',
  Fur0Types: 'Common | Piebald | Albino | Melanistic',
  Trophy0score: {
    Trophy0type: 'Antlers',
    Trophy0score: 'Silver:90.50 | Gold:182.20 | Diamond:251',
  },
  img: 'img/banner/REDDEER.png',
  animalmapvale: 'img/Cuatro Colinas.jpg',
};
//   Silver Ridge Peaks^^^^^^^^^^^^
let Turkey = {
  Diamond0Requirements: {
    MaxRank: 3,
    Weight: '11 Kg | 24.5 lbs',
    Trophyscore: 4.6,
  },
  Need0Zone0Times: {
    Resting: '21:30–5:00',
    Feeding: '5:00–15:30 / 16:30–21:30',
    Drinking: '15:30–16:30',
  },
  Recommended0Weapon0Class: 1,
  Behaviour: 'unknown',
  Senses: 'unknown',
  Active: 'unknown',
  Difficulty: '1 (Trivial) - 3 (Very Easy)',
  Caller: 'Turkey Caller',
  Fur0Types: 'Common, Grey, Light Brown, Leucistic, Melanistic, Albino',
  Trophy0score: {
    Trophy0type: 'Weight',
    Trophy0score: 'Silver:3.3 | Gold:4 | Diamond:4.6',
  },
  img: 'img/banner/TURKEY.png',
  animalmapvale: 'img/Silver Ridge Peaks.jpg',
};
let Pronghorn = {
  Diamond0Requirements: {
    MaxRank: 5,
    Weight: '65 kg | 143.3 lbs',
    Trophyscore: 98,
  },
  Need0Zone0Times: {
    Resting: '19:30–5:00',
    Feeding: '5:00–8:30 / 10:30–19:30',
    Drinking: '8:30–10:30',
  },
  Recommended0Weapon0Class: 4,
  Behaviour: '',
  Senses: '',
  Active: '',
  Difficulty: '1 (Trivial) - 5 (medium)',
  Caller: 'None...',
  Fur0Types: 'Common, Dark, Piebald*, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Horns',
    Trophy0score: 'Silver:46 | Gold:75.7 | Diamond:98',
  },
  img: 'img/banner/PRONGHORN.png',
  animalmapvale: 'img/Silver Ridge Peaks.jpg',
};
let MountainGoat = {
  Diamond0Requirements: {
    MaxRank: 5,
    Weight: '140 kg | 308 lbs',
    Trophyscore: 107.6,
  },
  Need0Zone0Times: {
    Resting: '13:00–16:30 / 16:30–00:30',
    Feeding: '00:30–2:30 / 5:30–9:30 / 11:00–13:30',
    Drinking: '9:30–11:00',
  },
  Recommended0Weapon0Class: 4,
  Behaviour: '',
  Senses: '',
  Active: '',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'None....',
  Fur0Types: 'Common, Beige, White, Light Brown, Melanistic, Albino',
  Trophy0score: {
    Trophy0type: 'Horns',
    Trophy0score: 'Silver:52 | Gold:84 | Diamond:107',
  },
  img: 'img/banner/mountGOAT.png',
  animalmapvale: 'img/Silver Ridge Peaks.jpg',
};
let BighornSheep = {
  Diamond0Requirements: {
    MaxRank: 5,
    Weight: '160 kg | 353 lbs',
    Trophyscore: 164.6,
  },
  Need0Zone0Times: {
    Resting: '21:30–6-30',
    Feeding: '8:30–21:30',
    Drinking: '6:30–8:30',
  },
  Recommended0Weapon0Class: 4,
  Behaviour: '1 (Trivial) - 5 (Medium)',
  Senses: '',
  Active: '',
  Difficulty: '',
  Caller: 'None....',
  Fur0Types: 'Common, Black, Brown, Dark Brown, Grey, Albino',
  Trophy0score: {
    Trophy0type: 'Horns',
    Trophy0score: 'Silver: 90.3 I Gold: 132.7 I Diamond: 164.6',
  },
  img: 'img/banner/BighornSheep.png',
  animalmapvale: 'img/Silver Ridge Peaks.jpg',
};
let MountainLion = {
  Diamond0Requirements: { MaxRank: 9, Weight: '214.73 lbs', Trophyscore: 39 },
  Need0Zone0Times: {
    Resting: '9:00-13:00 / 17:00-21:00',
    Feeding: '0:00-6:30',
    Drinking: '6:00-9:00 / 13:00-17:00 / 12:00-0:00',
  },
  Recommended0Weapon0Class: 5,
  Behaviour: 'Extremely aware and sensitive',
  Senses: 'Excellent sense of hearing, smell and vision',
  Active: 'Dusk to Dawn',
  Difficulty: '1(Trivial) - 9(Legendary)',
  Caller: 'Predator "Distressed Fawn" Caller',
  Fur0Types: 'Common, Dark Red, Grey, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Skull',
    Trophy0score: 'Silver:32 | Gold:36 | Diamond:39',
  },
  img: 'img/banner/Sign_MOUNTAINLION.png',
  animalmapvale: 'img/Silver Ridge Peaks.jpg',
};
let MuleDeerSRP = {
  Diamond0Requirements: { MaxRank: 5, Weight: '451.95 lbs', Trophyscore: 495 },
  Need0Zone0Times: {
    Resting: '4:00-9:30 / 12:00-17:30',
    Feeding: '0:00-4:30 / 17:00-21:30',
    Drinking: '9:00-12:30 / 21:00-0:30',
  },
  Recommended0Weapon0Class: 6,
  Behaviour: 'Calm',
  Senses: 'Excellent sense of hearing and smell, overall decent visual sense',
  Active: 'Dawn to dusk',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'Deer "Bleat" Caller | Mule Deer Scent',
  Fur0Types: 'Common, Blonde, Grey, Dilute, Piebald, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Antlers',
    Trophy0score: 'Silver:98.9 | Gold:222.2 | Diamond:314.8',
  },
  img: 'img/banner/Sign_MULEDEER.png',
  animalmapvale: 'img/Silver Ridge Peaks.jpg',
};
let BlackBearSRP = {
  Diamond0Requirements: { MaxRank: 9, Weight: '584.23 lbs', Trophyscore: 22.8 },
  Need0Zone0Times: {
    Resting: '7:00-19:30',
    Feeding: '0:00-7:30',
    Drinking: '19:00-0:30',
  },
  Recommended0Weapon0Class: 7,
  Behaviour: 'Skittish and defensive',
  Senses: 'Skittish and defensive',
  Active: 'During night',
  Difficulty: '1 (Trivial) - 9 (Legendary)',
  Caller: 'Predator "Distressed Fawn" Caller',
  Fur0Types: 'Common, Blond, Brown, Cinnamon',
  Trophy0score: {
    Trophy0type: 'Skull',
    Trophy0score: 'Silver:14.4 | Gold:19.2 | Diamond:22.8',
  },
  img: 'img/banner/BLACKBEAR.png',
  animalmapvale: 'img/Silver Ridge Peaks.jpg',
};
let RockyMountainElk = {
  Diamond0Requirements: {
    MaxRank: 5,
    Weight: '480 kg | 1058 lbs',
    Trophyscore: 481.4,
  },
  Need0Zone0Times: {
    Resting: '00:00–5:30',
    Feeding: '5:30–17:00 / 21:00–00:30',
    Drinking: '17:00–21:30',
  },
  Recommended0Weapon0Class: 8,
  Behaviour: 'Docile and vocal',
  Senses:
    'Highly tuned senses in general, particularly excellent hearing and smell',
  Active: 'During dawn and dusk',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'Elk Caller, Elk Scent',
  Fur0Types: 'Common, Light Grey, Brown, Piebald, Albino, Melanistic',
  Trophy0score: {
    Trophy0type: 'Antlers',
    Trophy0score: 'Silver:177.8 | Gold:351.3 | Diamond:481.4',
  },
  img: 'img/banner/Sign_MOUNTAINELK.png',
  animalmapvale: 'img/Silver Ridge Peaks.jpg',
};
let PlainsBisonSRP = {
  Diamond0Requirements: { MaxRank: 5, Weight: '2458.15 lbs', Trophyscore: 221 },
  Need0Zone0Times: {
    Resting: '7:00-11:30 / 11:00-15:30',
    Feeding: '0:00-3:30 / 19:00-0:30',
    Drinking: '3:00-7:30',
  },
  Recommended0Weapon0Class: 9,
  Behaviour: 'Calm, confident, but aggressive when threatened',
  Senses: 'Poor eyesight but excellent sense of smell',
  Active: 'Morning and Evening',
  Difficulty: '1 (Trivial) - 5 (Medium)',
  Caller: 'None......',
  Fur0Types: 'Common, Albino, Melanistic, Leucistic',
  Trophy0score: {
    Trophy0type: 'Horns',
    Trophy0score: 'Silver:46.7 | Gold:136 | Diamond:221',
  },
  img: 'img/banner/PlainsBISON.png',
  animalmapvale: 'img/Silver Ridge Peaks.jpg',
};

//   let CCC = {
//     Diamond0Requirements: { MaxRank: , Weight: '', Trophyscore: },
//     Need0Zone0Times: {
//       Resting: '',
//       Feeding: '',
//       Drinking: '',
//     },
//     Recommended0Weapon0Class: ,
//     Behaviour: '',
//     Senses: '',
//     Active: '',
//     Difficulty: '',
//     Caller: '',
//     Fur0Types: '',
//     Trophy0score: {
//       Trophy0type: '',
//       Trophy0score: '',
//     },
//     img: 'img/banner/moose.png',
//     animalmapvale: 'img/Silver Ridge Peaks.jpg',
//   };

let whitetail = {
  Diamond0Requirements: { MaxRank: 3, Weight: 72.75, Trophyscore: 249.3 },
  Need0Zone0Times: {
    Resting: '0:00-5:30 / 9:00-11:30 / 21:00-0:30',
    Feeding: '5:00-9:30 / 17:00-21:30',
    Drinking: '13:00-17:30',
  },
  Recommended0Weapon0Class: 10,
  Behaviour: 'Unknow',
  Senses: 'Unknow',
  Active: 'asdf',
  Difficulty: '1 (Trivial) ',
  Caller: 'sdfadfadf',
  Fur0Types: 'Albino',
  Trophy0score: {
    Trophy0type: 'piekd',
    Trophy0score: 'Silver: 1 | Gold: 24 | Diamond: 3',
  },
  img: 'img/moose.png',
  animalmapvale: 'img/Layton_Lake_Map -Moose.png',
};
//
function Animalstats(j) {
  document.getElementById('animals_card').style.display = 'block';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('CuatroColinas').style.display = 'none';
  // document.getElementById('DiamondH').innerHTML =
  var types = Object.keys(j);
  var Diamspace = types[0].replace('0', ' ');
  console.log(Diamspace);

  var diamondval = j[types[0]];
  console.log(diamondval);

  document.getElementById('DiamondH').innerHTML = '<u>' + Diamspace + '</u>';
  document.getElementById('Diamontinfo').innerHTML =
    'MaxRank-' +
    JSON.stringify(diamondval.MaxRank) +
    '</br>' +
    'Trophyscore-' +
    JSON.stringify(diamondval.Trophyscore) +
    '</br>' +
    'Weight-' +
    diamondval.Weight +
    '</br>';

  var needspace = types[1].replace('0', ' ').replace('0', ' ');
  var needzrestval = j[types[1]].Resting;
  var needzfedtval = j[types[1]].Feeding;
  var needzdrinktval = j[types[1]].Drinking;
  console.log(needzdrinktval);
  document.getElementById('needzoneH').innerHTML = '<u>' + needspace + '</u>';
  document.getElementById('needzoneval').innerHTML =
    '<b>Resting</b> -' +
    ' ' +
    needzrestval +
    '</br>' +
    '<b>Feeding</b> -' +
    ' ' +
    needzfedtval +
    '</br>' +
    '<b>Drinking</b> -' +
    ' ' +
    needzdrinktval +
    '</br>';
  // Weapon Class
  var weponrecclasH = types[2].replace('0', ' ').replace('0', ' ');
  var weponrecclasV = j[types[2]];
  document.getElementById('RweponC').innerHTML = '<u>' + weponrecclasH + '</u>';
  document.getElementById('Wclass').innerHTML =
    '<b>Weapon Class</b> -' + ' ' + JSON.stringify(weponrecclasV);
  //   Behaviour
  var BehaviorH = types[3].replace('0', ' ').replace('0', ' ');
  var BehaviorV = j[types[3]];
  document.getElementById('BehaviorH').innerHTML = '<u>' + BehaviorH + '</u>';
  document.getElementById('BehaviorV').innerHTML = BehaviorV;

  //   Senses
  var sensesH = types[4].replace('0', ' ').replace('0', ' ');
  var sensesV = j[types[4]];
  document.getElementById('sensesH').innerHTML = '<u>' + sensesH + '</u>';
  document.getElementById('sensesV').innerHTML = sensesV;
  // Active
  var activeH = types[5].replace('0', ' ').replace('0', ' ');
  var activeV = j[types[5]];
  document.getElementById('activeH').innerHTML = '<u>' + activeH + '</u>';
  document.getElementById('activeV').innerHTML = activeV;
  //   Difficulty
  var difficultyH = types[6].replace('0', ' ').replace('0', ' ');
  var difficultyV = j[types[6]];
  document.getElementById('difficultyH').innerHTML =
    '<u>' + difficultyH + '</u>';
  document.getElementById('difficultyV').innerHTML = difficultyV;
  //   Caller
  var callerH = types[7].replace('0', ' ').replace('0', ' ');
  var callerV = j[types[7]];
  document.getElementById('callerH').innerHTML = '<u>' + callerH + '</u>';
  document.getElementById('callerV').innerHTML = callerV;
  //  Fur Types
  var furtypeH = types[8].replace('0', ' ').replace('0', ' ');
  var furtypeV = j[types[8]];
  document.getElementById('furtypeH').innerHTML = '<u>' + furtypeH + '</u>';
  document.getElementById('furtypeV').innerHTML = furtypeV;
  console.log(callerH);
  //   trophy socre
  var trophyscoreH = types[9].replace('0', ' ').replace('0', ' ');
  var trophytype = j[types[9]].Trophy0type;
  var trophyscore = j[types[9]].Trophy0score;

  console.log(needzdrinktval);
  document.getElementById('trophyscoreH').innerHTML =
    '<u>' + trophyscoreH + '</u>';
  document.getElementById('trophyscoreV').innerHTML =
    '<b>Trophy type</b> -' +
    ' ' +
    trophytype +
    '</br>' +
    '<b>Trophy score</b> -' +
    ' ' +
    trophyscore;
  // ^^^^^^^Name banne ^^^^^^^^^^
  var imgurl = j[types[10]];
  console.log(imgurl);
  var imgbannername = document.getElementById('animalNbanner');
  imgbannername.setAttribute('src', imgurl);
  //   ^^animal map loc^^^^
  var animalvalemap = j[types[11]];
  console.log(imgurl);
  var imgbannername = document.getElementById('AnimalMapimg');
  imgbannername.setAttribute('src', animalvalemap);
}

// document.getElementById('demo').innerHTML += JSON.stringify(types);
function Home() {
  document.getElementById('logo').style.display = 'block';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('animals_card').style.display = 'none';
  document.getElementById('gamepage').style.display = 'none';
  document.getElementById('jumbotron').style.display = 'none';
}
function maps_list() {
  document.getElementById('maps_list').style.display = 'block';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_card').style.display = 'none';
  document.getElementById('gamepage').style.display = 'none';
  document.getElementById('jumbotron').style.display = 'none';
}
function Layton_info() {
  document.getElementById('animals_Layton').style.display = 'block';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_card').style.display = 'none';
  document.getElementById('gamepage').style.display = 'none';
  document.getElementById('jumbotron').style.display = 'none';
}
function Hirschfelden_info() {
  document.getElementById('animals_Hirschfelden').style.display = 'block';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('animals_card').style.display = 'none';
  document.getElementById('gamepage').style.display = 'none';
  document.getElementById('jumbotron').style.display = 'none';
}
function MedvedTaiga_info() {
  document.getElementById('MedvedTaiga_info').style.display = 'block';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_card').style.display = 'none';
  document.getElementById('gamepage').style.display = 'none';
  document.getElementById('jumbotron').style.display = 'none';
}
function Vurhonga_Savanna_info() {
  document.getElementById('VurhongaSavanna').style.display = 'block';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_card').style.display = 'none';
  document.getElementById('gamepage').style.display = 'none';
  document.getElementById('jumbotron').style.display = 'none';
}
function Parque_Fernando_info() {
  document.getElementById('ParqueFernando').style.display = 'block';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('animals_card').style.display = 'none';
  document.getElementById('gamepage').style.display = 'none';
  document.getElementById('jumbotron').style.display = 'none';
}
function Yukon_Valley_info() {
  document.getElementById('Yukon_Valley_info').style.display = 'block';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('animals_card').style.display = 'none';
  document.getElementById('gamepage').style.display = 'none';
  document.getElementById('jumbotron').style.display = 'none';
}
function Cuatro_Colinas_info() {
  document.getElementById('CuatroColinas').style.display = 'block';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('animals_card').style.display = 'none';
  document.getElementById('gamepage').style.display = 'none';
  document.getElementById('jumbotron').style.display = 'none';
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
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('animals_card').style.display = 'none';
  document.getElementById('gamepage').style.display = 'none';
  document.getElementById('jumbotron').style.display = 'none';
}
function gamemode() {
  document.getElementById('gamepage').style.display = 'block';
  document.getElementById('jumbotron').style.display = 'block';
  document.getElementById('SilverRidgePeaks_info').style.display = 'none';
  document.getElementById('CuatroColinas').style.display = 'none';
  document.getElementById('Yukon_Valley_info').style.display = 'none';
  document.getElementById('ParqueFernando').style.display = 'none';
  document.getElementById('VurhongaSavanna').style.display = 'none';
  document.getElementById('animals_Hirschfelden').style.display = 'none';
  document.getElementById('animals_Layton').style.display = 'none';
  document.getElementById('maps_list').style.display = 'none';
  document.getElementById('logo').style.display = 'none';
  document.getElementById('MedvedTaiga_info').style.display = 'none';
  document.getElementById('animals_card').style.display = 'none';
}
// ^^^^^^^^^^^^game App
const button = document.querySelector(
  'body > div.droplist.container > div:nth-child(1) > div > button'
);
const timeButton = document.querySelector(
  'body > div.droplist.container > div:nth-child(2) > div > button'
);
const mapselected = document.querySelector('#A1img');
const mapselected2 = document.querySelector('#A2img');
const mapselected3 = document.querySelector('#A3img');
const gunselected = document.querySelector('#gunN1');
const gunselected2 = document.querySelector('#gunN2');
const gunselected3 = document.querySelector('#gunN3');
const errr = 'try other map';

function A1scoreCalu() {
  mapV = mapNameV.textContent;
  var blo = Boolean(mapV);
  if (blo === true) {
    var z = document.querySelector('input[name="Animal_1"]:checked').value;
    if (z === 'Y') {
      var z = document.querySelector('input[name="Animal_1"]:checked').value;
      var x = document.querySelector('#Tropscore1').value;
      V = Number(x) + 50;
      document.getElementById('A1score').innerHTML = 'Your score is:' + ' ' + V;
    } else if (z === 'N') {
      var x = Number(0);
      document.getElementById('A1score').innerHTML = 'Your score is:' + ' ' + x;
    }
  } else {
    document.getElementById('A1err').innerHTML = 'Please select a map';
    setTimeout(function () {
      document.getElementById('A1err').innerHTML = ' ';
    }, 5000);
  }
  var inpts = document.getElementById('Tropscore1');
  inpts.value = '';
}
function A2scoreCalu() {
  mapV = mapNameV.textContent;
  var blo = Boolean(mapV);
  if (blo === true) {
    var z = document.querySelector('input[name="Animal_2"]:checked').value;
    if (z === 'Y') {
      var z = document.querySelector('input[name="Animal_2"]:checked').value;
      var x = document.querySelector('#Tropscore2').value;
      V = Number(x) + 50;
      document.getElementById('A2score').innerHTML = 'Your score is:' + ' ' + V;
    } else if (z === 'N') {
      var x = Number(0);
      document.getElementById('A2score').innerHTML = 'Your score is:' + ' ' + x;
    }
  } else {
    document.getElementById('A2err').innerHTML = 'Please select a map';
    setTimeout(function () {
      document.getElementById('A2err').innerHTML = ' ';
    }, 5000);
  }
  var inpts = document.getElementById('Tropscore2');
  inpts.value = '';
}
function A3scoreCalu() {
  mapV = mapNameV.textContent;
  var blo = Boolean(mapV);
  if (blo === true) {
    var z = document.querySelector('input[name="Animal_3"]:checked').value;
    if (z === 'Y') {
      var z = document.querySelector('input[name="Animal_3"]:checked').value;
      var x = document.querySelector('#Tropscore3').value;
      V = Number(x) + 50;

      document.getElementById('A3score').innerHTML = 'Your score is:' + ' ' + V;
    } else if (z === 'N') {
      var x = Number(0);
      document.getElementById('A3score').innerHTML = 'Your score is:' + ' ' + x;
    }
  } else {
    document.getElementById('A3err').innerHTML = 'Please select a map';
    setTimeout(function () {
      document.getElementById('A3err').innerHTML = ' ';
    }, 5000);
  }
  var inpts = document.getElementById('Tropscore3');
  inpts.value = '';
}
let chooseOption = {
  Malard: [
    'Virant .22LR',
    'Mangiafico 410/45',
    'Andersson .22LR',
    'Nordin 20SA',
    'Bows',
    'Virant .22LR',
    'Miller Model 1981',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Rabbit: [
    'Virant .22LR',
    'Mangiafico 410/45',
    'Andersson .22LR',
    'Nordin 20SA',
    'Bows',
    'Virant .22LR',
    'Miller Model 1981',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Coyote: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Focoso 357',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
    'Whitlock Model 86',
  ],
  Whitetail: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Blacktail: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  BlackBear: [
    'Solokhin MN1890',
    'Rangemaster 338',
    'Martensson 6.5 mm',
    'M1 Iwaniec',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.300 Canning Magnum',
    '.270 Stradivarius',
    'Rhino 454',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Bow',
    'Crossbows',
    'Nordin 20SA',
    'Miller Model 1981',
    'Cacciatore 12G',
  ],
  Moose: [
    'Rangemaster 338',
    'Martensson 6.5 mm',
    'M1 Iwaniec',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.300 Canning Magnum',
    '.270 Stradivarius',
    'Rhino 454',
    '.44 Panther Magnum',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Bow',
    'Crossbows',
    'Miller Model 1981',
  ],
};
let HirschfeldenHuntingReserve = {
  Canada_Goose: [
    'Virant .22LR',
    'Mangiafico 410/45',
    'Andersson .22LR',
    'Nordin 20SA',
    'Bows',
    'Virant .22LR',
    'Miller Model 1981',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Red_Fox: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Focoso 357',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
    'Whitlock Model 86',
  ],
  Roe_Deer: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'Hudzik .50',
    'Crossbows',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Focoso 357',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Fallow_Deer: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Wild_Boar: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Red_Deer: [
    'Whitlock Model 86',
    'Ranger .243',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  European_Bison: [
    'Bow',
    'Rangemaster 338',
    'King 470DB',
    'Hudzik .50',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.300 Canning Magnum',
    'Rhino 454',
    'Miller Model 1981',
    'Bow',
    'Crossbows',
  ],
};
let MedvedTaigaNationalPark = {
  Musk_Deer: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Focoso 357',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
    'Whitlock Model 86',
  ],
  Eurasian_Lynx: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'Hudzik .50',
    'Crossbows',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Focoso 357',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Wild_Boar: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Reindeer: [
    'Whitlock Model 86',
    'Ranger .243',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Eurasian_Brown_Bear: [
    'Solokhin MN1890',
    'Rangemaster 338',
    'Martensson 6.5 mm',
    'M1 Iwaniec',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.300 Canning Magnum',
    '.270 Stradivarius',
    'Rhino 454',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Bow',
    'Crossbows',
    'Nordin 20SA',
    'Miller Model 1981',
    'Cacciatore 12G',
  ],
  Moose: [
    'Rangemaster 338',
    'Martensson 6.5 mm',
    'M1 Iwaniec',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.300 Canning Magnum',
    '.270 Stradivarius',
    'Rhino 454',
    '.44 Panther Magnum',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Bow',
    'Crossbows',
    'Miller Model 1981',
  ],
};
let VurhongaSavannaReserve = {
  Scrub_Hare: [
    'Virant .22LR',
    'Mangiafico 410/45',
    'Andersson .22LR',
    'Nordin 20SA',
    'Bows',
    'Virant .22LR',
    'Miller Model 1981',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Side_Striped_Jackal: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Focoso 357',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
    'Whitlock Model 86',
  ],
  Springbok: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'Hudzik .50',
    'Crossbows',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Focoso 357',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Warthog: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Lesser_Kudu: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Blue_Wildebeest: [
    'Whitlock Model 86',
    'Ranger .243',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Gemsbok: [
    'Rangemaster 338',
    'Martensson 6.5 mm',
    'M1 Iwaniec',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.300 Canning Magnum',
    '.270 Stradivarius',
    'Rhino 454',
    '.44 Panther Magnum',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Bow',
    'Crossbows',
    'Miller Model 1981',
  ],
  Cape_Buffalo: [
    'Bow',
    'Rangemaster 338',
    'King 470DB',
    'Hudzik .50',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.300 Canning Magnum',
    'Rhino 454',
    'Miller Model 1981',
    'Bow',
    'Crossbows',
  ],
  Lion: [
    'Bow',
    'Rangemaster 338',
    'King 470DB',
    'Hudzik .50',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.300 Canning Magnum',
    'Rhino 454',
    'Miller Model 1981',
    'Bow',
    'Crossbows',
  ],
};
let ParqueFernando = {
  Cinnamon_Teal: [
    'Virant .22LR',
    'Mangiafico 410/45',
    'Andersson .22LR',
    'Nordin 20SA',
    'Bows',
    'Virant .22LR',
    'Miller Model 1981',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Blackbuck: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'Hudzik .50',
    'Crossbows',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Focoso 357',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Axis_Deer: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'Hudzik .50',
    'Crossbows',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Focoso 357',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Puma: [
    'Whitlock Model 86',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Mule_Deer: [
    'Whitlock Model 86',
    'Ranger .243',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Red_Deer: [
    'Whitlock Model 86',
    'Ranger .243',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Water_Buffalo: [
    'Bow',
    'Rangemaster 338',
    'King 470DB',
    'Hudzik .50',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.300 Canning Magnum',
    'Rhino 454',
    'Miller Model 1981',
    'Bow',
    'Crossbows',
  ],
};
let YukonValley = {
  Harlequin_Duck: [
    'Virant .22LR',
    'Mangiafico 410/45',
    'Andersson .22LR',
    'Nordin 20SA',
    'Bows',
    'Virant .22LR',
    'Miller Model 1981',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Red_Fox: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Focoso 357',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
    'Whitlock Model 86',
  ],
  Gray_Wolf: [
    'Whitlock Model 86',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Caribou: [
    'Whitlock Model 86',
    'Ranger .243',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Grizzly_Bear: [
    'Solokhin MN1890',
    'Rangemaster 338',
    'Martensson 6.5 mm',
    'M1 Iwaniec',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.300 Canning Magnum',
    '.270 Stradivarius',
    'Rhino 454',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Bow',
    'Crossbows',
    'Nordin 20SA',
    'Miller Model 1981',
    'Cacciatore 12G',
  ],
  Moose: [
    'Rangemaster 338',
    'Martensson 6.5 mm',
    'M1 Iwaniec',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.300 Canning Magnum',
    '.270 Stradivarius',
    'Rhino 454',
    '.44 Panther Magnum',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Bow',
    'Crossbows',
    'Miller Model 1981',
  ],
  Plains_Bison: [
    'Bow',
    'Rangemaster 338',
    'King 470DB',
    'Hudzik .50',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.300 Canning Magnum',
    'Rhino 454',
    'Miller Model 1981',
    'Bow',
    'Crossbows',
  ],
};
let CuatroColinasGameReserve = {
  European_Hare: [
    'Virant .22LR',
    'Mangiafico 410/45',
    'Andersson .22LR',
    'Nordin 20SA',
    'Bows',
    'Virant .22LR',
    'Miller Model 1981',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Roe_Deer: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'Hudzik .50',
    'Crossbows',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Focoso 357',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Iberian_Mouflon: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Ronda_Ibex: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Beceite_Ibex: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Gredos_Ibex: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  SE_Spanish_Ibex: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Wild_Boar: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Iberian_Wolf: [
    'Whitlock Model 86',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Red_Deer: [
    'Whitlock Model 86',
    'Ranger .243',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
};
let SilverRidgePeaks = {
  Turkey: [
    'Virant .22LR',
    'Mangiafico 410/45',
    'Andersson .22LR',
    'Nordin 20SA',
    'Bows',
    'Virant .22LR',
    'Miller Model 1981',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Pronghorn: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Mountain_Goat: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Bighorn_Sheep: [
    '.223 Docent',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Whitlock Model 86',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Mountain_Lion: [
    'Whitlock Model 86',
    'Vasquez Cyclone .45',
    'Ranger .243',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Mangiafico 410/45 Colt',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Mule_Deer: [
    'Whitlock Model 86',
    'Ranger .243',
    'Bows',
    'Solokhin MN1890',
    'M1 Iwaniec',
    'Martensson 6.5 mm',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.270 Stradivarius',
    'Crossbows',
    'Rhino 454',
    'Bows',
    'Miller Model 1981',
    'Focoso 357',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Crossbows',
  ],
  Black_Bear: [
    'Solokhin MN1890',
    'Rangemaster 338',
    'Martensson 6.5 mm',
    'M1 Iwaniec',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.300 Canning Magnum',
    '.270 Stradivarius',
    'Rhino 454',
    '.44 Panther Magnum',
    'Nordin 20SA',
    'Grelck Drilling Rifle',
    'Bow',
    'Crossbows',
    'Nordin 20SA',
    'Miller Model 1981',
    'Cacciatore 12G',
  ],
  Rocky_Mountain_Elk: [
    'Rangemaster 338',
    'Martensson 6.5 mm',
    'M1 Iwaniec',
    'Hudzik .50',
    'Eckers .30-06',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.300 Canning Magnum',
    '.270 Stradivarius',
    'Rhino 454',
    '.44 Panther Magnum',
    'Caversham Steward 12G',
    'Cacciatore 12G',
    'Bow',
    'Crossbows',
    'Miller Model 1981',
  ],
  Plains_Bison: [
    'Bow',
    'Rangemaster 338',
    'King 470DB',
    'Hudzik .50',
    'Coachmate Lever .45-70',
    '7mm Regent Magnum',
    '.300 Canning Magnum',
    'Rhino 454',
    'Miller Model 1981',
    'Bow',
    'Crossbows',
  ],
};

function get() {
  document.getElementById('gameboy').style.display = 'flex';
  document.querySelector('#questionH').setAttribute('class', 'democlass');
  var x = document.getElementById('inputGroupSelect04').value;
  console.log(x);
  if (x === '1') {
    document.getElementById('mapNameV').innerHTML = 'Layton Lake';
    lngth = 6;
    let arr = [];
    do {
      let ran = Math.floor(Math.random() * lngth);
      arr = arr.indexOf(ran) > -1 ? arr : arr.concat(ran);
    } while (arr.length < lngth);

    var types = Object.keys(chooseOption);
    console.log(types);
    console.log(arr);
    var getrandomnumar0 = arr[0];
    var getrandomnumar1 = arr[1];
    var getrandomnumar2 = arr[2];

    console.log(getrandomnumar0);
    console.log(getrandomnumar1);
    console.log(getrandomnumar2);

    var getrandomnum = arr;

    var animal = types[getrandomnum[0]];
    var animal2 = types[getrandomnum[1]];
    var animal3 = types[getrandomnum[2]];

    mapselected.innerHTML = animal;
    mapselected2.innerHTML = animal2;
    mapselected3.innerHTML = animal3;
    var no1 = getrandomnum[1];
    // var no2 = getrandomnum[1]
    // var no3 = getrandomnum[2]
    // gun 1
    var num = getrandomnumar0;
    var val = chooseOption[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected.innerHTML = gun;
    // gun 2
    var num = getrandomnumar1;
    var val = chooseOption[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected2.innerHTML = gun;
    // gun 3
    var num = getrandomnumar2;
    var val = chooseOption[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected3.innerHTML = gun;

    textContent = mapselected.textContent;
    if (textContent === 'Malard') {
      console.log(textContent);
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Mallard_.png');
    } else if (textContent === 'BlackBear') {
      console.log(textContent);
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Black_bear.png');
    } else if (textContent === 'Whitetail') {
      console.log(textContent);
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Whitetail_1.png');
    } else if (textContent === 'Rabbit') {
      console.log(textContent);
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/JackRabbit_1.png');
    } else if (textContent === 'Moose') {
      console.log(textContent);
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Moose_1.png');
    } else if (textContent === 'Blacktail') {
      console.log(textContent);
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Blacktail_1.png');
    } else if (textContent === 'Coyote') {
      console.log(textContent);
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Coyote_1.png');
    }
    // img animal 2 rotate
    textContent2 = mapselected2.textContent;
    if (textContent2 === 'Malard') {
      console.log(textContent2);
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Mallard_.png');
    } else if (textContent2 === 'BlackBear') {
      console.log(textContent2);
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Black_bear.png');
    } else if (textContent2 === 'Whitetail') {
      console.log(textContent2);
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Whitetail_1.png');
    } else if (textContent2 === 'Rabbit') {
      console.log(textContent2);
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/JackRabbit_1.png');
    } else if (textContent2 === 'Moose') {
      console.log(textContent2);
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Moose_1.png');
    } else if (textContent2 === 'Blacktail') {
      console.log(textContent2);
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Blacktail_1.png');
    } else if (textContent2 === 'Coyote') {
      console.log(textContent2);
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Coyote_1.png');
    }
    // animal 3
    textContent3 = mapselected3.textContent;
    if (textContent3 === 'Malard') {
      console.log(textContent3);
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Mallard_.png');
    } else if (textContent3 === 'BlackBear') {
      console.log(textContent3);
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Black_bear.png');
    } else if (textContent3 === 'Whitetail') {
      console.log(textContent3);
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Whitetail_1.png');
    } else if (textContent3 === 'Rabbit') {
      console.log(textContent3);
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/JackRabbit_1.png');
    } else if (textContent3 === 'Moose') {
      console.log(textContent3);
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Moose_1.png');
    } else if (textContent3 === 'Blacktail') {
      console.log(textContent3);
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Blacktail_1.png');
    } else if (textContent3 === 'Coyote') {
      console.log(textContent3);
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Coyote_1.png');
    }
  } else if (x === '2') {
    document.getElementById('mapNameV').innerHTML =
      'Hirschfelden Hunting Reserve';
    lngth = 7;
    let arr = [];
    do {
      let ran = Math.floor(Math.random() * lngth);
      arr = arr.indexOf(ran) > -1 ? arr : arr.concat(ran);
    } while (arr.length < lngth);

    var types = Object.keys(HirschfeldenHuntingReserve);
    console.log(types);
    console.log(arr);
    var getrandomnumar0 = arr[0];
    var getrandomnumar1 = arr[1];
    var getrandomnumar2 = arr[2];

    console.log(getrandomnumar0);
    console.log(getrandomnumar1);
    console.log(getrandomnumar2);

    var getrandomnum = arr;

    var animal = types[getrandomnum[0]];
    var animal2 = types[getrandomnum[1]];
    var animal3 = types[getrandomnum[2]];

    mapselected.innerHTML = animal;
    mapselected2.innerHTML = animal2;
    mapselected3.innerHTML = animal3;
    var no1 = getrandomnum[1];
    // var no2 = getrandomnum[1]
    // var no3 = getrandomnum[2]
    // gun 1
    var num = getrandomnumar0;
    var val = HirschfeldenHuntingReserve[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected.innerHTML = gun;
    // gun 2
    var num = getrandomnumar1;
    var val = HirschfeldenHuntingReserve[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected2.innerHTML = gun;
    // gun 3
    var num = getrandomnumar2;
    var val = HirschfeldenHuntingReserve[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected3.innerHTML = gun;

    textContent = mapselected.textContent;
    if (textContent === 'Canada_Goose') {
      console.log(textContent);
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Goose_1.png');
    } else if (textContent === 'Red_Fox') {
      console.log(textContent);
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Red_fox.png');
    } else if (textContent === 'Roe_Deer') {
      console.log(textContent);
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Roe_1.png');
    } else if (textContent === 'Fallow_Deer') {
      console.log(textContent);
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Fallow_1.png');
    } else if (textContent === 'Wild_Boar') {
      console.log(textContent);
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/WildBoar_1.png');
    } else if (textContent === 'Red_Deer') {
      console.log(textContent);
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Red_Deer.png');
    } else if (textContent === 'European_Bison') {
      console.log(textContent);
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/EuropeanBison_1.png');
    }
    // img animal 2 rotate
    textContent2 = mapselected2.textContent;
    if (textContent2 === 'Canada_Goose') {
      console.log(textContent2);
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Goose_1.png');
    } else if (textContent2 === 'Red_Fox') {
      console.log(textContent2);
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Red_fox.png');
    } else if (textContent2 === 'Roe_Deer') {
      console.log(textContent2);
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Roe_1.png');
    } else if (textContent2 === 'Fallow_Deer') {
      console.log(textContent2);
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Fallow_1.png');
    } else if (textContent2 === 'Wild_Boar') {
      console.log(textContent2);
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/WildBoar_1.png');
    } else if (textContent2 === 'Red_Deer') {
      console.log(textContent2);
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Red_Deer.png');
    } else if (textContent2 === 'European_Bison') {
      console.log(textContent2);
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/EuropeanBison_1.png');
    }
    // animal 3
    textContent3 = mapselected3.textContent;
    if (textContent3 === 'Canada_Goose') {
      console.log(textContent2);
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Goose_1.png');
    } else if (textContent3 === 'Red_Fox') {
      console.log(textContent3);
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Red_fox.png');
    } else if (textContent3 === 'Roe_Deer') {
      console.log(textContent3);
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Roe_1.png');
    } else if (textContent3 === 'Fallow_Deer') {
      console.log(textContent3);
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Fallow_1.png');
    } else if (textContent3 === 'Wild_Boar') {
      console.log(textContent3);
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/WildBoar_1.png');
    } else if (textContent3 === 'Red_Deer') {
      console.log(textContent3);
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Red_Deer.png');
    } else if (textContent3 === 'European_Bison') {
      console.log(textContent3);
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/EuropeanBison_1.png');
    }
  } else if (x === '3') {
    document.getElementById('mapNameV').innerHTML =
      'Medved Taiga National Park';
    lngth = 6;
    let arr = [];
    do {
      let ran = Math.floor(Math.random() * lngth);
      arr = arr.indexOf(ran) > -1 ? arr : arr.concat(ran);
    } while (arr.length < lngth);

    var types = Object.keys(MedvedTaigaNationalPark);
    console.log(types);
    console.log(arr);
    var getrandomnumar0 = arr[0];
    var getrandomnumar1 = arr[1];
    var getrandomnumar2 = arr[2];

    console.log(getrandomnumar0);
    console.log(getrandomnumar1);
    console.log(getrandomnumar2);

    var getrandomnum = arr;

    var animal = types[getrandomnum[0]];
    var animal2 = types[getrandomnum[1]];
    var animal3 = types[getrandomnum[2]];

    mapselected.innerHTML = animal;
    mapselected2.innerHTML = animal2;
    mapselected3.innerHTML = animal3;
    var no1 = getrandomnum[1];
    // var no2 = getrandomnum[1]
    // var no3 = getrandomnum[2]
    // gun 1
    var num = getrandomnumar0;
    var val = MedvedTaigaNationalPark[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected.innerHTML = gun;
    // gun 2
    var num = getrandomnumar1;
    var val = MedvedTaigaNationalPark[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected2.innerHTML = gun;
    // gun 3
    var num = getrandomnumar2;
    var val = MedvedTaigaNationalPark[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected3.innerHTML = gun;

    textContent = mapselected.textContent;
    if (textContent === 'Musk_Deer') {
      console.log(textContent);
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/MuskDeer_1.png');
    } else if (textContent === 'Eurasian_Lynx') {
      console.log(textContent);
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/EuropeanLynx_1.png');
    } else if (textContent === 'Wild_Boar') {
      console.log(textContent);
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/WildBoar_1.png');
    } else if (textContent === 'Reindeer') {
      console.log(textContent);
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/ReinDeer_1.png');
    } else if (textContent === 'Eurasian_Brown_Bear') {
      console.log(textContent);
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Eurasian_Brown_Bear.png');
    } else if (textContent === 'Moose') {
      console.log(textContent);
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Moose_1.png');
    }
    // img animal 2 rotate
    textContent2 = mapselected2.textContent;
    if (textContent2 === 'Musk_Deer') {
      console.log(textContent2);
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/MuskDeer_1.png');
    } else if (textContent2 === 'Eurasian_Lynx') {
      console.log(textContent2);
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/EuropeanLynx_1.png');
    } else if (textContent2 === 'Wild_Boar') {
      console.log(textContent2);
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/WildBoar_1.png');
    } else if (textContent2 === 'Reindeer') {
      console.log(textContent2);
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/ReinDeer_1.png');
    } else if (textContent2 === 'Eurasian_Brown_Bear') {
      console.log(textContent2);
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Eurasian_Brown_Bear.png');
    } else if (textContent2 === 'Moose') {
      console.log(textContent2);
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Moose_1.png');
    }
    // animal 3
    textContent3 = mapselected3.textContent;
    if (textContent3 === 'Musk_Deer') {
      console.log(textContent3);
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/MuskDeer_1.png');
    } else if (textContent3 === 'Eurasian_Lynx') {
      console.log(textContent3);
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/EuropeanLynx_1.png');
    } else if (textContent3 === 'Wild_Boar') {
      console.log(textContent3);
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/WildBoar_1.png');
    } else if (textContent3 === 'Reindeer') {
      console.log(textContent3);
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/ReinDeer_1.png');
    } else if (textContent3 === 'Eurasian_Brown_Bear') {
      console.log(textContent3);
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Eurasian_Brown_Bear.png');
    } else if (textContent3 === 'Moose') {
      console.log(textContent3);
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Moose_1.png');
    }
  } else if (x === '4') {
    document.getElementById('mapNameV').innerHTML = 'Vurhonga Savanna';
    lngth = 9;
    let arr = [];
    do {
      let ran = Math.floor(Math.random() * lngth);
      arr = arr.indexOf(ran) > -1 ? arr : arr.concat(ran);
    } while (arr.length < lngth);

    var types = Object.keys(VurhongaSavannaReserve);
    console.log(types);
    console.log(arr);
    var getrandomnumar0 = arr[0];
    var getrandomnumar1 = arr[1];
    var getrandomnumar2 = arr[2];

    console.log(getrandomnumar0);
    console.log(getrandomnumar1);
    console.log(getrandomnumar2);

    var getrandomnum = arr;

    var animal = types[getrandomnum[0]];
    var animal2 = types[getrandomnum[1]];
    var animal3 = types[getrandomnum[2]];

    mapselected.innerHTML = animal;
    mapselected2.innerHTML = animal2;
    mapselected3.innerHTML = animal3;
    var no1 = getrandomnum[1];
    // var no2 = getrandomnum[1]
    // var no3 = getrandomnum[2]
    // gun 1
    var num = getrandomnumar0;
    var val = VurhongaSavannaReserve[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected.innerHTML = gun;
    // gun 2
    var num = getrandomnumar1;
    var val = VurhongaSavannaReserve[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected2.innerHTML = gun;
    // gun 3
    var num = getrandomnumar2;
    var val = VurhongaSavannaReserve[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected3.innerHTML = gun;

    textContent = mapselected.textContent;
    if (textContent === 'Scrub_Hare') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/ScrubHare.png');
    } else if (textContent === 'Side_Striped_Jackal') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Side_Striped_Jackal.png');
    } else if (textContent === 'Springbok') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Springbok.png');
    } else if (textContent === 'Warthog') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Warthog.png');
    } else if (textContent === 'Lesser_Kudu') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Kudu1.png');
    } else if (textContent === 'Blue_Wildebeest') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/wildebeest.png');
    } else if (textContent === 'Gemsbok') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Gemsbok.png');
    } else if (textContent === 'Cape_Buffalo') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Cape_Buffalo.png');
    } else if (textContent === 'Lion') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Lion1.png');
    }
    // img animal 2 rotate
    textContent2 = mapselected2.textContent;
    if (textContent2 === 'Scrub_Hare') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/ScrubHare.png');
    } else if (textContent2 === 'Side_Striped_Jackal') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Side_Striped_Jackal.png');
    } else if (textContent2 === 'Springbok') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Springbok.png');
    } else if (textContent2 === 'Warthog') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Warthog.png');
    } else if (textContent2 === 'Lesser_Kudu') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Kudu1.png');
    } else if (textContent2 === 'Blue_Wildebeest') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/wildebeest.png');
    } else if (textContent2 === 'Gemsbok') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Gemsbok.png');
    } else if (textContent2 === 'Cape_Buffalo') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Cape_Buffalo.png');
    } else if (textContent2 === 'Lion') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Lion1.png');
    }
    // animal 3
    textContent3 = mapselected3.textContent;
    if (textContent3 === 'Scrub_Hare') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/ScrubHare.png');
    } else if (textContent3 === 'Side_Striped_Jackal') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Side_Striped_Jackal.png');
    } else if (textContent3 === 'Springbok') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Springbok.png');
    } else if (textContent3 === 'Warthog') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Warthog.png');
    } else if (textContent3 === 'Lesser_Kudu') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Kudu1.png');
    } else if (textContent3 === 'Blue_Wildebeest') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/wildebeest.png');
    } else if (textContent3 === 'Gemsbok') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Gemsbok.png');
    } else if (textContent3 === 'Cape_Buffalo') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Cape_Buffalo.png');
    } else if (textContent3 === 'Lion') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Lion1.png');
    }
  } else if (x === '5') {
    document.getElementById('mapNameV').innerHTML = 'Parque Fernando';
    lngth = 7;
    let arr = [];
    do {
      let ran = Math.floor(Math.random() * lngth);
      arr = arr.indexOf(ran) > -1 ? arr : arr.concat(ran);
    } while (arr.length < lngth);

    var types = Object.keys(ParqueFernando);
    console.log(types);
    console.log(arr);
    var getrandomnumar0 = arr[0];
    var getrandomnumar1 = arr[1];
    var getrandomnumar2 = arr[2];

    console.log(getrandomnumar0);
    console.log(getrandomnumar1);
    console.log(getrandomnumar2);

    var getrandomnum = arr;

    var animal = types[getrandomnum[0]];
    var animal2 = types[getrandomnum[1]];
    var animal3 = types[getrandomnum[2]];

    mapselected.innerHTML = animal;
    mapselected2.innerHTML = animal2;
    mapselected3.innerHTML = animal3;
    var no1 = getrandomnum[1];
    // var no2 = getrandomnum[1]
    // var no3 = getrandomnum[2]
    // gun 1
    var num = getrandomnumar0;
    var val = ParqueFernando[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected.innerHTML = gun;
    // gun 2
    var num = getrandomnumar1;
    var val = ParqueFernando[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected2.innerHTML = gun;
    // gun 3
    var num = getrandomnumar2;
    var val = ParqueFernando[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected3.innerHTML = gun;

    textContent = mapselected.textContent;
    if (textContent === 'Cinnamon_Teal') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/CinnamonTeal.png');
    } else if (textContent === 'Blackbuck') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Blackbuck.png');
    } else if (textContent === 'Axis_Deer') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Axisdeer.png');
    } else if (textContent === 'Puma') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Puma.png');
    } else if (textContent === 'Mule_Deer') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Muledeer.png');
    } else if (textContent === 'Red_Deer') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/wildebeest.png');
    } else if (textContent === 'Water_Buffalo') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/water_Buffalo.png');
    }
    // img animal 2 rotate
    textContent2 = mapselected2.textContent;
    if (textContent2 === 'Cinnamon_Teal') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/CinnamonTeal.png');
    } else if (textContent2 === 'Blackbuck') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Blackbuck.png');
    } else if (textContent2 === 'Axis_Deer') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Axisdeer.png');
    } else if (textContent2 === 'Puma') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Puma.png');
    } else if (textContent2 === 'Mule_Deer') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Muledeer.png');
    } else if (textContent2 === 'Red_Deer') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/wildebeest.png');
    } else if (textContent2 === 'Water_Buffalo') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/water_Buffalo.png');
    }
    // animal 3
    textContent3 = mapselected3.textContent;
    if (textContent3 === 'Cinnamon_Teal') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/CinnamonTeal.png');
    } else if (textContent3 === 'Blackbuck') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Blackbuck.png');
    } else if (textContent3 === 'Axis_Deer') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Axisdeer.png');
    } else if (textContent3 === 'Puma') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Puma.png');
    } else if (textContent3 === 'Mule_Deer') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Muledeer.png');
    } else if (textContent3 === 'Red_Deer') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/wildebeest.png');
    } else if (textContent3 === 'Water_Buffalo') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/water_Buffalo.png');
    }
  } else if (x === '6') {
    document.getElementById('mapNameV').innerHTML = 'Yukon Valley';
    lngth = 7;
    let arr = [];
    do {
      let ran = Math.floor(Math.random() * lngth);
      arr = arr.indexOf(ran) > -1 ? arr : arr.concat(ran);
    } while (arr.length < lngth);

    var types = Object.keys(YukonValley);
    console.log(types);
    console.log(arr);
    var getrandomnumar0 = arr[0];
    var getrandomnumar1 = arr[1];
    var getrandomnumar2 = arr[2];

    console.log(getrandomnumar0);
    console.log(getrandomnumar1);
    console.log(getrandomnumar2);

    var getrandomnum = arr;

    var animal = types[getrandomnum[0]];
    var animal2 = types[getrandomnum[1]];
    var animal3 = types[getrandomnum[2]];

    mapselected.innerHTML = animal;
    mapselected2.innerHTML = animal2;
    mapselected3.innerHTML = animal3;
    var no1 = getrandomnum[1];
    // var no2 = getrandomnum[1]
    // var no3 = getrandomnum[2]
    // gun 1
    var num = getrandomnumar0;
    var val = YukonValley[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected.innerHTML = gun;
    // gun 2
    var num = getrandomnumar1;
    var val = YukonValley[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected2.innerHTML = gun;
    // gun 3
    var num = getrandomnumar2;
    var val = YukonValley[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected3.innerHTML = gun;

    textContent = mapselected.textContent;
    if (textContent === 'Cinnamon_Teal') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/CinnamonTeal.png');
    } else if (textContent === 'Harlequin_Duck') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Harlequinduck.png');
    } else if (textContent === 'Red_Fox') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Red_fox.png');
    } else if (textContent === 'Gray_Wolf') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Gray_wolf.png');
    } else if (textContent === 'Caribou') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Caribou.png');
    } else if (textContent === 'Grizzly_Bear') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/GrizzlyBear.png');
    } else if (textContent === 'Moose') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Moose_1.png');
    } else if (textContent === 'Plains_Bison') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Plains_bison.png');
    }
    // img animal 2 rotate
    textContent2 = mapselected2.textContent;
    if (textContent2 === 'Cinnamon_Teal') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/CinnamonTeal.png');
    } else if (textContent2 === 'Harlequin_Duck') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Harlequinduck.png');
    } else if (textContent2 === 'Red_Fox') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Red_fox.png');
    } else if (textContent2 === 'Gray_Wolf') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Gray_wolf.png');
    } else if (textContent2 === 'Caribou') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Caribou.png');
    } else if (textContent2 === 'Grizzly_Bear') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/GrizzlyBear.png');
    } else if (textContent2 === 'Moose') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Moose_1.png');
    } else if (textContent2 === 'Plains_Bison') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Plains_bison.png');
    }
    // animal 3
    textContent3 = mapselected3.textContent;
    if (textContent3 === 'Cinnamon_Teal') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/CinnamonTeal.png');
    } else if (textContent3 === 'Harlequin_Duck') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Harlequinduck.png');
    } else if (textContent3 === 'Red_Fox') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Red_fox.png');
    } else if (textContent3 === 'Gray_Wolf') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Gray_wolf.png');
    } else if (textContent3 === 'Caribou') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Caribou.png');
    } else if (textContent3 === 'Grizzly_Bear') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/GrizzlyBear.png');
    } else if (textContent3 === 'Moose') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Moose_1.png');
    } else if (textContent3 === 'Plains_Bison') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Plains_bison.png');
    }
  } else if (x === '7') {
    document.getElementById('mapNameV').innerHTML =
      'Cuatro Colinas Game Reserve';
    lngth = 7;
    let arr = [];
    do {
      let ran = Math.floor(Math.random() * lngth);
      arr = arr.indexOf(ran) > -1 ? arr : arr.concat(ran);
    } while (arr.length < lngth);

    var types = Object.keys(CuatroColinasGameReserve);
    console.log(types);
    console.log(arr);
    var getrandomnumar0 = arr[0];
    var getrandomnumar1 = arr[1];
    var getrandomnumar2 = arr[2];

    console.log(getrandomnumar0);
    console.log(getrandomnumar1);
    console.log(getrandomnumar2);

    var getrandomnum = arr;

    var animal = types[getrandomnum[0]];
    var animal2 = types[getrandomnum[1]];
    var animal3 = types[getrandomnum[2]];

    mapselected.innerHTML = animal;
    mapselected2.innerHTML = animal2;
    mapselected3.innerHTML = animal3;
    var no1 = getrandomnum[1];
    // var no2 = getrandomnum[1]
    // var no3 = getrandomnum[2]
    // gun 1
    var num = getrandomnumar0;
    var val = CuatroColinasGameReserve[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected.innerHTML = gun;
    // gun 2
    var num = getrandomnumar1;
    var val = CuatroColinasGameReserve[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected2.innerHTML = gun;
    // gun 3
    var num = getrandomnumar2;
    var val = CuatroColinasGameReserve[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected3.innerHTML = gun;

    textContent = mapselected.textContent;
    if (textContent === 'European_Hare') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/europeanHare.png');
    } else if (textContent === 'Roe_Deer') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Roe_1.png');
    } else if (textContent === 'Iberian_Mouflon') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/IberianMouflon.png');
    } else if (textContent === 'Ronda_Ibex') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/rondaIbex.png');
    } else if (textContent === 'Beceite_Ibex') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/BeceiteIbex.png');
    } else if (textContent === 'Gredos_Ibex') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/GredosIbex.png');
    } else if (textContent === 'SE_Spanish_Ibex') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/SESpanishibex.png');
    } else if (textContent === 'Wild_Boar') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/WildBoar_1.png');
    } else if (textContent === 'Iberian_Wolf') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/iberianWolf.png');
    } else if (textContent === 'Red_Deer') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Red_Deer.png');
    }
    // img animal 2 rotate
    textContent2 = mapselected2.textContent;
    if (textContent2 === 'European_Hare') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/europeanHare.png');
    } else if (textContent2 === 'Roe_Deer') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Roe_1.png');
    } else if (textContent2 === 'Iberian_Mouflon') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/IberianMouflon.png');
    } else if (textContent2 === 'Ronda_Ibex') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/rondaIbex.png');
    } else if (textContent2 === 'Beceite_Ibex') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/BeceiteIbex.png');
    } else if (textContent2 === 'Gredos_Ibex') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/GredosIbex.png');
    } else if (textContent2 === 'SE_Spanish_Ibex') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/SESpanishibex.png');
    } else if (textContent2 === 'Wild_Boar') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/WildBoar_1.png');
    } else if (textContent2 === 'Iberian_Wolf') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/iberianWolf.png');
    } else if (textContent2 === 'Red_Deer') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Red_Deer.png');
    }
    // animal 3
    textContent3 = mapselected3.textContent;
    if (textContent3 === 'European_Hare') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/europeanHare.png');
    } else if (textContent3 === 'Roe_Deer') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Roe_1.png');
    } else if (textContent3 === 'Iberian_Mouflon') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/IberianMouflon.png');
    } else if (textContent3 === 'Ronda_Ibex') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/rondaIbex.png');
    } else if (textContent3 === 'Beceite_Ibex') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/BeceiteIbex.png');
    } else if (textContent3 === 'Gredos_Ibex') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/GredosIbex.png');
    } else if (textContent3 === 'SE_Spanish_Ibex') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/SESpanishibex.png');
    } else if (textContent3 === 'Wild_Boar') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/WildBoar_1.png');
    } else if (textContent3 === 'Iberian_Wolf') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/iberianWolf.png');
    } else if (textContent3 === 'Red_Deer') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Red_Deer.png');
    }
  } else if (x === '8') {
    document.getElementById('mapNameV').innerHTML = 'Silver Ridge Peaks';
    lngth = 9;
    let arr = [];
    do {
      let ran = Math.floor(Math.random() * lngth);
      arr = arr.indexOf(ran) > -1 ? arr : arr.concat(ran);
    } while (arr.length < lngth);

    var types = Object.keys(SilverRidgePeaks);
    console.log(types);
    console.log(arr);
    var getrandomnumar0 = arr[0];
    var getrandomnumar1 = arr[1];
    var getrandomnumar2 = arr[2];

    console.log(getrandomnumar0);
    console.log(getrandomnumar1);
    console.log(getrandomnumar2);

    var getrandomnum = arr;

    var animal = types[getrandomnum[0]];
    var animal2 = types[getrandomnum[1]];
    var animal3 = types[getrandomnum[2]];

    mapselected.innerHTML = animal;
    mapselected2.innerHTML = animal2;
    mapselected3.innerHTML = animal3;
    var no1 = getrandomnum[1];
    // var no2 = getrandomnum[1]
    // var no3 = getrandomnum[2]
    // gun 1
    var num = getrandomnumar0;
    var val = SilverRidgePeaks[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected.innerHTML = gun;
    // gun 2
    var num = getrandomnumar1;
    var val = SilverRidgePeaks[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected2.innerHTML = gun;
    // gun 3
    var num = getrandomnumar2;
    var val = SilverRidgePeaks[types[num]];
    console.log(val);
    var vn = Math.floor(Math.random() * val.length);
    var gun = val[vn];
    gunselected3.innerHTML = gun;

    textContent = mapselected.textContent;
    if (textContent === 'Turkey') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Turkey.png');
    } else if (textContent === 'Pronghorn') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Pronghorn.png');
    } else if (textContent === 'Mountain_Goat') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Mountain_goat.png');
    } else if (textContent === 'Bighorn_Sheep') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Bighornsheep.png');
    } else if (textContent === 'Mountain_Lion') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Mointain_lion_1.png');
    } else if (textContent === 'Mule_Deer') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Muledeer.png');
    } else if (textContent === 'Black_Bear') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Black_bear.png');
    } else if (textContent === 'Rocky_Mountain_Elk') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Rockymountainelk.png');
    } else if (textContent === 'Plains_Bison') {
      document
        .getElementById('A1img')
        .setAttribute('src', '/img/Icons/Plains_bison.png');
    }
    // img animal 2 rotate
    textContent2 = mapselected2.textContent;
    if (textContent2 === 'Turkey') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Turkey.png');
    } else if (textContent2 === 'Pronghorn') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Pronghorn.png');
    } else if (textContent2 === 'Mountain_Goat') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Mountain_goat.png');
    } else if (textContent2 === 'Bighorn_Sheep') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Bighornsheep.png');
    } else if (textContent2 === 'Mountain_Lion') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Mointain_lion_1.png');
    } else if (textContent2 === 'Mule_Deer') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Muledeer.png');
    } else if (textContent2 === 'Black_Bear') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Black_bear.png');
    } else if (textContent2 === 'Rocky_Mountain_Elk') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Rockymountainelk.png');
    } else if (textContent2 === 'Plains_Bison') {
      document
        .getElementById('A2img')
        .setAttribute('src', '/img/Icons/Plains_bison.png');
    }
    // animal 3
    textContent3 = mapselected3.textContent;
    if (textContent3 === 'Turkey') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Turkey.png');
    } else if (textContent3 === 'Pronghorn') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Pronghorn.png');
    } else if (textContent3 === 'Mountain_Goat') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Mountain_goat.png');
    } else if (textContent3 === 'Bighorn_Sheep') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Bighornsheep.png');
    } else if (textContent3 === 'Mountain_Lion') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Mointain_lion_1.png');
    } else if (textContent3 === 'Mule_Deer') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Muledeer.png');
    } else if (textContent3 === 'Black_Bear') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Black_bear.png');
    } else if (textContent3 === 'Rocky_Mountain_Elk') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Rockymountainelk.png');
    } else if (textContent3 === 'Plains_Bison') {
      document
        .getElementById('A3img')
        .setAttribute('src', '/img/Icons/Plains_bison.png');
    }
  }
}

// if (time < 10) {
//     greeting = "Good morning";
//   } else if (time < 20) {
//     greeting = "Good day";
//   } else {
//     greeting = "Good evening";
//   }

// let chooseOption = {
//   malard: ['gun 1', 'gun 2', 'gun 3', 'gun 4'],
//   rabbit: ['gun 3', 'gun 4', 'gun 5'],
//   whitetail: ['gun 6', 'gun 7', 'gun 8'],
//   Blacktail: ['gun 6', 'gun 7', 'gun 8'],
//   BlackBear: ['gun 6', 'gun 7', 'gun 8'],
//   Moose: ['gun 6', 'gun 7', 'gun 8'],
// };

// function get() {
//   lngth = 6;
//   let arr = [];
//   do {
//     let ran = Math.floor(Math.random() * lngth);
//     arr = arr.indexOf(ran) > -1 ? arr : arr.concat(ran);
//   } while (arr.length < lngth);

//   var types = Object.keys(chooseOption);
//   var getrandomnum = arr;
//   var animal = types[getrandomnum[2]];
//   console.log(animal);
// }
// var x = document.getElementById('inputGroupSelect04').value;
// if (x === '1')

function addinfo() {
  var globscore1 = document.getElementById('A1score').innerText;
  var globscore2 = document.getElementById('A2score').innerText;
  var globscore3 = document.getElementById('A3score').innerText;

  var rent1 = globscore1.replace('Your score is: ', '');
  var rent2 = globscore2.replace('Your score is: ', '');
  var rent3 = globscore3.replace('Your score is: ', '');

  playerScore = Number(rent1) + Number(rent2) + Number(rent3);
  console.log(playerScore);
  var blov1 = Boolean(globscore1);
  var blov2 = Boolean(globscore2);
  var blov3 = Boolean(globscore3);

  if (blov1 === true && blov2 === true && blov3 === true) {
    var tabledown = document.createElement('TD'); // Create a <li> node
    var scoredown = document.createElement('TD'); // Create a <li> node
    var xbtn = document.createElement('img');

    var ntr = document.createElement('TR'); // Create a <li> node
    var name = document.getElementById('playerNinput').value;

    var textnode = document.createTextNode(name); // Create a text node
    var scorenode = document.createTextNode(playerScore); // Create a text node
    var btnx = document.createTextNode('X'); // Create a text node
    xbtn.className = 'btnx';
    xbtn.src = '/img/Icons/x-square.svg';
    xbtn.width = '32';
    xbtn.height = '32';
    xbtn.title = 'Bootstrap';
    tabledown.appendChild(textnode); // Append the text to <li>
    scoredown.appendChild(scorenode); // Append the text to <li>
    xbtn.appendChild(btnx);

    document
      .getElementById('tablebody')
      .appendChild(ntr)
      .appendChild(tabledown);
    document
      .getElementById('tablebody')
      .appendChild(ntr)
      .appendChild(scoredown); // Append <li> to <ul> with id="myList"
    document.getElementById('tablebody').appendChild(ntr).appendChild(xbtn);
  } else {
    console.log('cards not calulated');
    toumsg = document.querySelector('#plcss > h3');
    toumsg.innerHTML = "Calulate Score card's please.";
    setTimeout(function () {
      toumsg = document.querySelector('#plcss > h3');
      toumsg.innerHTML = ' ';
    }, 5000);
  }
  var inpts = document.getElementById('playerNinput');
  inpts.value = '';
}
var theParent = document.querySelector('#tablebody');
theParent.addEventListener('click', doSomething, false);

function doSomething(e) {
  if (event.target.className === 'btnx') {
    var rem = event.target.closest('tr');
    this.removeChild(rem);
  }
  return false;
}
function mielies() {
  var globscore1 = document.getElementById('A1score').innerText;
  var globscore2 = document.getElementById('A2score').innerText;
  var globscore3 = document.getElementById('A3score').innerText;
  var rent1 = globscore1.replace('Your score is: ', '');
  var rent2 = globscore2.replace('Your score is: ', '');
  var rent3 = globscore3.replace('Your score is: ', '');

  playerScore = Number(rent1) + Number(rent2) + Number(rent3);
  console.log(playerScore);
}
