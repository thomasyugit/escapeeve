import SiteLayout from "@/layout/SiteLayout";

const HomePageLayout = () => {
  let test = () => {
    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(<div>hello</div>);
    }
    return arr;
  };
  return (
    <SiteLayout>
      <div>here should be the banner</div>
      <div>here should be about the game</div>
      <div>here should be a video footage of the game</div>
      <div>here should be gallery/screenshot of the game</div>
    </SiteLayout>
  );
};

export default HomePageLayout;
