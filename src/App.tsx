import "./App.scss";
import React from "react";
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';

interface AppState {
  isFetching: boolean;
  data: [];
  age: [];
  illumination: [];
  stage: [];
}

interface AppProps {
  isFetching: boolean;
  data: [];
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isFetching: true,
      data: [],
      age: [],
      illumination: [],
      stage: [],
    };
  }

  getDate() {
    return Math.floor(Date.now() / 1000);
  }

  async componentDidMount() {
    const fetchMoonData = async () => {
      const response = await fetch(
        "https://cat-fact.herokuapp.com/facts",
        {
          method: "GET",
          // headers: {
          //   "x-rapidapi-key":
          //     "5113e8f965msh20b372e33c89697p128798jsn26cb39d49919",
          //   "x-rapidapi-host": "moonapi.p.rapidapi.com",
          // },
        }
      );
      const moonData = await response.json();
      this.setState({
        isFetching: false,
        // data: moonData.moon,
        // age: moonData.moon.age,
        // illumination: moonData.moon.illumination,
        // stage: moonData.moon.stage,
      });
      console.log(moonData)
    };
    fetchMoonData();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Card isFetching={this.state.isFetching} age={this.state.age} illumination={this.state.illumination} stage={this.state.stage} />
      </div>
    );
  }
}

export default App;
