import React from 'react';
import $t from 'prop-types';
import cx from 'classnames';
import CloseIcon from './components/CloseIcon';


const Select = ({ className, options = [] }) => {
  return (
    <div className={cx('vx-select', className)}>
      <select>
      {
        options.map(({ label }, index) => (
          <option key={index}>{label}</option>
        ))
      }
      </select>
      <CloseIcon />
    </div>
  );
};

const TypeOption = $t.shape({
  label: $t.string,
  value: $t.oneOfType([$t.string, $t.number])
});

Select.propTypes = {
  className: $t.string,
  options: $t.arrayOf(TypeOption).isRequired
};


export default Select;
