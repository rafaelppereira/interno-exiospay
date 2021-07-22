import toast from 'react-hot-toast';

import styles from './styles.module.scss';

interface SubscribeButtonProps {
  onOpenNewSubscribeButton: () => void;
}

export function SubscribeButton({ onOpenNewSubscribeButton }) {

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={onOpenNewSubscribeButton}
    >
      Subscribe now
    </button>
  );
}

