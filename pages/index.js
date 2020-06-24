import Link from 'next/link'

// De Bootstrap-componenten
// Niet in gebruik, via bootstrap-styles
// Mogelijk wel nodig bij jQuery-afhankelijke componenten
//import Container from 'react-bootstrap/Container'
//import Card from 'react-bootstrap/Card'

// Voor lokaal gebruik (in index-page) (nu centraal via _app.js)
//import './index.css';

function Square(props) {
    return (
      <button className="square" onClick={() => {props.onClick()} }>
        {props.value}
      </button>
    );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.init();
  }
  init () {
    this.hasWinner = null;

    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();

    if (this.hasWinner) {
      this.init();
      this.setState(this.state); // setSTate forceert rendering
      return;
    }
    let end = true;
    for (let n = 0; n < 9; n++) {
      if (!squares[n]) {
        end = false; break;
      }
    }
    if (end) {
      this.init();
      this.setState(this.state); // setSTate forceert rendering
      return;
    }
    else if (squares[i])
      return;

    squares[i] = this.state.xIsNext ? 'X': 'O';

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  renderSquare(i) {
    return (

    // Gebruik de functie:
    //<Square value={this.state.squares[i]} 
    //onClick={() => this.handleClick(i)} />

      <button className="square" onClick={() => {this.handleClick(i)} }>
      {this.state.squares[i]}
      </button>
    );
  }
  render() {

    this.hasWinner = calculateWinner(this.state.squares);
    let title;

    if (this.hasWinner) {
      let status = 'Winner: ' + this.hasWinner;
      title =  (<b>{status}</b>); // jsx-code - afwijkende stijl voor winnaar 
    } 
    else {
      let status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      title = (<div>{status}</div>);
    }
    return (
      <div>
        <div className="status">{title}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
  reset
}

/* ========================================

ReactDOM.render(
  <div className="card bg-light">
    <div className="card-header">
      <h6>Test React</h6>
    </div>
    <div className="card-body">
    <Game />
    </div>
  </div>,
  document.getElementById('root')
); */

export default function Home() {
  return (
      <div className="container mx-auto">
      {/* <Container fluid> De bootstrap-component */}

      {/* <Card className="ml-4"> De bootstrap-component */}
   
      <div className="card mt-5">
        {/* De bootstrap-component of gebruik de styles
        <Card.Header className="py-5">
          <h6>Test Next + React + Express + Bootstrap</h6>
        </Card.Header> 
        */}
        <div className="card card-header py-5"> {/* gebruik de styles */}
          <h6>Test Next + React + Express + Bootstrap</h6>
        </div>

      {/* <Card.Body> De bootstrap-component */}
        <div className="card card-body"> {/* gebruik de styles */}
           <div className="mx-auto">

          <Game />

          </div>
        </div>
        <div className="card card-footer"> {/* gebruik de styles */}
          <div className="row">
            <div className="col">
              <Link href="/next_link">
                <a>ga naar page Next_link</a>
              </Link>
            </div>
            <div className="col">
              <a href="/htdocs">ga naar page Tradional</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  //document.getElementById('root')
  )
}