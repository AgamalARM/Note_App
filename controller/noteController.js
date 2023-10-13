const { json } = require('express/lib/response');
const generator = require('../util/generator');
const memStorage = require('../util/memory.storage');
const model = require('../model/note.model');

exports.getAllNotes = (req,res) => {
    var new_id_1   = generator.generate();
    memStorage.store.setItem(new_id_1, 'Item1');
    var new_id_2   = generator.generate();
    memStorage.store.setItem(new_id_2, 'Item2');

    var keys = memStorage.getKeys(memStorage.store);
    var values = memStorage.getvalues(memStorage.store);

    console.log("vlaues ..." + JSON.stringify(values));

    var Note = model.Note;
    var noteObj = new Note(new_id_1,'title1','content of title1','Ahmed Gamal', new Date());
    //res.send('get all notes.....KEYS.....' + JSON.stringify(keys));
    res.send('get all notes.....note object.....' + JSON.stringify(noteObj));
}

exports.saveNote = (req,res) => {
    res.send('save note');
}

exports.updateNote = (req,res) => {
    res.send('update note');
}

exports.deleteNote = (req,res) => {
    res.send('delete note');
}