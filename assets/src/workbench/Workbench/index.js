import React from 'react';
import $t from 'prop-types';
import DefaultLayout from '../DefaultLayout';

const Layouts = {
  default: DefaultLayout
};

const Workbench = ({ className, layout = 'default', parts }) => {
  const Layout = Layouts[layout];
  return (
    <div className={className}>
      <Layout parts={parts} />
    </div>
  );
};


const TypePart = $t.shape({
  region: $t.string.isRequired,
  component: $t.elementType.isRequired
});

Workbench.propTypes = {
  className: $t.string,
  layout: $t.string,
  parts: $t.arrayOf(TypePart).isRequired
};

export default Workbench;
