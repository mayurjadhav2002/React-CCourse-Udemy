import './App.css';
import Navbar from './Components/Navbar';
import 'semantic-ui-css/semantic.min.css'
import Coupon from './Components/Coupon';
import { Divider } from 'semantic-ui-react';
import Newdevice from './Components/Newdevice';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <div className='pc'>
    <Coupon/>

    </div>
<div className='mobile'> 
  <Newdevice/>
</div>
    <br></br>
    <Divider/>
        
          <p className='footer'>Made with 🧡 by OmegaCareer and<a href='https://twitter.com/MayurJa16744138' target='_blank' rel="noreferrer" > Mayur</a></p>
         
        
    </div>
  );
}

export default App;
