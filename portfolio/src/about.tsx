import './about.scss';
import { useEffect } from 'react';


export default function About() {

    useEffect(() => {
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
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
        <div id='about-container'>
            <span id='border-container' className='hidden'>
                <h1 id='about-header'>About</h1>
                <div id='about-content'>
                    Hello! I am currently a senior at Arizona State University
                    majoring in Computer Science. My education has supplied me with both the practical and theoretical
                    knowledge needed to succeed in the amazing world of software. I hope you enjoy your stay!
                </div>
            </span>
        </div>
    )
}