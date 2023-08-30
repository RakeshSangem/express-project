const model = require('../models/friends.model');

const getFriends = (req, res) => {
  res.json(model);
};

const getFriend = (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = model[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: 'Friend does not exist',
    });
  }
};

const postFriend = (req, res) => {
  if (!req.body.name) {
    req.status(400).json({
      error: 'Missing friend Name',
    });
  }

  const newFriend = {
    name: req.body.name,
    id: model.length,
  };

  model.push(newFriend);

  res.json(newFriend);
};

module.exports = {
  postFriend,
  getFriend,
  getFriends,
};
