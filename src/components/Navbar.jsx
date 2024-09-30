import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import logo from '../assets/raviKumarLogo.webp'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label='Home'>
                <img src={logo} alt="Logo" className='mx-2' width={50} height={33} />
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/your-linkedin-profile" target='_blank'
            rel='noopener noreferrer' aria-label='LinkedIn'>
                <FaLinkedin/>
            </a>
            <a href="https://www.github.com/in/your-github-profile" target='_blank'
            rel='noopener noreferrer' aria-label='Github'>
                <FaGithub/>
            </a>
            <a href="https://www.instagram.com/in/your-instagram-profile" target='_blank'
            rel='noopener noreferrer' aria-label='Instagram'>
                <FaInstagram/>
            </a>
            <a href="https://www.x.com/in/your-x-profile" target='_blank'
            rel='noopener noreferrer' aria-label='X'>
                <FaSquareXTwitter/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar