import React, { useEffect, useRef, useState } from 'react';
import './SlotMachineScroll.css';

export default function SlotMachineScroll() {
  const [currentRotation, setCurrentRotation] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [renderSet, setRenderSet] = useState(0);

  const rotationStep = 1;

  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY - renderSet;

      const newRotation =
        Math.floor(scrollPosition / rotationStep) * rotationStep;
      if (
        newRotation !== currentRotation &&
        newRotation > 0 &&
        newRotation < 100
      ) {
        setCurrentRotation(newRotation);
        setScrollAmount(newRotation);
      }
    };



    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!renderSet) {
            let offset = window.scrollY;
            setRenderSet(offset);
          }
          window.addEventListener('scroll', handleScroll);
        } else {
          setCurrentRotation(0);
          setScrollAmount(0);
          window.removeEventListener('scroll', handleScroll);
        }
      },
      { threshold: 0.9 }
    );

    observer.observe(ref.current);
    var inUse = null;
    if (currentRotation > -10 && currentRotation < 11.25) {
      inUse = document.getElementById('linkedin');
      inUse.style.color = 'white';
    } else {
      inUse = document.getElementById('linkedin');
      inUse.style.color = 'black';
    }
    if (currentRotation > 11.35 && currentRotation < 33.75) {
      inUse = document.getElementById('email');
      inUse.style.color = 'white';
    } else {
      inUse = document.getElementById('email');
      inUse.style.color = 'black';
    }
    if (currentRotation > 33.75 && currentRotation < 56.25) {
      inUse = document.getElementById('instagram');
      inUse.style.color = 'white';
    } else {
      inUse = document.getElementById('instagram');
      inUse.style.color = 'black';
    }
    if (currentRotation > 56.25 && currentRotation < 78.75) {
      inUse = document.getElementById('twitter');
      inUse.style.color = 'white';
    } else {
      inUse = document.getElementById('twitter');
      inUse.style.color = 'black';
    }
    if (currentRotation > 78.75 && currentRotation < 110) {
      inUse = document.getElementById('github');
      inUse.style.color = 'white';
    } else {
      inUse = document.getElementById('github');
      inUse.style.color = 'black';
    }

    return () => {
      observer.disconnect();
    };
  }, [currentRotation, renderSet, scrollAmount]);

  return (
    <>
      <div className="scroll-parent-container"  id="contact" > 
        <div
          className="contact"
          style={{ transform: `translateY(${scrollAmount}px)` }}
          ref={ref}
        >
          <div className="wrapper" id="wrapper">
            <div
              className="picker"
              style={{
                transform: `rotateX(${currentRotation}deg)`,
              }}
            >
              <div
                className="slot-item"
                id="linkedin"
                rel="noreferrer"
                target="_blank"
              >
                <a href="https://www.linkedin.com/in/vinayak-kapoor-6673341b1/">
                  linkedIn
                </a>
              </div>
              <div className="slot-item" id="email">
                <a
                  href="mailto:krrishkapoor97@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  email
                </a>
              </div>
              <div className="slot-item" id="instagram">
                <a
                  href="https://www.instagram.com/i.m.krrish/"
                  rel="noreferrer"
                  target="_blank"
                >
                  instagram
                </a>
              </div>
              <div className="slot-item" id="twitter">
                <a
                  href="https://twitter.com/vinayakkk97"
                  rel="noreferrer"
                  target="_blank"
                >
                  twitter
                </a>
              </div>
              <div className="slot-item" id="github">
                <a
                  href="https://github.com/imkkapoor"
                  rel="noreferrer"
                  target="_blank"
                >
                  github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
