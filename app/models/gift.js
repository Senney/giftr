import DS from 'ember-data';

export default DS.Model.extend({
    recipient: DS.attr(),
    creator: DS.attr(),
    participants: DS.hasMany('str'),
    items: DS.hasMany('gift-item'),
    complete: DS.attr('boolean'),
    create_date: DS.attr('date', {
        defaultValue() { return new Date(); }
    }),
});
