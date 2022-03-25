import MainImage from './components/MainImage/MainImage';
import './App.css';
import InfoContainer from './components/InfoContainer/InfoContainer';
import AboutMe from './components/AboutMe/AboutMe';
import SocialLinks from './components/SocialLinks/SocialLinks';
import { info } from './constants/info.js';

function App() {
  return (<div className='App'>
    <MainImage />
    <InfoContainer>
      <AboutMe
        name={info.name}
        shorDescription={info.shortDescription}
        longDescription={info.longDescription}/>
      <SocialLinks links={info.socialLinks} />
    </InfoContainer>
  </div>);
}

export default App;
