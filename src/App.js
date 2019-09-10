import { version, Component } from 'inferno';
import Logo from './logo';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);
    console.log(this)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo width="80" height="80" />
          <p>{`Welcome to Inferno ${version}`}</p>
          <button onClick={() => {this.teste = '12345'; console.log('clicked')}}>
            {this.teste}
          </button>
        </header>
      </div>
    );
  }
}



class Teste extends App {
  teste = 'dsdsd';
  teste2;
  x;
  y;
}

class Window extends Teste {
  constructor(props) {
    super(props);
    Object.assign(this, props);
  }

  render() {
    return <div className={'app'}>
      {
        this.content.map((Child,i) => <div key={i}><Child/></div>)
      }
    </div>
  }
}
function constructTeste(props){
  return window.Teste = new Teste(props)
}
function constructWindow(props){
  return window.aWindow = new Window(props)
}

const TesteWindow = constructTeste({aaa: 'dsdsds', f(){
  console.log(Teste.teste = 'clicked')
    Teste.forceUpdate()
}});

const AWindow = constructWindow({
  content: [
      TesteWindow
  ]
});

export default AWindow;
