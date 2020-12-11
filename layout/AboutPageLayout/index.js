import SiteLayout from "@/layout/SiteLayout";
import styles from "./style.module.css";

const AboutPageLayout = () => {
  const members = [
    {
      name: "Colin Tran",
      avatar: "/avatar/Colin.png",
      description: "Game developer",
    },
    {
      name: "Isabelle Beckmann",
      avatar: "/avatar/Isabelle.png",
      description: "Game developer",
    },
    {
      name: "Rionel Dmello",
      avatar: "/avatar/Rio.png",
      description: "Game developer",
    },
    {
      name: "Richard Lopez",
      avatar: "/avatar/Richard.png",
      description: "Game developer",
    },
    {
      name: "Yue Yu",
      avatar: "/avatar/Yue.png",
      description: "Game developer",
    },
  ];
  return (
    <SiteLayout>
      <div className={styles["post-content"]}>
        <h1>
          <img src="/inc-logo-white.png" height="250px" />
        </h1>
        <h1>ABOUT US</h1>
        <p>
          Ace Entertainment is a game group from UCI ICS 113 course. Our mission
          is to build fancy, exciting game world to explore and conquer.
        </p>
        <br />
        <p>
          We created Escaping Eve entirely through virtual meetings. Through
          weekly Discord meetings and Zoom calls, we developed Escaping Eve
          using Unity. We decided to make a platformer game because we were all
          inspired by Nintendo's Mario games. Since platformer games are common,
          our main goal in the creation of Escaping Eve was to create a game
          that provides players with a unique experience. We accomplished this
          goal with our space theme and designing our main character, Rex, to be
          able to manipulate gravity and flip upside down.
        </p>
        <h1>THE TEAM</h1>
        <div className={styles["team-list"]}>
          {members.map((m, idx) => (
            <div key={idx} className={styles["team-member"]}>
              <img src={m.avatar} height="150px" />
              <h3>{m.name}</h3>
              <p>{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
};

export default AboutPageLayout;
