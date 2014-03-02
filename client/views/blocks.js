Template.blocks.blocks = function(){
  return Blocks.find();
}
Template.blocks.getTime = function(){
  var date = new Date(this.timestamp*1000);
  var dateStr = dateFormat(date); 
  return dateStr;
}
