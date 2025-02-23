$(function () {
    $(".toggle-password").click(function () {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    $('.packgeCheck input').on('change', function () {
        if ($(this).is(":checked")) {
            $(this).val('Premium');
            $(this).next().text('Premium');
        } else {
            $(this).val('Normal');
            $(this).next().text('Normal');
        }


    });

    $('.vertical-tree ul').hide();
    $('.vertical-tree>ul').show();
    $('.vertical-tree ul.active').show();
    $('.vertical-tree li').on('click', function (e) {
        var children = $(this).find('> ul');
        if (children.is(":visible")) children.hide('fast').removeClass('active');
        else children.show('fast').addClass('active');
        e.stopPropagation();
    });
    $('.toggle_btn').on('click', function (e) {
        $('.main-menu').toggle();
        $('.main-menu').toggleClass('expanded');
        var children = $(this).find('> ul');
        if (children.is(":visible")) children.hide('fast').removeClass('active');
        else children.show('fast').addClass('active');
        e.stopPropagation();
    });


    // mobile filter hide show
    
    if( navigator.userAgent.match(/Android/i)
     || navigator.userAgent.match(/webOS/i)
     || navigator.userAgent.match(/iPhone/i)
     || navigator.userAgent.match(/BlackBerry/i)
     || navigator.userAgent.match(/Windows Phone/i)
     ){
    
    $('.mobile_filter').click(function(){
        $('.filters').addClass('d-flex');
        $('.compagin__filter__inner').addClass('d-flex');
    });
    $('.btn_done').click(function(){
        $('.filters').removeClass('d-flex');
        $('.compagin__filter__inner').removeClass('d-flex');
    });
    $('.filter_popupIcon').click(function(){
        $('.filters').removeClass('d-flex'); 
        $('.compagin__filter__inner').removeClass('d-flex'); 
    });
    
};


if( navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
){


    // chat hide show
    $('.chat_row__wrapp').click(function() {
        $('.chat_details').show();
        $('.chat_inner').hide();
        $('.create_message').hide();
        $('.mobile_back').show();
     });
     $('.mobile_back').click(function() {
        $('.chat_details').hide();
        $('.chat_inner').show();
        $('.create_message').show();
        $(this).hide();
     });



 // participate modal
  $("#backbutton").hide();      
// });
$('.hoti_modal').click(function(){
   $(".campaign").hide();
   $('#back-text').text('Participate');
  $("#backbutton").show();
  $('#participate').addClass('mobile_modal');
  $('body').addClass('overflow_show');
  $('#convert').modal({
    dismissible: false});
});
$('#backbutton').click(function(){
  $(".campaign").show();
  $('#back-text').text('Campaigns');
  $("#backbutton").hide();
  $('#participate').removeClass('mobile_modal');
  $('#participate').modal('hide');
  $('body').removeClass('overflow_show');
});

// convert modal
$('#convert-id').click(function(){
    $(".wallet").hide();
    $('#back-text').text('Convert');
    $("#backbutton").show();
    $('#convert').addClass('mobile_modal');
    $('body').addClass('overflow_show');
    $('#convert').modal({
                 dismissible: false});
   
 });
 $('#package-id').click(function(){
     $(".wallet").hide();
   $('#back-text').text('Package');
   $("#backbutton").show();
   $('#buypackage').addClass('mobile_modal');
   $('body').addClass('overflow_show');
   $('#buypackage').modal({
                 dismissible: false});
 });
 $('#backbutton').click(function(){
   $(".wallet").show();
   $('#back-text').text('My Wallet');
   $("#backbutton").hide();
   $('#convert').removeClass('mobile_modal');
   $('#convert').modal('hide');
   $('#buypackage').removeClass('mobile_modal');
   $('#buypackage').modal('hide');
   $('body').removeClass('overflow_show');
 });
 
 }
 else
 {
  $("#backbutton").hide();
 };

    
})








