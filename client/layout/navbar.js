Template.navBar.events = {
  "click a[name=logout]": function(e,t){
    e.preventDefault();
    
    Meteor.logout();
  },
  "submit": function(e,t){
    e.preventDefault();
    var search = t.find('input[name=search]').value;
    
    Meteor.call('search',{
      req: search
    }, function(err, resp){
      if(!resp) return false;
      
      switch( resp.found ) {
        case 'block':
          Router.go('/block/'+search);
          break;
        case 'contract':
          Router.go('/contract/'+search);
          break;
      }
      
    });
    
  }
}


Template.navBar.isActive = function( name ){
  return (Router.current() && Router.current().path.indexOf(name)==0)?'active':'';
};


