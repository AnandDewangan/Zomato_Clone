import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="max-width">
        <div className="footer-header">
          <div className="footer-logo">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;"
              alt="Zomato-Logo"
              className="footer-logo-image"
            />
          </div>
          <div className="footer-language absolute-center">
            <div className="india language">
              <img
                src="https://www.mmppicture.co.in/wp-content/uploads/2021/01/Indian-Flag-PNG-9.png"
                alt="indian flag"
              />
              <span>India</span>
              <i class="bx bx-chevron-down"></i>
            </div>
            <div className="english language">
              <i class="bx bx-globe"></i>
              <span>English</span>
              <i class="bx bx-chevron-down"></i>
            </div>
          </div>
        </div>
        <div className="footer-body">
          <div className="child-1">
            <div className="footer-body-heading">ABOUT ZOMATO</div>
            <div className="footer-content">
              <div>Who We Are</div>
              <div>Blog</div>
              <div>Work With Us</div>
              <div>Investor Relations</div>
              <div>Contact Us</div>
            </div>
          </div>
          <div className="child-2">
            <div className="footer-body-heading">ZOMAVERSE</div>
            <div className="footer-content">
              <div>Zomato</div>
              <div>Binkit</div>
              <div>Feeding India</div>
              <div>Hyperpure</div>
              <div>Zomaland</div>
            </div>
          </div>
          <div className="child-3">
            <div className="footer-body-heading">FOR RESTAURANTS</div>
            <div className="footer-content">
              <div>Parter With Us</div>
              <div>Apps For You</div>
              <div>Zomato For Enterprise</div>
              <div>Report Fraud</div>
            </div>
          </div>
          <div className="child-4">
            <div className="footer-body-heading">LEARN MORE</div>
            <div className="footer-content">
              <div>Privacy</div>
              <div>Security</div>
              <div>Terms</div>
              <div>Sitemap</div>
            </div>
          </div>
        </div>
        <div className="footer-breakline" />
        <div className="footer-lastline">
          <p>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2008-2023 © Zomato™ Ltd.
            All rights{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
