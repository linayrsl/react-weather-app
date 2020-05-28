import React, {Component} from 'react';
import './Forecast1Day.scss';
const pic1 = require('../../src/icons/1.png');
const pic2 = require('../../src/icons/6.png');
const pic3 = require('../../src/icons/7.png');
const pic4 = require('../../src/icons/14.png');
const pic5 = require('../../src/icons/18.png');



class Forecast1Day extends Component {

    displayPic(dayOfWeek) {
        const pics = {
            "Sunny": pic1,
            "A bit cloudy": pic2,
            "Cloudy": pic3,
            "Partly cloudy": pic4,
            "Rainy": pic5
    }
        return pics[dayOfWeek];
    }

    convertDay(dayInNum) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[dayInNum];
    }

    render() {
        return (
            <div className={'day'} style={{backgroundImage: `url(${this.displayPic(this.props.day.description)})`}}>
                <div className={'dayName'}> {this.convertDay(this.props.day.day)}</div>
                <div className={'dayDetails'}>
                    <div>{this.props.day.temperature}&#8451;</div>
                    <div>{this.props.day.description}</div>
                </div>
            </div>
        )
    }
}

export default Forecast1Day;