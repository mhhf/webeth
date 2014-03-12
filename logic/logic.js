// Tests if a string is a hex
isHex = function(string){
  return !!string.match(/^(0x)?[0-9a-fA-F]+$/);
}
// Test if given hexString could be parsed as a UTF8 String
isString = function( s ){
  if( !( s.length > 0 && s % 2 == 0 ) )
    return false;
  
  for(var i=0; i<s.length; i+=2 ) {
    var a = parseInt(s.slice(i,i+2),16);
    if( ( a < 20 && a != 0 ) || a > 126 ) return false;
  }
  
  return true;
}
hexToString = function( s ){
  return CryptoJs.enc.Utf8.stringify(CryptoJs.enc.Hex.parse(s));
}
clearHex = function(hex){
  return hex.match(/^(0x)?([0-9a-fA-F]+)$/)[2];
}

