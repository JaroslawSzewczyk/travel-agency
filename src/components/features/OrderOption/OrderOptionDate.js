import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import ProtoTypes from 'prop-types';

class OrderOptionDate extends React.Component{

  state = {
    startDate: new Date(),
  };

  static propTypes = {
    value: ProtoTypes.any,
    currentValue: ProtoTypes.any,
    id: ProtoTypes.any,
    setOptionValue: ProtoTypes.func,
  }

  handleChange = date => {
    this.setState({
      startDate: date,
    });
  }
  render() {
    const {setOptionValue} = this.props;
    return (
      <div>
        <DatePicker
          selected={this.state.startDate}
          onChange={setOptionValue} />
      </div>
    );
  }
}

export default OrderOptionDate;
