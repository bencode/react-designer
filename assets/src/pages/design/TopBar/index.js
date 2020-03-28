import React from 'react';
import $t from 'prop-types';
import GithubIcon from '@/images/github.svg';
import style from './style.less';

const TopBar = () => {
  return (
    <div className={style.topBar}>
      <div className="main part">
      </div>
      <a className="github" href="https://github.com/lesscap/pageviver">
        <GithubIcon />
      </a>
    </div>
  );
};

TopBar.propTypes = {

};

export default TopBar;
