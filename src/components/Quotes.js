import Button from './Button';
import styles from './Quotes.module.css'
import { FaQuoteLeft, FaTwitter, FaTumblr   } from "react-icons/fa6";

function QuoteContainer({color, text, author, funcNewQuote, changeOpacity }){
    
    // 117 height de tudo menos o quote
    // 32 altura de cada linha do quote

    return(
        
        <div id="quote-box" className={styles.mainContainer}> 
                      
            <div className={styles.quotesContainer}>             
                <div>
                    <FaQuoteLeft style={{color:color, opacity: changeOpacity }}/>
                </div>               
                <span id='text' style={{color:color, opacity: changeOpacity }}>{text}</span>
            </div>
            <p id='author' style={{color:color, opacity: changeOpacity }}>- {author}</p>
            
            <div id="quote-box">
            
                <a id='tweet-quote' href="twitter.com/intent/tweet">
                    <Button 
                    type='smallBtn'
                    color={color}
                    text=<FaTwitter style={{color: 'white'}}/>
                    side='left'
                    id="tweet-quote"                
                    />
                </a>

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
                id='new-quote'
                />
                
            </div>            
        </div>
        
    )
}

export default QuoteContainer;