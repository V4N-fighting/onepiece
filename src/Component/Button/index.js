


const  Button = ({
    to,
    href,
    customClass,
    isDisable,
    children,
    clickFuncion = ()=> {},
    ...props
}) => {
    
    return (
        <button 
          className={`wrapper ${customClass}`}
          disable = {isDisable} 
          onClick={() => clickFuncion()} 
          {...props} 
        >
            {children}
        </button>
    );
}

export default Button;
