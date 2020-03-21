let guid = 1;

const div = tagFor('div');
const span = tagFor('span');
// const img = tagFor('img');
const ul = tagFor('ul');
const li = tagFor('li');


export default {
  name: 'page',

  state: {
    count: 0
  },

  effects: {
    * mount(action, { put }) {
      const widget = {
        nodes: [
          div({
            styles: {
              display: 'flex',
              width: '100px',
              height: '50px',
              border: '1px solid #ddd',
              background: '#dedede'
            },
            children: [
              text('Hello'),
              text('React')
            ]
          }),

          div({
            styles: {},
            children: [
              span({
                styles: {
                  fontSize: '14px',
                  lineHeight: '1.4'
                },
                children: text('Hello')
              }),

              span({
                styles: {
                  fontSize: '18px',
                  color: '#f00'
                },
                children: text('World')
              })
            ]
          }),

          text('PageViver'),

          ul({
            children: [
              li({
                children: [
                  text('React'),
                  div({
                    children: [
                      text('Hello'),
                      text('OK')
                    ]
                  })
                ]
              }),

              li({
                children: text('Online')
              }),

              li({
                styles: {
                  border: '1px dashed #0ff',
                  width: '100px',
                  fontSize: '24px'
                },
                children: text('Editor')
              }),

              li({
                styles: {
                  color: '#00f'
                },
                children: text('Visual')
              }),

              li({
                children: text('Weaver')
              })
            ]
          })
        ]
      };
      yield put({ type: 'save', widget });
    }
  }
};


function text(body) {
  return { id: guid++, type: 'text', body };
}

function tagFor(tag) {
  return props => ({ id: guid++, type: 'element', tag, ...props });
}

