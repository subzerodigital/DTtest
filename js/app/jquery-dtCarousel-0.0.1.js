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
	//TODO:more custom settings
	var defaults = {
		autoPlay:false,
		interval:5000,
		fadeSpeed:500
	}
	
	//constructor
	var dtCarousel = function($el,options){
		
		this.$el = $el;
		this.options = $.extend(defaults,options);
		
		this.$buttons = this.$el.find(".control li a");
		this.$slides = this.$el.find(".slides .slide");
		
		this.currentSlide = 0;
		this.totalSlide = this.$slides.length; 
		
		this.init();
	}
	
	dtCarousel.prototype = {
		init:function(){
			
			//init start states, 1st slide is active by default
			this.$buttons.first().addClass("active");
			this.$slides.first().addClass("current");
			
			//bind click event
			this.bind();
			//auto play
			if(this.options.autoPlay){
				this.startTimer();
			}
		},
		
		bind:function(){
			var self = this;
			
			self.$buttons.click(function(e){
				
				e.preventDefault();
				
				//get the index of the clicked button
				var index = self.$buttons.index(this);
				
				//cache current slide index
				self.currentSlide = index;
				
				//if click on the current active button, do nothing
				if($(this).hasClass("active")){
					return false;
				}
				
				//if auto play, on click stop the timer
				if(self.options.autoPlay){
					self.stopTimer();
				}
				
				//change button states
				self.$buttons.removeClass("active");
				$(this).addClass("active");
				//
				self.fadeInSlide(index);
				
				if(self.options.autoPlay){
					self.startTimer();
				}
			});
			
		},
		
		fadeInSlide:function(index){
			
			var $currentSlide = this.$el.find(".slide.current");			
			
			var $nextSlide= this.$slides.eq(index);
			
			$currentSlide.removeClass("current").addClass('previous');
			
			$nextSlide.css({opacity:0.0}).addClass("current").animate({opacity:1.0},500,function(){
				$currentSlide.removeClass("previous");
			});
		},
		
		startTimer:function(){
			var self = this;
			self.carouselTimer = setInterval(function(){
				self.currentSlide+=1;
				//loop the slides
				if(self.currentSlide>=self.totalSlide){
					self.currentSlide = 0;
				}
				
				self.$buttons.eq(self.currentSlide).trigger("click");
				
			},self.options.interval);
		},
		
		stopTimer:function(){
			var self = this;
			window.clearInterval(self.carouselTimer);
		}
		
	}
	
	$.fn.dtCarousel = function(options){
		return this.each(function(){
			$(this).data("dtCarousel",new dtCarousel($(this),options));
		});
	}
	
	
})(window);