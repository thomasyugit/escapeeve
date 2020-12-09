import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faDiscord,
  faInstagram,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
const NavBar = () => {
  const menu = [
    { path: "/", title: "home" },
    { path: "/", title: "youtube", icon: faYoutube },
    { path: "/", title: "facebook", icon: faFacebook },
    { path: "/", title: "twitter", icon: faTwitter },
    { path: "/", title: "discord", icon: faDiscord },
    { path: "/", title: "instagram", icon: faInstagram },
    { path: "/", title: "twitch", icon: faTwitch },
    { path: "/about", title: "About Us" },
  ];
  return (
    <nav>
      <ul>
        {menu.map((r) => (
          <li>
            <a href={r.path}>
              {r.icon ? <FontAwesomeIcon icon={r.icon} /> : r.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
