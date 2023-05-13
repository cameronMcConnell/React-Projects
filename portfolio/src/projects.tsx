import './projects.scss';
import { useEffect } from 'react';
import sv from './images/sorting-vis.png'

export default function Projects() {

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
        <div id='projects-container'>
            <h1 id='projects-header' className='hidden'> Projects</h1>
            <div id='pcard-container'>
                <div className='hidden project-card'>
                    <h1 className='pcard-title'>Sorting-Visualizer</h1>
                    <img src={sv} alt='sorting-visualizer' className='pcard-img'></img>
                    <h2 className='pcard-subheader'>Description</h2>
                    <div className='pcard-txt'>
                        Sorting visualizer built using only React. The hardest part of this project
                        was figuring out how to implement the animation. That was mainly implemented using
                        the React setState hook and some use of the setTimeout function in Javascript. This
                        app lets you set the number of array elements to sort, the speed of sorting animation, and
                        randomly creates a list of natural numbers between five and n array elements.
                        it also implements five different sorting alorithms including:
                        <ul>
                            <li>Bubble-Sort</li>
                            <li>Insertion-Sort</li>
                            <li>Merge-Sort</li>
                            <li>Quick-Sort</li>
                            <li>Heap-Sort</li>
                        </ul>
                    </div>
                </div>
                <div className='hidden project-card'>
                    You you jalkfjdlfjasdlfjlkdj;ld
                    adlfjasdl;fdf;ajf
                    klasd;fjsadl;fj
                </div>
            </div>
        </div>
    )
}