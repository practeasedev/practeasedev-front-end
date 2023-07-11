import { ChangeEvent, FC } from 'react';
import styles from '@/styles/contact.module.css';
import SVG from '@/components/SVG/SVG';
import mailBox from '@/assets/mailbox.svg';
import curvyArrow from '@/assets/curvy-arrow.svg';
import Image from 'next/image';
import { useForm } from '@/common/CustomHooks';
import { contactFormFields } from '@/common/Constants';

const Contact:FC<{}> = () => {
    const {values, errors, setFormField, validateForm} = useForm(contactFormFields);

    return (
        <section className={styles.contactContainer}>
            <div className={styles.contactInfo}>
                <div className={styles.contactText}>
                    <h1 className={styles.contactTitle}>
                        Have any suggestion? or Facing any problem with our website?
                    </h1>
                    <p className={styles.contactSubTitle}>Please write to us and we will get back to you as soon as possible.</p>
                    <p className={styles.mailAddress}>
                        <SVG iconName="mail" />
                        <span>practeasedev@gmail.com</span>
                    </p>
                    <div className={styles.socialLinks}>
                        <SVG iconName="github"/>
                        <SVG iconName="linkedIn"/>
                    </div>
                </div>
                <div className={styles.contactIllustration}>
                    <Image src={mailBox} alt="A mailbox illustration" className={styles.mailBox} />
                    <Image src={curvyArrow} alt="A curvy arrow pointing to mailbox" className={styles.curvyArrow} />
                </div>
            </div>
            <form className={styles.contactForm}>
                <div className="input-group">
                    <label htmlFor="name" className="input-label">Name</label>
                    <input className="input" id="name" name="name" value={values.name} onChange={(event: ChangeEvent<HTMLInputElement>) => setFormField(event, "email")} />
                    {errors.name ? <p className='form-field-error'>{errors.name}</p> : null}
                </div>
                <div className="input-group">
                    <label htmlFor="name" className="input-label">Email</label>
                    <input className="input" id="email" name="email" value={values.email}/>
                    {errors.email ? <p className='form-field-error'>{errors.email}</p> : null}
                </div>
                <div className="input-group">
                    <label htmlFor="name" className="input-label">Message</label>
                    <textarea className='textarea' id="message" name="message" value={values.message}></textarea>
                    {errors.message ? <p className='form-field-error'>{errors.message}</p> : null}
                </div>
                <button className="button-with-icon button-secondary button-medium" onClick={() => {validateForm()}}>
                    <SVG iconName="send" fill="#FFFFFF"/>
                    <span>Send Message</span>
                </button>
            </form>
        </section>
    )
}

export default Contact;