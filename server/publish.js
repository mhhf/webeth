Meteor.publish('blocks', function( limit ){
  return Blocks.find({}, { limit: limit, sort: { number: -1 } });
  // return Blocks.find({});
});

