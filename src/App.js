import HomeScreen from "./components/home/HomeScreen"

function App() {

  return (
    <div>
      <HomeScreen />

      {/* Testing if it works */}
      {/* <div style={{display: "flex", gap: "20px"}}>
        <div>
          {
            dec.map((x, i) => (
              <p key={i} style={{fontSize: "20px"}}>{x}</p>
            ))
          }
        </div>
        <div>
          {
            char.map((ch, i) => (
              <p key={i} style={{fontSize: "20px"}}>{ch}</p>
            ))
          }
        </div>
      <div>
      {
        hexCode.map((hex, i) => (
          <p key={i} style={{fontSize: "20px"}}>{hex}</p>
        ))
      }
      </div>
      </div> */}
    </div>
  );
}

export default App;
