import SamPicture from "../assets/sam.svg";

const Main = () => {
  return (
    <main className="main-content">
      <img src={SamPicture} alt="Samson Odiagbe" className="image" />
      <aside className="about-me">
        <h1>Fullstack developer & Mobile developer.</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <a href="button" className="button">
          Contact me / hireme
        </a>
      </aside>
    </main>
  );
};

export default Main;
