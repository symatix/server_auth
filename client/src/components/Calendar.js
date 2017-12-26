import '../css/calendar.css';
import React from 'react';
import FullCalendar from 'rc-calendar/lib/FullCalendar';
import Select from 'rc-select';

//import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

const format = 'YYYY-MM-DD';

const now = moment();

const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

function onSelect(value) {
  console.log('select', value.format(format));
}

class Calendar extends React.Component {
  constructor(props){
    super(props);
    this.state = { type: 'month' }
  }

  onTypeChange = (type) => {
    this.setState({
      type,
    });
  }

  render() {
    return (
      <div className="content content-calendar">
        <FullCalendar
          style={{ margin: 10 }}
          Select={Select}
          fullscreen
          defaultValue={now}
          onSelect={onSelect}
          defaultType={this.state.type}
          onTypeChange={this.onTypeChange}
          locale={enUS}
        />
      </div>
    );
  }
}

export default Calendar;