const words = [
  "sausage",
  "blubber",
  "pencil",
  "cloud",
  "moon",
  "water",
  "computer",
  "school",
  "network",
  "hammer",
  "walking",
  "violently",
  "mediocre",
  "literature",
  "chair",
  "two",
  "window",
  "cords",
  "musical",
  "zebra",
  "xylophone",
  "penguin",
  "home",
  "dog",
  "final",
  "ink",
  "teacher",
  "fun",
  "website",
  "banana",
  "uncle",
  "softly",
  "mega",
  "ten",
  "awesome",
  "attatch",
  "blue",
  "internet",
  "bottle",
  "tight",
  "zone",
  "tomato",
  "prison",
  "hydro",
  "cleaning",
  "telivision",
  "send",
  "frog",
  "cup",
  "book",
  "zooming",
  "falling",
  "evily",
  "gamer",
  "lid",
  "juice",
  "moniter",
  "captain",
  "bonding",
  "loudly",
  "thudding",
  "guitar",
  "shaving",
  "hair",
  "soccer",
  "water",
  "racket",
  "table",
  "late",
  "media",
  "desktop",
  "flipper",
  "club",
  "flying",
  "smooth",
  "monster",
  "purple",
  "guardian",
  "bold",
  "hyperlink",
  "presentation",
  "world",
  "national  ",
  "comment",
  "element",
  "magic",
  "lion",
  "sand",
  "crust",
  "toast",
  "jam",
  "hunter",
  "forest",
  "foraging",
  "silently"
];

const imageUrls = [
 'https://via.placeholder.com/350x150/0000FF/808080',
 'https://via.placeholder.com/150x350/0000FF/808080',
 'https://via.placeholder.com/150/FFFF00/000000'
]

const imageData = words.reduce((acc, w, i) => {
  if (!i % 2) return acc;

  return [
    ...acc,
    {
      name: [w, words[i-1]].join(' '),
      imageUrl: imageUrls[i % 4]
    }
  ];
}, []);


module.exports = function searchImages({ query }) {
  if (!query) return imageData;

  const queryParts = query
    .trim()
    .split(' ');

  return imageData.filter(({ name }) => {
    for (const part in queryParts) {
      if (name.includes(part)) return false;
    };
    return true;
  })
};
