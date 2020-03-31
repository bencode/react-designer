import React from 'react';
import cx from 'classnames';
import $t from 'prop-types';


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
