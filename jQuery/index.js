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
});