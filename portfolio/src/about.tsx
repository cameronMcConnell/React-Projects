import './about.scss';

const txt: HTMLElement | null = document.getElementById('about-content');

window.onscroll = () => {
    txt?.style.setProperty('opacity', (txt.getBoundingClientRect().top / (txt.getBoundingClientRect().top - window.scrollY)).toFixed(2));
}


export default function about() {
    return (
        <div id='about-container'>
            <h1 id='about-header'>About</h1>
            <div id='about-content'>
                Hello! I am currently a senior at Arizona State University
                majoring in Computer Science. My education has supplied me with both the practical and theoretical
                knowledge needed to succeed in the amazing world of software.
            </div>
        </div>
    )
}