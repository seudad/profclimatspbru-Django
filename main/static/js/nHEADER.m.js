"use strict";var nHEADER={nbc:null};nHEADER.filter_on=function(){console.log('nHEADER.filter_on'); $(this).hide(); $('#filter-title-on').show();nHEADER.filter_resize(); $('#filter-body').show()};nHEADER.filter_resize=function(){let v_hh=$('header').outerHeight();let v_fh=($(window).height()-v_hh); $('#filter-body').css({top:v_hh+'px',height:v_fh+'px'})};nHEADER.filter_off=function(){console.log('nHEADER.filter_off'); $(this).hide(); $('#filter-title-off').show(); $('#filter-body').hide()};nHEADER.filter_use=function(){ $('#filter-title-on').click()};nHEADER.find_show=function(){if($('#find').is(':visible')){ $('#find').hide()}else{ $('#find').show()} $(window).resize()};var nSECT={top:{ctrl:null,subsect:null}};nSECT.subsect_hide=function(p_ctrl){let v_subsect=$('#'+ $(p_ctrl).data('subsect')); $(v_subsect).find(' [data-subsect]').each(function(p_index,p_element){let v_subsect=$('#'+ $(p_element).data('subsect'));if(v_subsect.is(':visible')){ $(p_element).removeClass('hopend').addClass('hclosed');v_subsect.hide()}}); $(v_subsect).hide(); $(p_ctrl).removeClass('hopend').addClass('hclosed')};nHEADER.init=function(){nHEADER.nbc=$('#navbar'); $('#header-navbar').click(function(){nHEADER.nbc.show()}); $('#navbar-close').click(function(){nHEADER.nbc.hide()}); $('#navbar-path').on('mouseover','.smenu',function(){ $(this).find('div.pmenu').show()}); $('#navbar-path').on('mouseout','.pmenu',function(){ $(this).hide()}); $(window).resize(function(){let v_h=$('#header-location').outerHeight()+ $('#header-ctrl').outerHeight()+($('#header-contacts-phones').css('position')==='static'? $('#header-contacts-phones').outerHeight():0)+($('#find').is(':visible')? $('#find').height():0)+($('#filter').is(':visible')? $('#filter').height():0)+($('#sorting').is(':visible')? $('#sorting').height():0)+3;if($('#header-contacts-phones').is(':visible')){} $('header').css('height',v_h+'px'); $('main').css('margin-top',(v_h+10)+'px');if($('#filter-body').is(':visible')){nHEADER.filter_resize()}}); $(window).resize(); $('input[type=number].number').each(function(){this.onchange=function(){}}); $('#filter-title-on').click(nHEADER.filter_off); $('#filter-title-off').click(nHEADER.filter_on); $('#cunits-filter-use').click(nHEADER.filter_use); $('#hunits-filter-use').click(nHEADER.filter_use); $('#vunits-filter-use').click(nHEADER.filter_use); $('#header-find').click(nHEADER.find_show); $('#filter-run').click(function(){}); $('#filter-clr').click(function(){}); $('main [data-subsect]').on('click',function(){let v_ctrl=$(this);nSECT.ctrl=v_ctrl;let v_subsect=$('#'+v_ctrl.data('subsect'));if(v_subsect.length===0){console.warn('Not found subsect:',v_ctrl.data('subsect'));return}if(v_subsect.is(':visible')){nSECT.subsect_hide(v_ctrl);if(v_ctrl.is('h2')){nSECT.top.ctrl=nSECT.top.subsect=null}}else{if(nSECT.top.subsect){if(!$.contains(nSECT.top.subsect[0],v_ctrl[0])){nSECT.subsect_hide(nSECT.top.ctrl)}}if(v_ctrl.is('h2')){nSECT.top.ctrl=v_ctrl;nSECT.top.subsect=v_subsect}v_subsect.show();v_ctrl.removeClass('hclosed').addClass('hopend')}})};