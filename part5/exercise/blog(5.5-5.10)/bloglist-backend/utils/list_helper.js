const dummy = (blogs) => {
    return 1
}
const totalLikes = (blogs) => {
    const num =  blogs.reduce((total,blog)=> {
            return total + blog.likes
    },0)
    return num
}

const favoriteBlog = (blogs) => {
    const maxLikes = Math.max(...blogs.map(blog => blog.likes))
    const favoriteBlog = blogs.find(blog => blog.likes === maxLikes)
    return favoriteBlog
}

const mostBlogs = (blogs) => {
    
}
  
module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}