Template.dev.rendered = function(){
  console.log(this,this.find('#editor'));
  editor = CodeMirror(this.find('#editor'),{
    lineNumbers: true
  });
}
