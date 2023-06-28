const Notification = ({message}) => {
    if (message === null) {
        return null
    }
    return(
        <div className='errorBox'>
            {message}
        </div>
    )
}
export default Notification