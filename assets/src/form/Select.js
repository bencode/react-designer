import React from 'react';
import $t from 'prop-types';
import cx from 'classnames';
import CloseIcon from './components/CloseIcon';


const Select = ({
  className,
  options = [],
  value,
  onChange,
  clearable
}) => {
  const selectedIndex = options.findIndex(option => option.value === value);

  const handleChange = e => {
    const index = e.target.selectedIndex;
    const newValue = index >= 0 ? options[index].value : undefined;
    onChange && onChange(newValue);
  };
  return (
    <div className={cx('vx-select', className)}>
      <select onChange={handleChange} value={selectedIndex}>
      {
        options.map(({ label }, index) => (
          <option key={index} value={index}>{label}</option>
        ))
      }
      </select>
      { clearable && <CloseIcon /> }
    </div>
  );
};

const ValueType = $t.oneOfType([$t.string, $t.number]);

const TypeOption = $t.shape({
  label: $t.string,
  value: ValueType
});

Select.propTypes = {
  className: $t.string,
  options: $t.arrayOf(TypeOption).isRequired,
  value: TypeOption,
  onChange: $t.func,
  clearable: $t.bool
};


export default Select;
