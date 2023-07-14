// 测试是验证该组件是否渲染了笔记的内容
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Note from './note'
import userEvent from '@testing-library/user-event' //测试按钮

test('笔记渲染', ()=> {
    const note = {
        content: '使用 react-testing-library 完成组件测试',
        important: true
    }

    // 方式一
    // 用react-testing-library提供的render函数渲染组件
    render(<Note note={note}/>)

    // screen.debug() //打印所有元素到控制台
    
    // 通常React组件会被渲染到DOM。我们使用的渲染方法将组件渲染成适合测试的格式，而不用渲染到DOM上。
    // 使用对象screen来访问被渲染的组件
    const element = screen.getByText('使用 react-testing-library 完成组件测试')

    // screen.debug(element) ///打印指定元素到控制台
    // 如果getByText没有找到它要找的元素，则测试失败
    expect(element).toBeDefined()

    // // 方式二
    // const { container } = render(<Note note={note} />)
    // const div = container.querySelector('.note')
    // expect(div).toHaveTextContent('使用 react-testing-library 完成组件测试')

})

// 按钮测试
test('单击该按钮调用事件处理程序一次', async () => {
    const note = {
      content: 'Component testing is done with react-testing-library',
      important: true
    }
  
    const mockHandler = jest.fn()
  
    render(
      <Note note={note} toggleImportance={mockHandler} />
    )
  
    // const user = userEvent.setup()  报错提示没有setup方法
    const user = userEvent
    const button = screen.getByText('修改为不重要')
    await user.click(button)
  
    expect(mockHandler.mock.calls).toHaveLength(1)
  })