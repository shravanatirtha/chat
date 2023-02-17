import Ember from 'ember';
import { run } from '@ember/runloop';
export default Ember.Service.extend(Ember.Evented, {
  socket: null,
  init() {
    this._super(...arguments);
    let socket = new SockJS('http://localhost:7000');
    socket.addEventListener(
      'message',
      run.bind(this, (event) => {
        this.trigger('messageReceived', event.data);
        console.log(event.data);
      })
    );
    this.set('socket', socket);
  },
  sendInfo(message) {
    this.set('socket').send(message);
  },
});
