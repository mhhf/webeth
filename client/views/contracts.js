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
