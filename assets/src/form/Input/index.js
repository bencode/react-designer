import React from 'react';
import $t from 'prop-types';
import cx from 'classnames';

const Text = ({ className, ...props }) => {
  return (
    <div className={cx('vx-input', className)}>
      <input {...props} />
    </div>
  );
};

Text.propTypes = {
  className: $t.string
};


const Number = ({ className, ...props }) => {
  return (
    <div className={cx('vx-input-number', className)}>
      <input type="number" {...props} />
    </div>
  );
};

Number.propTypes = {
  className: $t.string
};


export { Text, Number };
