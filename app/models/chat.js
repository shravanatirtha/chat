import Model from '@ember-data/model';

export default class ChatModel extends Model {
  @attr id;
  @attr name;
  @attr email;
}
