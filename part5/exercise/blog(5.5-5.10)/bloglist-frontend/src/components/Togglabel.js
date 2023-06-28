import { useState, forwardRef, useImperativeHandle } from 'react'

const Togglabel = forwardRef((props,ref) => {
    const [visible, setVisible] = useState(false)
    const hideWhenVisible = {display: visible ? 'none' : ''}
    const showWhenVisible = {display: visible ? '' : 'none'}

    const toggleVisibility = () =>{
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
                <button onClick={toggleVisibility}>{props.showBtnLabel}</button>
            </div>
            <div style={showWhenVisible}>
                {props.children} 
                <button onClick={toggleVisibility}>cancel</button>
            </div>
        </div>
    )
})

Togglabel.displayName = 'Togglabel' 

export default Togglabel