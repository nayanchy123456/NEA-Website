import "./services.css";

const PostComplainIcon = () => (
  <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="18" r="10" fill="none" stroke="#0098D4" strokeWidth="2" />
    <text x="25" y="22" fontSize="14" fontWeight="bold" fill="#0098D4" textAnchor="middle">?</text>
    <path d="M18 30C18 30 16 35 25 38C34 35 32 30 32 30" fill="none" stroke="#0098D4" strokeWidth="2" />
  </svg>
);

const CheckBillIcon = () => (
  <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="10" width="22" height="30" rx="2" fill="none" stroke="#0098D4" strokeWidth="2" />
    <circle cx="25" cy="20" r="5" fill="none" stroke="#0098D4" strokeWidth="1.5" />
    <text x="25" y="23" fontSize="8" fontWeight="bold" fill="#0098D4" textAnchor="middle">$</text>
    <line x1="18" y1="30" x2="32" y2="30" stroke="#0098D4" strokeWidth="1.5" />
    <line x1="18" y1="34" x2="28" y2="34" stroke="#0098D4" strokeWidth="1.5" />
  </svg>
);

const PayBillIcon = () => (
  <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="25" cy="30" rx="12" ry="6" fill="none" stroke="#0098D4" strokeWidth="2" />
    <ellipse cx="25" cy="25" rx="12" ry="6" fill="none" stroke="#0098D4" strokeWidth="2" />
    <ellipse cx="25" cy="20" rx="12" ry="6" fill="none" stroke="#0098D4" strokeWidth="2" />
    <path d="M13 20v10M37 20v10" stroke="#0098D4" strokeWidth="2" />
  </svg>
);

const PPATariffIcon = () => (
  <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="12" width="16" height="20" rx="2" fill="none" stroke="#0098D4" strokeWidth="2" />
    <circle cx="20" cy="22" r="4" fill="#0098D4" opacity="0.3" stroke="#0098D4" strokeWidth="1.5" />
    <line x1="10" y1="36" x2="40" y2="36" stroke="#0098D4" strokeWidth="2" />
    <line x1="15" y1="36" x2="15" y2="42" stroke="#0098D4" strokeWidth="2" />
    <line x1="25" y1="36" x2="25" y2="42" stroke="#0098D4" strokeWidth="2" />
    <line x1="35" y1="36" x2="35" y2="42" stroke="#0098D4" strokeWidth="2" />
  </svg>
);

const ThreePhaseIcon = () => (
  <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="14" fill="none" stroke="#0098D4" strokeWidth="2" />
    <circle cx="17" cy="17" r="3" fill="#0098D4" />
    <circle cx="33" cy="17" r="3" fill="#0098D4" />
    <circle cx="25" cy="35" r="3" fill="#0098D4" />
    <line x1="17" y1="17" x2="25" y2="25" stroke="#0098D4" strokeWidth="1.5" />
    <line x1="33" y1="17" x2="25" y2="25" stroke="#0098D4" strokeWidth="1.5" />
    <line x1="25" y1="25" x2="25" y2="35" stroke="#0098D4" strokeWidth="1.5" />
  </svg>
);

const ConsumerTariffIcon = () => (
  <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="14" width="14" height="18" rx="2" fill="none" stroke="#0098D4" strokeWidth="2" />
    <rect x="26" y="14" width="14" height="18" rx="2" fill="none" stroke="#0098D4" strokeWidth="2" />
    <circle cx="17" cy="36" r="2" fill="#0098D4" />
    <circle cx="33" cy="36" r="2" fill="#0098D4" />
    <line x1="14" y1="22" x2="20" y2="22" stroke="#0098D4" strokeWidth="1.5" />
    <line x1="30" y1="22" x2="36" y2="22" stroke="#0098D4" strokeWidth="1.5" />
  </svg>
);

const DCSContactsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="12" width="18" height="24" rx="2" fill="none" stroke="#0098D4" strokeWidth="2" />
    <line x1="14" y1="18" x2="24" y2="18" stroke="#0098D4" strokeWidth="1.5" />
    <line x1="14" y1="23" x2="24" y2="23" stroke="#0098D4" strokeWidth="1.5" />
    <line x1="14" y1="28" x2="24" y2="28" stroke="#0098D4" strokeWidth="1.5" />
    <circle cx="35" cy="24" r="7" fill="none" stroke="#0098D4" strokeWidth="2" />
    <circle cx="35" cy="22" r="2" fill="#0098D4" />
    <path d="M31 28c0-2 2-3 4-3s4 1 4 3" stroke="#0098D4" strokeWidth="1.5" />
  </svg>
);

const NoLightIcon = () => (
  <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="12" width="18" height="24" rx="2" fill="none" stroke="#0098D4" strokeWidth="2" />
    <line x1="16" y1="18" x2="26" y2="18" stroke="#0098D4" strokeWidth="1.5" />
    <line x1="16" y1="23" x2="26" y2="23" stroke="#0098D4" strokeWidth="1.5" />
    <circle cx="21" cy="30" r="2" fill="#0098D4" />
    <circle cx="38" cy="24" r="7" fill="none" stroke="#0098D4" strokeWidth="2" />
    <circle cx="38" cy="22" r="2" fill="#0098D4" />
    <path d="M34 28c0-2 2-3 4-3s4 1 4 3" stroke="#0098D4" strokeWidth="1.5" />
  </svg>
);

const PowerTradeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="14" width="16" height="20" rx="2" fill="none" stroke="#0098D4" strokeWidth="2" />
    <circle cx="16" cy="24" r="4" fill="none" stroke="#0098D4" strokeWidth="1.5" />
    <circle cx="36" cy="24" r="10" fill="none" stroke="#0098D4" strokeWidth="2" />
    <circle cx="36" cy="24" r="6" fill="none" stroke="#0098D4" strokeWidth="1.5" />
    <circle cx="36" cy="24" r="2" fill="#0098D4" />
  </svg>
);

export default function Services() {
  const menuItems = [
    { id: "complain", label: "Post Your\nComplain", icon: <PostComplainIcon /> },
    { id: "checkbill", label: "Check\nBill", icon: <CheckBillIcon /> },
    { id: "paybill", label: "Pay\nBill", icon: <PayBillIcon /> },
    { id: "ppa", label: "PPA\nTariff", icon: <PPATariffIcon /> },
    { id: "phase", label: "3 Phase\nMeter\nRequest", icon: <ThreePhaseIcon /> },
    { id: "consumer", label: "Consumer\nTariff", icon: <ConsumerTariffIcon /> },
    { id: "dcs", label: "DCS\nContacts", icon: <DCSContactsIcon /> },
    { id: "nolight", label: "No Light\nContacts", icon: <NoLightIcon /> },
    { id: "power", label: "Power Trade\nDMS", icon: <PowerTradeIcon /> },
  ];

  return (
    <div className="services-container">
      <div className="services-diamond-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="service-item">
            <div className="service-diamond">
              <div className="service-diamond-content">
                <div className="service-icon">{item.icon}</div>
                <div className="service-label">{item.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 