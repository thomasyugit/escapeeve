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
        {links.map((r) => (
          <li>
            <a href={r.path}>
              {r.icon ? <FontAwesomeIcon icon={r.icon} /> : r.title}
            </a>
          </li>
        ))}
      </ul>

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
    </footer>
  );
};

export default SiteFooter;
