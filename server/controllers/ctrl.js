module.exports = {
  getAnimals(req, res) {
    const db = req.app.get('db');
    db
      .getAnimals()
      .then(animals => {
        console.log('animals: ', animals);
        return res.status(200).json(animals);
      })
      .catch(console.log);
  },
  updateAnimal(req, res) {
    const db = req.app.get('db');
    db
      .updateAnimal([req.body.type, req.params.type])
      .then(animals => res.status(200).json(animals))
      .catch(console.log);
  },
  postAnimal(req, res) {
    const db = req.app.get('db');
    db
      .postAnimals([req.body.type, req.body.color])
      .then(animals => res.status(200).json(animals))
      .catch(console.log);
  }
};
