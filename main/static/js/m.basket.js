"use strict";nBASKET.view=function(){nSESSION.init();var v_count=0;var v_to_pay=0;var v_tbody=$('main table tbody').empty();for(var v_i=0;v_i<nUSER.basket.length;v_i++){v_count+=nUSER.basket[v_i].count;v_to_pay+=nUSER.basket[v_i].count*nUSER.basket[v_i].rub;var v_tr=$('<tr/>');var v_td_no=$('<td/>',{text:(v_i+1)+'.',Class:'tnum'});var v_td_title=$('<td/>',{Class:'ttxt',html:'<a href="'+encodeURI(nUSER.basket[v_i].key)+'">'+nUSER.basket[v_i].title+'</a>'});var v_td_rub=$('<td/>',{text:nUSER.basket[v_i].rub,Class:'ttxt'});var v_td_count=$('<td/>',{text:'['+nUSER.basket[v_i].count+']',Class:'tnum'});var v_td_drop=$('<td/>',{text:"×",Class:'tctrl',data:{no:v_i}});v_tr.append(v_td_no).append(v_td_title).append(v_td_rub).append(v_td_count).append(v_td_drop);v_tbody.append(v_tr)} $('#buyer-to_pay').text(v_to_pay)}; $(document).ready(function(){ $('main table tbody').on('click','td.tctrl',function(){var v_no=Number($(this).data('no'));nUSER.basket.splice(v_no,1);nSESSION.save();nBASKET.view()}); $('#buyer-refresh').click(function(){nBASKET.view()}); $('#buyer-clear').click(function(){nBASKET.clear();nBASKET.view()}); $('#buyer-submit').click(function(){var v_name=$('#buyer-name').val().trim();var v_phone=$('#buyer-phone').val().trim();var v_email=$('#buyer-email').val().trim();var v_errors=0; $('#buyer-name').removeClass('error'); $('#buyer-phone').removeClass('error'); $('#buyer-email').removeClass('error');if(nUSER.basket.length===0){return}if(!/^[ А-Я]+/i.test(v_name)){ $('#buyer-name').addClass('error');return}if((v_email==='')&&(v_phone==='')){ $('#buyer-phone').addClass('error'); $('#buyer-email').addClass('error');return}if(v_email){if(/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i.test(v_email)){}else{ $('#buyer-email').addClass('error');v_errors++}}if(v_phone){if(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(v_phone)){}else{ $('#buyer-phone').addClass('error');v_errors++}}if(v_errors){return}nUSER.name=v_name;nUSER.phone=v_phone;nUSER.email=v_email; $('#buyer-order').val(JSON.stringify(nUSER));nSESSION.save(); $('#buyer-form').submit()});nBASKET.view(); $('#buyer-phone').val(nUSER.phone); $('#buyer-email').val(nUSER.email); $('#buyer-name').val(nUSER.name)});nBASKET.send=function(p_callback){nAJAX.lock(); $.ajax({type:"POST",url:'/cgi-bin/submit.pl',data:JSON.stringify(nUSER),dataType:"json",error:nAJAX.ajax_error,success:function(p_res){if(parseInt(p_res.rc,10)!==0){nAJAX.req_error(p_res);return}nAJAX.unlock();if(typeof p_callback==='function'){p_callback(p_res)}}})};var nAJAX={};nAJAX.lock=function(){};nAJAX.unlock=function(){};nAJAX.req_error=function(p_res){console.log('REQ_ERR:',p_res.rc,p_res.msg)};nAJAX.ajax_error=function(xmlhttp,textStatus,errorThrown){console.log('ajax_error:',xmlhttp,textStatus,errorThrown);if(xmlhttp.status===404){}else{}};