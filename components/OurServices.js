import React from "react";
import styles from "../styles/OurServices.module.css";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

const OurServices = () => {
  return (
    <div className={styles.ourServices} id="ourServices">
      <div className={styles.title__ourServices}>
        <div className={styles.top__title__ourServices}>
          <span></span>
          <h2>Our Services</h2>
          <span></span>
        </div>
        <p>
          Easly pre your Estimate Price your Home Design. Please fill your
          <br />
          correct data on below
        </p>
      </div>
      <div className={styles.caroserContainerMain}>
        <Carousel animation="slide" duration="500" swipe="true" interval="2000">
          <div className={styles.caroselContainer}>
            <div className={styles.card__ourServices}>
              <div className={styles.left__card__ourServices}>
                <div>
                  <Image src="/archsrvs.svg" alt="" width={80} height={80} />
                </div>
              </div>
              <div className={styles.right__card__ourServices}>
                <h4>Architectural services</h4>
                <p>
                  spaces that are truly exceptional. Working as one <br /> team
                  with architects, designers, drafters, project <br /> managers
                  and construction
                </p>
                <div className={styles.viewServiceButton}>View Service</div>
              </div>
            </div>
            <div className={styles.card__ourServices}>
              <div className={styles.left__card__ourServices}>
                <div>
                  <Image src="/sitePlan.svg" alt="" width={70} height={70} />
                </div>
              </div>
              <div className={styles.right__card__ourServices}>
                <h4>Site plans</h4>
                <p>
                  spaces that are truly exceptional. Working as one <br /> team
                  with architects, designers, drafters, project <br /> managers
                  and construction
                </p>
                <div className={styles.viewServiceButton}>View Service</div>
              </div>
            </div>
          </div>
          <div className={styles.caroselContainer}>
            <div className={styles.card__ourServices}>
              <div className={styles.left__card__ourServices}>
                <div>
                  <Image src="/floorPLans.svg" alt="" width={80} height={80} />
                </div>
              </div>
              <div className={styles.right__card__ourServices}>
                <h4>Floor plans</h4>
                <p>
                  spaces that are truly exceptional. Working as one <br /> team
                  with architects, designers, drafters, project <br /> managers
                  and construction
                </p>
                <div className={styles.viewServiceButton}>View Service</div>
              </div>
            </div>
            <div className={styles.card__ourServices}>
              <div className={styles.left__card__ourServices}>
                <div>
                  <Image src="/elevation.svg" alt="" width={90} height={90} />
                </div>
              </div>
              <div className={styles.right__card__ourServices}>
                <h4>Elevation</h4>
                <p>
                  spaces that are truly exceptional. Working as one <br /> team
                  with architects, designers, drafters, project <br /> managers
                  and construction
                </p>
                <div className={styles.viewServiceButton}>View Service</div>
              </div>
            </div>
          </div>
          <div className={styles.caroselContainer}>
            <div className={styles.card__ourServices}>
              <div className={styles.left__card__ourServices}>
                <div>
                  <Image src="/interior.svg" alt="" width={90} height={90} />
                </div>
              </div>
              <div className={styles.right__card__ourServices}>
                <h4>Interior drawings</h4>
                <p>
                  spaces that are truly exceptional. Working as one <br /> team
                  with architects, designers, drafters, project <br /> managers
                  and construction
                </p>
                <div className={styles.viewServiceButton}>View Service</div>
              </div>
            </div>
            <div className={styles.card__ourServices__end}>
              <div className={styles.left__card__ourServices}>
                <div>
                  <Image src="/3D.svg" alt="" width={90} height={90} />
                </div>
              </div>
              <div className={styles.right__card__ourServices}>
                <h4>3D views</h4>
                <p>
                  spaces that are truly exceptional. Working as one <br /> team
                  with architects, designers, drafters, project <br /> managers
                  and construction
                </p>
                <div className={styles.viewServiceButton}>View Service</div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <div className={styles.caroselContainer__mobile}>
        <Carousel animation="slide" duration="500" swipe="true" interval="2000">
          <div className={styles.card__ourServicesMobile}>
            <div className={styles.left__card__ourServices}>
              <div>
                <Image src="/archsrvs.svg" alt="" width={70} height={70} />
              </div>
            </div>
            <div className={styles.right__card__ourServices}>
              <h4>Architectural services</h4>
              <p>
                spaces that are truly exceptional. Working as one <br /> team
                with architects, designers, drafters, project <br /> managers
                and construction
              </p>
              <div className={styles.viewServiceButton}>View Service</div>
            </div>
          </div>
          <div className={styles.card__ourServicesMobile}>
            <div className={styles.left__card__ourServices}>
              <div>
                <Image src="/sitePlan.svg" alt="" width={60} height={60} />
              </div>
            </div>
            <div className={styles.right__card__ourServices}>
              <h4>Site plans</h4>
              <p>
                spaces that are truly exceptional. Working as one <br /> team
                with architects, designers, drafters, project <br /> managers
                and construction
              </p>
              <div className={styles.viewServiceButton}>View Service</div>
            </div>
          </div>
          <div className={styles.card__ourServicesMobile}>
            <div className={styles.left__card__ourServices}>
              <div>
                <Image src="/floorPLans.svg" alt="" width={70} height={70} />
              </div>
            </div>
            <div className={styles.right__card__ourServices}>
              <h4>Floor plans</h4>
              <p>
                spaces that are truly exceptional. Working as one <br /> team
                with architects, designers, drafters, project <br /> managers
                and construction
              </p>
              <div className={styles.viewServiceButton}>View Service</div>
            </div>
          </div>
          <div className={styles.card__ourServicesMobile}>
            <div className={styles.left__card__ourServices}>
              <div>
                <Image src="/elevation.svg" alt="" width={80} height={80} />
              </div>
            </div>
            <div className={styles.right__card__ourServices}>
              <h4>Elevation</h4>
              <p>
                spaces that are truly exceptional. Working as one <br /> team
                with architects, designers, drafters, project <br /> managers
                and construction
              </p>
              <div className={styles.viewServiceButton}>View Service</div>
            </div>
          </div>
          <div className={styles.card__ourServicesMobile}>
            <div className={styles.left__card__ourServices}>
              <div>
                <Image src="/interior.svg" alt="" width={80} height={80} />
              </div>
            </div>
            <div className={styles.right__card__ourServices}>
              <h4>Interior drawings</h4>
              <p>
                spaces that are truly exceptional. Working as one <br /> team
                with architects, designers, drafters, project <br /> managers
                and construction
              </p>
              <div className={styles.viewServiceButton}>View Service</div>
            </div>
          </div>
          <div className={styles.card__ourServicesMobile}>
            <div className={styles.left__card__ourServices}>
              <div>
                <Image src="/3D.svg" alt="" width={80} height={80} />
              </div>
            </div>
            <div className={styles.right__card__ourServices}>
              <h4>3D views</h4>
              <p>
                spaces that are truly exceptional. Working as one <br /> team
                with architects, designers, drafters, project <br /> managers
                and construction
              </p>
              <div className={styles.viewServiceButton}>View Service</div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default OurServices;
