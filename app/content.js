import Image from "next/image";
import "./content.css";
import airpods from "./images/airbods.png";
import watch from "./images/watch.png";
import laptop from "./images/laptop.png";
import Features from "./features";
function Content() {
  return (
    <div>
      <div className="grid-categ">
        <div className="airpods">
          <div className="lables">
            <h3>Enjoy</h3>
            <h2>With</h2>
            <h1>EARPHONE</h1>
            <button>Browse</button>
          </div>
          <div className="prod-image">
            <Image src={airpods} alt="" />
          </div>
        </div>
        <div className="watch">
          <div className="lables">
            <h3>New</h3>
            <h2>Wear</h2>
            <h1>GADGET</h1>
            <button>Browse</button>
          </div>
          <div className="prod-image">
            <Image src={watch} alt="" />
          </div>
        </div>
        <div className="laptop">
          <div className="lables">
            <h3>Tried</h3>
            <h2>Devices</h2>
            <h1>LAPTOP</h1>
            <button>Browse</button>
          </div>
          <div className="prod-image">
            <Image src={laptop} alt="" />
          </div>
        </div>
        <div className="gaming">
          <div className="lables">
            <h3>Best</h3>
            <h2>Gaming</h2>
            <h1>CONSOLE</h1>
            <button>Browse</button>
          </div>
          <div className="prod-image">
            <Image src={""} alt="" />
          </div>
        </div>
        <div className="game">
          <div className="lables">
            <h3>Play</h3>
            <h2>Game</h2>
            <h1>OCULUS</h1>
            <button>Browse</button>
          </div>
          <div className="prod-image">
            <Image src={""} alt="" />
          </div>
        </div>
        <div className="speaker">
          <div className="lables">
            <h3>New</h3>
            <h2>Amazon</h2>
            <h1>SPEAKER</h1>
            <button>Browse</button>
          </div>
          <div className="prod-image">
            <Image src={""} alt="" />
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
}

export default Content;
