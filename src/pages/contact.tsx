import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "@/styles/contact.module.css";
import SVG from "@/components/SVG/SVG";
import mailBox from "@/assets/mailbox.svg";
import curvyArrow from "@/assets/curvy-arrow.svg";
import Image from "next/image";
import { useForm } from "@/common/CustomHooks";
import { INTERSECTION_OBSERVER_OPTIONS, CONTACT_FORM_FIELDS } from "@/common/Constants";
import * as api from "@/common/HttpService";
import { SEND_CONTACT_EMAIL } from "@/common/APIPaths";
import { useInView } from "react-intersection-observer";
import { toast } from "react-hot-toast";
import Head from "next/head";

const Contact: FC<{}> = () => {
    const { values, errors, setFormField, validateForm, resetForm } = useForm(CONTACT_FORM_FIELDS);
    const [contactFormRef, contactFormInView] = useInView(INTERSECTION_OBSERVER_OPTIONS);
    const [contactInfoRef, contactInfoInView] = useInView(INTERSECTION_OBSERVER_OPTIONS);
    const [sendingMail, setSendingMail] = useState<boolean>(false);

    const submitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const isFormValid: boolean = validateForm();

        
        if (isFormValid) {
            api.post({
                url: SEND_CONTACT_EMAIL,
                body: values,
                loadingHandler: setSendingMail
            }).then((res) => {
                if(res.success) {
                    toast.success('Successfully sent mail');
                    resetForm();
                }
            });
        }
    };

    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Suggestions? Concerns? Queries? Please write to us and we will be more than happy to hear from you. - Practeasedev" />
                <meta name="keywords" content="practeasedev contact, contact us" />
            </Head>
            <section className={styles.contactContainer}>
                <div className={`${styles.contactInfo} ${contactInfoInView ? 'fadeInFromLeft' : ''}`} ref={contactInfoRef}>
                    <div className={styles.contactText}>
                        <h1 className={styles.contactTitle}>
                            Have any suggestion? or Facing any problem with our
                            website?
                        </h1>
                        <p className={styles.contactSubTitle}>
                            Please write to us and we will get back to you as soon
                            as possible.
                        </p>
                        <p className={styles.mailAddress}>
                            <SVG iconName="mail" />
                            <span>practeasedev@gmail.com</span>
                        </p>
                        <div className={styles.socialLinks}>
                            <SVG iconName="github" />
                            <SVG iconName="linkedIn" />
                        </div>
                    </div>
                    <div className={styles.contactIllustration}>
                        <Image
                            src={mailBox}
                            alt="A mailbox illustration"
                            className={styles.mailBox}
                        />
                        <Image
                            src={curvyArrow}
                            alt="A curvy arrow pointing to mailbox"
                            className={styles.curvyArrow}
                        />
                    </div>
                </div>
                <form className={`${styles.contactForm} ${contactFormInView ? 'fadeInFromRight' : ''}`} onSubmit={submitForm} ref={contactFormRef}>
                    <div className="input-group">
                        <label htmlFor="name" className="input-label">
                            Name
                        </label>
                        <input
                            className="input"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                setFormField(event, "name", "text")
                            }
                        />
                        {errors.name ? (
                            <p className="form-field-error">{errors.name}</p>
                        ) : null}
                    </div>
                    <div className="input-group">
                        <label htmlFor="name" className="input-label">
                            Email
                        </label>
                        <input
                            className="input"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                setFormField(event, "email", "email")
                            }
                        />
                        {errors.email ? (
                            <p className="form-field-error">{errors.email}</p>
                        ) : null}
                    </div>
                    <div className="input-group">
                        <label htmlFor="name" className="input-label">
                            Message
                        </label>
                        <textarea
                            className="textarea"
                            id="message"
                            name="message"
                            value={values.message}
                            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                                setFormField(event, "message", "text")
                            }
                        ></textarea>
                        {errors.message ? (
                            <p className="form-field-error">{errors.message}</p>
                        ) : null}
                    </div>
                    <button
                        className="button-with-icon button-secondary button-normal"
                        type="submit"
                        disabled={sendingMail}
                    >
                        {sendingMail ? (
                            <p className={styles.sendingText}>Sending ...</p>
                        ) : (
                            <>
                                <SVG iconName="send" fill="#FFFFFF" />
                                <span>Send Message</span>
                            </>
                        )}
                    </button>
                </form>
            </section>
        </>
    );
};

export default Contact;
