import React, { Component } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';

class calendar extends Component {
    state={
        date: new Date(),
    }
    onChange = date => this.setState({date})
    render() {
        return (
            <div>
                <Span>대여 / 반납 날짜</Span>
                {/*{<Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                className={'calendarstyle'}/>*/}
            </div>
        );
    }
}
const Span = styled.div`
    width: 175px;
    height: 27px;
    font-size: 24px;
    color: #000000;
    position:absolute;
    top:461px;
    left: 486px;
`;
const calendarstyle = styled.div`
    width: 509px;
    position: absolute;
    top:505px;
    left:486px;
`;

export default calendar;