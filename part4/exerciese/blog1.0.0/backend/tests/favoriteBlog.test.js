// 定义一个新的favoriteBlog函数，接收一个博客列表作为参数。
// 该函数找出哪个博客有最多的喜欢。如果有许多最喜欢的博客，只需返回其中的一个就够了

const listHelper = require('../utils/list_helper')

test('多个', ()=> {
    const manyBlog = [
        {
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            likes: 12
        },
        {
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            likes: 2
        },
        {
            title: "tessssssssssss",
            author: "ok",
            likes: 17
        }
    ]
    const result = listHelper.favoriteBlog(manyBlog)
    expect(result).toEqual(
        {
            title: "tessssssssssss",
            author: "ok",
            likes: 17
        }
    )
})