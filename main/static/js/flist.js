"use strict";var g_flist=new nFLIST('upload');g_flist.show=function(p_files){var v_tbody=$('#file-list tbody').empty();var v_no=0;for(var v_i=0;v_i<p_files.order.length;v_i++){var v_k=p_files.order[v_i];v_no++;var v_tr=$('<tr/>');v_tr.append($('<td/>',{text:v_no,Class:'tnum'}));var v_crt_datetime=Math.round(parseInt(v_k,10)/1000000);if(p_files.list[v_k]){v_tr.append($('<td/>',{text:v_k,Class:'flist-id',data:{fname:p_files.list[v_k].FileName}}));v_tr.append($('<td/>',{text:p_files.list[v_k].FileName}));v_tr.append($('<td/>',{text:p_files.list[v_k].ContentType}));v_tr.append($('<td/>',{text:p_files.list[v_k].UserId}));v_tr.append($('<td/>',{text:g_flist.f_date_time(v_crt_datetime)}));v_tr.append($('<td/>',{text:p_files.list[v_k].Title}))}else{v_tr.append($('<td/>',{text:v_k,Class:'flist-id',data:{fname:''}}));v_tr.append($('<td/>',{text:''}));v_tr.append($('<td/>',{text:''}));v_tr.append($('<td/>',{text:''}));v_tr.append($('<td/>',{text:g_flist.f_date_time(v_crt_datetime)}));v_tr.append($('<td/>',{text:''}))}v_tbody.append(v_tr)}v_tbody.removeClass('tr1').removeClass('tr2');v_tbody.find('tr:odd').addClass('tr1');v_tbody.find('tr:even').addClass('tr2')}; $(document).ready(function(){ $('#file-list tbody').on('click','.flist-id',function(){console.log('click.file-id.10:',this);var v_this=$(this);var v_pos=v_this.offset();var v_menu=$('#flist-menu'); $('#flist-menu-id').text(v_this.text());var v_data=v_this.data(); $('#flist-menu-name').text(v_data.fname);console.log('click.file-id.20:',v_pos,v_this.text());v_menu.css(v_pos).show();console.log('click.file-id.30:',v_menu.offset())}); $('#flist-menu-close').on('click',function(){g_flist.menu_close()}); $('#flist-desc-close').on('click',function(){g_flist.desc_close()}); $('#flist-desc-cancel').on('click',function(){g_flist.desc_close()}); $('#flist-desc-save').on('click',function(){g_flist.desc_save(function(p_res){g_flist.refresh();g_flist.desc_close()})}); $('#flist-menu').on('click','.flist-menu-item',function(){var v_item=$(this).text().trim();console.log('flist-menu.item.10:',v_item);if(v_item==='Отказ'){g_flist.menu_close();return}if(v_item==='Загрузить'){g_flist.load($('#flist-menu-id').text());g_flist.menu_close();return}if(v_item==='Описание'){g_flist.desc_show($('#flist-menu-id').text());return}if(v_item==='Удалить'){g_flist.remove($('#flist-menu-id').text(),function(p_res){g_flist.refresh();g_flist.menu_close()});return}}); $('#file-list thead').on('click','.sortable',function(){var v_this=$(this);console.log('click.sortable.10:',v_this.attr('id'),v_this.text());g_flist.data=g_flist.order_by(v_this,g_flist.data);g_flist.show(g_flist.data)});g_flist.refresh(g_flist.show)});