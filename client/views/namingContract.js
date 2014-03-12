Template.newName.events = {
  "submit" : function(e,t){
    e.preventDefault();
    
    var name = t.find('input[name=name]').value;
    var hash = t.find('input[name=hash]').value;
    
    // [TODO] - alert
    if( name.length>32 || hash.length > 64 ) return false;
    
    
    var nameHex = CryptoJs.enc.Hex.stringify(CryptoJs.enc.Utf8.parse(name));
    
    Meteor.call('addNewName', {
      name: nameHex,
      value: hash
    }, function(err, ret){
      if(ret) Router.go('namingContract');
      else bootbox.alert('Something went wrong!');
    }
    );
  }
}

Template.namingContract.events= {
  "submit": function(e,t){
    e.preventDefault();
    var val = t.find('input[name=lookup]').value;
    var valHex = CryptoJs.enc.Hex.stringify(CryptoJs.enc.Utf8.parse(val));
    
    Meteor.call('getName',valHex.toUpperCase(), function(err, resp){
      var s = resp;
      if(isString(resp)) s = hexToString(resp) 
      bootbox.alert('FoundName: '+ s);
    });
  }
}
