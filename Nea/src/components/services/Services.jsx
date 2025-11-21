import "./services.css"

const PostComplainIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="15" r="4" fill="#0098D4" />
    <text x="25" y="18" fontSize="10" fontWeight="bold" fill="#0098D4" textAnchor="middle" dy="0.3em">
      ?
    </text>
    <path d="M20 22C20 22 18 26 25 28C32 26 30 22 30 22" fill="#0098D4" opacity="0.3" />
    <path d="M20 22C20 22 18 26 25 28C32 26 30 22 30 22" fill="none" stroke="#0098D4" strokeWidth="1" />
  </svg>
)

const CheckBillIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="10" width="14" height="20" rx="1.5" fill="none" stroke="#0098D4" strokeWidth="2" />
    <rect x="17" y="15" width="4" height="6" fill="#0098D4" opacity="0.4" />
    <line x1="15" y1="24" x2="23" y2="24" stroke="#0098D4" strokeWidth="1.5" />
    <line x1="15" y1="28" x2="23" y2="28" stroke="#0098D4" strokeWidth="1.5" />
  </svg>
)

const PayBillIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 20C15 17 19 15 25 15C31 15 35 17 35 20V28C35 31 31 33 25 33C19 33 15 31 15 28V20Z"
      fill="#0098D4"
      opacity="0.2"
    />
    <path d="M15 20C15 17 19 15 25 15C31 15 35 17 35 20" fill="none" stroke="#0098D4" strokeWidth="2" />
    <line x1="15" y1="20" x2="15" y2="28" stroke="#0098D4" strokeWidth="2" />
    <line x1="35" y1="20" x2="35" y2="28" stroke="#0098D4" strokeWidth="2" />
    <ellipse cx="25" cy="28" rx="10" ry="5" fill="none" stroke="#0098D4" strokeWidth="2" />
  </svg>
)

const PPATariffIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="12" width="10" height="14" rx="1" fill="none" stroke="#0098D4" strokeWidth="2" />
    <circle cx="17" cy="19" r="2.5" fill="#0098D4" />
    <line x1="10" y1="28" x2="30" y2="28" stroke="#0098D4" strokeWidth="2" />
    <line x1="12" y1="32" x2="16" y2="36" stroke="#0098D4" strokeWidth="2" />
    <line x1="18" y1="32" x2="22" y2="36" stroke="#0098D4" strokeWidth="2" />
    <line x1="24" y1="32" x2="28" y2="36" stroke="#0098D4" strokeWidth="2" />
  </svg>
)

const ThreePhaseIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="12" fill="none" stroke="#0098D4" strokeWidth="2" />
    <circle cx="15" cy="15" r="2" fill="#0098D4" />
    <circle cx="35" cy="15" r="2" fill="#0098D4" />
    <circle cx="25" cy="33" r="2" fill="#0098D4" />
    <line x1="15" y1="15" x2="25" y2="25" stroke="#0098D4" strokeWidth="1.5" />
    <line x1="35" y1="15" x2="25" y2="25" stroke="#0098D4" strokeWidth="1.5" />
    <line x1="25" y1="25" x2="25" y2="33" stroke="#0098D4" strokeWidth="1.5" />
  </svg>
)

const ConsumerTariffIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="12" width="12" height="16" rx="1" fill="none" stroke="#0098D4" strokeWidth="2" />
    <rect x="28" y="12" width="12" height="16" rx="1" fill="none" stroke="#0098D4" strokeWidth="2" />
    <circle cx="16" cy="32" r="2" fill="#0098D4" />
    <circle cx="34" cy="32" r="2" fill="#0098D4" />
    <line x1="14" y1="20" x2="18" y2="20" stroke="#0098D4" strokeWidth="1.5" />
    <line x1="32" y1="20" x2="36" y2="20" stroke="#0098D4" strokeWidth="1.5" />
  </svg>
)

const DCSContactsIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="14" width="12" height="16" rx="1" fill="none" stroke="#0098D4" strokeWidth="2" />
    <line x1="14" y1="18" x2="22" y2="18" stroke="#0098D4" strokeWidth="1.5" />
    <line x1="14" y1="22" x2="22" y2="22" stroke="#0098D4" strokeWidth="1.5" />
    <line x1="14" y1="26" x2="22" y2="26" stroke="#0098D4" strokeWidth="1.5" />
    <circle cx="30" cy="22" r="6" fill="none" stroke="#0098D4" strokeWidth="1.5" />
  </svg>
)

const NoLightIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="16" width="12" height="14" rx="1" fill="none" stroke="#0098D4" strokeWidth="2" />
    <line x1="16" y1="20" x2="24" y2="20" stroke="#0098D4" strokeWidth="1.5" />
    <line x1="16" y1="24" x2="24" y2="24" stroke="#0098D4" strokeWidth="1.5" />
    <circle cx="20" cy="28" r="1.5" fill="#0098D4" />
  </svg>
)

const PowerTradeIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="14" width="12" height="14" rx="1" fill="none" stroke="#0098D4" strokeWidth="2" />
    <circle cx="20" cy="21" r="3" fill="none" stroke="#0098D4" strokeWidth="1.5" />
    <g transform="translate(26, 15)">
      <circle cx="0" cy="0" r="8" fill="none" stroke="#0098D4" strokeWidth="2" />
      <circle cx="0" cy="0" r="5" fill="none" stroke="#0098D4" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="2" fill="#0098D4" />
    </g>
  </svg>
)

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
  ]

  return (
    <div className="services-container">
      <div className="services-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="service-item">
            <div className="service-item-content">
              <div className="service-icon">{item.icon}</div>
              <div className="service-label">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
