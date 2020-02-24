import React from 'react';
import PropTypes from 'prop-types';

import pricing from '../../../data/pricing.json';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption.js';

class OrderForm extends React.Component {
  static propTypes = {
    tripCost: PropTypes.node,
    options: PropTypes.any,
    setOrderOption: PropTypes.func,
  }

  render() {
    const { tripCost, options, setOrderOption } = this.props;
    return (
      <Row>
        {pricing.map(price => (
          <Col md={4} key={price.id}>
            <OrderOption {...price} currentValue={options[price.id]} setOrderOption={setOrderOption} />
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options}/>
        </Col>
      </Row>
    );
  }
}

export default OrderForm;
