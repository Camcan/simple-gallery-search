const express = require('express')

const app = express()
app.use(express.json());

app.get('', (_, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/api/data', (req, res) => {
  const searchResults = searchImages(req.body);
  res.json(searchResults);
});

app.listen(3000, () => {
  console.log('The magic is happening on port 3000')
});

// Mock wordlist used to generate mock image data
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
 'https://via.placeholder.com/150x350/FF0000/808080',
 'https://via.placeholder.com/150/FFFF00/000000'
]

const mockImageData = words.reduce((acc, w, i) => {
  console.log(i, i % 4, imageUrls[i % 3]);
  return [
    ...acc,
    {
      name: [w, words[i-1]].join(' '),
      imageUrl: imageUrls[i % 3]
    }
  ];
}, []);


function searchImages({ query }) {
  if (!query) return mockImageData;

  const queryParts = query
    .trim()
    .split(' ');

  return mockImageData.filter(({ name }) => {
    // Matches if no query parts are absent from the name
    return !queryParts.find(part => !name.includes(part));
  })
};

