import React from 'react';
import './App.scss';
import Forecast1Day from "./Forecast1Day/Forecast1Day";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: []
        };
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/evyros/react-weather-app/forecast')
            .then((data) => data.json())
            .then((days) => {
                this.setState({days});
            });
    }

    render() {
        return (
            <div className="App layout">
                {this.state.days.map((day, index) => <Forecast1Day day={day} key={index} />)}
            </div>
        );
    }

}

export default App;
