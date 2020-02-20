import React, { Component, Fragment} from 'react';
import DateRange from './DateRange';
import styled from 'styled-components';

const styles={
  color: "#000000",
  textAlign: "center"
}
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
          <Calendarlocation style={styles}>
            <DateRange/>
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