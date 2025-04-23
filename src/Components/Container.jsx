import styles from './Container.module.css';

const Container = ({children}) => {
  return <div className={styles.main}>{children}</div>;
};

export default Container;
