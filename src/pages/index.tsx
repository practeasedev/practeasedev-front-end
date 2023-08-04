import Head from 'next/head'
import styles from '@/styles/Home.module.css';
import heroIllustration from '@/assets/hero-illustration.svg'
import circleDesign from '@/assets/circle-design-element.svg';
import triangleDesign from '@/assets/triangle-design-element.svg';
import whyIllustration from '@/assets/why-illustration.svg';
import howIllustration from '@/assets/how-illustration.svg';
import downArrow from '@/assets/down-arrow.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';
import * as api from '@/common/HttpService'
import { LOGIN_OR_REGISTER } from '@/common/APIPaths';
import AuthLoader from '@/components/AuthLoader/AuthLoader';


export default function Home() {
  const router:NextRouter = useRouter();
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false);

  const connectWithGithub = async (code:string) => {
    const body = {
      code
    };
    const connectResult = await api.post({
      url:LOGIN_OR_REGISTER,
      body,
      loadingHandler: setIsAuthLoading,
      constructUrl:true,
      authRequired: false
    });

    if(connectResult) {
      window.location.replace('/');
    }
  }

  useEffect(() => {
    if(router.isReady) {
      const { code } = router.query;
      if (typeof code === "string") {
        connectWithGithub(code);
      }
    }
  },[router.isReady]);
  
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
          <Image src={heroIllustration} alt="A human typing in keyboard of a laptop on his lap while sitting on a chair" className={styles.heroIllustration}/>
          <Image src={circleDesign} alt="A circle with light blue and light orange gradient"  className={styles.circleDesign}/>
          <Image src={triangleDesign} alt="A triangle with light blue and light orange gradient" className={styles.triangleDesign} />
      </section>
      <section className={styles.whySection}>
        <h2 className={styles.whyTitle}>Why use this platform?</h2>
        <div className={styles.whyContent}>
          <Image src={whyIllustration} alt="A illustration of a girl and a boy with a big question mark" className={styles.whyIllustration}/>
          <div className={styles.whyText}>
            <p>PracticeDev is a platform that helps you practice developement skills without worrying about design and architecture. It helps you to learn progressively by increasing the difficulty of the projects little by little.</p>
            <p>PracticeDev is a platform that helps you practice developement skills without worrying about design and architecture</p>
          </div>
        </div>
      </section>
      <section className={styles.howSection}>
        <h2 className={styles.howTitle}>How to use this platform?</h2>
        <div className={styles.howContent}>
          <div className={styles.howSteps}>
            <div className={styles.step}>
              <p className={styles.stepNo}>01</p>
              <p className={styles.stepTitle}>Select a domain</p>
              <p className={styles.stepDesc}>Select a domain in which you want to improve in .If you are a beginner start with HTML | CSS | JS domain</p>
            </div>
            <Image src={downArrow} alt="A light orange down arrow" className={styles.arrow}/>
            <div className={styles.step}>
              <p className={styles.stepNo}>02</p>
              <p className={styles.stepTitle}>Choose a practice project</p>
              <p className={styles.stepDesc}>Choose a practice project based on your current level in that domain and download the files for the project</p>
            </div>
            <Image src={downArrow} alt="A light orange down arrow" className={styles.arrow}/>
            <div className={styles.step}>
              <p className={styles.stepNo}>03</p>
              <p className={styles.stepTitle}>Complete the practice project</p>
              <p className={styles.stepDesc}>Complete the selected pratice project and submit the link of your github repository so that others can view your code</p>
            </div>
          </div>
          <Image src={howIllustration} alt="An illustration of a person looking through a process on a board" className={styles.howIllustration} />
        </div>
      </section>
      { isAuthLoading ? <AuthLoader message="Authorizing using Github. Please wait"/> : null }
    </>
  )
}


