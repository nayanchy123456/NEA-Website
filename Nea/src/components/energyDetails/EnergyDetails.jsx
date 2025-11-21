import React from 'react';
import './energyDetails.css';

export default function EnergyDetails() {
  const energyData = [
    {
      title: 'Import',
      value: '8,903',
      unit: 'MWh',
      icon: '⚡',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'National Energy Demand',
      value: '37,809',
      unit: 'MWh',
      icon: '🏭',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Export',
      value: '1,450',
      unit: 'MWh',
      icon: '📤',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'NEA Subsidiary Companies',
      value: '6,834',
      unit: 'MWh',
      icon: '🏢',
      gradient: 'from-amber-500 to-amber-600'
    },
    {
      title: 'NEA',
      value: '8,987',
      unit: 'MWh',
      icon: '⚙️',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'IPP',
      value: '22,585',
      unit: 'MWh',
      icon: '🔌',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Total Peak Demand',
      value: '1,857',
      unit: 'MW',
      icon: '📊',
      gradient: 'from-red-500 to-red-600'
    },
    {
      title: 'Total Energy Demand',
      value: '259',
      unit: 'MWh',
      icon: '💡',
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      title: 'National Peak Demand',
      value: '1,857',
      unit: 'MW',
      icon: '📈',
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <div className="energy-wrapper">
      <div className="energy-container">
        {/* Header */}
        <div className="energy-header">
          <h2 className="energy-title">Energy Details</h2>
          <div className="energy-title-underline"></div>
        </div>

        {/* 3x3 Grid */}
        <div className="energy-grid">
          {energyData.map((item, index) => (
            <div
              key={index}
              className={`energy-card ${item.gradient}`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Gradient Background on Hover */}
              <div className="energy-card-bg"></div>
              
              {/* Blended Logo Background */}
              <div className="energy-card-logo">
                <svg viewBox="0 0 100 100" className="logo-svg">
                  <circle cx="50" cy="50" r="35" fill="currentColor"/>
                  <path d="M50 25 L50 75 M35 40 L50 25 L65 40 M50 55 L35 65 M50 55 L65 65" 
                        stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              
              {/* Animated Corner Accent */}
              <div className="energy-card-corner"></div>
              
              {/* Content */}
              <div className="energy-card-content">
                {/* Icon */}
                <div className="energy-card-icon">
                  {item.icon}
                </div>
                
                {/* Title */}
                <h3 className="energy-card-title">
                  {item.title}
                </h3>
                
                {/* Value */}
                <div className="energy-card-value">
                  <span className="value-number">{item.value}</span>
                  <span className="value-unit">{item.unit}</span>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="energy-card-shine">
                <div className="shine-effect"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}