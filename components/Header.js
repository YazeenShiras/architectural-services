import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.headerMain}>
        <div className={styles.header__left}>
          <Link href="/" passHref>
            <Image
              className={styles.header__logo}
              src="/agrihaLogo.svg"
              alt="agriha Logo"
              width={120}
              height={100}
            />
          </Link>
        </div>
        <div className={styles.header__right}>
          {/* <nav className={styles.header__nav}>
            <ul>
              <li>
                <a href="#aboutUs">About Us</a>
              </li>
              <li>
                <a href="#whatWeDo">Services</a>
              </li>
              <li>
                <a href="#marketplace">Marketplace</a>
              </li>
            </ul>
          </nav>
           <Link href="/sendotp" passHref>
            <p className={styles.loginButton__header}>LOG OUT</p>
          </Link>
          <div className={styles.header__menu__container}>
            <Image
              className={styles.header__menu}
              src="/menuIcon.svg"
              alt=""
              width={30}
              height={20}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
