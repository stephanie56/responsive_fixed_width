$(document).ready(function(){

/** add menu btn **/
$('#logo_banner').append("<button id='mobile_nav' class='show_on_mobile'>Menu</button>");

$('#mobile_nav').click(function(){
	if($('#dropdown_menu').css('visibility')==='hidden'){
		$('#dropdown_menu').css('visibility', 'visible');
	}
	else {
		$('#dropdown_menu').css('visibility', 'hidden');
	}
});

/** update footer copyright year **/
var d = new Date();
var cpYear = d.getFullYear();
$('#cp_yr').text(cpYear);

///** holiday message **/
//var holidayMessage = "Please note that our office will be closed during Statutory holidays on January 2nd.";
//
//showNotificationBar(holidayMessage);

}); // end of document.ready


//function showNotificationBar(message, duration, bgColor, txtColor, height) {
//
//    /*set default values*/
//    duration = typeof duration !== 'undefined' ? duration : 5500;
//    bgColor = typeof bgColor !== 'undefined' ? bgColor : "#F4E0E1";
//    txtColor = typeof txtColor !== 'undefined' ? txtColor : "#A42732";
//    height = typeof height !== 'undefined' ? height : 40;
//    /*create the notification bar div if it doesn't exist*/
//    if ($('#notification-bar').size() == 0) {
//        var HTMLmessage = "<div class='notification-message' style='text-align:center; line-height: " + height + "px;'> " + message + " </div>";
//        $('body').prepend("<div id='notification-bar' style='display:none; width:100%; height:" + height + "px; background-color: " + bgColor + "; position: fixed; z-index: 100; color: " + txtColor + ";border-bottom: 1px solid " + txtColor + ";'>" + HTMLmessage + "</div>");
//    }
//    /*animate the bar*/
//    $('#notification-bar').slideDown(function() {
//        setTimeout(function() {
//            $('#notification-bar').slideUp(function() {});
//        }, duration);
//    });
//}
