import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

// Show up on uppermost as a check on window position and change. 
// Won't show up as a visual element but will check for position and scroll to top
function ScrollToTop({history}) {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        }); 
        return () => {
            unlisten();
        }
    }, []); 
    return (null); 
}

export default withRouter(ScrollToTop); 