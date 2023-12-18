import Button from './Button';
import styles from './Quotes.module.css'
import { FaQuoteLeft, FaTwitter, FaTumblr   } from "react-icons/fa6";

function QuoteContainer({color, text, author, funcNewQuote, changeOpacity }){
    
    // 117 height de tudo menos o quote
    // 32 altura de cada linha do quote

    return(
        
        <div className={styles.mainContainer}>            
            <div className={styles.quotesContainer}>
                <div>
                    <FaQuoteLeft style={{color:color, opacity: changeOpacity }}/>
                </div>
                
                <span style={{color:color, opacity: changeOpacity }}>{text}</span>
            </div>
            <p style={{color:color, opacity: changeOpacity }}>- {author}</p>
            <div>
                <Button 
                type='smallBtn'
                color={color}
                text=<FaTwitter style={{color: 'white'}}/>
                side='left'
                />

                <Button 
                type='smallBtn'
                color={color}
                text=<FaTumblr style={{color: 'white'}}/>
                side='left'
                />

                <Button 
                type='largeBtn'
                color={color}
                text='New Quote'
                side='right'
                funcNewQuote={funcNewQuote}
                />
                
            </div>            
        </div>
    )
}

export default QuoteContainer;