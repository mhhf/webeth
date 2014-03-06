Meteor.publish('blocks', function( limit ){
  return Blocks.find({}, { limit: limit, sort: { number: -1 } });
  // return Blocks.find({});
});

Meteor.publish('contracts', function( limit ){
  return Contracts.find({}, { limit: limit });
  // return Blocks.find({});
});
