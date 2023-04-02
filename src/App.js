// import { useState, useEffect } from "react";
// import MobileView from './views/MobileView';
import DesktopView from './views/DesktopView';

// CSS
import './App.css';

// App
function App() {
    // Mobile
    // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // function handleWindowSizeChange() {
    //     setScreenWidth(window.innerWidth);
    // }
    
    // const isMobile = screenWidth <= 768;
    
    // useEffect(() => {
    //     window.addEventListener('resize', handleWindowSizeChange);
    //     return () => {
    //         window.removeEventListener('resize', handleWindowSizeChange);
    //     }
    // }, []);

	return (
        <div className="App">
            {/* {!isMobile && <DesktopView />} */}
            {/* {isMobile && <MobileView />} */}
            <DesktopView />
		</div>
	);
}

export default App;
