RequestQueue = new Meteor.Collection('requests');

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
  }
});
