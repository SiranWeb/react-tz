import randomWait from '../utils/randomWait';
// Fake API

const newsData = [
  {
    id: 1,
    title: 'Fusce faucibus elit justo!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend eu mauris nec ultrices. Ut sit amet ex vitae arcu laoreet porta. Sed imperdiet dapibus sodales. Vestibulum dignissim vulputate fermentum. Sed nisi lectus, laoreet vel facilisis a, egestas consectetur odio. Fusce fringilla tortor sed nibh iaculis, sit amet sollicitudin sapien ultrices.'
  },
  {
    id: 2,
    title: 'Donec bibendum quam et neque feugiat mattis.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend eu mauris nec ultrices. Ut sit amet ex vitae arcu laoreet porta. Sed imperdiet dapibus sodales. Vestibulum dignissim vulputate fermentum. Sed nisi lectus, laoreet vel facilisis a, egestas consectetur odio. Fusce fringilla tortor sed nibh iaculis, sit amet sollicitudin sapien ultrices.'
  },
  {
    id: 3,
    title: 'Nulla facilisi. Sed consectetur...',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend eu mauris nec ultrices. Ut sit amet ex vitae arcu laoreet porta. Sed imperdiet dapibus sodales. Vestibulum dignissim vulputate fermentum. Sed nisi lectus, laoreet vel facilisis a, egestas consectetur odio. Fusce fringilla tortor sed nibh iaculis, sit amet sollicitudin sapien ultrices.'
  }
];

class NewsAPI {
  async getNews() {
    return await randomWait(() => newsData);
  }
}

const newsAPI = new NewsAPI();
export default newsAPI;