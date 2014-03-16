
Template.devContractNew.rendered = function(){
  console.log(this.data);
  editor = CodeMirror(this.find('#editor'),{
    lineNumbers: true,
    value: this.data.code || ''
  });
}

Template.devContractNew.events = {

  "submit": function(e,t){
    e.preventDefault();
    
    var name = t.find('input[name=name]').value;
    var desc = t.find('input[name=desc]').value;
    var code = editor.getValue();
    
    Meteor.call('deployCode', {
      name:name,
      desc: desc,
      code: code
    }, function(err, succ){
      Router.go('devContract');
    });
  }
  
};
