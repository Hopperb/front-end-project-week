import React, { Component } from 'react';
//importing Router
import { Route } from 'react-router-dom';

//importing Listview and NewNote from LambdaPages
import ListView from './LambdaPages/ListView';
import NewNote from './LambdaPages/NewNote';
//importing NavBar component
import NavBar from './components/Nav';
import Form from './components/Form';
import './App.css';


//state of Notes
class App extends Component {
  state = {
    list: [
      {
        id: 0,
        title: "Note Title",
        note: "Note Content"
      },
      {
        id: 1,
        title: "Note Title",
        note: "Note Content"
      },
      {
        id: 2,
        title: "Note Title",
        note: "Note Content"
      },
      {
        id: 3,
        title: "Note Title",
        note: "Note Content"
      },
    ],
  }

//remder method that will add new Note to the existing notes
renderNoteList = (title, note) => {
  const newNote = {
    id: this.state.list.length,
    title: title,
    note: note
  };
  this.setState({ list: [...this.state.list, newNote] });
 }

//routes for components to render to App
  render(props) {
    return (
      <div className="App">
      <NavBar />
       <Route exact path="/" render={props => <ListView {...props} notes={this.state.list}/>} />
       <Route path="/note" render={props => <NewNote {...props} renderNoteList={this.renderNoteList}/>} />
      </div>
    );
  }
}

export default App;
