var codeMap = {
  "0"  : "STOP"           ,
  "1"  : "ADD"            ,
  "2"  : "MUL"            ,
  "3"  : "SUB"            ,
  "4"  : "DIV"            ,
  "5"  : "SDIV"           ,
  "6"  : "MOD"            ,
  "7"  : "SMOD"           ,
  "8"  : "EXP"            ,
  "9"  : "NEG"            ,
  "10" : "LT"             ,
  "11" : "LE"             ,
  "12" : "GT"             ,
  "13" : "GE"             ,
  "14" : "EQ"             ,
  "15" : "NOT"            ,
  "16" : "MYADDRESS"      ,
  "17" : "TXSENDER"       ,
  "18" : "TXVALUE"        ,
  "19" : "TXDATAN"        ,
  "20" : "TXDATA"         ,
  "21" : "BLK_PREVHASH"   ,
  "22" : "BLK_COINBASE"   ,
  "23" : "BLK_TIMESTAMP"  ,
  "24" : "BLK_NUMBER"     ,
  "25" : "BLK_DIFFICULTY" ,
  "26" : "BLK_NONCE"      ,
  "27" : "BASEFEE"        ,
  "32" : "SHA256"         ,
  "33" : "RIPEMD160"      ,
  "34" : "ECMUL"          ,
  "35" : "ECADD"          ,
  "36" : "ECSIGN"         ,
  "37" : "ECRECOVER"      ,
  "38" : "ECVALID"        ,
  "39" : "SHA3"           ,
  "48" : "PUSH"           ,
  "49" : "POP"            ,
  "50" : "DUP"            ,
  "51" : "SWAP"           ,
  "52" : "MLOAD"          ,
  "53" : "MSTORE"         ,
  "54" : "SLOAD"          ,
  "55" : "SSTORE"         ,
  "56" : "JMP"            ,
  "57" : "JMPI"           ,
  "58" : "IND"            ,
  "59" : "EXTRO"          ,
  "60" : "BALANCE"        ,
  "61" : "MKTX"           ,
  "63" : "SUICIDE"
}

intToInstruction = function( code ){
  return codeMap[code];
}

// simple number formating to sabzo, finney & ether
// [TODO] - make a complex number formatter
formatNumber = function( number ){
var sabzo =  number.slice(0,-12) 
if( sabzo.match(/000$/) ) {
  var finney = sabzo.slice(0,-3);
  if ( finney.match(/000$/) )
    return finney.slice(0,-3)+" ether";
  else
    return finney+" finney"
} else
  if(sabzo.length > 0 )
    return sabzo + " sabzo";
  else
    return '<1 sabzo';
}
