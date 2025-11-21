import './employees.css';

export default function Employees() {
  const employees = [
    {
      name: 'Mr. Manoj Silwal',
      position: 'Managing Director',
      image: './src/assets/Manoj Silwal.png' // Replace with actual image path
    },
    {
      name: 'Mr. Rajan Dhakal',
      position: 'Spokesperson',
      image: './src/assets/Rajan Dhakal.png' // Replace with actual image path
    }
  ];

  return (
    <section className="employees-section">
      <div className="employees-container">
        <div className="employees-header">
        </div>
        
        <div className="employees-grid">
          {employees.map((employee, index) => (
            <div key={index} className="employee-card">
              <div className="employee-image-wrapper">
                <img 
                  src={employee.image} 
                  alt={employee.name}
                  className="employee-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="employee-placeholder">
                  <span className="placeholder-icon">👤</span>
                </div>
              </div>
              <div className="employee-info">
                <h3 className="employee-name">{employee.name}</h3>
                <p className="employee-position">{employee.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
