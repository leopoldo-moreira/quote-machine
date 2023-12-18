import styles from './Button.module.css'



function Button({type, text, side, color, funcNewQuote, id}){
    return(
        <button 
        className={`${styles.btn} ${styles[type]}`}
        style={{backgroundColor: color, float: side}}
        onClick={funcNewQuote || null} 
        id={id}       
        >
        
        {text}

        </button>
    )
}

export default Button