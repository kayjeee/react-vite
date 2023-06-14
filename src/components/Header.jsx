/* eslint-disable react/prop-types */
import styles from '@/styles/Header.module.css';

const Header = ({ children }) => {
  // Inline styles for the header
  const headerStyles = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };

  return (
    <header style={headerStyles} className={styles.header}>
      {children}
    </header>
  );
};

export default Header;
