const getMessages = (req, res) => {
  res.send('<ul><li>Helloo Albert!</li></ul>');
};

const postMessages = (req, res) => {
  console.log('Updating messages...');
};

module.exports = {
  getMessages,
  postMessages,
};
