import React from "react";
import styles from "../styles/BodyRequirements.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";

const BodyRequirements = () => {
  return (
    <div className={styles.bodyRequirements}>
      <Header />
      <div
        className={styles.bodyRequirements__container}
        style={{ backgroundImage: `url('/bgdesign.svg')` }}
      >
        <h3>Plan your dream house yoursrelf</h3>
        <p>Choose your requirements</p>
        <div className={styles.options__container}>
          <div className={styles.optionFiveByOne__container}>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/sitout.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Sitout</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/living.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Formal Living Area</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/bedrooms.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Bedrooms</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/kidsbedroom.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Kids Bedrooms</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/dining.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Dining Room</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/courtyard.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Courtyard</p>
            </div>
          </div>
          <div className={styles.optionFiveByOne__container}>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/kitchen.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Kitchen</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/store.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Store Room</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/game.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Game Room</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/theatre.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Theatre Room</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/nursery.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Nursery</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/veranda.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Veranda</p>
            </div>
          </div>
          <div className={styles.optionFiveByOne__container}>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/office.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Home Office</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/library.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Library</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/laundry.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Laundry Room</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/conservatory.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Conservatory</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/study room.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Study Room</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/deck.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Deck</p>
            </div>
          </div>
          <div className={styles.optionFiveByOne__container}>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/servant.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Servant Room</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/washrooms.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Washrooms</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/stair.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Stair</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/elevator.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Elevator</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/pool.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Swimming Pool</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/landscaping.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Landscaping</p>
            </div>
          </div>
          <div className={styles.optionFiveByOne__container}>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/basement.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Basement</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/garage.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Garage</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/waterbody.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Waterbody</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/porch.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Porch</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/patio.svg"
                  alt=""
                  width={50}
                  height={50}
                ></Image>
              </div>
              <p>Patio</p>
            </div>
            <div className={styles.option__requirements}>
              <div className={styles.imageContainer__option__requirements}>
                <Image
                  className={styles.bubble2__top__content__main__right}
                  src="/"
                  alt=""
                  width={0}
                  height={0}
                ></Image>
              </div>
              <p></p>
            </div>
          </div>
        </div>
        <Link href="/validate" passHref>
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

export default BodyRequirements;
