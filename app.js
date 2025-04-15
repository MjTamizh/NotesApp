// 1
// const cmd = process.argv[2];
// // console.log(cmd);
 
// if (cmd === "add") {
//     console.log('Adeed this data');
    
// } else if(cmd === "remove"){
//     console.log('Removed this data');
    
// }
 
// const  thirdCmd = process.argv[3];
 
// console.log(thirdCmd);
 
 
// 2
const { default: chalk } = require("chalk");
const yargs = require("yargs");
const  notes  = require("./note");

 
// yargs.version('11.3.0')
 
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

 
 
yargs.parse()
// console.log(process.argv);
// console.log(yargs.argv);
// console.log(notes);
