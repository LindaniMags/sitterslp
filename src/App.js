import house from "./images/house.png";
import baby from "./images/playtime.png";
import laundry from "./images/laundry-machine.png";
import clean from "./images/products.png";
import linked from "./images/linkedin.png";
import git from "./images/github.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <h2>SITTERS</h2>
      </div>
      <div className="hero">
        <h1>All The Help You Need At Home</h1>
        <h1>We Got You!</h1>
        <h1>
          <button>LETS GO!</button>
        </h1>
      </div>
      <h2>Here Are Some of The Services On Offer.</h2>
      <div className="cubes-con">
        <div className="baby-sit-con">
          <div className="baby-sit-text cubes">
            <h1>LET US TAKE CARE OF</h1>
            <h1>YOUR BABY</h1>
            <h1>WHILE YOU ARE AWWAY</h1>
          </div>
          <div className="baby-sit-img cubes">
            <img src={baby} alt="baby" className="baby" />
          </div>
        </div>
        <div className="baby-sit-con">
          <div className="baby-sit-img cubes">
            <img src={clean} alt="baby" className="baby" />
          </div>
          <div className="baby-sit-text cubes">
            <h1>ARE YOU IN NEED OF</h1>
            <h1>SOME SPRING CLEANING?</h1>
            <h1>WE GOT YOU COVERED</h1>
          </div>
        </div>
        <div className="baby-sit-con">
          <div className="baby-sit-text cubes">
            <h1>GET YOUR LAUNDRY</h1>
            <h1>DONE ANY DAY</h1>
          </div>
          <div className="baby-sit-img cubes">
            <img src={laundry} alt="baby" className="baby" />
          </div>
        </div>
        <div className="baby-sit-con">
          <div className="baby-sit-img cubes">
            <img src={house} alt="baby" className="baby" />
          </div>
          <div className="baby-sit-text cubes">
            <h1>AND ALL OF YOUR</h1>
            <h1>HOUSEHOLD NEEDS</h1>
          </div>
        </div>
      </div>
      <h2>And Many More...</h2>
      <p>
        We Live In A Busy Well And We Do Not Always Have The Time To Do Some The
        Chores That We Have To Do At
      </p>
      <p>
        Home. Let Us Take The Burden Off You So You Can Go On And Do The
        Important Things.
      </p>
      <p>
        You Now No Longer Have To Worry About Finding The Help You Need, When
        You Need It
      </p>
      <footer>
        <div className="icons">
          <a href="">
            <img src={linked} alt="Linkedin" className="icon" />
          </a>
          <a href="">
            <img src={git} alt="Github" className="icon" />
          </a>
        </div>
        <h3>SITTERS</h3>
      </footer>
    </div>
  );
}

export default App;
