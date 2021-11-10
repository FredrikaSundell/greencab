import styles from './ToggleSwitch.module.css'

const ToggleSwitch = ({ isToggled, toggle, id, label }) => {
  return (
    <label className={styles.switch} htmlFor={id}>
      {/* {label} */}
      <input type="checkbox" id={id} checked={isToggled} onChange={toggle} />
      <span className={styles.pseudo} />
      <span className={styles.label}>hejhej</span>
    </label>
  )
}
export default ToggleSwitch
