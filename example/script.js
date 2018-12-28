$(function() {
  $('div').load('../dist/sprite.svg', function () {
    $('body').append($(this).html())
  })
})
