// =============================================================
//   WRITE YOUR CODE BELOW
// =============================================================

// 1: Create a 'Planet' component that renders a planet card

const Planet = (props) => {
  return (
    <div class="container">
      <div class="card">
        <div>
          <img src={props.url} alt="Mercury" />
        </div>
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
        <h3>Planet Profile</h3>
        <ul>
          <li>
            <strong>Diameter:</strong>
            {props.diameter}
          </li>
          <li>
            <strong>Moons:</strong>
            {props.moon}
          </li>
        </ul>
        <button
          type="button"
          name=""
          id=""
          class="btn btn-primary btn-lg btn-danger m-10"
          onClick={props.onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

// 2: Create a container component that iterates over the planets array
//    and renders a 'Planet' component for each object in the array

const PlanetList = ({ planets, onCardDelete }) => (
  <div class="container">
    {planets.map((planet, index) => (
      <Planet
        id={index}
        name={planet.name}
        desc={planet.desc}
        url={planet.url}
        diameter={planet.diameter}
        moon={planet.moons}
        onDelete={() => onCardDelete(index)}
      />
    ))}
  </div>
);

// 3: Render the container component to the DOM

const App = () => {
  const [planets, setPlanets] = React.useState([
    {
      id: "1",
      name: "Mercury",
      diameter: "3,031.67 mi",
      moons: "none",
      desc: "Mercury is the closest planet to the Sun. Due to its proximity, it's not easily seen except during twilight. For every two orbits of the Sun, Mercury completes three rotations about its axis. Up until 1965 it was thought that the same side of Mercury constantly faced the Sun.",
      url: "img/mercury.jpg",
    },
    {
      id: "2",
      name: "Venus",
      diameter: "7,521 mi",
      moons: "none",
      desc: "Venus is the second planet from the Sun and is the second brightest object in the night sky after the Moon. Venus is the second largest terrestrial planet and is sometimes referred to as the Earth’s sister planet due the their similar size and mass.",
      url: "img/venus.jpg",
    },
    {
      id: "3",
      name: "Earth",
      diameter: "7,917.5 mi",
      moons: "1",
      desc: "Earth is the third planet from the Sun and is the largest of the terrestrial planets. The Earth is the only planet in our solar system not to be named after a Greek or Roman deity. The Earth was formed approximately 4.54 billion years ago and is the only known planet to support life.",
      url: "img/earth.jpg",
    },
    {
      id: "4",
      name: "Mars",
      diameter: "4,212 mi",
      moons: "2",
      desc: 'The fourth planet from the Sun and the second smallest planet in the solar system. Mars is often described as the "Red Planet" due to its reddish appearance. It\'s a terrestrial planet with a thin atmosphere composed primarily of carbon dioxide.',
      url: "img/mars.jpg",
    },
    {
      id: "5",
      name: "Jupiter",
      diameter: "86,881.4 mi",
      moons: "79",
      desc: 'The planet Jupiter is the fifth planet out from the Sun, and is two and a half times more massive than all the other planets in the solar system combined. It is made primarily of gases and is therefore known as a "gas giant".',
      url: "img/jupiter.jpg",
    },
    {
      id: "6",
      name: "Saturn",
      diameter: "72,367.4 mi",
      moons: "62",
      desc: "Saturn is the sixth planet from the Sun and the most distant that can be seen with the naked eye. Saturn is the second largest planet and is best known for its fabulous ring system that was first observed in 1610 by the astronomer Galileo Galilei.",
      url: "img/saturn.jpg",
    },
    {
      id: "7",
      name: "Uranus",
      diameter: "31,518 mi",
      moons: "27",
      desc: "Uranus is the seventh planet from the Sun. While being visible to the naked eye, it was not recognised as a planet due to its dimness and slow orbit. Uranus became the first planet discovered with the use of a telescope.",
      url: "img/uranus.jpg",
    },
    {
      id: "8",
      name: "Neptune",
      diameter: "30,599 mi",
      moons: "14",
      desc: "Neptune is the eighth planet from the Sun making it the most distant in the solar system. This gas giant planet may have formed much closer to the Sun in early solar system history before migrating to its present position.",
      url: "img/neptune.jpg",
    },
  ]);
  const handleCardDelete = (index) => {
    const newPlanets = [...planets];
    newPlanets.splice(index, 1);
    setPlanets(newPlanets);
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <PlanetList planets={planets} onCardDelete={handleCardDelete} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
