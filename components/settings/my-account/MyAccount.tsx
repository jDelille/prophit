import React from "react";
import styles from "./MyAccount.module.scss";

type MyAccountProps = {};
const MyAccount: React.FC<MyAccountProps> = () => {
  return (
    <div className={styles.setting}>
       <div className={styles.profile}>
        <h2 className={styles.title}>Profile</h2>
        <p className={styles.listTitle}>Login info <span className={styles.accent}>Edit</span></p>
        <ul>
            <li>Username: SockLord</li>
            <li>Email: justind7513@gmail.com</li>
            <li className={styles.accent}>Create a password</li>
        </ul>
       </div>
       <div className={styles.connections}>
        <p>Your account is connected to Google.</p>
       </div>
      
    </div>
  )
};

export default MyAccount;
