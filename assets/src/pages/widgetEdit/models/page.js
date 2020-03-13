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
            styles: {
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
                styles: {
                  fontSize: '14px',
                  lineHeight: '1.4'
                },
                children: 'Hello'
              },
              {
                id: 3,
                type: 'span',
                styles: {
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

