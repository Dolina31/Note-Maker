import { Parallax } from "react-parallax";

const Hero = (bgimage) => (
  <div className="heros">
    <Parallax
      blur={2}
      bgImage="../images/hero-background-image.jpg"
      bgImageAlt="RPGS dices on a table"
      strength={800}
      className="hero hero1"
    >
      <h1>
        <span className="text-red-color">Level Up </span>Your RPGs experience
        <br />
        <p>
          with Note Maker's
          <span className="text-red-color"> Intuitive Tools!</span>
        </p>
      </h1>
    </Parallax>

    <Parallax
      blur={2}
      bgImageAlt="RPGS dices on a table"
      strength={800}
      className="hero hero2"
    >
      <h1>
        <span className="text-red-color">Find </span>your notes in just a few
        clicks !
        <br />
        <p>
          Keep your campaign details
          <span className="text-red-color"> organized </span>and{" "}
          <span className="text-red-color">easily accessible.</span>
        </p>
      </h1>
    </Parallax>

    <Parallax
      blur={1}
      bgImage="../images/backgroundnoir.png"
      bgImageAlt="RPGS dices on a table"
      strength={800}
      className="hero hero3"
    >
      <h1>
        <span className="text-red-color"> Seasoned Game Master </span> or{" "}
        <span className="text-red-color"> new player </span>{" "}
        <p>
          {" "}
          Note Maker helps you stay{" "}
          <span className="text-red-color"> on top </span> of your game.
        </p>
      </h1>
    </Parallax>
  </div>
);
export default Hero;
