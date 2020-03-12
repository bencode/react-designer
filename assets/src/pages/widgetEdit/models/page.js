import { sleep } from '@/utils/lang';


export default {
  name: 'page',

  state: {
    count: 0
  },

  effects: {
    * mount(action, { put, select }) {
      while (true) {
        yield sleep(1000);
        const last = yield select(state => state.count);
        yield put({ type: 'save', count: last + 1 });
      }
    }
  }
};

