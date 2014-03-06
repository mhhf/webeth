Template.login.events = {
  "submit" : function(e,t){
    e.preventDefault();
    
    var username = t.find('input[name=username]').value;
    var password = t.find('input[name=password]').value;
    
    Meteor.loginWithPassword( username, password, function( err, succ ){
      if(!err)
        Router.go('home');
      else
        $('#wrongPW').fadeIn();
    });
  }
}
