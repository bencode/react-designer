import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Workbench } from '@/workbench';
import EditPart from './EditPart';
import Footer from './Footer';
import style from './style.less';


const Page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'page/mount' });
  }, []);

  const parts = [
    {
      region: 'main',
      component: () => <EditPart />
    }
  ];

  return (
    <div className={style.page}>
      <Workbench className={style.workbench} parts={parts} />
      <Footer />
    </div>
  );
};


export default Page;
