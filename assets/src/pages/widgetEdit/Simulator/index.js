import React, { useEffect } from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import style from './style.less';

const Simulator = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(state => state.page);
  useEffect(() => {
    dispatch({ type: 'page/mount' });
  }, []);
  return (
    <div className={cx(style.simulator, 'viver-iphonex')}>
      <div className={cx(style.container)}>
        {count}
      </div>
    </div>
  );
};

Simulator.propTypes = {

};

export default Simulator;
