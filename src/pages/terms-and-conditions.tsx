import React, { FC } from 'react';
import styles from '@/styles/privacy-policy.module.css';

const TermsAndConditions:FC<{}> = () => {
    return (
        <main className={styles.privacyPolicyContainer}>
            <h1>Terms and Conditions</h1>
            <p className={styles.lastUpdated}><b>Last updated:</b> 12 May, 2023</p>
            <p className={styles.introPara}>
                By accessing and using  <b>PracteaseDev </b>(practeasedev.com), you agree to comply with and be bound by these Terms and Conditions of Use. If you do not agree with any part of these terms, please do not use the Website.
            </p>
            <ol className={styles.policyList}>
                <li>
                    <p className={styles.sectionTitle}>Use of the Website</p>
                    <ul className={styles.sectionList}>
                        <li>
                            <p>You agree to use the Website solely for lawful and legitimate purposes and in a manner that respects the rights and interests of others. You shall not use the Website in any way that violates any applicable local, national, or international laws or regulations. You expressly agree not to engage in any of the following activities while using the Website:</p>
                            <ul className={styles.sectionSubList}>
                                <li>Uploading, 	transmitting, or sharing any content that is unlawful, offensive, 	harmful, threatening, defamatory, or infringing upon the rights of 	others.</li>
                                <li>Attempting to gain unauthorized access to the Website, its servers, or any associated databases.</li>
                                <li>Attempting to gain unauthorized access to the Website, its servers, or any associated databases.</li>
                                <li>Impersonating another person, entity, or falsely claiming an affiliation with PracteaseDev.</li>
                            </ul>
                        </li>
                        <li>
                            <p>
                                You have the opportunity to submit or post content, such as comments or reviews, on the Website. By doing so, you grant PracteaseDev a non-exclusive, worldwide, royalty-free license to use, reproduce, display, and distribute your content on or in connection with the Website and you are solely responsible for the content you submit, and you represent and warrant that it does not violate any third-party rights or any applicable laws.
                            </p>
                        </li>
                    </ul>
                    
                </li>
                <li>
                    <p className={styles.sectionTitle}>Intellectual Property</p>
                    <ul className={styles.sectionList}>
                        <li>All content, logos, trademarks, and other intellectual property on the Website are owned PracteaseDev and are protected by copyright and other applicable laws.</li>
                        <li>
                            You may not reproduce, distribute, or use any content from this Website without prior written permission from PracteaseDev.
                        </li>
                    </ul>
                </li>
                <li>
                    <p className={styles.sectionTitle}>Privacy</p>
                    <ul className={styles.sectionList}>
                        <li>When you use the Website, we may collect certain information from you. This information may include, but is not limited to personal information, such as your name, email address, github account and contact details, which you may provide voluntarily through forms, while contacting us or registering/logging into PracteaseDev.</li>
                        <li>
                            <p>We may use the information we collect for various purposes, including but not limited to:</p>
                            <ul className={styles.sectionSubList}>
                                <li>Providing 	and improving our services, content, and user experience.</li>
                                <li>
                                    Responding to your inquiries, requests, or comments.
                                </li>
                                <li>
                                    Analyzing 	and monitoring the usage of the Website, including for security and compliance purposes.
                                </li>
                            </ul>
                        </li>
                        <li>Our Privacy Policy governs the collection, use, and disclosure of your personal information. By using the Website, you agree to our Privacy Policy.</li>
                        <li>We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmitting data over the internet or storing data is completely secure, and we cannot guarantee the absolute security of your information.</li>
                    </ul>
                </li>
                <li>
                    <p className={styles.sectionTitle}>Disclaimers</p>
                    <ul className={styles.sectionList}>
                        <li>
                            The information on this Website is provided for general informational purposes only. We do not guarantee the accuracy, completeness, or reliability of any information on the Website.
                        </li>
                        <li>
                            PracteaseDev is not responsible for any errors or omissions in the content on the Website.
                        </li>
                        <li>
                            Your use of the Website is at your own risk. PracteaseDev is not liable for any form of damages resulting from your use of the Website.
                        </li>
                    </ul>
                </li>
                <li>
                    <p className={styles.sectionTitle}>Links to Other Websites</p>
                    <ul className={styles.sectionList}>
                        <li>
                            This Website may contain links to third-party websites. PracteaseDev is not responsible for the content or activities of these external websites. You visit these websites at your own risk.
                        </li>
                    </ul>
                </li>
                <li>
                    <p className={styles.sectionTitle}>Termination</p>
                    <ul className={styles.sectionList}>
                        <li>
                            PracteaseDev reserves the right, at its sole discretion, to terminate or suspend your access to the Website, in whole or in part, without prior notice, for any reason, including Violation of these Terms and Conditions, Conduct that PracteaseDev determines to be harmful to other users, third parties, or the reputation of the Website.
                        </li>
                    </ul>
                </li>  
                <li>
                    <p className={styles.sectionTitle}>Changes to Terms and Conditions</p>
                    <ul className={styles.sectionList}>
                        <li>
                            PracteaseDev may modify these Terms and Conditions at any time. Please review these terms regularly to stay informed of any changes.
                        </li>
                    </ul>
                </li>
                <li>
                    <p className={styles.sectionTitle}>Contact Information</p>
                    <ul className={styles.sectionList}>
                        <li>
                            If you become aware of any violations of these Terms and Conditions by other users, please report them to practeasedev@gmail.com OR practeasedev.com/contactus for appropriate action.
                        </li>
                        <li>
                            For questions or concerns regarding these Terms and Conditions, please contact us at practeasedev@gmail.com OR practeasedev.com/contactus.
                        </li>
                    </ul>
                </li>
            </ol>
        </main>
    );
}

export default TermsAndConditions;