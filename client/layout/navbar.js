Template.navBar.events = {
  "click a[name=logout]": function(e,t){
    e.preventDefault();
    
    Meteor.logout();
  }
}


Template.navBar.isActive = function( name ){
  return (Router.current() && Router.current().path.indexOf(name)==0)?'active':'';
};


