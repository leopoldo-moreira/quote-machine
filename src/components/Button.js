import styles from './Button.module.css'



function Button({type, text, side, color, funcNewQuote}){
    return(
        <button 
        className={`${styles.btn} ${styles[type]}`}
        style={{backgroundColor: color, float: side}}
        onClick={funcNewQuote || null}        
        >
        
        {text}

        </button>
    )
}

export default Button