import styles from './Button.module.css'

const Button = ({ label }) => {
  return <button className={styles.btn}>{label}</button>
}

export default Button
