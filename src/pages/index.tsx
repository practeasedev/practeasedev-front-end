import Head from 'next/head'
import styles from '@/styles/home.module.css';
import heroIllustration from '@/assets/hero-illustration.svg'
import circleDesign from '@/assets/circle-design-element.svg';
import triangleDesign from '@/assets/triangle-design-element.svg';
import whyIllustration from '@/assets/why-illustration.svg';
import howIllustration from '@/assets/how-illustration.svg';
import downArrow from '@/assets/down-arrow.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { post } from '@/common/HttpService'
import { GITHUB_AUTHORIZE, LOGIN_OR_REGISTER, RESTORE_USER_ACCOUNT } from '@/common/APIPaths';
import AuthLoader from '@/components/AuthLoader/AuthLoader';
import { useInView } from 'react-intersection-observer';
import { INTERSECTION_OBSERVER_OPTIONS, JWT_TOKEN_COOKIE_NAME } from '@/common/Constants';
import Link from 'next/link';
import { setCookieValue } from '@/common/Helper';
import ConfirmationPopup from '@/components/ConfirmationPopup/ConfirmationPopup';
import ConfirmationPopupV2 from '@/components/ConfirmationPopupV2/ConfirmationPopupV2';


export default function Home() {
  const router:NextRouter = useRouter();
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false);
  const [isRestoreInProgress, setRestoreInProgress] = useState<boolean>(false);
  const [promptRestore, setPromptRestore] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("") //This is for restore account

  // animation refs
  const [whySectionRef, whySectionInView] = useInView(INTERSECTION_OBSERVER_OPTIONS);
  const [howSectionRef, howSectionInView] = useInView(INTERSECTION_OBSERVER_OPTIONS);

  const connectWithGithub = async (code:string) => {
    const body = {
      code
    };
    const {success, data} = await post({
      url:LOGIN_OR_REGISTER,
      body,
      loadingHandler: setIsAuthLoading,
      constructUrl:true,
      authRequired: false
    })

    if(success) {
      const { isAccountDeleted, userAccessToken, email } = data;
      if(!isAccountDeleted){
        setCookieValue(JWT_TOKEN_COOKIE_NAME, userAccessToken);
        router.push('/');
      }
      else {
        setUserEmail(email);
        setPromptRestore(true);
      }
    }
  }

  const restoreUserAccount = async() => {
    const payload = { userEmail }
    const { success } = await post({
      url: RESTORE_USER_ACCOUNT,
      body: payload,
      loadingHandler: setRestoreInProgress,
      constructUrl: true,
      authRequired: false,
    });
    setPromptRestore(false);

    if(success) window.location.href = `${GITHUB_AUTHORIZE}?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&scope=user:email`;
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
        <title>Practease Dev - A place to hone your web development skills</title>
        <meta name="description" content="Practice doesn't make perfect; perfect practice makes perfect.The sole purpose of PracteaseDev is to make Perfect Practice easy for Developers. Skip the hassle of hunting resources and looking for standard designs and completely focus on development skills. This is an easy to use platform which has variety of handpicked projects for all levels of developer, so you can start with the very basic components and progressively develop to a stage of developing real-world web apps." />
        <meta name="keywords" content="practeasedev,practeasedev home,practeasedev projects,improve developer skills,practice web development,practice projects for web development" />
      </Head>
      <section className={styles.heroSection}>
          <div className={`${styles.heroMain} fadeInFromLeft`}>
            <h1 className={styles.tagline}>
              A Place to hone your <br />
              <span className={styles.highLightedText}>web dev skills</span>
            </h1>
            <Link href="/projects" className={styles.getCodingLink}>
              <button className="button-large button-secondary">
                Get set Practease!
              </button>
            </Link>
          </div>
          <Image src={heroIllustration} alt="A human typing in keyboard of a laptop on his lap while sitting on a chair" className={`${styles.heroIllustration} fadeInFromRight`}/>
          <Image src={circleDesign} alt="A circle with light blue and light orange gradient"  className={styles.circleDesign}/>
          <Image src={triangleDesign} alt="A triangle with light blue and light orange gradient" className={styles.triangleDesign} />
      </section>
      <section className={`${styles.whySection} ${whySectionInView ? 'fadeIn' : ''}`} ref={whySectionRef}>
        <h2 className={styles.whyTitle}>Why use this platform?</h2>
        <div className={styles.whyContent}>
          <Image src={whyIllustration} alt="A illustration of a girl and a boy with a big question mark" className={styles.whyIllustration}/>
          <div className={styles.whyText}>
            <p>"Practice doesn't make perfect; perfect practice makes perfect."</p>
            <p>The sole purpose of PracteaseDev is to make Perfect Practice easy for Developers. Skip the hassle of hunting resources and looking for standard designs and completely focus on development skills. This is an easy to use platform which has variety of handpicked projects for all levels of developer, so you can start with the very basic components and progressively develop to a stage of developing real-world web apps.</p>
          </div>
        </div>
      </section>
      <section className={`${styles.howSection} ${howSectionInView ? 'fadeIn' : ''}`} ref={howSectionRef}>
        <h2 className={styles.howTitle}>How to use this platform?</h2>
        <div className={styles.howContent}>
          <div className={styles.howSteps}>
            <div className={styles.step}>
              <p className={styles.stepNo}>01</p>
              <p className={styles.stepTitle}>Pick a challenge</p>
              <p className={styles.stepDesc}>Choose a challenge that best matches your level from the available <a href="/projects" className="orange-link">projects</a>. For your convenience we have attached a "Project difficulty level" tag which will help you choose the right project.</p>
            </div>
            <Image src={downArrow} alt="A light orange down arrow" className={styles.arrow}/>
            <div className={styles.step}>
              <p className={styles.stepNo}>02</p>
              <p className={styles.stepTitle}>Work on the project</p>
              <p className={styles.stepDesc}> Read through the user stories, download the project files, refer the attached figma design and GET STARTED! You're Welcome for the important resource links! 😁</p>
              {/* In order to make your job easier we have provided links to all useful resources for every project, do refer them when stuck. */}
            </div>
            <Image src={downArrow} alt="A light orange down arrow" className={styles.arrow}/>
            <div className={styles.step}>
              <p className={styles.stepNo}>03</p>
              <p className={styles.stepTitle}>Share your work</p>
              <p className={styles.stepDesc}> Now that you have completed your project, share your solution! This will let the rest of the community to review your code as well as assist them to code the solutions.</p>
            </div>
          </div>
          <Image src={howIllustration} alt="An illustration of a person looking through a process on a board" className={styles.howIllustration} />
        </div>
      </section>
      { isAuthLoading ? <AuthLoader message="Authorizing using Github. Please wait"/> : null }
      { promptRestore
        ? <ConfirmationPopupV2
            heading="Restore Account"
            yesButtonHandler={restoreUserAccount}
            yesButtonName="Restore!"
            closePopupHandler={() => setPromptRestore(false)}
            body="The Account linked to this github account seems to be deleted. Do you want to restore your account?"
            loading={isRestoreInProgress}
          /> 
        : null}
    </>
  )
}


