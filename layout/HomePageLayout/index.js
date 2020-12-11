import SiteLayout from "@/layout/SiteLayout";
import CButton from "@/component/CButton";
import styles from "./style.module.css";

const HomePageLayout = () => {
  const screenshots = [
    "/images/00.jpg",
    "/images/01.jpg",
    "/images/02.jpg",
    "/images/03.jpg",
  ];

  const reviews = [
    {
      comment: "A good retro style platform game",
      reviewer: "Fake Kojima - 9/10",
    },
    {
      comment: "Nice space theme and level design",
      reviewer: "Fake IGN - 9/10",
    },
    {
      comment: "Good work for game development beginners",
      reviewer: "Nice TA - 9/10",
    },
  ];

  return (
    <SiteLayout>
      <div className={styles["banner"]}>
        <div
          style={{
            background: `url("banner.png") center center / cover no-repeat`,
            height: "500px",
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", left: "100px", bottom: "100px" }}>
            <CButton url="/" text="GET DEMO" />
          </div>
        </div>
      </div>
      <div className={styles["game-info"]}>
        <div className={styles["upperside"]}>
          <div className={styles["game-info-about"]}>
            <div className={styles["img-wrapper"]}>
              <img src="/game-portrait.png" />
            </div>
            <h2>About the game</h2>
            <p>
              <b>Escape Eve</b> is a space themed adventure platformer game. To
              win Escaping Eve, you must get Rex the astronaut to the rescue
              spaceship as quickly as possible because Eve is crumbling into
              pieces. Whatever you do, don't fall.
            </p>
            <hr />
            <h2>Will be available on:</h2>
            <p>Steam, Epic, Nintendo Switch</p>
          </div>
          <div className={styles["game-info-review"]}>
            <h2>Game Reviews</h2>
            {reviews.map((r, idx) => (
              <div key={idx}>
                <span className={styles["comment"]}>{r.comment}</span>
                <span className={styles["reviewer"]}>{r.reviewer}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles["downside"]}>
          <h2>The Creation of Rex and Eve</h2>
          <p>
            Rex was an astronaut sent from Earth to complete a task on another
            planet, however, he never completed his mission. Rex crashed on a
            deserted planet known as Eve. Rex's ship and Eve were destroyed on
            impact. Rex was able to call for help and a rescue ship was sent
            from a nearby planet to pick up Rex, but now Rex must escape Eve
            without falling and getting sucked into a blackhole. Rex can run
            fast, but he must be able to handle navigating the moving rock
            structures to get to the rescue ship. What makes Escaping Eve unique
            is our character's ability to manipulate physics and flip upside
            down to walk on the structures above him.
          </p>
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
          src="https://www.youtube.com/embed/tOwQ1PJBnQY"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles["game-gallery"]}>
        <h1>Gallery</h1>
        <div className={styles["image-list"]}>
          {screenshots.map((url, idx) => (
            <a key={idx} href={url} target="_blank">
              <img src={url}></img>
            </a>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
};

export default HomePageLayout;
