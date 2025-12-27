import { useState, useMemo, type CSSProperties } from 'react';
import IconButton from './components/IconButton';
import ritLogo from './assets/ritlogo.jpg';
import sunyPolyLogo from './assets/sunypolylogo.jpg';
import profileImage from './assets/image.jpg';

const COLORS = {
  background: '#2F3136',
  backgroundHover: '#202225',
  mainText: '#DCDDDE',
  subText: '#B9BBBE',
  buttonPrimary: '#5865F2',
  buttonPrimaryHover: '#4752C4',
  white: '#FFFFFF',
} as const;

// Icon components
const AFBIIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
    <rect width="40" height="40" fill="#10B981" />
    <path d="M20 13L14 19H17V27H23V19H26L20 13Z" fill="white" />
  </svg>
);

const SchoolPortalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
    <rect width="40" height="40" fill="#8B5CF6" />
    <path d="M13 13H27V17H13V13ZM13 20H27V24H13V20ZM13 27H20V31H13V27Z" fill="white" />
  </svg>
);

const GameEngineIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
    <rect width="40" height="40" fill="#3B82F6" />
    <path d="M20 10L10 20H15V30H25V20H30L20 10Z" fill="white" />
  </svg>
);

function App() {

  const [githubHovered, setGithubHovered] = useState(false);
  const [linkedinHovered, setLinkedinHovered] = useState(false);
  const [emailHovered, setEmailHovered] = useState(false);

  const containerStyle = useMemo<CSSProperties>(
    () => ({
      maxWidth: '900px',
      padding: '2rem',
      display: 'flex',
      gap: '2rem',
      alignItems: 'flex-start',
    }),
    []
  );

  const leftColumnStyle = useMemo<CSSProperties>(
    () => ({
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      minWidth: '300px',
    }),
    []
  );

  const sectionTitleStyle = useMemo<CSSProperties>(
    () => ({
      color: COLORS.mainText,
      fontSize: '0.9rem',
      fontWeight: 600,
      marginBottom: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    }),
    []
  );

  const buttonGroupStyle = useMemo<CSSProperties>(
    () => ({
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    }),
    []
  );

  const rightColumnStyle = useMemo<CSSProperties>(
    () => ({
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.5rem',
      minWidth: '300px',
    }),
    []
  );

  const profileImageStyle = useMemo<CSSProperties>(
    () => ({
      width: '120px',
      height: '120px',
      borderRadius: '12px',
      objectFit: 'cover',
    }),
    []
  );

  const nameStyle = useMemo<CSSProperties>(
    () => ({
      fontSize: '1.5rem',
      fontWeight: 600,
      marginBottom: '0.25rem',
      color: COLORS.mainText,
    }),
    []
  );

  const subtitleStyle = useMemo<CSSProperties>(
    () => ({
      color: COLORS.subText,
      fontSize: '0.9rem',
      marginBottom: '0.5rem',
    }),
    []
  );

  const locationStyle = useMemo<CSSProperties>(
    () => ({
      color: COLORS.subText,
      fontSize: '0.85rem',
    }),
    []
  );

  const bioStyle = useMemo<CSSProperties>(
    () => ({
      color: COLORS.subText,
      textAlign: 'center',
      fontSize: '0.9rem',
      lineHeight: '1.5',
    }),
    []
  );

  const socialLinksStyle = useMemo<CSSProperties>(
    () => ({
      display: 'flex',
      gap: '0.75rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }),
    []
  );

  const socialLinkStyle = useMemo<CSSProperties>(
    () => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      backgroundColor: COLORS.background,
      borderRadius: '50%',
      color: COLORS.mainText,
      textDecoration: 'none',
      transition: 'background-color 0.2s',
    }),
    []
  );

  const githubLinkStyle = useMemo<CSSProperties>(
    () => ({
      ...socialLinkStyle,
      backgroundColor: githubHovered ? COLORS.backgroundHover : COLORS.background,
    }),
    [githubHovered, socialLinkStyle]
  );

  const linkedinLinkStyle = useMemo<CSSProperties>(
    () => ({
      ...socialLinkStyle,
      backgroundColor: linkedinHovered ? COLORS.backgroundHover : COLORS.background,
    }),
    [linkedinHovered, socialLinkStyle]
  );

  const emailButtonStyle = useMemo<CSSProperties>(
    () => ({
      width: '100%',
      padding: '0.75rem 1.5rem',
      backgroundColor: emailHovered ? COLORS.buttonPrimaryHover : COLORS.buttonPrimary,
      color: COLORS.white,
      textDecoration: 'none',
      borderRadius: '4px',
      textAlign: 'center',
      fontSize: '0.9rem',
      fontWeight: 500,
      transition: 'background-color 0.2s',
    }),
    [emailHovered]
  );

  return (
    <div style={containerStyle}>
      {/* Left Column - Buttons */}
      <div style={leftColumnStyle}>
        <div>
          <h2 style={sectionTitleStyle}>Education</h2>
          <div style={buttonGroupStyle}>
            <IconButton
              icon={ritLogo}
              mainText="M.S. Software Engineering"
              subText="RIT"
            />
            <IconButton
              icon={sunyPolyLogo}
              mainText="B.S. Computer Science"
              subText="SUNY Poly"
            />
          </div>
        </div>

        <div>
          <h2 style={sectionTitleStyle}>Work</h2>
          <IconButton
            icon={<AFBIIcon />}
            mainText="Software Developer"
            subText="AFBI LP"
          />
        </div>

        <div>
          <h2 style={sectionTitleStyle}>Projects</h2>
          <div style={buttonGroupStyle}>
            <IconButton
              icon={<SchoolPortalIcon />}
              mainText="Modern School Portal"
              subText="Web Application"
            />
            <IconButton
              icon={<GameEngineIcon />}
              mainText="RAINETTE"
              subText="Unreal Engine 5 Game"
            />
          </div>
        </div>
      </div>

      {/* Right Column - Bio/Info */}
      <div style={rightColumnStyle}>
        <img src={profileImage} alt="Profile" style={profileImageStyle} />

        <div style={{ textAlign: 'center' }}>
          <h1 style={nameStyle}>Leon Letournel</h1>
          <p style={subtitleStyle}>Software Engineer</p>
          <p style={locationStyle}>Brooklyn, NY</p>
        </div>

        <p style={bioStyle}>I'm a software engineer twiddling my thumbs.</p>

        <div style={socialLinksStyle}>
          <a
            href="https://github.com/leeyawn/"
            target="_blank"
            rel="noopener noreferrer"
            style={githubLinkStyle}
            onMouseEnter={() => setGithubHovered(true)}
            onMouseLeave={() => setGithubHovered(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/leon-letournel/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkedinLinkStyle}
            onMouseEnter={() => setLinkedinHovered(true)}
            onMouseLeave={() => setLinkedinHovered(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M7 10V17" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.00801 7L6.99902 7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <a
          href="mailto:leon.letournel@gmail.com"
          style={emailButtonStyle}
          onMouseEnter={() => setEmailHovered(true)}
          onMouseLeave={() => setEmailHovered(false)}
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}

export default App
