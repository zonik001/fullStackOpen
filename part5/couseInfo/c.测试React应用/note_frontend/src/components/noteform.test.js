import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NoteForm from './noteForm'
import userEvent from '@testing-library/user-event'

test('</Noteform>更新父状态并调用onSubmmit', async () => {
    const createNote = jest.fn()
    const user = userEvent

    render(<NoteForm createNote={createNote} />)

    // 表单中只有一个输入框时获取方式 getByRole
    // const input = screen.getByRole('textbox')

    // 多个输入框时的获取方式 getAllByRole
    // const inputs = screen.getAllByRole('textbox')
    // await user.type(inputs[0], 'testing a form...' )

    // 根据placeholder准确获取输入框
    const input = screen.getByPlaceholderText('write here note content')
    const sendButton = screen.getByText('save')

    // userEvent的type方法，将文本写入输入框
    await user.type(input, 'testing a form...' )
    await user.click(sendButton)

    // 第一个测试期望确保，提交表单时调用createNote方法
    expect(createNote.mock.calls).toHaveLength(1)
    // 第二个期望检查，事件处理程序被调用，并带有正确的参数--当表单被填满时，一个带有正确内容的注释被创建
    expect(createNote.mock.calls[0][0].content).toBe('testing a form...' )
})