import { useState, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'

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
Togglable.propTypes = {
    buttonLabel: PropTypes.string.isRequired
}

export default Togglabel