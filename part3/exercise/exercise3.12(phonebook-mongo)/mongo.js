const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/PhonebookApp' //PhonebookApp作为数据库名
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
// 获取命令行参数
const name = process.argv[2]
const number = process.argv[3]

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema) //创建一个名为persons的集合

const person = new Person({
    name: name,
    number: number
})

// 查看persons集合中所有文档
Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
})

// 命令 node .\mongo.js "Arto Vihavainen" 045-1232456
// 向perosns集合中添加person文档
// person.save().then((result)=> {
//     console.log(`added ${name} number ${number} to phonebook`);
//     mongoose.connection.close()
// })

// 删除文档中第一个name属性为Anna的文档
// Person.deleteOne({ name: 'Arto Vihavainen' }).then((err)=> {
//     if(err){
//         console.log(err);
//     }else{
//         console.log('delete success');
//     }
// })
  
