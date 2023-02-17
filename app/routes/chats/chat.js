import Route from '@ember/routing/route';

export default class ChatsChatRoute extends Route {
  async model(params) {
    const { id } = params;
    console.log(id);
    console.log(params);
    let response = await fetch(`/data/chat.json`);
    let data = await response.json();
    let chat = data.find((chat) => chat.id === id);
    console.log(chat);
    return chat;
  }
}
