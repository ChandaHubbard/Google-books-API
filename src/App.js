import React, { Component } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BookSelector from "./components/BookSelector";

import "./App.css";
import BookList from "./components/BookList";
import ListItem from "./components/ListItem";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showAddForm: false
    };
  }

  setShowAddForm(show) {
    this.setState({
      showAddForm: show
    });
  }

  addBook(book) {
    this.setState({
      book: [...this.state.book, book],
      showAddForm: false
    });
  }

  // componentDidMount() {
  //   fetch('https://www.googleapis.com/books/v1/volumes')
  //     .then(response => response.json())
  //     .then(data => {
  //       const book = Object.keys(data)
  //             .map(key => data[key].item);
  //       this.setState({
  //         book
  //       });
  //     });
  // }


  componentDidMount() {
    const url = 'https://www.googleapis.herokuapp.com/books/v1/volumes';
    const options = {
      method: 'GET',
      headers: {
        // Add your key after Bearer
        "Authorization": "Bearer ",
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          book: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });

  }


  render() {
    const page = this.state.showAddForm
    ? (
      <ListItem/>
    ) : (
      <BookList book={this.state.book} />
    );

    return (
      <div className="App">
        <Header />
        <SearchBar
        book={this.state.book}
        showForm={show => this.setShowAddForm(show)}
        />
        <BookSelector
        showForm={show => this.setShowAddForm(show)}
        handleAdd={book => this.addBookmark(book)}
        />
        {page}
      </div>
    );
  }
}

export default App;
