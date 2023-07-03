import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Blog from './Blog'
import userEvent from '@testing-library/user-event'

test('blog渲染', () => {
    const blog = {
        title: '我的博客',
        author: 'me',
        url: 'www.baidu.com',
        likes: 0
    }

    const { container } = render(<Blog blog={blog}/>)
    const div = container.querySelector('.blog')
    expect(div).toHaveTextContent('我的博客')
    expect(div).toHaveTextContent('me')

    const divUrl = container.querySelector('.url')
    expect(divUrl).toHaveStyle('display: none')

    const divLikes = container.querySelector('.likes')
    expect(divLikes).toHaveStyle('display: none')
})

test('点击显示url和likes', async () => {
    const blog = {
        title: '我的博客',
        author: 'me',
        url: 'www.baidu.com',
        likes: 0
    }
    const mockHandler = jest.fn()

    const { container } = render(< Blog blog={blog} handleShowAll={mockHandler}/>)

    const user = userEvent
    const button = screen.getByText('view')
    await user.click(button)
    const divLikes = container.querySelector('.likes')
    expect(divLikes).not.toHaveStyle('display: none')
    const divUrl = container.querySelector('.url')
    expect(divUrl).not.toHaveStyle('display: none')
})

test('点击两次喜欢按钮，测试是否事件调用两次', async () => {
    const blog = {
        title: '我的博客',
        author: 'me',
        url: 'www.baidu.com',
        likes: 0
    }

    const mockHandler = jest.fn()
    render(< Blog blog={blog} handleLikes={mockHandler}/>)
    const user = userEvent
    const button = screen.getByText('like')
    await user.click(button)
    await user.click(button)
    expect(mockHandler.mock.calls).toHaveLength(2)
})