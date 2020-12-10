import SiteLayout from "@/layout/SiteLayout";
import styles from "./style.module.css";

const AboutPageLayout = () => {
  const members = [
    {
      name: "Colin Tran",
      avatar: "/avatar-placeholder.jpg",
      description: "Team member",
    },
    {
      name: "Isabelle Beckmann",
      avatar: "/avatar-placeholder.jpg",
      description: "Team member",
    },
    {
      name: "Rionel Dmello",
      avatar: "/avatar-placeholder.jpg",
      description: "Team member",
    },
    {
      name: "Richard Lopez",
      avatar: "/avatar-placeholder.jpg",
      description: "Team member",
    },
    {
      name: "Yue Yu",
      avatar: "/avatar-placeholder.jpg",
      description: "Team member",
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
        <h1>THE TEAM</h1>
        <div className={styles["team-list"]}>
          {members.map((m) => (
            <div className={styles["team-member"]}>
              <img src={m.avatar} />
              <h3>{m.name}</h3>
              {m.description}
            </div>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
};

export default AboutPageLayout;
