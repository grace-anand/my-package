import Button from '../form-inputs/Button/Button';
import Textfield from '../form-inputs/text-field/Textfield';
import styles from './login-form.module.css';

const LoginForm = ({ className }) => {
  return (
    <div className={`${styles.form} {className}`}>
      <h1 className={styles.label}>Create an account</h1>
      <Textfield
        className={'pb-2'}
        label={'E-mail'}
        placeholder={'Enter the email...'}
        type={'email'}
        onChange={(e) => console.log(e.target.value)}
      />
      <Textfield
        className={'pb-5'}
        label={'Password'}
        placeholder={'Enter the password...'}
        type={'password'}
        onChange={(e) => console.log(e.target.value)}
      />
      <p className={styles.forgot}>Forgot Password?</p>
      <Button label={'Submit'} />
    </div>
  );
};

export default LoginForm;
