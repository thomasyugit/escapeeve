import SiteLayout from "@/layout/SiteLayout";
import CButton from "@/component/CButton";
import styles from "./style.module.css";

const HomePageLayout = () => {
  let test = () => {
    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(<div>hello</div>);
    }
    return arr;
  };
  const screenshots = [
    "/images/00.png",
    "/images/01.png",
    "/images/02.png",
    "/images/03.png",
  ];

  return (
    <SiteLayout>
      <div className={styles["banner"]}>
        <div
          style={{
            background: `url("banner.png") center center / cover no-repeat`,
            height: "500px",
          }}
        >
          <CButton
            url="/"
            text="GET DEMO"
            style={{ position: "absolute", bottom: "300px", left: "140px" }}
          />
        </div>
      </div>
      <div className={styles["game-info"]}>
        <div className={styles["game-info-about"]}>
          <div className={styles["img-wrapper"]}>
            <img src="/game-portrait.png" />
          </div>
          <h2>About the game</h2>
          <p>
            <b>Escape Eve</b> is a space themed platformer game. Astronaut, Rex,
            crashed on a deserted planet called Eve. Rex has to find out a way
            to escape this dangerous place.
          </p>
          <hr />
          <h2>Will be available on:</h2>
          <p>Steam, Epic, Nintendo Switch</p>
        </div>
        <div className={styles["game-info-review"]}>
          <h2>Game Reviews</h2>
          <div>
            <span>a good game</span>
            <span>some reviewer - 9/10</span>
          </div>
          <div>
            <span>a good game</span>
            <span>some reviewer - 8/10</span>
          </div>
        </div>
      </div>
      <div className={styles["game-footage"]}>
        <h1>Game Footage</h1>
        <iframe
          style={{
            maxWidth: "1040px",
            maxHeight: "585px",
            width: "100%",
            height: "56vw",
          }}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className={styles["game-gallery"]}>
        <h1>Gallery</h1>
        <div className={styles["image-list"]}>
          {screenshots.map((url) => (
            <a href={url} target="_blank">
              <img src={url}></img>
            </a>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
};

export default HomePageLayout;
