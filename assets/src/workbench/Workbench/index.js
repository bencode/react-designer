import React from 'react';
import $t from 'prop-types';
import DefaultLayout from '../DefaultLayout';
import style from './style.less';

const Layouts = {
  default: DefaultLayout
};

const Workbench = ({ layout = 'default', parts }) => {
  const Layout = Layouts[layout];
  return (
    <div className={style.workbench}>
      <Layout parts={parts} />
    </div>
  );
};

Workbench.propTypes = {
  layout: $t.string,
  parts: $t.array.isRequired
};

export default Workbench;
