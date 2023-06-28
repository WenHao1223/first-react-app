import logo from './logo.svg';
import './App.css';

function App() {

  const blogObj = {
    title: 'Blog TItle 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci numquam laborum vitae beatae molestias quia praesentium nihil illum labore et, consequuntur nesciunt optio expedita laboriosam voluptas ducimus aliquid eligendi enim.'
  }

  const styles = {
    borderRadius: '5px',
    boxShadow: '0 2px 5px #ccc',
    boxSizing: 'border-box',
    margin: '16px',
    padding: '16px'
  };

  return (
    <div className="App">
      <div style={styles}>
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}</p>
      </div>
      <div style={styles}>
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}</p>
      </div>
      <div style={styles}>
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}</p>
      </div>
    </div>
  );
}

export default App;
