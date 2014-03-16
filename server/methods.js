Meteor.methods({
  search: function( o ){
    // could be block
    if( o.req.length == 64 && Blocks.findOne({ _id: o.req }) )
      return {found:'block'};
// 
    // could be address || contracts
    if( o.req.length == 40 && Contracts.find({_id: o.req}) ) return {found: 'contract'};
    
  

    return false;
  },

  getName: function( name ){
    var contract = Contracts.findOne({_id:'56fed5c3a60387ee3833e5528efa0ab034217f73'});
    return _.find(contract.memory, function(v,k){
      return k == '0x'+name+fillZeros(64-name.length);
    });
  },

  // [TODO] - security and error checking
  deployCode: function( o ){
    
    var _id = Code.insert({
      code: o.code,
      desc: o.desc,
      name: o.name,
      date: new Date(),
      user: {
        name: Meteor.user().username,
        _id: Meteor.userId()
      },
      address: null,
      status: 'new'
    });
    
    return true;
  }

});

fillZeros = function(n){
  var ret='';
  for (var i=0; i < n; i++) {
    ret += '0';
  }
  return ret;
}
