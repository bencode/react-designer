import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Workbench } from '@/workbench';
import Library from './Library';
import EditPart from './EditPart';
import Form from './Form';
import Footer from './Footer';
import style from './style.less';


const Page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'page/mount' });
  }, []);

  const parts = [
    {
      region: 'left',
      component: () => <Library />
    },
    {
      region: 'main',
      component: () => <EditPart />
    },
    {
      region: 'right',
      component: () => <Form />
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
