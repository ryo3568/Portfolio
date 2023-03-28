
import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div className='insideContainer'>
                <a href="https://github.com/ryo3568"><img src="/images/github.svg" alt="logo"/></a>
                {/* <a href="https://www.google.com/"><img src="/images/linkedin.svg" alt="logo"/></a> */}
                <a href="https://twitter.com/ryoyanagi314"><img src="/images/twitter.svg" alt="logo"/></a>
                <a href="https://www.facebook.com/profile.php?id=100089916095333"><img src="/images/facebook.svg" alt="logo"/></a>
                {/* <hr/> */}
                {/* <Link href="/blog">Blog</Link> */}
                {/* <Link href="/contact">Contact</Link> */}
                <p>©{new Date().getFullYear()} Ryo Yanagimoto</p>
            </div>
        </footer>
    )
}

export default Footer