import React from "react";
import styles from "../styles/BodyValidate.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";

const BodyValidate = () => {
  return (
    <div className={styles.bodyValidate}>
      <Header />
      <div
        className={styles.bodyValidate__container}
        style={{ backgroundImage: `url('/bgdesign.svg')` }}
      >
        <h3>Validate your details</h3>
        <p>Lorem ipsum dolor</p>
        <div className={styles.cardsContainer__validate}>
          <div className={styles.card__validate}>
            <div className={styles.titleContainer__card__validate}>
              <h5>Personal Details</h5>
              <div className={styles.editButton__container__card__validte}>
                <Image
                  src="/editIcon.svg"
                  alt=""
                  width={12}
                  height={12}
                ></Image>
                <p>EDIT</p>
              </div>
            </div>
            <div className={styles.rowsContainer__card__validate}>
              <div className={styles.row__card__validate}>
                <h6>Name</h6>
                <p>John Doe</p>
              </div>
              <div className={styles.row__card__validate}>
                <h6>Mobile Number</h6>
                <p>+91 99999 99999</p>
              </div>
              <div className={styles.row__card__validate}>
                <h6>Email</h6>
                <p>johndoe@gmail.com</p>
              </div>
              <div className={styles.row__card__validate}>
                <h6>Location</h6>
                <p>Calicut</p>
              </div>
              <div className={styles.row__card__validate}>
                <h6>Profession</h6>
                <p>Architect</p>
              </div>
              <div className={styles.row__card__validate}>
                <h6>No.of Family Members</h6>
                <p>5 No</p>
              </div>
              <div className={styles.row__card__validate__last}>
                <h6>Senior Citizen?</h6>
                <p>Yes</p>
              </div>
            </div>
          </div>
          <div className={styles.card__validate}>
            <div className={styles.titleContainer__card__validate}>
              <h5>Building Details</h5>
              <div className={styles.editButton__container__card__validte}>
                <Image
                  src="/editIcon.svg"
                  alt=""
                  width={12}
                  height={12}
                ></Image>
                <p>EDIT</p>
              </div>
            </div>
            <div className={styles.rowsContainer__card__validate}>
              <div className={styles.row__card__validate}>
                <h6>Total Budget for home</h6>
                <p>10 Lach</p>
              </div>
              <div className={styles.row__card__validate}>
                <h6>Total Area</h6>
                <p>1000 Sq.Ft</p>
              </div>
              <div className={styles.row__card__validate}>
                <h6>No.of Floors</h6>
                <p>2</p>
              </div>
              <div className={styles.row__card__validate}>
                <h6>Type of Design</h6>
                <p>Traditional House</p>
              </div>
              <div className={styles.row__card__validate}>
                <h6>No.of Bedrooms</h6>
                <p>4</p>
              </div>
              <div className={styles.row__card__validate__last}>
                <h6>No.of attached Washrooms</h6>
                <p>4</p>
              </div>
            </div>
          </div>
          <div className={styles.card__validate}>
            <div className={styles.titleContainer__card__validate}>
              <h5>Requirement List</h5>
              <div className={styles.editButton__container__card__validte}>
                <Image
                  src="/editIcon.svg"
                  alt=""
                  width={12}
                  height={12}
                ></Image>
                <p>EDIT</p>
              </div>
            </div>
            <div className={styles.rowsContainer__card__validate__last}>
              <div>
                <ul>
                  <li>Sitout</li>
                  <li>Formal Living Area</li>
                  <li>Bedrooms</li>
                  <li>Kids Bedrooms</li>
                  <li>Dining Room</li>
                  <li>Courtyard</li>
                  <li>Kitchen</li>
                  <li>Store Room</li>
                  <li>Game Room</li>
                  <li>Theatre Room</li>
                  <li>Nursery</li>
                  <li>Veranda</li>
                  <li>Basement</li>
                  <li>Garage</li>
                  <li>Waterbody</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Home Office</li>
                  <li>Library</li>
                  <li>Laundry Room</li>
                  <li>Conservatory</li>
                  <li>Study Room</li>
                  <li>Deck</li>
                  <li>Servant Room</li>
                  <li>Washrooms</li>
                  <li>Stair</li>
                  <li>Elevator</li>
                  <li>Swimming Pool</li>
                  <li>Landscaping</li>
                  <li>Porch</li>
                  <li>Patio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Link href="/plans" passHref>
          <div className={styles.next__button}>NEXT</div>
        </Link>
      </div>
      <div className={styles.footer__container}>
        <Footer />
      </div>
      <div className={styles.footer__container__mobile}>
        <FooterMobile />
      </div>
    </div>
  );
};

export default BodyValidate;
