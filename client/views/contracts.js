Template.contracts.contracts = function(){
  return Contracts.find();
}

Template.contracts.getMemory = function(){
  return JSON.stringify(this.memory);
}
