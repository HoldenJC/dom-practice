$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow</li>");
    $("ul#dog").prepend("<li>Bark</li>");
    $('ul#cat').children('li').first().css('background-color', '#dc3545');
    $('ul#cat').children('li').first().click(function() {
      $(this).after('<img src="https://bit.ly/2Me3e3X" class="rounded img-fluid">');
      $("ul img").click(function(){
        $(this).remove();
      });
     });
    $('ul#dog').children('li').first().click(function() {
      $(this).after('<img src="https://bit.ly/2HTTgAV" class="rounded img-fluid">');
      $("ul img").click(function(){
        $(this).remove();
      });
    });
    // $('ul#dog').children('li').first().click(function() {
    // alert('hi');
    // });
  });

  $("button#bark").click(function() {
    $("ul#cat").prepend("<li>Meow</li>");
    $("ul#dog").prepend("<li>Bark</li>");
    $('ul#dog').children('li').first().css('background-color', '#dc3545');
    $('ul#dog').children('li').first().click(function() {
      $(this).after('<img src="https://bit.ly/2HTTgAV" class="rounded img-fluid">');
      $("ul img").click(function(){
        $(this).remove();
      });
    });
    $('ul#cat').children('li').first().click(function() {
      $(this).after('<img src="https://bit.ly/2Me3e3X" class="rounded img-fluid">');
      $("ul img").click(function(){
        $(this).remove();
      });
    });
    // $('ul#dog').children('li').first().click(function() {
    // alert('hi');
    // });
    // $('ul#cat').children('li').first().click(function() {
    // alert('hi');
    // });
  });

});
