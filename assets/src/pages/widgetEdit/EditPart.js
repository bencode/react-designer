import React from 'react';
import { useSelector } from 'react-redux';
import Outline from './Outline';
import Simulator from './Simulator';
import style from './style.less';

const EditPart = () => {
  const { widget } = useSelector(v => v.page);
  if (!widget) {
    return null;
  }

  return (
    <div className={style.editPart}>
      <Outline widget={widget} />
      <Simulator widget={widget} />
    </div>
  );
};

export default EditPart;
