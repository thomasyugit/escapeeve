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

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["left-nav"]}>
        <ul>
          <li>
            <a href="/">Game Logo</a>
          </li>
          {leftNav.map((r) => (
            <li>
              <a href={r.path}>
                {r.icon ? <FontAwesomeIcon icon={r.icon} size="lg" /> : r.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles["right-nav"]}>
        <ul>
          {rightNav.map((r) => (
            <li>
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
