// Proefneming met React en Bootstrap (20200623)

import Link from 'next/link'
//import { StaticProps } from '../lib/api' // Lees de static data (pre-rendered)
import fs from 'fs'

// De Bootstrap-componenten
// Niet in gebruik, doe het via bootstrap-styles
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
  /*init () {
    this.hasWinner = null;

    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }*/
  renderSquare(i) {
    return (

    // Gebruik de functie:
    //<Square value={this.state.squares[i]} 
    //onClick={() => this.handleClick(i)} />

      <button className="square" onClick={() => {this.props.onClick(i)} }>
      {this.props.squares[i]}
      </button>
    );
  }
  render() {

    return (
      <div>
        {/*<div className="status">{title}</div>*/}
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

  constructor(props) {
    super(props);

    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    /*if (this.hasWinner) {
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
      return;*/

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {

      if (move < this.state.stepNumber) {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );}

    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      //status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      status = 'Next player: ' + (this.state.xIsNext ? this.props.players[0] : this.props.players[1]);
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
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

export default function Index({props}) {

   return (
     <div>
      <div className="container mx-auto">
      {/* <Container fluid> Het bootstrap-component */}

      {/* <Card className="ml-4"> Het bootstrap-component */}
   
      <div className="card mt-5">
        {/* Het bootstrap-component of gebruik de styles
        <Card.Header className="py-5">
          <h6>Test Next + React + Express + Bootstrap</h6>
        </Card.Header> 
        */}
        <div className="card card-header py-5"> {/* gebruik de styles */}
          <h6>Test Next + React + Express + Bootstrap</h6>
        </div>

      {/* <Card.Body> Het bootstrap-component */}
        <div className="card card-body"> {/* gebruik de styles */}
           <div className="mx-auto">

          <Game players={props.players} />

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
    </div>
  //document.getElementById('root')
  )
}


export async function getStaticProps() { 
  
  // Proef met lezen static data uit server-bestand (20200625)

  // Next-Docs:
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries. See the "Technical details" section.

  const map = process.cwd();
  let props = JSON.parse(fs.readFileSync(map + "/StaticProps.json").toString("utf8")); // module fs kun je alleen gebruiken binnen getStaticProps

  return {
    props: { props },
  }
}