import './App.css';
import { MyButton, MyDropdown, MySplitButton } from './components';

function App() {
  return (
    <div className="container">
      <h1>WME FRAMEWORK PLAYGROUND</h1>
      <div className="components-list">
        <ul>
          <li><a href="#button">Button</a></li>
          <li><a href="#split-button">Split Button</a></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="components">
        <div id="button">
          <h3>Button</h3>
          <MyButton />
        </div>
        <div id="split-button">
          <h3>Split Button</h3>
          <MySplitButton />
        </div>
        <div id="dropdown">
          <h3>Dropdown</h3>
          <MyDropdown />
      </div>
      </div>
      
    </div>
  );
}

export default App;
