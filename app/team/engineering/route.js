import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        id: 1,
        name: 'Dylon',
        position: 'Best Rapper in the World',
      },
      {
        id: 2,
        name: 'Dylon',
        position: 'Best Rapper in the World',
      },
      {
        id: 3,
        name: 'Dylon',
        position: 'Best Rapper in the World',
      },
    ];
  }
});
