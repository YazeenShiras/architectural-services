import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.header__left}>
          <Link href="/" passHref>
            <Image
              className={styles.header__logo}
              src="/arclifLogo.svg"
              alt="Arclif Logo"
              width={100}
              height={35}
            />
          </Link>
        </div>
        <div className={styles.header__right}>
          <nav className={styles.header__nav}>
            <ul>
              <li>
                <a href="#aboutUs">About Us</a>
              </li>
              <li>
                <a href="#whatWeDo">What we do</a>
              </li>
              <li>
                <a href="#howItWorks">How it works</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </nav>
          <a
            href="https://arclif.com/account/login"
            className={styles.loginButton__header}
          >
            REGISTER
          </a>
          <div className={styles.header__menu__container}>
            <Image
              className={styles.header__menu}
              src="/menuIcon.svg"
              alt=""
              width={30}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
