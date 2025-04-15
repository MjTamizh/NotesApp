const fs = require('fs');
const chalk = require("chalk");


const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json');
        // console.log(dataBuffer);

        const dataJson = dataBuffer.toString();
        // console.log( 'dataJson' , dataJson);

        return JSON.parse(dataJson)

    } catch (e) {
        return []
    }

}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson)
}
// add
const addNote = (title, body) => {
    const notes = loadNotes();

    // console.log( 'notes', notes);


    // const duplicateNotes = notes.filter(function (note){
    //     return note.title === title
    // })

    // const duplicateNotes = notes.filter((note)=>note.title === title)

    const duplicateNote = notes.find((note) => note.title === title)
    debugger
    // duplicateNotes.length === 0
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse('new notes is added'));
    }
    else {
        console.log(chalk.red.inverse('note title taken already used'));

    }

}

// remove

const removeNote = (title) => {
    // console.log("remove" , title);
    const notes = loadNotes();
    // console.log('notes' ,notes);

    // const checkTitle =  notes.filter(function(note){
    //     return note.title !== title
    // })

    const checkTitle = notes.filter((note) => note.title !== title)

    if (notes.length > checkTitle.length) {
        console.log(chalk.green.inverse('note removed'));
        saveNotes(checkTitle)
    }
    else {
        console.log(chalk.red.inverse(' not found note'));

    }


}


const listNotes = () => {
    console.log(chalk.green.inverse('title List :'));

    const list = loadNotes();
    console.log(list);

    list.forEach((val) => {
        console.log(val.title);

    })



}

const readNote = (title) => {
    const readVal = loadNotes();

    const checknote = readVal.find((val) => val.title === title);
    // console.log(checknote);
    // console.log(readVal);
    if (!checknote) {
        console.log(chalk.red.inverse("no data in the title"));

    } else {

        let data = JSON.stringify(checknote)

        console.log(chalk.green.inverse('data : ' + data));
    }

    // console.log( chalk.green.inverse('reading'));


}

module.exports = { addNote, removeNote, listNotes, readNote };