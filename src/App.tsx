import "./App.scss";
import React from "react";
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';

interface AppState {
  isFetching: boolean;
  data: [];
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
    };
  }

  async componentDidMount() {
    const fetchCatsFacts = async () => {
      const response = await fetch(
        "https://cat-fact.herokuapp.com/facts",
        {
          method: "GET",
        }
      );
      const catsFacts = await response.json();
      const catFact = catsFacts.map((fact: any) => fact.text)
      this.setState({
        isFetching: false,
        data: catFact,
      });
    };
    fetchCatsFacts();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Card isFetching={this.state.isFetching} data={this.state.data} />
      </div>
    );
  }
}

export default App;
