export default {
  get: jest.fn(url => {
    if (url === '/users') {
      return Promise.resolve({
        data: [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            address: {
              street: 'Kulas Light',
              suite: 'Apt. 556',
              city: 'Gwenborough',
              zipcode: '92998-3874',
              geo: {
                lat: '-37.3159',
                lng: '81.1496',
              },
            },
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
            company: {
              name: 'Romaguera-Crona',
              catchPhrase: 'Multi-layered client-server neural-net',
              bs: 'harness real-time e-markets',
            },
          },
        ],
      });
    }
  }),
  post: jest.fn(url => {
    if (url === '/something') {
      return Promise.resolve({
        data: 'data',
      });
    }
    if (url === '/something2') {
      return Promise.resolve({
        data: 'data2',
      });
    }
  }),
  create: jest.fn(function () {
    return this;
  }),
};
