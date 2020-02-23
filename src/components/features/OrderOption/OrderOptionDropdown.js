import React from 'react';
import styles from './OrderOption.scss';
import ProtoTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionDropdown = ({values, required, currentValue, setOptionValue}) => (
  <select
    className={styles.dropdown}
    value={currentValue}
    onChange={event => setOptionValue(event.currentTarget.value)}
  >
    {required ? '' : (
      <option key='null' value=''>---</option>
    )}
    {values.map(value => (
      <option key={value.id} value={value.id}>{value.name}({formatPrice(value.price)})</option>
    ))}
  </select>
);

OrderOptionDropdown.propTypes = {
  values: ProtoTypes.any,
  required: ProtoTypes.any,
  currentValue: ProtoTypes.any,
  setOptionValue: ProtoTypes.any,
};

export default OrderOptionDropdown;
