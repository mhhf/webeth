Template.addCmi.events = {
  "submit": function(e,t){
    e.preventDefault();
    
    var cname = t.find('#cname').value;
    var caddress = t.find('#caddress').value;
    var curl = t.find('#curl').value;
    
    console.log(cname, caddress, curl);
    Meteor.call('addCmi', {
      name:cname,
      address: caddress,
      url:curl
    })
  }
}
