/**
 * @author YoufuLi
 */
$(document).ready(function(){
	$('.select_options').hide(); //初始ul隐藏
	$('.select_box span').hover(function(){ //鼠标移动函数
		$(this).parent().find('ul.select_options').slideDown();//找到ul.select_options显示
		$(this).parent().find('li').hover(function(){
			$(this).addClass('hover')
		},function(){
			$(this).removeClass('hover')}); //li的hover效果
		$(this).parent().hover(function(){},function(){
			$(this).parent().find("ul.select_options").slideUp();});
	},function(){});
});