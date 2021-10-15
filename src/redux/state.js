const state = {
  ProfilePage: {
    posts: [
      { id: 1, text: 'first comment', likeCount: 2 },
      { id: 2, text: 'second comment',likeCount: 12 },
    ],
    newPostValue: '33',
  },
  MessagesPage: {
    dialogs: [
      { id: 1, name: 'Vasya' },
      { id: 2, name: 'Kolya' },
      { id: 3, name: 'Petya' },
      { id: 4, name: 'Sergey'},
      { id: 5, name: 'Ivan' },
    ],
    messages: [
      { id: 1, message: 'Привет как дела?', name: 'Vasya' },
      { id: 2, message: 'Нормально', name: 'Me' },
      { id: 3, message: 'Нормально', name: 'Me' },
    ],
  }
};

export default state;
