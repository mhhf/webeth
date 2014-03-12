RequestQueue = new Meteor.Collection('newnamerequest');

Meteor.methods({
  "addCmi": function(o){
    
    // [TODO] - check if address is a hash
    if( !(
           typeof o.name == "string" 
        && o.name.length<=32 
        && typeof o.address == "string"
        && o.address.length <= 32
        ) )
      return false;
    
    var req = "write:cmi "+o.name+" "+o.address+" "+o.url.slice(0,32)+ " "+o.url.slice(32,64);
    console.log(req);
    
    RequestQueue.insert({ timestamp: new Date(), request:req })
  },
  addNewName: function(o){
    if( !(
           typeof o.name == "string" 
        && o.name.length <= 64 
        && typeof o.value == "string"
        && o.value.length <= 64
        ) )
      return false;
    
    RequestQueue.insert({ 
      timestamp: new Date(),
      address: '56fed5c3a60387ee3833e5528efa0ab034217f73',
      name: o.name, 
      value: o.value
    });
    
    return true;
  }
});
