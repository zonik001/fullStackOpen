import PropTypes from 'prop-types'  //buttonLabelprop定义为强制或required字符串型prop
import { useState, forwardRef, useImperativeHandle } from 'react'

const Togglable  = forwardRef((props,ref) => {
    const [visible, setVisible] = useState(false)
    const hideWhenVisible = {display: visible ? 'none' : ''}
    const showWhenVisible = {display: visible ? '' : 'none'}

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    useImperativeHandle(ref, () => {
        return {
          toggleVisibility
        }
    })

    return (
        <div>
            <div style={hideWhenVisible}>
                <button onClick={toggleVisibility}>{props.buttonLabel}</button>
            </div>
            <div style={showWhenVisible}>
                {/* 用来引用组件的子组件。子组件是我们在组件的打开和关闭标签之间定义的React元素。即LoginForm */}
                {props.children} 
                <button onClick={toggleVisibility}>cancel</button>
            </div>
        </div>
    )
})


// propTypes类型校验
Togglable.propTypes = {
    buttonLabel: PropTypes.string.isRequired
}
export default Togglable