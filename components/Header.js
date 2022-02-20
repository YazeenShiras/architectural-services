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
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <a href="#requirementsPosting">Home Seeker</a>
              </li>
              <li>
                <a href="#worksPosting">Architect</a>
              </li>
              <li>
                <a href="#marketPlace">Marketplace</a>
              </li>
            </ul>
          </nav>
          <a
            href="https://arclif.com/account/login"
            className={styles.loginButton__header}
          >
            LOGIN
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
