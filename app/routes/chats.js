import Route from '@ember/routing/route';

export default class ChatsRoute extends Route {
  async model() {
    let response = await fetch('/data/chat.json');
    let data = await response.json();
    return data;
  }
}
