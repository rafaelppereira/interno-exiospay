import Modal from 'react-modal';
import toast from 'react-hot-toast';

import { FaCreditCard, FaCcApplePay, FaArrowRight } from 'react-icons/fa';

import styles from './styles.module.scss';

interface NewSubscribeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewSubscribeModal({ isOpen, onRequestClose }: NewSubscribeModalProps) {

  function handleButtonActive() {
    toast.error('Our services are not currently available. 😢');
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={styles.reactModalOverlay}
      className={styles.reactModalContent}
    >
      <h2>Custom your own <br /> <span>card number</span></h2>
      <img src="./card.svg" alt="exiospay" />
      <div className={styles.infoContent}>
        <div className={styles.infocard}>
          <div>
            <FaCreditCard />
          </div>
          <div>
            <h3>USD current account</h3>
            <p>Deposit before consumption.</p>
          </div>
        </div>
        <div className={styles.infocard}>
          <div>
            <FaCcApplePay />
          </div>
          <div>
            <h3>USD current account</h3>
            <p>Deposit before consumption.</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={handleButtonActive}
      >
        Active now <FaArrowRight />
      </button>
    </Modal>
  )
}