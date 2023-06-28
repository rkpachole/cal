import './App.css'
import React, { Component } from 'react';
import { Button, Input } from "reactstrap";
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: "",
      data: "",
      answer: "",
      history: []
    }
    this.Calculat = this.Calculat.bind(this)
  }

  clickHandle = (event) => {
    const result = this.state.data.concat(event.target.value);
    this.setState({
      data: result,
    });
    // console.log("data",this.state.data);
  }
  ClearDisplay = () => {
    this.setState({
      data: ""
    });

  }
  Calculat = () => {
    console.log("datastatus", this.state.data);
    let history = [];
    const data = this.state.history.push(this.state.data);
    this.setState({
      data: history
    });
    console.log("history", this.state.history);
    try {
      this.setState({
        data: (eval(this.state.data).toString())
      });
      console.log("data", this.state.data);
    } catch (event) {
      this.setState({
        data: "error"
      })
    }
  }

  BackSpace = () => {
    this.setState({
      data: this.state.data.slice(0, -1)
    })
  };
  onChangeHandle = (event) => {
    this.setState({
      data: event.target.value,
      result: this.state.data
    })
    console.log(this.state.result)
  }

  onChangehistory = () => {
    this.setState({
      equal: this.state.data
    })
    console.log("equal", this.state.data);
  }
  clickHandleData = (event) => {
    this.setState({
      data: event.target.value
    })
  }


  render() {
    return (
      <div className="calc">
        <h1 onClick={this.onChangehistory}>calc </h1>
        <table>
          <tbody>
            <tr>
              <td>
                <div> {this.state.history.map((number) => <button value={number} onClick={this.clickHandle}>{number}</button>)}
                  <Input type='text' placeholder="0" id="answer" name="name" value={this.state.data}
                    onChange={this.onChangeHandle}></Input>
                    {/* <FontAwesomeIcon icon="fa-solid fa-clock-rotate-left" /> */}
                    <i class="fa-solid fa-clock-rotate-left"></i></div>
              </td>
              </tr>
              <tr>
              <td> <div><input type="button" value="(" className="btn" onClick={this.clickHandle} />
               <input type="button" value=")" className="btn" onClick={this.clickHandle} />
               <input type="button" value="%" className="btn" onClick={this.clickHandle} />
               <input type="button" value="C" className="btn" onClick={this.ClearDisplay} /></div></td>
            </tr>
            <tr>
              <td><div>  <input type="button" value="7" className="btn" onClick={this.clickHandle} />
                      <input type="button" value="8" className="btn" onClick={this.clickHandle} />
                      <input type="button" value="9" className="btn" onClick={this.clickHandle} />
                     <input type="button" value="/" className="btn" onClick={this.clickHandle} /></div></td>
            </tr>
            <tr>
              <td>  <input type="button" value="4" className="btn" onClick={this.clickHandle} /> 
               <input type="button" value="5" className="btn" onClick={this.clickHandle} />
                      <input type="button" value="6" className="btn" onClick={this.clickHandle} />
                    <input type="button" value="*" className="btn" onClick={this.clickHandle} /></td>
            </tr>
            <tr>
              <td>
                <input type="button" value="1" className="btn" onClick={this.clickHandle} />
                 <input type="button" value="2" className="btn" onClick={this.clickHandle} />
                 <input type="button" value="3" className="btn" onClick={this.clickHandle} />
                <input type="button" value="-" className="btn" onClick={this.clickHandle} />
              </td>
            </tr>
            <tr>
              <td><input type="button" value="0" className="btn" onClick={this.clickHandle} />
               <input type="button" value="+" className="btn" onClick={this.clickHandle} />
              <input type="button" value="." className="btn" onClick={this.clickHandle} />
               <input type="button" value="CE" className="btn" onClick={this.BackSpace} /></td>
            </tr>
            <tr>
              <td> <input type="button" value="=" id="equal"  onClick={this.Calculat} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default App;

