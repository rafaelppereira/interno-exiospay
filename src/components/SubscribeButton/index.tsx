import toast from 'react-hot-toast';
import styles from './styles.module.scss';

export function SubscribeButton() {

  function handleSubscribeButton() {
    toast.error("hummm it seems that this feature is not available yet 😢")
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribeButton}
    >
      Subscribe now
    </button>
  );
}

