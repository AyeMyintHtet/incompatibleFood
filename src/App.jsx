import { StickyNavbar } from './components/StickyNav';
import { Home } from './page/Home';

function App() {

  return (
    <div className='h-[100vh]' style={{overflowX:'hidden'}}>
      <StickyNavbar />
      <Home />
    </div>
  );
}

export default App
