Meteor.publish('blocks', function( limit ){
  return Blocks.find({}, { limit: limit });
  // return Blocks.find({});
});

