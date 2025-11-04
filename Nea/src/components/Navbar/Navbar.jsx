import { useState } from "react";
import "./Navbar.css";
import { translations } from '/src/translations/translations.js';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [language, setLanguage] = useState("en");

  const t = translations[language];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ne" : "en");
  };

  const toggleDropdown = (e, dropdownName) => {
    e.preventDefault();
    if (window.innerWidth <= 1200) {
      setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
      setActiveSubmenu(null);
    }
  };

  const toggleSubmenu = (e, submenuName) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveSubmenu(activeSubmenu === submenuName ? null : submenuName);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Hamburger icon */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <a href="#">{t.home}</a>

          {/* ABOUT US DROPDOWN (Mega Menu) */}
          <div
            className={`dropdown ${activeDropdown === "about" ? "active" : ""}`}
            onClick={(e) => toggleDropdown(e, "about")}
          >
            <span className="dropbtn">{t.aboutUs}</span>
            <div className="dropdown-content mega-menu">
              <div className="mega-columns">
                <div>
                  <h4>{t.introduction}</h4>
                  <a href="#">{t.aboutUsLink}</a>
                  <a href="#">{t.organizationalStructure}</a>
                  <a href="#">{t.boardOfDirectors}</a>
                  <a href="#">{t.contactInformation}</a>
                </div>
                <div>
                  <h4>{t.corporateStructure}</h4>
                  <a href="#">{t.generationDirectorate}</a>
                  <a href="#">{t.transmissionDirectorate}</a>
                  <a href="#">{t.distributionDirectorate}</a>
                </div>
                <div>
                  <h4>{t.provincialOffices}</h4>
                  <a href="#">{t.koshiProvince}</a>
                  <a href="#">{t.madheshProvince}</a>
                  <a href="#">{t.bagmatiProvince}</a>
                  <a href="#">{t.gandakiProvince}</a>
                  <a href="#">{t.lumbiniProvince}</a>
                  <a href="#">{t.karnaliProvince}</a>
                  <a href="#">{t.sudurProvince}</a>
                </div>
                <div>
                  <h4>{t.provinceDivisionOffices}</h4>
                  <a href="#">{t.bagmatiDivision}</a>
                  <a href="#">{t.lumbiniDivision}</a>
                </div>
              </div>
            </div>
          </div>

          {/* MEDIA CENTER DROPDOWN */}
          <div
            className={`dropdown ${activeDropdown === "media" ? "active" : ""}`}
            onClick={(e) => toggleDropdown(e, "media")}
          >
            <span className="dropbtn">{t.mediaCenter}</span>
            <div className="dropdown-content mega-menu">
              <div className="mega-columns">
                <div>
                  <h4>{t.formsInfo}</h4>
                  <a href="#">{t.formsInfoLink}</a>
                  <a href="#">{t.publicationReports}</a>
                  <a href="#">{t.actsRegulation}</a>
                  <a href="#">{t.pressReleases}</a>
                </div>
                <div>
                  <h4>{t.newsDownloads}</h4>
                  <a href="#">{t.news}</a>
                  <a href="#">{t.downloads}</a>
                </div>
                <div>
                  <h4>{t.annualPublication}</h4>
                  <a href="#">{t.annualReports}</a>
                </div>
                <div>
                  <h4>{t.gallery}</h4>
                  <a href="#">{t.audioGallery}</a>
                  <a href="#">{t.videoGallery}</a>
                </div>
              </div>
            </div>
          </div>

          {/* CONSUMERS DROPDOWN */}
          <div
            className={`dropdown ${
              activeDropdown === "consumers" ? "active" : ""
            }`}
            onClick={(e) => toggleDropdown(e, "consumers")}
          >
            <span className="dropbtn">{t.consumers}</span>
            <div className="dropdown-content mega-menu">
              <div className="mega-columns">
                <div>
                  <h4>{t.billPayment}</h4>
                  <a href="#">{t.checkBill}</a>
                  <a href="#">{t.payBill}</a>
                </div>
                <div>
                  <h4>{t.telephoneDirectory}</h4>
                  <a href="#">{t.noLightNumbers}</a>
                  <a href="#">{t.contactDCS}</a>
                </div>
                <div>
                  <h4>{t.downloads}</h4>
                  <a href="#">{t.newCustomerForm}</a>
                  <a href="#">{t.meterForm}</a>
                </div>
                <div>
                  <h4>{t.tariffRates}</h4>
                  <a href="#">{t.consumerTariff}</a>
                  <a href="#">{t.ppaTariff}</a>
                </div>
              </div>
            </div>
          </div>

          {/* RECRUITMENT DROPDOWN */}
          <div
            className={`dropdown ${
              activeDropdown === "recruitment" ? "active" : ""
            }`}
            onClick={(e) => toggleDropdown(e, "recruitment")}
          >
            <span className="dropbtn">{t.recruitment}</span>
            <div className="dropdown-content mega-menu">
              <div className="mega-columns">
                <div>
                  <h4>{t.internalPromotional}</h4>
                  <a href="#">{t.internalCourses}</a>
                  <a href="#">{t.internalAds}</a>
                  <a href="#">{t.internalResults}</a>
                  <a href="#">{t.reviewCommittee}</a>
                  <a href="#">{t.approvedListInternal}</a>
                </div>
                <div>
                  <h4>{t.openRecruitment}</h4>
                  <a href="#">{t.openAds}</a>
                  <a href="#">{t.openResults}</a>
                  <a href="#">{t.codeOfConduct}</a>
                  <a href="#">{t.openCourses}</a>
                  <a href="#">{t.applicationForm}</a>
                  <a href="#">{t.examSchedule}</a>
                  <a href="#">{t.results}</a>
                </div>
              </div>
            </div>
          </div>

          {/* ONLINE APPLICATION DROPDOWN */}
          <div
            className={`dropdown ${
              activeDropdown === "application" ? "active" : ""
            }`}
            onClick={(e) => toggleDropdown(e, "application")}
          >
            <span className="dropbtn">{t.onlineApplication}</span>
            <div className="dropdown-content mega-menu">
              <div className="mega-columns">
                <div>
                  <a href="#">{t.open}</a>
                </div>
                <div>
                  <a href="#">{t.promotionalInternal}</a>
                </div>
              </div>
            </div>
          </div>

          {/* TENDERS DROPDOWN */}
          <div
            className={`dropdown ${
              activeDropdown === "tenders" ? "active" : ""
            }`}
            onClick={(e) => toggleDropdown(e, "tenders")}
          >
            <span className="dropbtn">{t.tenders}</span>
            <div className="dropdown-content mega-menu">
              <div className="mega-columns">
                <div>
                  <a href="#">{t.tendersPrequalifications}</a>
                </div>
                <div>
                  <a href="#">{t.notification}</a>
                </div>
                <div>
                  <a href="#">{t.awardOfContract}</a>
                </div>
              </div>
            </div>
          </div>

          {/* REPORTS DROPDOWN */}
          <div
            className={`dropdown ${activeDropdown === "reports" ? "active" : ""}`}
            onClick={(e) => toggleDropdown(e, "reports")}
          >
            <span className="dropbtn">{t.reports}</span>
            <div className="dropdown-content mega-menu">
              <div className="mega-columns">
                <div>
                  <a href="#">{t.dailyReports}</a>
                </div>
                <div>
                  <a href="#">{t.monthlyReports}</a>
                </div>
                <div>
                  <a href="#">{t.yearlyReports}</a>
                </div>
              </div>
            </div>
          </div>

          <a href="#">{t.selfPublication}</a>

          {/* TARIFF RATES DROPDOWN */}
          <div
            className={`dropdown ${activeDropdown === "tariff" ? "active" : ""}`}
            onClick={(e) => toggleDropdown(e, "tariff")}
          >
            <span className="dropbtn">{t.tariffRatesMenu}</span>
            <div className="dropdown-content mega-menu">
              <div className="mega-columns">
                <div>
                  <a href="#">{t.consumerTariffs}</a>
                </div>
                <div>
                  <a href="#">{t.ppaTariffs}</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Language Toggle Button */}
        <button className="lang-toggle" onClick={toggleLanguage}>
          {language === "en" ? "नेपाली" : "English"}
        </button>
      </div>
    </header>
  );
}