/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_accessibility_plugin_plugins_js_bootstrap_accessibility__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_accessibility_plugin_plugins_js_bootstrap_accessibility___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bootstrap_accessibility_plugin_plugins_js_bootstrap_accessibility__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_carousel__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_navigation__ = __webpack_require__(4);
/* eslint-disable */
/**
 * The PayPal Accessibility Plugin adds accessibility improvements over the top of Bootstrap
 * components. It is designed to work in the background. If you experience any quirks, please
 * take a look at its source code.
 */

/* eslint-enable */

// Define local components



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__components_carousel__["a" /* default */])();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__components_navigation__["a" /* default */])();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* eslint-disable */

/* eslint-enable */

/* harmony default export */ __webpack_exports__["a"] = (function () {
  // Carousel Documentation: https://paypal.github.io/bootstrap-accessibility-plugin/demo.html#carousel

  var $carousel = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.carousel');
  var $carouselPause = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#carousel-pause');
  var $carouselPlay = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('#carousel-play');

  $carousel.carousel({
    wrap: true,
    interval: 10000
  });

  $carouselPause.click(function () {
    $carousel.carousel('pause');
    $carouselPause.hide();
    $carouselPlay.show().focus();
  });

  $carouselPlay.click(function () {
    $carousel.carousel('cycle');
    $carouselPlay.hide();
    $carouselPause.show().focus();
  });
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* eslint-disable */

/* eslint-enable */

/* harmony default export */ __webpack_exports__["a"] = (function () {
  /**
   * Unbind the space bar handler that is added in the bootstrap-accessibility plugin,
   * the functionality is recreated in this component.
   *
   * See: bootstrap-accessibility.js, line 130 (ish)
   */
  __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).off('keydown.bs.dropdown.data-api', '[data-toggle=dropdown], [role=menu]', __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn.dropdown.Constructor.prototype.keydown);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
* Extends Bootstrap v3.1.1

* Copyright (c) <2014> eBay Software Foundation

* All rights reserved.

* Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

* Neither the name of eBay or any of its subsidiaries or affiliates nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ======================================================================== */

(function($) {
  "use strict";

  var uniqueId = function(prefix) {
      return (prefix || 'ui-id') + '-' + Math.floor((Math.random()*1000)+1)
  }

  // Alert Extension
  // ===============================

    $('.alert').attr('role', 'alert')
    $('.close').removeAttr('aria-hidden').wrapInner('<span aria-hidden="true"></span>').append('<span class="sr-only">Close</span>')

  // TOOLTIP Extension
  // ===============================

    var showTooltip =    $.fn.tooltip.Constructor.prototype.show
        , hideTooltip =    $.fn.tooltip.Constructor.prototype.hide

    $.fn.tooltip.Constructor.prototype.show = function () {
        showTooltip.apply(this, arguments)
        var $tip = this.tip()
            , tooltipID = $tip.attr('id') || uniqueId('ui-tooltip')
        $tip.attr({'role':'tooltip','id' : tooltipID})
        this.$element.attr('aria-describedby', tooltipID)
    }

    $.fn.tooltip.Constructor.prototype.hide = function () {
        hideTooltip.apply(this, arguments)
        removeMultiValAttributes(this.$element, 'aria-describedby', this.tip().attr('id'))
        return this
    }

  // Popover Extension
  // ===============================
    var showPopover =   $.fn.popover.Constructor.prototype.setContent
      , hideTPopover =   $.fn.popover.Constructor.prototype.hide

    $.fn.popover.Constructor.prototype.setContent = function(){
      showPopover.apply(this, arguments)
      var $tip = this.tip()
        , tooltipID = $tip.attr('id') || uniqueId('ui-tooltip')
      $tip.attr({'role':'alert','id' : tooltipID})
      this.$element.attr('aria-describedby', tooltipID)
      this.$element.focus()
    }
    $.fn.popover.Constructor.prototype.hide =  function(){
        hideTooltip.apply(this, arguments)
        removeMultiValAttributes(this.$element, 'aria-describedby', this.tip().attr('id'))
    }

  //Modal Extension
    $('.modal-dialog').attr( {'role' : 'document'})
    var modalhide =   $.fn.modal.Constructor.prototype.hide
    $.fn.modal.Constructor.prototype.hide = function(){
       var modalOpener = this.$element.parent().find('[data-target="#' + this.$element.attr('id') + '"]')
       modalhide.apply(this, arguments)
       modalOpener.focus()
    }

  // DROPDOWN Extension
  // ===============================

    var toggle   = '[data-toggle=dropdown]'
      , $par
      , firstItem
      , focusDelay = 200
      , menus = $(toggle).parent().find('ul').attr('role','menu')
      , lis = menus.find('li').attr('role','presentation')

    lis.find('a').attr({'role':'menuitem', 'tabIndex':'-1'})
    $(toggle).attr({ 'aria-haspopup':'true', 'aria-expanded': 'false'})

    $(toggle).parent().on('shown.bs.dropdown',function(e){
      $par = $(this)
      var $toggle = $par.find(toggle)
      $toggle.attr('aria-expanded','true')

      setTimeout(function(){
            firstItem = $('.dropdown-menu [role=menuitem]:visible', $par)[0]
            try{ firstItem.focus()} catch(ex) {}
      }, focusDelay)
    })

    $(toggle).parent().on('hidden.bs.dropdown',function(e){
      $par = $(this)
      var $toggle = $par.find(toggle)
      $toggle.attr('aria-expanded','false')
    })

    //Adding Space Key Behaviour, opens on spacebar
    $.fn.dropdown.Constructor.prototype.keydown = function (e) {
      var  $par
        , firstItem
      if (!/(32)/.test(e.keyCode)) return
        $par = $(this).parent()
        $(this).trigger ("click")
        e.preventDefault() && e.stopPropagation()
    }

    $(document)
      .on('focusout.dropdown.data-api', '.dropdown-menu', function(e){
        var $this = $(this)
                    , that = this
        setTimeout(function() {
         if(!$.contains(that, document.activeElement)){
          $this.parent().removeClass('open')
          $this.parent().find('[data-toggle=dropdown]').attr('aria-expanded','false')
         }
        }, 150)
       })
      .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu]' , $.fn.dropdown.Constructor.prototype.keydown)


  // Tab Extension
  // ===============================

    var $tablist = $('.nav-tabs')
        , $lis = $tablist.children('li')
        , $tabs = $tablist.find('[data-toggle="tab"], [data-toggle="pill"]')

    $tablist.attr('role', 'tablist')
    $lis.attr('role', 'presentation')
    $tabs.attr('role', 'tab')

    $tabs.each(function( index ) {
      var tabpanel = $($(this).attr('href'))
        , tab = $(this)
        , tabid = tab.attr('id') || uniqueId('ui-tab')

        tab.attr('id', tabid)

      if(tab.parent().hasClass('active')){
        tab.attr( { 'tabIndex' : '0', 'aria-expanded' : 'true', 'aria-selected' : 'true', 'aria-controls': tab.attr('href').substr(1) } )
        tabpanel.attr({ 'role' : 'tabpanel', 'tabIndex' : '0', 'aria-hidden' : 'false', 'aria-labelledby':tabid })
      }else{
        tab.attr( { 'tabIndex' : '-1', 'aria-expanded' : 'false', 'aria-selected' : 'false', 'aria-controls': tab.attr('href').substr(1) } )
        tabpanel.attr( { 'role' : 'tabpanel', 'tabIndex' : '-1', 'aria-hidden' : 'true', 'aria-labelledby':tabid } )
      }
    })

    $.fn.tab.Constructor.prototype.keydown = function (e) {
      var $this = $(this)
      , $items
      , $ul = $this.closest('ul[role=tablist] ')
      , index
      , k = e.which || e.keyCode

      $this = $(this)
      if (!/(37|38|39|40)/.test(k)) return

      $items = $ul.find('[role=tab]:visible')
      index = $items.index($items.filter(':focus'))

      if (k == 38 || k == 37) index--                         // up & left
      if (k == 39 || k == 40) index++                        // down & right


      if(index < 0) index = $items.length -1
      if(index == $items.length) index = 0

      var nextTab = $items.eq(index)
      if(nextTab.attr('role') ==='tab'){

        nextTab.tab('show')      //Comment this line for dynamically loaded tabPabels, to save Ajax requests on arrow key navigation
        .focus()
      }
      // nextTab.focus()

      e.preventDefault()
      e.stopPropagation()
    }

    $(document).on('keydown.tab.data-api','[data-toggle="tab"], [data-toggle="pill"]' , $.fn.tab.Constructor.prototype.keydown)

   var tabactivate =    $.fn.tab.Constructor.prototype.activate;
   $.fn.tab.Constructor.prototype.activate = function (element, container, callback) {
      var $active = container.find('> .active')
      $active.find('[data-toggle=tab]').attr({ 'tabIndex' : '-1','aria-selected' : false,'aria-expanded' : false })
      $active.filter('.tab-pane').attr({ 'aria-hidden' : true,'tabIndex' : '-1' })

      tabactivate.apply(this, arguments)

      element.addClass('active')
      element.find('[data-toggle=tab]').attr({ 'tabIndex' : '0','aria-selected' : true,'aria-expanded' : true })
      element.filter('.tab-pane').attr({ 'aria-hidden' : false,'tabIndex' : '0' })
   }


  // Collapse Extension
  // ===============================

      var $colltabs =  $('[data-toggle="collapse"]')
      $colltabs.attr({ 'role':'tab', 'aria-selected':'false', 'aria-expanded':'false' })
      $colltabs.each(function( index ) {
        var colltab = $(this)
        , collpanel = (colltab.attr('data-target')) ? $(colltab.attr('data-target')) : $(colltab.attr('href'))
        , parent  = colltab.attr('data-parent')
        , collparent = parent && $(parent)
        , collid = colltab.attr('id') || uniqueId('ui-collapse')

        $(collparent).find('div:not(.collapse,.panel-body), h4').attr('role','presentation')

          colltab.attr('id', collid)
          if(collparent){
            collparent.attr({ 'role' : 'tablist', 'aria-multiselectable' : 'true' })
            if(collpanel.hasClass('in')){
              colltab.attr({ 'aria-controls': colltab.attr('href').substr(1), 'aria-selected':'true', 'aria-expanded':'true', 'tabindex':'0' })
              collpanel.attr({ 'role':'tabpanel', 'tabindex':'0', 'aria-labelledby':collid, 'aria-hidden':'false' })
            }else{
              colltab.attr({'aria-controls' : colltab.attr('href').substr(1), 'tabindex':'-1' })
              collpanel.attr({ 'role':'tabpanel', 'tabindex':'-1', 'aria-labelledby':collid, 'aria-hidden':'true' })
            }
          }
      })

    var collToggle = $.fn.collapse.Constructor.prototype.toggle
    $.fn.collapse.Constructor.prototype.toggle = function(){
        var prevTab = this.$parent && this.$parent.find('[aria-expanded="true"]') , href

        if(prevTab){
          var prevPanel = prevTab.attr('data-target') || (href = prevTab.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')
          , $prevPanel = $(prevPanel)
          , $curPanel = this.$element
          , par = this.$parent
          , curTab

        if (this.$parent) curTab = this.$parent.find('[data-toggle=collapse][href="#' + this.$element.attr('id') + '"]')

        collToggle.apply(this, arguments)

        if ($.support.transition) {
          this.$element.one($.support.transition.end, function(){

              prevTab.attr({ 'aria-selected':'false','aria-expanded':'false', 'tabIndex':'-1' })
              $prevPanel.attr({ 'aria-hidden' : 'true','tabIndex' : '-1'})

              curTab.attr({ 'aria-selected':'true','aria-expanded':'true', 'tabIndex':'0' })

              if($curPanel.hasClass('in')){
                $curPanel.attr({ 'aria-hidden' : 'false','tabIndex' : '0' })
              }else{
                curTab.attr({ 'aria-selected':'false','aria-expanded':'false'})
                $curPanel.attr({ 'aria-hidden' : 'true','tabIndex' : '-1' })
              }
          })
        }
      }else{
        collToggle.apply(this, arguments)
      }
    }

    $.fn.collapse.Constructor.prototype.keydown = function (e) {
      var $this = $(this)
      , $items
      , $tablist = $this.closest('div[role=tablist] ')
      , index
      , k = e.which || e.keyCode

      $this = $(this)
      if (!/(32|37|38|39|40)/.test(k)) return
      if(k==32) $this.click()

      $items = $tablist.find('[role=tab]')
      index = $items.index($items.filter(':focus'))

      if (k == 38 || k == 37) index--                                        // up & left
      if (k == 39 || k == 40) index++                        // down & right
      if(index < 0) index = $items.length -1
      if(index == $items.length) index = 0

      $items.eq(index).focus()

      e.preventDefault()
      e.stopPropagation()

    }

    $(document).on('keydown.collapse.data-api','[data-toggle="collapse"]' ,  $.fn.collapse.Constructor.prototype.keydown)

  // Carousel Extension
  // ===============================

      $('.carousel').each(function (index) {
        var $this = $(this)
          , prev = $this.find('[data-slide="prev"]')
          , next = $this.find('[data-slide="next"]')
          , $options = $this.find('.item')
          , $listbox = $options.parent()

        $this.attr( { 'data-interval' : 'false', 'data-wrap' : 'false' } )
        $listbox.attr('role', 'listbox')
        $options.attr('role', 'option')

        var spanPrev = document.createElement('span')
        spanPrev.setAttribute('class', 'sr-only')
        spanPrev.innerHTML='Previous'

        var spanNext = document.createElement('span')
        spanNext.setAttribute('class', 'sr-only')
        spanNext.innerHTML='Next'

        prev.attr('role', 'button')
        next.attr('role', 'button')

        prev.append(spanPrev)
        next.append(spanNext)

        $options.each(function () {
          var item = $(this)
          if(item.hasClass('active')){
            item.attr({ 'aria-selected': 'true', 'tabindex' : '0' })
          }else{
            item.attr({ 'aria-selected': 'false', 'tabindex' : '-1' })
          }
        })
      })

      var slideCarousel = $.fn.carousel.Constructor.prototype.slide
      $.fn.carousel.Constructor.prototype.slide = function (type, next) {
        var $active = this.$element.find('.item.active')
          , $next = next || $active[type]()

        slideCarousel.apply(this, arguments)

      $active
        .one($.support.transition.end, function () {
        $active.attr({'aria-selected':false, 'tabIndex': '-1'})
        $next.attr({'aria-selected':true, 'tabIndex': '0'})
        //.focus()
       })
      }

    $.fn.carousel.Constructor.prototype.keydown = function (e) {
     var $this = $(this)
      , $ul = $this.closest('div[role=listbox]')
      , $items = $ul.find('[role=option]')
      , $parent = $ul.parent()
      , k = e.which || e.keyCode
      , index
      , i

      if (!/(37|38|39|40)/.test(k)) return

      index = $items.index($items.filter('.active'))
      if (k == 37 || k == 38) {                           //  Up
        $parent.carousel('prev')
        index--
        if(index < 0) index = $items.length -1
        else  $this.prev().focus()

      }
      if (k == 39 || k == 40) {                          // Down
        $parent.carousel('next')
        index++
        if(index == $items.length) index = 0
        else  {
          $this.one($.support.transition.end, function () {
            $this.next().focus()
          })
        }

      }

      e.preventDefault()
      e.stopPropagation()
    }
    $(document).on('keydown.carousel.data-api', 'div[role=option]', $.fn.carousel.Constructor.prototype.keydown)

  // GENERAL UTILITY FUNCTIONS
  // ===============================

    var removeMultiValAttributes = function (el, attr, val) {
     var describedby = (el.attr( attr ) || "").split( /\s+/ )
        , index = $.inArray(val, describedby)
     if ( index !== -1 ) {
       describedby.splice( index, 1 )
     }
     describedby = $.trim( describedby.join( " " ) )
     if (describedby ) {
       el.attr( attr, describedby )
     } else {
      el.removeAttr( attr )
     }
    }


})(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);