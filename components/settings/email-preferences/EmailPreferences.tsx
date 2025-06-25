import React from 'react';
import styles from '../my-account/MyAccount.module.scss';

type EmailSubscriptionProps = {
 
 }
const EmailSubscription: React.FC<EmailSubscriptionProps> = () => {
  return (
    <div className={styles.setting}>
        <p className={styles.title}>
            Email Preferences
        </p>
            <p className={styles.message}>Prophit can send you helpful sports betting advice from time to time as well as location-based special offers and exclusive content.</p>
            <p className={styles.accent}>Change my email preference.</p>
       </div>
  );
};

export default EmailSubscription;