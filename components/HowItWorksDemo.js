import React from "react";
import styles from "../styles/HowItWorksDemo.module.css";
import Image from "next/image";

const HowItWorksDemo = () => {
  return (
    <div className={styles.howItsWorksDemo}>
      <div className={styles.howItsWorksDemo_main}>
        <div className={styles.left__howItsWorksDemo}>
          <h2>How it works demo</h2>
          <h5>Design your dream home</h5>
          <a
            href="https://youtu.be/4WVTLEA1uhQ"
            className={styles.button__howItsWorksDemo}
          >
            <div>
              <Image src="/playButton.svg" alt="" width={20} height={10} />
            </div>
            Watch more
          </a>
          <p>
            AGRIHA is an initiative by Arclif Inc. to empower the home seeker to
            dream and design their perfect home online with just few clicks. We
            offer supporting architecture services starting from home plans to
            execution to create the best living spaces for our customers in
            designing the perfect living space for their needs, desires and
            lifestyle.
          </p>
        </div>
        <div className={styles.right__howItsWorksDemo}>
          <a href="https://youtu.be/4WVTLEA1uhQ">
            <Image src="/y_t_redirect.svg" alt="" width={350} height={300} />
          </a>
        </div>
      </div>

      <div className={styles.howItsWorksDemo_mobile}>
        <div className={styles.left__howItsWorksDemo}>
          <h2>How it works demo</h2>
          <h5>Design your dream home</h5>
          <div className={styles.right__howItsWorksDemo}>
            <a href="https://youtu.be/4WVTLEA1uhQ">
              <Image src="/y_t_redirect.svg" alt="" width={350} height={300} />
            </a>
          </div>
          <p>
            AGRIHA is an initiative by Arclif Inc. to empower the home seeker to
            dream and design their perfect home online with just few clicks. We
            offer supporting architecture services starting from home plans to
            execution to create the best living spaces for our customers in
            designing the perfect living space for their needs, desires and
            lifestyle.
          </p>
        </div>
        <a
          href="https://youtu.be/4WVTLEA1uhQ"
          className={styles.button__howItsWorksDemo}
        >
          <div>
            <Image src="/playButton.svg" alt="" width={22} height={12} />
          </div>
          Watch more
        </a>
      </div>
    </div>
  );
};

export default HowItWorksDemo;
