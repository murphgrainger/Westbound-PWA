import React from 'react';

import Button from './components/Button';
import logo from './assets/logos/westbound-logo.png';
import lockup from './assets/logos/westbound-lockup.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Westbound Place and Co logo" />
        <img src={lockup} className="App-lockup" alt="Westbound Place and Co lockup" />
        </header>
        <div class="button-wrapper">
          <Button class={'primary block'} text={'Log In'} url={'#'}/>
          <Button class={'secondary block'} text={'Create Account'} url={'#'}/>
        </div>
    </div>
  );
}

export default App;
