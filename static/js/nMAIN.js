"use strict"; $(document).ready(function(){nCONSOLE.on();nSESSION.reg=new nREG('_reg');nSESSION.login=new nLOGIN('_login');nCAB.init('cab');nSESSION.login.set_enter(function(){nSESSION.enter(this.usr)});nSESSION.login.set_reg(function(){nSESSION.reg.show()});nSESSION.reg.set_reg(function(){nSESSION.enter(this.usr)});nCAB.card_set_save(function(p_res){nSESSION.enter(p_res.usr)}); $('#header-status').click(function(){nCAB.menu_show()});nPUB.init();var v_user=$.jStorage.get('nCPROF');if((v_user!==null)&&(typeof v_user==='object')&&(v_user.uid!==undefined)){nSESSION.enter(v_user)}else{}nBASKET.init();nBASKET.info();nDATA.load('cfg',function(p_res){nSITE.list=p_res.data; $('title').text(nSITE.list.title.head?nSITE.list.title.text:''); $('#header-title-title').text(nSITE.list.title.top?nSITE.list.title.text:''); $('#bottom-title').text(nSITE.list.title.bottom?nSITE.list.title.text:''); $('#header-contacts-phone-numbers').text(nSITE.list.phone.join(', '));var v_range=$('#header-contacts-range').find('tbody').empty();for(var v_i=0;v_i<nSITE.list.schedule.length;v_i++){v_range.append('<tr style="color:'+nSITE.list.schedule[v_i].color+';"><td>'+nSITE.list.schedule[v_i].days.from+(nSITE.list.schedule[v_i].days.to?'-'+nSITE.list.schedule[v_i].days.to:'')+'</td><td>&nbsp;</td><td>'+nSITE.list.schedule[v_i].time.from+(nSITE.list.schedule[v_i].time.to?'—'+nSITE.list.schedule[v_i].time.to:'')+'</td></tr>')}});nCBR.get_course(function(){});nUNITS.init();nNEWS.init('#main-news');nRECOMMENDS.init(); $('#login').click(function(){nSESSION.login.show()}); $('#logoff').click(function(){nSESSION.exit()}); $('#navbar .navbar-item a').each(function(p_index,p_object){}); $('#navbar .navbar-item').on('click','a',function(p_event){var v_ref=$(this).attr('href');p_event.preventDefault();nCOMMON.to_ref(v_ref)}); $("#library").on('open',function(){nLIB.refresh()}); $('#button-up').click(function(){ $(window).scrollTop(0)}); $('#button-down').click(function(){ $(window).scrollTop($(document).height())}); $('#find-go').click(nCUNITS.find.set); $('#find-go-clear').click(nCUNITS.find.clear);nCOMMON.to_ref(window.location.hash)});