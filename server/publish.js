Meteor.publish('contract', function( _id ){
  return Contracts.find({_id: _id});
});

Meteor.publish('block', function( _id ){
  return Blocks.find({_id: _id});
});

Meteor.publish('blocks', function( limit ){
  return Blocks.find({}, { limit: limit, sort: { number: -1 } });
  // return Blocks.find({});
});

Meteor.publish('contracts', function( limit ){
  return Contracts.find({}, { limit: limit });
  // return Blocks.find({});
});

Meteor.publish('transactions', function(){
  return Transactions.find();
});

Meteor.publish('code', function(_id){
  var o = _id? {_id:_id}:{};
  return Code.find(o);
});
