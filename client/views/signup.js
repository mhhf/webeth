Template.signUp.events = {
  "submit" : function(e,t){
    e.preventDefault();
    
    var username = t.find('input[name=user]').value;
    var password = t.find('input[name=password]').value;
    var password2 = t.find('input[name=password2]').value;
    
    // Test if username is aviable
    // [TODO] - test on the fly
    
    // Test if password match
    if( password != password2 ) {
      feedback('password dont match!');
      return false;
    }
    
    // Test if password match
    if( typeof password != 'string' || password.length < 6 ) {
      feedback('invalid password, please choose another!');
      return false;
    }
    
    // [TODO] - export to the server with recaptcha
    Accounts.createUser({
      username: username,
      password: password
    }, function(err, succ){
      console.log(err, succ);
    });
  }
}
