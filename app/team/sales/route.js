import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        id: 1,
        name: 'McLovin',
        position: 'Senior Enforcer',
      },
      {
        id: 2,
        name: 'Gavin',
        position: 'Junior Abuser',
      },
      {
        id: 3,
        name: 'Loco',
        position: 'The Odd One',
      },
    ];
  }
});
