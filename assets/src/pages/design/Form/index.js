import React from 'react';
import $t from 'prop-types';
import { Select, Number } from '@/form';
import style from './style.less';


const Form = () => {
  const displayOptions = [
    'block',
    'flex',
    'inline-flex',
    'inline',
    'inline-block'
  ].map(value => ({ label: value }));

  return (
    <div className={style.form}>
      <section className={style.section}>
        <header>Layout</header>
        <div className="body">
          <div className="field">
            <label>display</label>
            <div className="control">
              <Select options={displayOptions} />
            </div>
          </div>
        </div>
      </section>
      <section className={style.section}>
        <header>Box Model</header>
        <div className="body">
          <div className="field">
            <label>width</label>
            <div className="control">
              <Number />
            </div>
          </div>
        </div>
      </section>
      <section className={style.section}>
        <header>Typography</header>
      </section>
      <section className={style.section}>
        <header>Visual</header>
      </section>
      <section className={style.section}>
        <header>Animation</header>
      </section>
      <section className={style.section}>
        <header>Misc</header>
      </section>
    </div>
  );
};

Form.propTypes = {

};

export default Form;
