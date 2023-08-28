const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: 'Albert',
  },
  {
    id: 1,
    name: 'Elon',
  },
  {
    id: 2,
    name: 'Mark Zukerburg',
  },
];

app.get('/', (req, res) => {
  res.send('Hello, Rakesh!');
});

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];

  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: 'friend does not exist!',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
