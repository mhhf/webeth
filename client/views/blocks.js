Template.blocks.blocks = function(){
  return Blocks.find({},{ sort: { number: -1 }});
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

Template.blocks.events = {
  "click tr": function(e,t){
    console.log(e);
  }
}
