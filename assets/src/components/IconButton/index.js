import React from 'react';
import cx from 'classnames';
import $t from 'prop-types';
import './style.less'

const IconButton = ({ icon, className, ...props }) => {
  return (
    <button type="button" className={cx('vx-icon-button', className)} {...props}>
      {icon}
    </button>
  );
};

IconButton.propTypes = {
  icon: $t.element.isRequired,
  className: $t.string
};

export default IconButton;
