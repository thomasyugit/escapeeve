import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faDiscord,
  faInstagram,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./style.module.css";

const NavBar = () => {
  const leftNav = [{ path: "/about", title: "About Us" }];
  const rightNav = [
    { path: "/", title: "youtube", icon: faYoutube },
    { path: "/", title: "facebook", icon: faFacebook },
    { path: "/", title: "twitter", icon: faTwitter },
    { path: "/", title: "discord", icon: faDiscord },
    { path: "/", title: "instagram", icon: faInstagram },
    { path: "/", title: "twitch", icon: faTwitch },
  ];

  const [astroStyle, setAstroStyle] = useState({
    transition: "300ms",
  });

  const logoOnEnter = () => {
    setAstroStyle({
      transform: "rotate(180deg)",
      transition: "300ms",
    });
  };

  const logoOnLeave = () => {
    setAstroStyle({
      transition: "300ms",
    });
  };

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["left-nav"]}>
        <ul>
          <li>
            <a
              href="/"
              className={styles["nav-logo"]}
              onMouseEnter={logoOnEnter}
              onMouseLeave={logoOnLeave}
            >
              <img src="/game-logo-text-white.png" height="30px" />
              <img src="/astro.png" height="30px" style={astroStyle} />
            </a>
          </li>
          {leftNav.map((r, idx) => (
            <li key={idx}>
              <a href={r.path}>
                {r.icon ? <FontAwesomeIcon icon={r.icon} size="lg" /> : r.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles["right-nav"]}>
        <ul>
          {rightNav.map((r, idx) => (
            <li key={idx}>
              <a href={r.path}>
                {r.icon ? <FontAwesomeIcon icon={r.icon} size="lg" /> : r.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
