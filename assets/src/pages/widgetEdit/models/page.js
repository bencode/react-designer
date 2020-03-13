export default {
  name: 'page',

  state: {
    count: 0
  },

  effects: {
    * mount(action, { put }) {
      const widget = {
        elements: [
          {
            id: 1,
            type: 'div',
            props: {
              display: 'flex',
              width: '100px',
              height: '50px',
              border: '1px solid #ddd',
              background: '#dedede'
            },
            children: [
              {
                id: 2,
                type: 'span',
                props: {
                  fontSize: '14px',
                  lineHeight: '1.4'
                },
                children: 'Hello'
              },
              {
                id: 3,
                type: 'span',
                props: {
                  fontSize: '18px',
                  color: '#f00'
                },
                children: 'World'
              }
            ]
          }
        ]
      };
      yield put({ type: 'save', widget });
    }
  }
};

