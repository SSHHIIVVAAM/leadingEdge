import React from "react";
import "./Offer.css";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";

const Offer = () => {
  return (
    <section id="experience">
      <h1>What We Offer</h1>
      <h5>
        Leading Edge Info Solutions offers comprehensive digital marketing
        services that help you get the right message in front of the right
        audience to drive real results.
      </h5>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3 className="zz">
            <img src={logo1} alt="" />
            Search Engine Optimization
          </h3>
          <h5 className="aa">
            Enhance your online visibility and stay ahead in this competitive
            digital landscape with our 360°digital marketing services. We
            perform SEO audits to review your organic web traffic, keyword
            ranking, content, and responsiveness. Rise above the competition
            with our <span>professional SEO agency.</span>
          </h5>
          <div className="experience_content">
            <article className="experience_details">
              <div>
                <h5>
                  <i class="bx bx-check"></i>Local SEO
                </h5>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <h5>
                  <i class="bx bx-check"></i>Link Building
                </h5>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <h5>
                  <i class="bx bx-check"></i>On Page SEO
                </h5>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <h5>
                  <i class="bx bx-check"></i>Ecommerce SEO
                </h5>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience_backend">
          <h3 className="zz">
            <img src={logo2} alt="" />
            Online Reputation
          </h3>
          <h5 className="aa">
            We offer comprehensive online brand reputation services. We are
            committed to fostering a positive perception of your brand, ensuring
            that it resonates with your target market and stands strong against
            digital challenges.
          </h5>
          <div className="experience_content">
            <article className="experience_details">
              <div>
                <h5>
                  <i class="bx bx-check"></i>Reputation Management
                </h5>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <h5>
                  <i class="bx bx-check"></i>Social Media
                </h5>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <h5>
                  <i class="bx bx-check"></i>PR Marketing
                </h5>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <h5>
                  <i class="bx bx-check"></i>Email Marketing
                </h5>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_frontend">
          <h3 className="zz">
            <img src={logo3} alt="" />
            Web Design & Development
          </h3>
          <h5 className="aa">
            As a leading web marketing agency, we blend creativity & technical
            expertise to create user-friendly websites that engage your
            audience.We have a team of professional website developers and
            designers who develop websites that deliver data-driven results.
            Increase your brand credibility with us.
          </h5>
          <div className="experience_content">
            <article className="experience_details">
              <div>
                <h5>
                  <i class="bx bx-check"></i>Ecommerce Development
                </h5>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <h5>
                  <i class="bx bx-check"></i>Speed Optimization
                </h5>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <h5>
                  <i class="bx bx-check"></i>WordPress Development
                </h5>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <h5>
                  <i class="bx bx-check"></i>Shopify Development
                </h5>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3 className="zz">
            <img src={logo4} alt="" />
            Performance Marketing
          </h3>
          <h5 className="aa">
            With the right target audience, analytics, and quick adjustments,
            PPC or Pay Per Click improves brand exposure, drives traffic, &
            accelerates lead generation. Our experienced PPC team creates highly
            targeted and effective PPC campaigns that drive tangible results.
          </h5>
          <div className="experience_content">
            <article className="experience_details">
              <div>
                <h5>
                  <i class="bx bx-check"></i>Google Ads
                </h5>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <h5>
                  <i class="bx bx-check"></i>Facebook Marketing
                </h5>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <h5>
                  <i class="bx bx-check"></i>LinkedIn Marketing
                </h5>
              </div>
            </article>
            <article className="experience_details">
              <div>
                <h5>
                  <i class="bx bx-check"></i>Instagram Marketing
                </h5>
              </div>
            </article>
          </div>
        </div>
      </div>
      <button class="button-abc">Send Me A Proposal</button>
    </section>
  );
};

export default Offer;
