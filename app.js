
const { default: chalk } = require("chalk");
const yargs = require("yargs");
const  notes  = require("./note");
const express = require('express');

const app = express();

const Port = process.env.PORT || 4040;
 

 
// add
 
yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body:{
        describe:'from body',
        demandOption:true,
        type:"string"
    }
  },
  handler: (argv)=> {
    // console.log('Title:', argv.title);
    // console.log('Body:', argv.body);
    notes.addNote(argv.title , argv.body)

  }
});
 
 


//remove
yargs.command({
    command:"remove",
    describe:"remove data",
    builder:{
      title:{
        describe:"Remove Title",
        demandOption:true,
        type:"string"
      }
    },
    handler:(argv)=>{
      notes.removeNote(argv.title)
    }
})

// list
yargs.command(
  {
   command:'list',
   describe:'list is showed',
   handler(){
     notes.listNotes()
       
   }
  } 
)



// read
yargs.command({
  command:'read',
  describe:'single note',
  builder:{
    title:{
      describe:'view a note',
      demandOption:true,
      type:'string'
    }
  },
  handler:(argv)=>{
    notes.readNote(argv.title)
  }
})

 console.log(__dirname);
 
 
yargs.parse()
// console.log(process.argv);
// console.log(yargs.argv);
// console.log(notes);
app.listen(Port,()=>{
  console.log('App runing in the port ' +Port );
  
})