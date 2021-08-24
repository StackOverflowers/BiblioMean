const Library = require("../models/library");

const registerLibrary = async (req, res) => {
  if (!req.body.name || !req.body.address)
    return res.status(400).send("Incomplete Data");

  let existingLibrary = await Library.findOne({ address: req.body.address });
  if (existingLibrary) return res.status(400).send("Library already exists");

  let library = new Library({
      name: req.body.name,
      address: req.body.address,
      dbStatus: true,
  });

  let result = await library.save();
  if(!result) return res.status(400).send("Process failed: cannot register library");
  return res.status(200).send({result});
};

const listLibrary = async (req, res) => {
    let library = await Library.find();
    if(!library || library.length ===0) return res.status(400).send("Empty Library list");
    return res.status(200).send({library});
};

const updateLibrary = async (req, res) => {


    if(!req.body._id|| !req.body.name) return res.status(400).send("Incomplete Data");

    let library = await Library.findByIdAndUpdate(req.body._id, {
        name: req.body.name,
    });
    if(!library) return res.status(400).send("Error editing library");
    return res.status(200).send({library});
};

module.exports = { registerLibrary, listLibrary, updateLibrary };
