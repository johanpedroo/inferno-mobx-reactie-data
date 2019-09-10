import {Component, version} from 'inferno';
import Logo from './logo';
import './App.css';
import {observable} from "mobx";
import {observer} from 'inferno-mobx';

@observer
class App {
  constructor(props) {
    Object.assign(this, props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo width="80" height="80" />
          <p>{`Welcome to Inferno ${version}`}</p>
          <button onClick={() => {this.teste = '12345'; console.log(this)}}>
            {this.teste}
          </button>
        </header>
      </div>
    );
  }
}



class Teste extends App {
  @observable teste = 'dsdsd';
  @observable teste2;
  @observable x;
  @observable y;

  constructor(props) {
    super(props);
    this.teste = props.teste || this.teste;
  }

}


class Window extends Teste {
  @observable content = [];
  render() {
    return <div className={'app'}>
      {super.render()}
      {
        this.content.map((Child,i) => <div key={i}>{Child.render()}</div>)
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

const TesteWindow = constructTeste({aaa: 'dsdsds'});

const AWindow = constructWindow({
  content: [
      TesteWindow
  ],
  teste: '1111'
});

@observer
class CreateWindow extends Component {
  render(){
    return this.props.data.render()
  }
}

export default () => <CreateWindow data={AWindow}/>;
