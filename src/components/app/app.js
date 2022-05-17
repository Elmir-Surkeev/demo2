import Header from '../app-header/app-header';
import Section1 from '../app-section1/app-section';
import Section2 from '../app-section2/app-section2';
import Section3 from '../app-section3/app-section3';
import Footer from '../app-footer/app-footer';
import './app.css';

 function App (){
    // const data = [
    //     {nameIco: 'Android Version', meaningIco: 'Android officially 10.0'},
    //     {nameIco: 'Iimnternet Service', meaningIco: '4G Smart Watches'},
    //     {linkImages: 'none', alt:'music player', nameIco: 'Music Player', meaningIco: 'Use the Music app'},
    // ]
     return(
         <>
            <Header/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Footer/>
         </>
     )
 }

export default App;