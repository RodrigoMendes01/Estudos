import { Overlay } from './styles';
import ReactDOM from 'react-dom';

function Loader() {
  return ReactDOM.createPortal(
    <Overlay>
      <div className='loader'></div>
    </Overlay>,
    document.getElementById('loader-root')
  )
}

export default Loader;
