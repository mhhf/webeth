Template.blocks.blocks = function(){
  return Blocks.find({},{ sort: { number: -1 }});
}
Template.blocks.getTime = function(){
  var date = new Date(this.timestamp*1000);
  var dateStr = dateFormat(date); 
  return dateStr;
}

scrollHandler = function(){
 var threshold, target = $('#showMore');
    if (!target.length) return;
 
    threshold = $(window).scrollTop() + $(window).height() - target.height();
 
    if (target.offset().top < threshold) { 
      // Increase limit by 10 if there are more blocks
      var cLimit;
      if( ( cLimit = Session.get('blockLimit') )-10 <= Blocks.find().count() ) 
        Session.set('blockLimit',cLimit + 10 );
    }
  
}

$(window).scroll(scrollHandler);

