import React, { FC } from 'react';
import styles from '@/styles/privacy-policy.module.css';

const PrivacyPolicy:FC<{}> = () => {
    return (
        <main className={styles.privacyPolicyContainer}>
            <h1>Privacy Policy</h1>
            <p className={styles.lastUpdated}><b>Last updated:</b> 12 May, 2023</p>
            <ol className={styles.policyList}>
                <li>
                    <p className={styles.sectionTitle}>Introduction</p>
                    <ul className={styles.sectionList}>
                        <li>This Privacy Policy outlines how Practeasedev collects, uses, and protects your personal information when you use our website, available at <a>https://practeasedev.com</a>.</li>
                    </ul>
                </li>
                <li>
                    <p className={styles.sectionTitle}>Information We Collect</p>
                    <ul className={styles.sectionList}>
                        <li>
                            <span className={styles.highlightedText}>Github Data: </span>When you register using your GitHub account, we collect your name, email address, and avatar URL for authentication and displaying your name and avatar URL wherever necessary.
                        </li>
                        <li>
                            <span className={styles.highlightedText}>Google Analytics: </span>We use Google Analytics to collect and analyze non-personal, aggregated data about your website usage.
                        </li>
                        <li>
                            <span className={styles.highlightedText}>Google Ads: </span> We may use Google Ads to display targeted advertisements. Google may collect information about your visits to our website and other websites to provide personalized ads.
                        </li>
                    </ul>
                </li>
                <li>
                    <p className={styles.sectionTitle}>Use of Your Data</p>
                    <ul className={styles.sectionList}>
                        <li>
                            Your GitHub data is used solely for authentication and displaying your name and avatar URL where needed on our website.
                        </li>
                        <li>
                            Aggregated data from Google Analytics helps us improve our website's performance and user experience.
                        </li>
                    </ul>
                </li>
                <li>
                    <p className={styles.sectionTitle}>Comments and Messages</p>
                    <ul className={styles.sectionList}>
                        <li>
                            Practeasedev may collect and store comments, messages, or other user-generated content that you submit or post on our website.
                        </li>
                        <li>
                            Your comments and messages may be publicly visible to other users of our website, and we may use them for the purpose of facilitating communication and engagement within our community.
                        </li>
                        <li>
                            Please be aware that any information you share in comments or messages may be viewed, collected, or used by other users, and we cannot control their actions.
                        </li>   
                        <li>
                            If you have concerns about any specific comments or messages posted on our website, please contact us at practeasedev@gmail.com to address the issue.
                        </li>   
                    </ul>
                </li>
                <li>
                    <p className={styles.sectionTitle}>Data Security</p>
                    <ul className={styles.sectionList}>
                        <li>
                            We employ reasonable security measures to protect your personal information; however, no online method is entirely secure, and we cannot guarantee the security of your data.
                        </li>
                    </ul>
                </li>
                <li>
                    <p className={styles.sectionTitle}>Data Retention</p>
                    <ul className={styles.sectionList}>
                        <li>
                            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.
                        </li>
                    </ul>
                </li>  
                <li>
                    <p className={styles.sectionTitle}>Legal Bases for Processing</p>
                    <ul className={styles.sectionList}>
                        <li>
                            We process your personal information based on legitimate interests and, when applicable, your consent.
                        </li>
                    </ul>
                </li>
                <li>
                    <p className={styles.sectionTitle}>Data Transfer</p>
                    <ul className={styles.sectionList}>
                        <li>
                            Your data may be transferred and stored in countries outside of your own, and by using our website, you consent to such transfers.
                        </li>
                    </ul>
                </li>  
                <li>
                    <p className={styles.sectionTitle}>Data Breach Notification</p>
                    <ul className={styles.sectionList}>
                        <li>
                            In the event of a data breach that affects your personal information, we will notify you promptly as required by law.
                        </li>
                    </ul>
                </li>
                <li>
                    <p className={styles.sectionTitle}>Third-Party Links</p>
                    <ul className={styles.sectionList}>
                        <li>
                            Our website may contain links to third-party websites. We are not responsible for their privacy practices or content. Please review their privacy policies.
                        </li>
                    </ul>
                </li>   
                <li>
                    <p className={styles.sectionTitle}>Cookies and Tracking</p>
                    <ul className={styles.sectionList}>
                        <li>
                            We may use cookies and similar tracking technologies to enhance your experience on our website. You can manage cookie preferences in your browser settings.
                        </li>
                    </ul>
                </li>   
                <li>
                    <p className={styles.sectionTitle}>Your Rights</p>
                    <ul className={styles.sectionList}>
                        <li>
                            You have the right to access, correct, or delete your personal information. Contact us at practeasedev@gmail.com to exercise these rights.
                        </li>
                    </ul>
                </li>  
                <li>
                    <p className={styles.sectionTitle}>Children's Privacy</p>
                    <ul className={styles.sectionList}>
                        <li>
                            Our website is not intended for children under 13. We do not knowingly collect or maintain personal information from children under 13.
                        </li>
                    </ul>
                </li>  
                <li>
                    <p className={styles.sectionTitle}>Changes to Privacy Policy</p>
                    <ul className={styles.sectionList}>
                        <li>
                            We may update this Privacy Policy as necessary. The date of the last update will be displayed at the beginning of this policy.
                        </li>
                    </ul>
                </li>
                <li>
                    <p className={styles.sectionTitle}>Contact Us</p>
                    <ul className={styles.sectionList}>
                        <li>
                            For questions or concerns regarding your privacy or this Privacy Policy, you can reach us at practeasedev@gmail.com.
                        </li>
                    </ul>
                </li> 
            </ol>
        </main>
    );
};

export default PrivacyPolicy;