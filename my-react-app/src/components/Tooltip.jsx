import { useState, useRef, useEffect } from 'react';
import styles from './Tooltip.module.css';

export default function Tooltip({ children, content, position = 'top' }) {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (isVisible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      let top, left;

      switch (position) {
        case 'top':
          top = triggerRect.top - tooltipRect.height - 8;
          left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
          break;
        case 'bottom':
          top = triggerRect.bottom + 8;
          left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
          break;
        case 'right':
          top = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
          left = triggerRect.right + 8;
          break;
        default:
          top = triggerRect.top - tooltipRect.height - 8;
          left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
      }

      // Keep tooltip within viewport
      const padding = 16;
      left = Math.max(padding, Math.min(left, window.innerWidth - tooltipRect.width - padding));
      top = Math.max(padding, top);

      setCoords({ top, left });
    }
  }, [isVisible, position]);

  return (
    <>
      <span
        ref={triggerRef}
        className={styles.trigger}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        tabIndex={0}
        role="button"
        aria-describedby={isVisible ? 'tooltip' : undefined}
      >
        {children}
      </span>
      {isVisible && (
        <div
          ref={tooltipRef}
          id="tooltip"
          role="tooltip"
          className={`${styles.tooltip} ${styles[position]}`}
          style={{ top: coords.top, left: coords.left }}
        >
          {content}
        </div>
      )}
    </>
  );
}
