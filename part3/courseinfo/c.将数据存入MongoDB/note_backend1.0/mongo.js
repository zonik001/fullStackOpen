const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/NotesApp', { useNewUrlParser: true, useUnifiedTopology: true });

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
    content: 'Browser can execute only Javascript',
    date: new Date(),
    important: true,
})

// note.save().then(result => {
//     console.log('note saved!')
//     mongoose.connection.close()
// })

Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
})