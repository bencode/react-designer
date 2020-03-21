import * as React from 'react';
import { useSelector } from 'react-redux';
import createDebug from 'debug';
import Outline from './Outline';
import Simulator from './Simulator';
import style from './style.less';

const debug = createDebug('pageviver:EditPart');

const EditPart = () => {
  const { widget } = useSelector(v => v.page);
  if (!widget) {
    return null;
  }

  debug('widget: %o', widget);
  return (
    <div className={style.editPart}>
      <Outline widget={widget} />
      <Simulator widget={widget} />
    </div>
  );
};

export default EditPart;
