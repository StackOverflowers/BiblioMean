const Book = require('../models/book');


const registerBook = async (req, res) => {
    if(!req.body.name || !req.body.author || !req.body.id_library) return res.status(400).send("Sorry check all the fields")

    let existingBook = await Book.findOne({name: req.body.name});

    if(existingBook) return res.status(400).send("Sorry that book its already registered");


    const book = new Book({
        name: req.body.name,
        description:req.body.description,
        author: req.body.author,
        status:true,
        id_library:req.body.id_library
    })


    let result = await book.save();

    if(!result) return res.status(400).send("Sorry cant save the book try again");

    return res.status(200).send({result});

}

const listBook = async (req, res) => {
    const book = await Book.findOne({id_library:req.user.id_library});

    if(!book) return res.status(400).send("Sorry No books on that library");

    return res.status(200).send({book});
}


module.exports = {registerBook,listBook}