const { json } = require('express/lib/response');
const generator = require('../util/generator');
const memStorage = require('../util/memory.storage');
const model = require('../model/note.model');

exports.getAllNotes = (req,res) => {
    // var new_id_1   = generator.generate();
    // memStorage.store.setItem(new_id_1, 'Item1');
    // var new_id_2   = generator.generate();
    // memStorage.store.setItem(new_id_2, 'Item2');

    // var keys = memStorage.getKeys(memStorage.store);
    var values = memStorage.getvalues(memStorage.store);

    console.log("vlaues ..." + JSON.stringify(values));

    // var Note = model.Note;
    // var noteObj = new Note(new_id_1,'title1','content of title1','Ahmed Gamal', new Date());
    //res.send('get all notes.....KEYS.....' + JSON.stringify(keys));
    res.status(200).send('get all notes....' + JSON.stringify(values));
}

exports.saveNote = (req,res) => {
    var seqId   = generator.generate();
    var createdBy = 'admin';
    var createdOn = new Date();
    //req.body
    var title =  req.body.title;
    var content = req.body.content;
    // validation to important field from Docs of express handling errors
    if(!title || !content){
        return res.status(500).send({error: 'Title and content must be available'});
    }

    
    var Note = model.Note;
    var noteObj = new Note(seqId, title, content, createdBy, createdOn);
    memStorage.store.setItem(seqId, noteObj);
    res.status(201).send('successfully Note created and saved');
}

exports.updateNote = (req,res) => {
    res.send('update note');
}

exports.deleteNote = (req,res) => {
    res.send('delete note');
}