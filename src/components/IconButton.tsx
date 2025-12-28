import { useState, useMemo, type ReactNode, type CSSProperties } from 'react';

interface IconButtonProps {
  icon: ReactNode | string;
  mainText: string;
  subText: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  style?: CSSProperties;
}

const COLORS = {
  background: '#2F3136',
  backgroundHover: '#202225',
  mainText: '#DCDDDE',
  subText: '#B9BBBE',
} as const;

// Stable empty object to prevent unnecessary memoization recalculations
const EMPTY_STYLE: CSSProperties = {};

const IconButton = ({
  icon,
  mainText,
  subText,
  onClick,
  href,
  target,
  rel,
  className = '',
  style,
}: IconButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Normalize style to use stable empty object when not provided
  const normalizedStyle = style ?? EMPTY_STYLE;

  const buttonStyle = useMemo<CSSProperties>(
    () => ({
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.75rem 1rem',
      backgroundColor: isHovered ? COLORS.backgroundHover : COLORS.background,
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'background-color 0.2s',
      width: '100%',
      ...normalizedStyle,
    }),
    [isHovered, normalizedStyle]
  );

  const iconStyle = useMemo<CSSProperties>(
    () => ({
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      borderRadius: '4px',
      flexShrink: 0,
      overflow: 'hidden',
    }),
    []
  );

  const textContainerStyle = useMemo<CSSProperties>(
    () => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flex: 1,
      minWidth: 0,
    }),
    []
  );

  const mainTextStyle = useMemo<CSSProperties>(
    () => ({
      color: COLORS.mainText,
      fontSize: '0.9rem',
      fontWeight: 500,
      margin: 0,
      lineHeight: 1.4,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: '100%',
    }),
    []
  );

  const subTextStyle = useMemo<CSSProperties>(
    () => ({
      color: COLORS.subText,
      fontSize: '0.8rem',
      margin: 0,
      lineHeight: 1.4,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: '100%',
    }),
    []
  );

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const imageIconStyle = useMemo<CSSProperties>(
    () => ({
      width: '40px',
      height: '40px',
      objectFit: 'cover',
      objectPosition: 'center',
      borderRadius: '4px',
    }),
    []
  );

  const renderIcon = (): ReactNode => {
    if (typeof icon === 'string') {
      return <img src={icon} alt="" style={imageIconStyle} />;
    }
    return icon;
  };

  const content = (
    <>
      <div style={iconStyle}>{renderIcon()}</div>
      <div style={textContainerStyle}>
        <p style={mainTextStyle}>{mainText}</p>
        <p style={subTextStyle}>{subText}</p>
      </div>
    </>
  );

  const commonProps = {
    className,
    style: buttonStyle,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  if (href) {
    return (
      <a href={href} target={target} rel={rel} {...commonProps}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} {...commonProps}>
      {content}
    </button>
  );
};

export default IconButton;

