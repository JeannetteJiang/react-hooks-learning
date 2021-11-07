import './App.css';
import HooksUseState from './HooksUseState';
import HooksUseReducer from './HooksUseReducer';
import HooksUseEffect from './HooksUseEffect';
import HooksUseRef from './HooksUseRef';
import HooksUseLayoutEffect from './HooksUseLayoutEffect';
import HooksUseImperativeHandle from './HooksUseImperativeHandle';
import HooksUseContext from './HooksUseContext';
import HooksUseMemo from './HooksUseMemo';
import HooksUseCallback from './HooksUseCallback';

const styles = {
  padding: "20px"
}


function App() {
  return (
    <div style={styles}> 
      <p>
        <h1>useState:</h1>
        <HooksUseState />
      </p>
      <hr />
      <p>
        <h1>useRedcuer:</h1>
        <HooksUseReducer />
      </p>
      <hr />
      <p>
        <h1>useEffect:</h1>
        <HooksUseEffect />
      </p>
      <hr />
      <p>
        <h1>useRef:</h1>
        <HooksUseRef />
      </p>
   
      <hr />
      <p>
        <h1>useLayoutEffect:</h1>
        <HooksUseLayoutEffect />
      </p>

      <hr />
      <p>
        <h1>useImperativeHandle:</h1>
        <HooksUseImperativeHandle />
      </p>
      <hr />
      <p>
        <h1>useContext:</h1>
        <HooksUseContext />
      </p>
      <hr />
      <p>
        <h1>useMemo:</h1>
        <HooksUseMemo />
      </p>
      <hr />
      <p>
        <h1>useCallback:</h1>
        <HooksUseCallback />
      </p>
    </div>
  );
}

export default App;
