import React from 'react';
import './NeonSwitch.css';

const NeonSwitch = ({ isChecked, onChange }) => {
  return (
    <div className="neon-switch-wrapper">
      <label className="neon-switch">
        <input 
          className="switch__input" 
          type="checkbox" 
          role="switch" 
          checked={isChecked}
          onChange={onChange}
        />
        
        <span className="switch__base-outer"></span>
        <span className="switch__base-inner"></span>
        
        <svg className="switch__base-neon" viewBox="0 0 40 24" width="40px" height="24px">
          <defs>
            <filter id="switch-glow">
              <feGaussianBlur result="coloredBlur" stdDeviation="1"></feGaussianBlur>
              <feMerge>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
            
            {/* Gradiente Cyan (Español) */}
            <linearGradient id="gradient-cyan" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>

            {/* Gradiente Rosa (Inglés) */}
            <linearGradient id="gradient-pink" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
          </defs>
          
          {/* Trazado Azul (Visible en Español) */}
          <path 
            className="switch__border-cyan"
            fill="none" 
            filter="url(#switch-glow)" 
            stroke="url(#gradient-cyan)"
            strokeWidth="1.2" 
            strokeLinecap="round" 
            d="m.5,12C.5,5.649,5.649.5,12,.5h16c6.351,0,11.5,5.149,11.5,11.5s-5.149,11.5-11.5,11.5H12C5.649,23.5.5,18.351.5,12Z"
          />

          {/* Trazado Rosa (Visible en Inglés) */}
          <path 
            className="switch__border-pink"
            fill="none" 
            filter="url(#switch-glow)" 
            stroke="url(#gradient-pink)"
            strokeWidth="1.2" 
            strokeLinecap="round" 
            d="m.5,12C.5,5.649,5.649.5,12,.5h16c6.351,0,11.5,5.149,11.5,11.5s-5.149,11.5-11.5,11.5H12C5.649,23.5.5,18.351.5,12Z"
          />
        </svg>

        <span className="switch__knob-shadow"></span>
        <span className="switch__knob-container">
          <span className="switch__knob">
            <div className="knob-neon-circle"></div>
          </span>
        </span>
        
        <span className="switch__led"></span>
        
        <span className="switch__text">
            {isChecked ? 'EN' : 'ES'}
        </span>
      </label>
    </div>
  );
};

export default NeonSwitch;