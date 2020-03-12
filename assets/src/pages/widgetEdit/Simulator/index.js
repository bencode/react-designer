import React from 'react';
import $t from 'prop-types';
import cx from 'classnames';
import style from './style.less';

const Simulator = () => {
  return (
    <div className={cx(style.simulator, 'viver-iphonex')}>
      <div className={cx(style.container)}>
      </div>
    </div>
  );
};

Simulator.propTypes = {

};

export default Simulator;
