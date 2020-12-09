import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faDiscord,
  faInstagram,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./style.module.css";

const SiteFooter = () => {
  const links = [
    { path: "/", title: "Escape Eve" },
    { path: "/terms-of-use", title: "Terms of Use" },
    { path: "/privacy-policy", title: "Privacy Policy" },
    { path: "mailto:ucounsel@uci.edu", title: "Contact Us", icon: faEnvelope },
    { path: "/", title: "youtube", icon: faYoutube },
    { path: "/", title: "facebook", icon: faFacebook },
    { path: "/", title: "twitter", icon: faTwitter },
    { path: "/", title: "discord", icon: faDiscord },
    { path: "/", title: "instagram", icon: faInstagram },
    { path: "/", title: "twitch", icon: faTwitch },
  ];

  return (
    <footer className={styles["site-footer"]}>
      <ul>
        {links.map((r, idx) => (
          <li key={idx}>
            <a href={r.path}>
              {r.icon ? <FontAwesomeIcon icon={r.icon} /> : r.title}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles["footer-logos"]}>
        <a href="/about" style={{ marginRight: "20px" }}>
          <img src="/inc-logo-white.png" style={{ height: "100px" }} />
        </a>
        <div className={styles["esrb"]}>
          <a href="https://www.esrb.org/ratings-guide/" target="_blank">
            <div style={{ float: "left", marginRight: "10px" }}>
              <img src="/E10plus.svg" />
            </div>
            <div style={{ float: "right", marginLeft: "10px" }}>
              <div>Cartoon Violence</div>
              <div>Fantasy Violence</div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
