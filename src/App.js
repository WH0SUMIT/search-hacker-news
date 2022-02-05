import Button from "./components/atoms/buttons/button";
import Input from "./components/atoms/input/input";
import Card from "./components/molecules/card/card";
import Dropdown from "./components/molecules/dropdown/dropdown";
import "./css/global.scss";

function App() {
  return (
    <div className="App">
      <Button className="btn-text">hello</Button>
      <Input type="text" />
      <Card align="end" width="500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure sapiente
        tempora corrupti, debitis placeat beatae, autem provident harum vel
        laudantium quia, veritatis voluptate eum perferendis quasi facere!
        Nesciunt, ipsa tempora!
        <a>
          <Button>hello</Button>
        </a>
      </Card>
      <Dropdown title="hello">
        <a href="https://wh0sumit.me" target="_blank">
          All
        </a>
        <a href="#">Story</a>

        <a href="#">Comment</a>
      </Dropdown>
    </div>
  );
}

export default App;
