import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    cost: DS.attr(),
    gift: DS.belongsTo('gift')
});
