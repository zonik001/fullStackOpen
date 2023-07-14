import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Togglable from './togglable'

// 统一描述
describe('<Togglable />', () => {
  let container

//   每个测试前都会调用beforeEach函数，然后渲染Togglable组件并保存返回值的container字段
  beforeEach(() => {
    container = render(
      <Togglable buttonLabel="show...">
        <div className="testDiv" >
          togglable content
        </div>
      </Togglable>
    ).container
  })

  test('渲染其子组件', () => {
    screen.findAllByText('togglable content')
  })

  test('开始时不显示子项', () => {
    const div = container.querySelector('.togglableContent')
    expect(div).toHaveStyle('display: none')
  })

  test('点击按钮后，子项显示', async () => {
    const user = userEvent
    const button = screen.getByText('show...')
    await user.click(button)

    const div = container.querySelector('.togglableContent')
    expect(div).not.toHaveStyle('display: none')
  })

    //   验证通过点击组件的第二个按钮是否可以隐藏可见的内容
  test('再次点击，子项隐藏' , async () => {
    const user = userEvent
    const button = screen.getByText('show...')
    await user.click(button)

    const closeButton = screen.getByText('cancel')
    await user.click(closeButton)
    const div = container.querySelector('.togglableContent')
    expect(div).toHaveStyle('display: none')
  })
})