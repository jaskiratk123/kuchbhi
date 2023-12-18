import React from 'react';
import './Loading.css';


export default function Loading() {
  
  return (
      <div className="loading-container">
        <div className="loading-wrapper">
          <div className="spinner">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
  );
}
