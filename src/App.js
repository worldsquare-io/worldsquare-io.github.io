import "./App.css";
import { useState, useEffect } from "react";
import DesktopView from './views/DesktopView';
import MobileView from './views/MobileView';

// App
function App() {
    // Mobile
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setScreenWidth(window.innerWidth);
    }
    
    const isMobile = screenWidth <= 768;
    
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

	return (
        <div className="App">
            {!isMobile && <DesktopView />}
            {isMobile && <MobileView />}
		</div>
	);
}

export default App;
