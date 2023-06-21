import Head from 'next/head'
import styles from '@/styles/Home.module.css';
import heroIllustration from '@/assets/hero-illustration.svg'
import circleDesign from '@/assets/circle-design-element.svg';
import triangleDesign from '@/assets/triangle-design-element.svg';
import Image from 'next/image';

export default function Home() {
  
  return (
    <> 
      <Head>
        <title>Practease Dev - A place to hone your developer skills</title>
      </Head>
      <section className={styles.heroSection}>
          <div className={styles.heromain}>
            <h1 className={styles.tagline}>
              A Place to hone your <br />
              <span className={styles.highLightedText}>developer skills</span>
            </h1>
            <button className="button-large button-secondary">
              Get Coding
            </button>
          </div>
          <div className={styles.heroSide}>
            <Image src={heroIllustration} alt="A human typing in keyboard of a laptop on his lap while sitting on a chair" className={styles.heroIllustration}/>
          </div>
      </section>
      <Image src={circleDesign} alt="A circle with light blue and light orange gradient"  className={styles.circleDesign}/>
      <Image src={triangleDesign} alt="A triangle with light blue and light orange gradient" className={styles.triangleDesign} /> 
    </>
    
  )
}
