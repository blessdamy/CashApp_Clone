import React from "react";
import "./Footer.css";
import BarCode from "../Reusables/BarCode/BarCode";
import { RiTwitterXLine } from 'react-icons/ri';
import { FaInstagram, FaTwitch, FaTiktok, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div>
            <h2 className="footer-txt">
              Do more with
              <br />
              your money
            </h2>
            <div>
            <BarCode bar_code="bar-code-noBackgrd footer-bar" />

            </div>
          </div>
          <div className="footer_links">
            <div className="footer-nav">
              <div>
                <h3 className="footer-h3">Learn more</h3>
                <div className="learn-links">
                  <div>Legal</div>
                  <div>Licence</div>
                  <div>Security</div>
                  <div>Careers</div>
                  <div>Press</div>
                  <div>Reviews</div>
                  <div>Support</div>
                  <div>Help</div>
                  <div>Status</div>
                </div>
              </div>
              <div>
                <div className="stay">
                  <h3 className="footer-h3">Stay in Touch</h3>
                  <div className="footer-socials">
                    <RiTwitterXLine style={{ width: "20px", height: "20px" }} />
                    <FaInstagram style={{ width: "21px", height: "21px" }} />
                    <FaTwitch style={{ width: "20px", height: "24px" }} />
                    <FaTiktok style={{ width: "17px", height: "20px" }} />
                    <FaLinkedin style={{ width: "20px", height: "20px" }} />
                  </div>
                </div>
                <div className="contact">
                  <h3>Contact Us</h3>
                  <p>
                    1 (800) 969-1940
                    <br />
                    Available daily,
                    <br />9 AM- 7PM ET
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-paragraphs">
              <p>
                * Cash App is a financial services platform, not a bank. Banking
                services are provided by Cash App’s bank partner(s). Prepaid
                debit cards issued by Sutton Bank.
              </p>
              <p>
                Cash App waives ATM fees for all in-network withdrawals every
                month you have at least $300 direct deposited into your Cash
                balance. Additional information here.
              </p>
              <p>
                ** Brokerage services by Cash App Investing LLC, member
                FINRA/SIPC, subsidiary of Block, Inc., formerly known as Square,
                Inc. See our BrokerCheck. Bitcoin services provided by Block,
                Inc. Investing and purchasing bitcoin involves risk; you may
                lose money. Cash App Investing does not trade bitcoin and Block,
                Inc. is not a member of FINRA or SIPC. For additional
                information, see the Bitcoin and Cash App Investing disclosures.
              </p>
              <p>
                Fractional shares may involve additional risks. Fractional
                shares are not transferable. For a complete explanation of
                conditions, restrictions and limitations associated with
                fractional shares see our Cash App Investing Customer Account
                Agreement.
              </p>
              <p>
                Additional fees for securities may apply such as regulatory fees
                and fees to transfer securities externally. Please see our House
                Rules for more information.
              </p>
              <p>
                No content on this website shall be considered as a
                recommendation or solicitation for the purchase or sale of
                securities. Stock companies are shown for illustrative purposes
                only and are not endorsements.
              </p>
              <p>
                P2P services, Cash App Pay, and Savings are provided by Block,
                Inc. and not Cash App Investing LLC.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
