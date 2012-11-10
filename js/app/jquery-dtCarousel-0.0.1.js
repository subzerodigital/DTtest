/***************************************************
 * A very simple cross fade carousel for DT testing
 * author:Yinan Yang 
 * www.yinanyang.com
 *
 * dependency: jQuery 
 * binding class: fn-carousel 
 * License: none (public domain)
 * 
 * TODO:
 ***************************************************/

(function(window,undefined){
	
	"use strict";
	
	//cache jQuery
	var $ = window.jQuery;
	
	//settings
	var defaults = {
		autoPlay:false	
	}
	
	//constructor
	var dtCarousel = function($el,options){
		
		this.$el = $el;
		this.options = $.extend(defaults,options);
		
		this.$buttons = this.$el.find(".control li a");
		this.$slides = this.$el.find(".slides .slide");
		
		
		
		this.init();
	}
	
	dtCarousel.prototype = {
		init:function(){
			
			var self = this;
			self.$buttons.click(function(e){
				e.preventDefault();
				//get the index of the clicked button
				var index = self.$buttons.index(this);
				self.fadeInSlide(index);
			});
		},
		fadeInSlide:function(index){
			
			var $currentSlide = this.$el.find(".slide.current");
			var $nextSlide= this.$slides.eq(index);
			
			$currentSlide.removeClass("current").addClass('previous');
			
			$nextSlide.css({opacity:0.0}).addClass("current").animate({opacity:1.0},500,function(){
				$currentSlide.removeClass("previous");
			});
		}
		
	}
	
	$.fn.dtCarousel = function(options){
		return this.each(function(){
			$(this).data("dtCarousel",new dtCarousel($(this),options));
		});
	}
	
	
})(window);