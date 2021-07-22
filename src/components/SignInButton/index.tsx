import { toast } from 'react-hot-toast';

import { FaGoogle } from 'react-icons/fa';
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss';

export function SignInButton() {
  const isButtonLogged = false;

  function handleButtonSignIn() {
    toast(
      "Hi user 🖐 our development team is preparing news for 2022 stay tuned to learn more 💚",
      {
        duration: 6000,
      }
    );
  }

  return (
    isButtonLogged ? (
      <button
        type="button"
        className={styles.signInButton}
      > 
        <FaGoogle color="#00e4a3" />
        Rafael Pereira
        <FiX color="#737380" className={styles.closeIcon} />
      </button>
    ) : (
      <button
        type="button"
        className={styles.signInButton}
        onClick={handleButtonSignIn}
      >
        <FaGoogle color="#00956a" />
        Sign in with Google
      </button>
    )
  )
}