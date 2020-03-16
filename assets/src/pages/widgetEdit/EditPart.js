import React from 'react';
import $t from 'prop-types';
import Outline from './Outline';
import Simulator from './Simulator';
import style from './style.less';

const EditPart = () => {
  return (
    <div className={style.editPart}>
      <Outline />
      <Simulator />
    </div>
  );
};

EditPart.propTypes = {

};

export default EditPart;
