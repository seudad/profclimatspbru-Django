function nLOGIN(p_pfx){if(p_pfx===undefined){p_pfx='login'}this.usr={};this.pfx=p_pfx;var v_this=this;this.win=$('#'+p_pfx+'-win');this.win_title=$('#'+p_pfx+'-win-title');this.win_body=$('#'+p_pfx+'-win-body');this.win_uid=$('#'+p_pfx+'-uid');this.win_pass=$('#'+p_pfx+'-pass');this.win_ctrl=$('#'+p_pfx+'-win-ctrl');this.win_enter=$('#'+p_pfx+'-enter');this.win_reg=$('#'+p_pfx+'-reg');this.win_close=$('#'+p_pfx+'-close');this.enter=function(){};this.reg=function(){};this.close=function(){};this.win_enter.click(function(){var v_uid=v_this.win_uid.val().trim();var v_pass=v_this.win_pass.val();var v_hash=CryptoJS.MD5(v_pass+'~'+v_uid).toString();v_this.win_pass.val(''); $.ajax({type:"POST",url:nCFG.ajax.get_path('nUSR.enter.pl'),data:{uid:v_uid,hash:v_hash},dataType:"json",error:v_this.ajax_error,success:function(p_res){if(parseInt(p_res.rc,10)!==0){v_this.req_error(p_res);return}v_this.usr=p_res.usr;v_this.win.hide();if(typeof v_this.enter==='function'){v_this.enter()}}})});this.win_close.click(function(){v_this.win.hide();v_this.close()});this.win_reg.click(function(){v_this.win.hide();v_this.reg()}); $('body').append(this.win)}nLOGIN.prototype.req_error=function(p_res){};nLOGIN.prototype.ajax_error=function(xmlhttp,textStatus,errorThrown){if(xmlhttp.status===404){}else{}};nLOGIN.prototype.show=function(){this.win.css({top:0,right:0});this.win.show()};nLOGIN.prototype.hide=function(){this.win.hide()};nLOGIN.prototype.set_enter=function(p_function){this.enter=p_function};nLOGIN.prototype.set_close=function(p_function){this.close=p_function};nLOGIN.prototype.set_reg=function(p_function){this.reg=p_function};nLOGIN.prototype.req_error=function(p_res){};