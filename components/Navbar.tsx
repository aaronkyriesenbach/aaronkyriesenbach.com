import Link from 'next/link';
import styles from './Navbar.module.scss';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link href='/about'><a className={styles.nav}>about</a></Link>
            <Link href='/coxing'><a className={styles.nav}>coxing</a></Link>
            <Link href='/coding'><a className={styles.nav}>coding</a></Link>
        </div>
    );
}