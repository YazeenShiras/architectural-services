import React from "react";
import styles from "../styles/HowItWorks.module.css";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className={styles.howItWorks} id="howItWorks">
      <div className={styles.title__howItWorks}>
        <h2>How it works</h2>
        <p>
          Easly your Estimate Price your Home Design. Please fill your <br />
          correct data on below
        </p>
        <div className={styles.readMoreButton}>Read More</div>
      </div>
      <div className={styles.flow__howItWorks}>
        <div className={styles.collection}>
          <div>
            <Image src="/collection.svg" alt="" width={200} height={200} />
          </div>
          <div className={styles.text__collection}>
            <div className={styles.flow__count}>1</div>
            <h3>Collection</h3>
            <p>
              Collection of requirement and Initial payment <br /> from client.
            </p>
          </div>
          <div className={styles.collection__line}>
            <Image src="/collection_line.svg" alt="" width={600} height={600} />
          </div>
        </div>
        <div className={styles.delivery}>
          <div className={styles.delivery__line}>
            <Image src="/delivery_line.svg" alt="" width={500} height={500} />
          </div>
          <div>
            <Image src="/delivery.svg" alt="" width={200} height={200} />
          </div>
          <div className={styles.text__delivery}>
            <div className={styles.flow__count}>2</div>
            <h3>Delivery</h3>
            <p>
              Timely submission of deliverables as per <br />
              subscription plans subject to relaization of <br />
              payments.
            </p>
          </div>
        </div>
        <div className={styles.discussion}>
          <div>
            <Image src="/discussion.svg" alt="" width={200} height={200} />
          </div>
          <div className={styles.text__delivery}>
            <div className={styles.flow__count}>3</div>
            <h3>Discussion</h3>
            <p>
              Telephonic discussion between experts from <br /> Arclif and
              client to collect additional details <br /> (If Required).
            </p>
          </div>
          <div className={styles.discussion__line}>
            <Image src="/discussion_line.svg" alt="" width={500} height={300} />
          </div>
        </div>
        <div className={styles.finalReview}>
          <div>
            <Image src="/finalReview.svg" alt="" width={200} height={200} />
          </div>
          <div className={styles.text__delivery}>
            <div className={styles.flow__count}>4</div>
            <h3>Final Review</h3>
            <p>
              Timely submission of deliverables as per <br /> subscription plans
              subject to relaization of <br /> payments
            </p>
          </div>
        </div>
      </div>

      <div className={styles.flow__howItWorks__mobile}>
        <div className={styles.collection}>
          <div>
            <Image src="/collection.svg" alt="" width={300} height={300} />
          </div>
          <div className={styles.text__collection}>
            <div className={styles.text__collection__count}>
              <div className={styles.flow__count}>1</div>
              <h3>Collection</h3>
            </div>
            <p>Collection of requirement and Initial payment from client.</p>
          </div>
          <div className={styles.collection__line}>
            <Image
              src="/collection_mobile.svg"
              alt=""
              width={600}
              height={600}
            />
          </div>
        </div>
        <div className={styles.delivery}>
          <div className={styles.delivery__line}>
            <Image src="/delivery_mobile.svg" alt="" width={350} height={500} />
          </div>
          <div>
            <Image src="/delivery.svg" alt="" width={300} height={300} />
          </div>
          <div className={styles.text__delivery}>
            <div className={styles.text__collection__count}>
              <div className={styles.flow__count}>2</div>
              <h3>Delivery</h3>
            </div>
            <p>
              Timely submission of deliverables as per subscription plans
              subject to relaization of payments.
            </p>
          </div>
        </div>
        <div className={styles.discussion}>
          <div>
            <Image src="/discussion.svg" alt="" width={400} height={400} />
          </div>
          <div className={styles.text__delivery}>
            <div className={styles.text__collection__count}>
              <div className={styles.flow__count}>3</div>
              <h3>Discussion</h3>
            </div>
            <p>
              Telephonic discussion between experts from Arclif and client to
              collect additional details (If Required).
            </p>
          </div>
          <div className={styles.discussion__line}>
            <Image
              src="/discussion_mobile.svg"
              alt=""
              width={500}
              height={900}
            />
          </div>
        </div>
        <div className={styles.finalReview}>
          <div>
            <Image src="/finalReview.svg" alt="" width={100} height={100} />
          </div>
          <div className={styles.text__delivery}>
            <div className={styles.text__collection__count}>
              <div className={styles.flow__count}>4</div>
              <h3>Final Review</h3>
            </div>
            <p>
              Timely submission of deliverables as per <br /> subscription plans
              subject to relaization of payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
