import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        id: 1,
        name: 'Betty Squaker',
        position: 'Lead Lady',
      },
      {
        id: 2,
        name: 'Michello Obama',
        position: 'Second Lady',
      },
      {
        id: 3,
        name: 'Dylon',
        position: 'Best Rapper in the World',
      },
    ];
  }
});
