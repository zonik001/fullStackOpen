const mongoose = require('mongoose')

const process = process
const url = process.env.MONGODB_URI  


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log(url,result)
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })
// 获取命令行参数
// const name = process.argv[2]
// const number = process.argv[3]

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 5,
        required: true
    },
    number: {
        type: String,
        validate: {
            validator: (v)=> {
                return /^(\d{2,3}-)?\d{6,}$/.test(v)
            },
            message: props => `${props.value} 不是有效电话号码！`
        },
        required: [true, '电话号码必须存在']
    }
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personSchema)

  
