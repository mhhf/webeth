Template.contract.getCode = function(memory ){
  var codeString = "";
  _.each( memory, function(v,k,i){
    codeString += intToInstruction(v) + " "
  });
  return codeString;
}


Template.contract.getMemory = function(mem){
  var r = _.map(mem, function(v,k){
    return {k:k,v:v};
  });
  // console.log(r);
  // var codeString = "";
  // _.each( memory, function(v,k,i){
  //   codeString += intToInstruction(v) + " "
  // });
  return r;
}

Template.contract.filter = function( v ){
  if(isString(v)) return hexToString(v);
  return v;
}
