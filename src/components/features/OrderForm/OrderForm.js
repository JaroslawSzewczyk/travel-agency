import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';

class OrderForm extends React.Component {
  static propTypes = {
    tripCost: PropTypes.node,
    options: PropTypes.any,
  }

  render() {
    const { tripCost, options } = this.props;
    console.log(options);
    return (
      <Row>
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options}/>
        </Col>
      </Row>
    );
  }
}

export default OrderForm;
