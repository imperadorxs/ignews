import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export const SignInButton = () => {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (<button className={styles.signInButton}>
    <FaGithub color="#04d361" /> Imperadorxs <FiX className={styles.closeIcon} color="#737380" />
  </button>) : (<button className={styles.signInButton}>
    <FaGithub color="#eba417" /> SignIn with github
  </button>);
}