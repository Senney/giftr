import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
    name() { return faker.name.findName(); },
    cost() { return faker.commerce.price(); },
    gift: 1 //TODO: Think of a better way to spoof ID. Either sideload or pull from db somehow.
});
