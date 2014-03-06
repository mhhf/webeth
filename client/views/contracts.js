Template.contracts.contracts = function(){
  return Contracts.find();
}

Template.contracts.getMemory = function(){
  var codeString = "";
  _.each(this.memory, function(v,k,i){
    codeString += intToInstruction(v) + " "
  });
  return codeString;
}

// [TODO] - export to a custom handlebars helper
Template.contracts.getBalance = function(){
  return formatNumber(this.balance);
}

scrollHandler = function(){
 var threshold, target = $('#showMore');
    if (!target.length) return;
 
    threshold = $(window).scrollTop() + $(window).height() - target.height();
 
    if (target.offset().top < threshold) { 
      // Increase limit by 10 if there are more blocks
      var cLimit;
      if( ( cLimit = Session.get('contractLimit') )-10 <= Contracts.find().count() ) 
        Session.set('contractLimit',cLimit + 10 );
    }
  
}

$(window).scroll(scrollHandler);

