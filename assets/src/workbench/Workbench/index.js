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


const TypePart = $t.shape({
  region: $t.string.isRequired,
  component: $t.elementType.isRequired
});

Workbench.propTypes = {
  layout: $t.string,
  parts: $t.arrayOf(TypePart).isRequired
};

export default Workbench;
