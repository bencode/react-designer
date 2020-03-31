import React from 'react';
import { Select, Number } from '@/form';
import '@/form/style.less';
import style from './style.less';


const optionsFrom = list => list.map(value => ({ label: value, value }));

const displayOptions = optionsFrom([
  'block',
  'flex',
  'inline-flex',
  'inline',
  'inline-block'
]);

const unitOptions = optionsFrom([
  'px', 'rm', 'rem', '%'
]);


const Form = () => {
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
              <Select options={unitOptions} />
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
