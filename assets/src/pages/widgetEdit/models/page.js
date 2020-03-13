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
          },
          'PageViver',
          {
            id: 4,
            type: 'ul',
            children: [
              {
                id: 5,
                type: 'li',
                children: 'React'
              },
              {
                id: 6,
                type: 'li',
                children: 'Online'
              },
              {
                id: 7,
                type: 'li',
                children: 'Editor'
              },
              {
                id: 8,
                type: 'li',
                styles: {
                  color: '#00f'
                },
                children: 'Visual'
              },
              {
                id: 9,
                type: 'li',
                children: 'Weaver'
              }
            ]
          }
        ]
      };
      yield put({ type: 'save', widget });
    }
  }
};

