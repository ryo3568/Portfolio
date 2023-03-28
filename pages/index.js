import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'

const Index = () => {
  return (
    <Layout>
      <div className='hero'>
        <Image src="/images/sky.jpg" alt="hero" fill quality={90} priority />
        <div className='textContainer'>
          <h1>I'm Ryo Yanagimoto!</h1>
          {/* <h3>JavaScript Developer</h3> */}
        </div>
      </div>
      <div className='container'>
        <div className='profile'>
          <div>
            <h2>INFORMATION</h2>
            <p>Name: Ryo Yanagimoto</p>
            <p>Age: 24, 08/13/1998</p>
            <p>Language: Japanese - Native, English - Working knowledge</p>
            <p>University: Graduate School of Osaka University</p>
            <p>Laboratory: Komatani Laboratory, Department of Knowledge Science, SANKEN</p>
            <p>Community: Management member of CDLE youth</p>
            <p>Major: Dialogue System</p>
          </div>
          <div className='image-container'>
            <Image src="/images/profile.jpg" alt="hero" fill sizes="(max-width: 800px) 100vw" quality={90} priority />
          </div>
        </div>
        <div className='profile'>
          <div className='image-container'>
            <Image src="/images/hat.png" alt="hero" fill sizes="(max-width: 800px) 100vw" quality={90} priority />
          </div>
          <div>
            <h2>EDUCATION</h2>
            <h3>2022-, Osaka University</h3>
            <p>Master's student of Graduate School of Engineering, Division of Electrical, Electronic and Infocommunications Engineering</p>
            <p>Laboratory: Komatani Lab</p>
            <h3>2018-2022, Doshisha University</h3>
            <p>Bachelor of Science and Engineering, Department of Intelligent Information Engineering and Sciences</p>
            <p>laboratory: Watabe Lab</p>
          </div>
          {/* <div className='image-container'>
            <Image src="/images/profile.jpg" alt="hero" fill sizes="(max-width: 800px) 100vw" quality={90} priority />
          </div> */}
        </div>
        <div className='profile'>
          <div>
            <h2>QUALIFICATIONS</h2>
            <p>2019.5 Information Technology Passport(IP)</p>
            <p>2020.5 Python 3 Certified Engineer Basic Examination</p>
            <p>2020.7 Japan Statistical Society Certificate Grade 2</p>
            <p>2020.8 Python 3 Certified Data Analyst Examination</p>
            <p>2022.3 JDLA Deep Learning for GENERAL 2020#1</p>
            <p>2021.3 TOEIC L&R 930</p>
            <p>2021.12 Fundamental Information Technology Engineer(FE)</p>
            <p>2022.6 Applied Information Technology Engineer(AP)</p>
          </div>
          <div className='image-container'>
            <Image src="/images/glasses.jpg" alt="hero" fill sizes="(max-width: 800px) 100vw" quality={90} priority />
          </div>
        </div>
        <div className='skills'>
          <h2>Skills</h2>
          <div className='skillsContainer'>
            <div><img src="/images/python.svg" alt="python"/><span>Python / 3 years</span></div>
            <div><img src="/images/c-plusplus.svg" alt="c++"/><span>C++ / 2 years</span></div>
            <div><img src="/images/java.svg" alt="java"/><span>Java / 1 years</span></div>
            <div><img src="/images/javascript.svg" alt="javascript"/><span>JavaScript / 3 months</span></div>
            <div><img src="/images/react.svg" alt="react"/><span>React / 3 months</span></div>
            <div><img src="/images/nodejs-icon.svg" alt="node"/><span>Node.js / 2 months</span></div>
            <div><img src="/images/nextjs-icon.svg" alt="next"/><span>Next.JS / 1 months</span></div>
          </div>
        </div>
        {/* <div className='ctaButton'>
          <Link href="/contact">Make It Happend!</Link>
        </div> */}
      </div>
    </Layout>
  )
}

export default Index