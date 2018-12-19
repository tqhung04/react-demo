$(document).ready(function() {
  // $('#summernote').summernote('editor.insertText', 'hello world');
  //
  // // var range = $('#summernote').summernote('createRange');
  // // console.log(range);
  // $('#summernote').summernote('saveRange');
  // // move cursor and select another
  // $('#summernote').summernote('restoreRange');
  // $('#summernote').summernote('restoreRange');
  // $('#summernote').summernote({
  //   callbacks: {
  //     onFocus: function(e) {
  //       console.log(e)
  //     },
  //     onBlur: function(e) {
  //       console.log(e)
  //     },
  //     onChange: function(e) {
  //     }
  //   }
  // })
  //
  // $('#summernote').summernote('saveRange');
  // $('#summernote').summernote('restoreRange');
  // $('#summernote').summernote('editor.saveRange');

  // Editor loses selected range (e.g after blur)

  // $('#summernote').summernote('editor.restoreRange');
  // $('#summernote').summernote('editor.focus');
  $('#summernote').summernote('code', 'AAAAAAA');

  $("#hell").on("click", function() {
    $('#summernote').summernote('code', 'This text should appear at the cursor');
  })
});
