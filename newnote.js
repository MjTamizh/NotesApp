const fs = require('fs');

const addNote = function(title, body){
    const notes = loadNotes();
}

const loadNotes = function(){
 
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson)
        
    } catch (e) {
        return []
    }
 
}
 