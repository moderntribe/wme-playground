import './App.css';
import { Button, Checkbox } from '@moderntribe/wme';

function App() {
  return (
    <div className="container">
      <h1>WME FRAMEWORK PLAYGROUND</h1>
      <div className="components-list">
        <ul>
          <li><a href="#button">Button</a></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="components">
        <div id="button">
          <h3>Button</h3>
          <Button
            variant="contained"
            color="primary"
          >
            Button Text
          </Button>
        </div>
        <div id="checkbox">
          <h3>Checkbox</h3>
          <Checkbox
            label="this is a checkbox"
          >
            Button Text
          </Checkbox>
        </div>
      </div>
    </div>
  );
}

export default App;
