import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  render() {
    return <h1>Hello Vikki!</h1>;
  }
}


class Question extends React.Component {
  render() {
    return <h2>Q.{this.props.text}</h2>;
  }
}

class Answer extends React.Component {
  render() {
    return <p>A.{this.props.text}</p>;
  }
}


class QA extends React.Component {
  render() {
    return (
      <div id="qa">
        <Question text={this.props.q}></Question>
        <Answer text={this.props.a}></Answer>
      </div>
    );
  }
}

class FAQ extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {qalist: []};
  }

  componentDidMount() {
    axios.get('http:localhost:3001/faq')
      .then(res => {
        console.log("res", res);
        const qalist = res.data;
        console.log("qalist", qalist);
        this.setState({ qalist });
      })
  }
  render() {
    return (

      <div id="qalist">
        question answer pair list
        {  this.state.qalist.map( qa => <QA q={qa.q} a={qa.a}></QA> )  }
      </div>

    );
  }
}

ReactDOM.render(<FAQ />, document.getElementById('root'));
export default FAQ;
