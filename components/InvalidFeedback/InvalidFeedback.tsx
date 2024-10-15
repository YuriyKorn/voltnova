import styles from './InvalidFeedback.module.scss';

interface IInvalidFeedbackProps {
  msg: string;
}

const InvalidFeedback = ({ msg }: IInvalidFeedbackProps) => {
  return (
    <div key={msg} className={styles['invalid-feedback']}>
      {msg}
    </div>
  );
};

export default InvalidFeedback;
