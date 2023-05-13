import './quote.scss';
import { useEffect } from 'react';

export default function Quote() {

    useEffect(() => {
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log("here")
                    entry.target.classList.add('show');
                }
                else {
                    entry.target.classList.remove('show');
                }
            })
        })
    
        const hiddenElements: NodeListOf<Element> = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    })

    return (
        <div id='quote-container'>
            <div id='quote-block' className='hidden'>
                “A good programmer is someone who always looks both 
                ways before crossing a one-way street.” 
                <p id='quotee'>- Doug Linder </p>
            </div>
        </div>
    )
}