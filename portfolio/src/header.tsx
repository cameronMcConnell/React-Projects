import './header.scss'
import pfp from './images/pfp_edge.jpg'

export default function header() {
    return (
        <header>
            <div id='h-div'>
                <img src={pfp} alt={'Profile'}></img>
                <h1>Cameron McConnell</h1>
                <span id="icon-span">
                    <a href='https://github.com/cameronMcConnell?tab=repositories' className='icon-links'>
                        <i className='fa fa-github'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/cameron-mcconnell-704b17225/' className='icon-links'>
                        <i className="fa fa-linkedin-square"></i>
                    </a>    
                    <a href = 'mailto: cameron.mcconne@gmail.com' className='icon-links'>
                        <i className="fa fa-envelope"></i>
                    </a>
                </span>
            </div>
        </header>
    )
}