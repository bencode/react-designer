import React from 'react';
import $t from 'prop-types';
import style from './style.less';

const Form = () => {
  return (
    <div className={style.form}>
      <section className={style.section}>
        <header>Layout</header>
        <div className="body">
          <div className="field">
            <label>display</label>
            <div className="control">
              <select>
                <option>block</option>
                <option>inline</option>
                <option>inline-block</option>
                <option>flex</option>
                <option>inline-flex</option>
              </select>
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
              <input type="number" />
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
