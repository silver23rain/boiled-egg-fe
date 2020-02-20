import React, { Component, Fragment} from 'react';
import {DateRangePicker} from 'react-date-range';
import styled from 'styled-components';
import * as startOfDay from "date-fns";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

class Calendar extends Component {
    handleSelect(ranges){
        console.log(ranges);
        // {
        //   selection: {
        //     startDate: [native Date Object],
        //     endDate: [native Date Object],
        //   }
        // }
      }
      render(){
        const selectionRange = {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection',
        }
        return (
         <Fragment>
          <Span>대여 / 반납 날짜</Span>
          <Calendarlocation>
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={this.handleSelect}
          />
          </Calendarlocation>
          </Fragment>
        )
      }
}
const Calendarlocation = styled.div`
    position: absolute;
    top: 505px;
    left: 486px;
`;
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

export default Calendar;