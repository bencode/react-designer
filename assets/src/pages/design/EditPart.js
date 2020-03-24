import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import createDebug from 'debug';
import Outline from './Outline';
import Simulator from './Simulator';
import style from './style.less';

const debug = createDebug('pageviver:EditPart');

const EditPart = () => {
  const dispatch = useDispatch();
  const { widget, edit } = useSelector(v => v.page);
  if (!widget) {
    return null;
  }

  debug('widget: %o', widget);
  const props = { dispatch, widget, edit };
  return (
    <div className={style.editPart}>
      <Outline {...props} />
      <Simulator {...props} />
    </div>
  );
};

export default EditPart;
