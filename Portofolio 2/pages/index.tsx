import type { NextPage } from "next";
import styles from "./index.module.css";

const Page: NextPage = () => {
  return (
    <main className={styles.page}>
      <footer className={styles.footer}>
        <img className={styles.vindatoIcon} alt="" src="../vindato.svg" />
        <div className={styles.frameParent}>
          <div className={styles.workParent}>
            <div className={styles.work}>Work</div>
            <div className={styles.aboutUs}>About us</div>
            <div className={styles.work}>Shop</div>
          </div>
          <div className={styles.infovindatocomParent}>
            <a
              className={styles.infovindatocom}
              href="mailto:Info@vindato.com"
              target="_blank"
            >
              Info@vindato.com
            </a>
            <img className={styles.frameChild} alt="" src="../group-27.svg" />
          </div>
        </div>
      </footer>
      <section className={styles.contact}>
        <div className={styles.getInTouchParent}>
          <div className={styles.getInTouch}>Get in touch</div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
            <div className={styles.groupInner} />
            <div className={styles.rectangleDiv} />
            <div className={styles.groupChild1} />
            <div className={styles.groupChild2} />
            <div className={styles.groupChild3} />
            <div className={styles.groupChild4} />
            <div className={styles.groupChild5} />
            <div className={styles.groupChild6} />
            <div className={styles.groupChild7} />
            <div className={styles.groupChild8} />
            <div className={styles.groupChild9} />
          </div>
        </div>
        <form className={styles.groupParent}>
          <div className={styles.tellUsAboutYourProjectParent}>
            <div className={styles.tellUsAbout}>
              Tell us about your project:
            </div>
            <div className={styles.groupChild10} />
          </div>
          <div className={styles.firstAndLastNameParent}>
            <div className={styles.firstAndLast}>First and last name:</div>
            <div className={styles.lineDiv} />
          </div>
          <div className={styles.emailParent}>
            <div className={styles.firstAndLast}>Email:</div>
            <div className={styles.groupChild11} />
          </div>
          <div className={styles.emailParent}>
            <div className={styles.firstAndLast}>Company:</div>
            <div className={styles.groupChild11} />
          </div>
        </form>
      </section>
      <section className={styles.services}>
        <div className={styles.getInTouchParent}>
          <h1 className={styles.whatWeDo}>What we do</h1>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
            <div className={styles.groupInner} />
            <div className={styles.rectangleDiv} />
            <div className={styles.groupChild1} />
            <div className={styles.groupChild2} />
            <div className={styles.groupChild3} />
            <div className={styles.groupChild4} />
            <div className={styles.groupChild5} />
            <div className={styles.groupChild6} />
            <div className={styles.groupChild7} />
            <div className={styles.groupChild8} />
            <div className={styles.groupChild9} />
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.brandingWrapper}>
              <div className={styles.branding}>Branding</div>
            </div>
            <div className={styles.brandingWrapper}>
              <div className={styles.branding}>Strategy</div>
            </div>
            <div className={styles.brandingWrapper}>
              <div className={styles.branding}>Digital marketing</div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.brandingWrapper}>
              <div className={styles.branding}>UI/UX Design</div>
            </div>
            <div className={styles.brandingWrapper}>
              <div className={styles.branding}>Development</div>
            </div>
            <div className={styles.brandingWrapper}>
              <div className={styles.packeging}>Packeging</div>
            </div>
          </div>
        </div>
        <button className={styles.discoverOurShopWrapper}>
          <div className={styles.discoverOurShop}>Discover our shop</div>
        </button>
      </section>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.weHelpBrandsGrowAndBuildParent}>
            <h1 className={styles.weHelpBrandsContainer}>
              <span className={styles.weHelp}>{`We help `}</span>
              <span className={styles.brands}>brands</span>
              <span className={styles.weHelp}>{` grow and build  in `}</span>
              <span className={styles.brands}>e-commerce</span>
            </h1>
            <button className={styles.rectangleContainer}>
              <div className={styles.groupChild26} />
              <div className={styles.groupChild27} />
              <div className={styles.groupChild28} />
              <div className={styles.groupChild29} />
              <div className={styles.groupChild30} />
              <div className={styles.groupChild31} />
              <div className={styles.groupChild32} />
              <div className={styles.groupChild33} />
              <div className={styles.groupChild34} />
              <div className={styles.groupChild35} />
              <div className={styles.groupChild36} />
              <div className={styles.groupChild37} />
              <div className={styles.groupChild38} />
              <div className={styles.groupChild39} />
              <div className={styles.groupChild40} />
            </button>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.groupWrapper}>
            <div className={styles.weDesignECommerceSystemsAWrapper}>
              <div
                className={styles.weDesignECommerce}
              >{`We design e-commerce systems and bring your brand directly under the nose of your ideal customer- We design e-commerce `}</div>
            </div>
          </div>
          <div className={styles.groupContainer}>
            <div className={styles.tryOurFreeShopifyThemeParent}>
              <div className={styles.tryOurFree}>
                Try our free shopify theme -
              </div>
              <div className={styles.tryOurFree1}>
                Try our free shopify theme -
              </div>
              <div className={styles.tryOurFree2}>
                Try our free shopify theme -
              </div>
              <div className={styles.tryOurFree3}>
                Try our free shopify theme -
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroChild} />
      </section>
      <nav className={styles.navBar}>
        <img className={styles.vindatoIcon} alt="" src="../vindato1.svg" />
        <div className={styles.workGroup}>
          <a className={styles.work1}>Work</a>
          <a className={styles.aboutUs1}>About us</a>
          <a className={styles.shop1}>Shop</a>
        </div>
        <button className={styles.contactWrapper}>
          <div className={styles.contact1}>Contact</div>
        </button>
      </nav>
      <a className={styles.banner} href="shop.vindato.nl" target="_blank">
        <div className={styles.groupDiv}>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild41} />
            <div className={styles.groupChild42} />
            <div className={styles.groupChild43} />
            <div className={styles.groupChild44} />
            <div className={styles.groupChild45} />
            <div className={styles.groupChild46} />
            <div className={styles.groupChild47} />
            <div className={styles.groupChild48} />
            <div className={styles.groupChild49} />
            <div className={styles.groupChild50} />
            <div className={styles.groupChild51} />
            <div className={styles.groupChild52} />
            <div className={styles.groupChild53} />
            <div className={styles.groupChild54} />
            <div className={styles.groupChild55} />
          </div>
          <div className={styles.tryOurFreeShopifyThemeWrapper}>
            <div className={styles.tryOurFree4}>Try our free shopify theme</div>
          </div>
        </div>
      </a>
    </main>
  );
};

export default Page;
