$(function() {
 //browser events
 $(window).resize(function() {

  if($(window).width() > 1000) {
   $('body').css({
    background: 'red'
   })
  } else if($(window).width() > 700) {
   $('body').css({
    background: 'blue'
   })
  } else {
   $('body').css({
    background: 'yellow'
  })
 }
  // console.log($(window).width)
 })

 // event handler
 $(document).on('click', '.box1', function() {
  $('body').css({
   background: 'yellow'
  })
 })

 // event object
 preventDefault();
 stopPropagation();

 // form events 
 $('.select-options').change(function() {
  alert('you changed me')
 })

 $('.myName').change(function(event) {
  $('.box1').html('<h1>' + event.target.value + '</h1>')
 }).focusin(function() {
  $('.body2').css({
   background: 'orange'
  })
 }).focusout(function() {

 })


 // create 2 buttons 

 // one button when clicked console.log your name 
 $('.button1').on( "click", function() {
  console.log('Ethan Beauregard');
});

 // another button that when hover counts from 1 to 25 
 $('.button2').on( "mouseover", function() {
  var i = 1;
  while(i <= 26) {
    console.log(i)

    i++
  }
});
 // and build a square that when the mouse enters the background become red 



 // DOM manipulation

 // adding and removing classes
 $('div').addClass('active')

 if($('div').hasClass('active')) {
   console.log('this div element has been activated now!')
 } else {
   console.log('this element has not be activated')
 }

 $('.button').on('click', function() {
   $('div').toggleClass('active')
 })

 // clonning elements 
 $('.button').on('click', function() {
   $('.box1:first').clone().appendTo('body')
 })

 // wrapping elements 
 $('.button').on('click', function() {
  $('.box1').wrapInner('<div class="active"></div>')
 })
 $('.button').on('click', function() {
  $('.box1').unwrap('.active')
 })

 // inserting inside of elements 
 $('.button').on('click', function() {
   console.log($('.firstP:first').text())
  $('.firstP:first').text('This is the new text!')
 })

 // inserting before and after an element
 $('.button').on('click', function() {
  $('<p>Hello there, this is a new message</p>').insertAfter('.firstP:first')
 })

 // removing an element
 $('.button').on('click', function() {
  $('div').remove('.box')
 })

 // replacing an element
 $('.button').on('click', function() {
  $('div').replaceWith('<h2>This is the new element for the click button</h2>')
 })

 // attributes and values 
 $('.button').on('click', function() {
  $('div img').removeAttr('src')
 })

 $('.button').on('click', function() {
  console.log($('div img').val('src'))
 })

 // style properties
 if($('.box2').width() > 200) {
   $('.box2').css({
     background: 'blue',
     paddingLeft: '50px'
   })
 }

 // traversing
 $('.box1').children().css({
   background: 'red',
   padding: '20px',
   marginRight: '1.8rem'
 })

 $('p').each(function() {
   console.log(this)
   $(this).css({
     color: '#fff'
   })
 })

 // AJAX

 // GET request
 $('.button1').on('click', function() {
  var request = $.ajax({
    url: "http://jsonplaceholder.typicode.com/posts",
    method: "GET",
    // data: { id : menuId },
    // dataType: "html"
  });
   
  request.done(function( data ) {
    console.log(data)
  });
   
  request.fail(function( jqXHR, textStatus, error ) {
    alert( "Request failed: " + textStatus + error);
  });
 })

 // POST request
 $('.button1').on('click', function() {
  var request = $.ajax({
    url: "http://jsonplaceholder.typicode.com/posts",
    method: "POST",
    data: { userId: 20 },
    // dataType: "html"
  });
   
  request.done(function( data ) {
    console.log(data)
  });
   
  request.fail(function( jqXHR, textStatus, error ) {
    alert( "Request failed: " + textStatus + error);
  });
 })
 // PUT request
 // DELETE request

});