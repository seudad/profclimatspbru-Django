if('nVENT'in window){}else{nVENT={_dummy_:null}}if('Kitchen_fans'in nVENT){}else{nVENT.Kitchen_fans={_dummy_:null}}nVENT.Kitchen_fans.price_min=function(){return Number($('#price-min').val())};nVENT.Kitchen_fans.price_max=function(){return Number($('#price-max').val())};nVENT.Kitchen_fans.filter_price_init=function(){var v_step=Number($("#vunits-filter-price-min").attr('step')); $("#vunits-filter-price-min").attr('min',nVENT.Kitchen_fans.price_min()); $("#vunits-filter-price-min").attr('max',nVENT.Kitchen_fans.price_max()); $("#vunits-filter-price-min").val(nVENT.Kitchen_fans.price_min); $("#vunits-filter-price-max").attr('min',nVENT.Kitchen_fans.price_min()); $("#vunits-filter-price-max").attr('max',nVENT.Kitchen_fans.price_max()); $("#vunits-filter-price-max").val(nVENT.Kitchen_fans.price_min());var v_units_filter_price_min=parseInt($("#vunits-filter-price-min").attr('min').trim(),10);var v_units_filter_price_max=parseInt($("#vunits-filter-price-max").attr('max').trim(),10); $("#vunits-filter-price-slider").slider({animate:true,values:[v_units_filter_price_min,v_units_filter_price_max],range:true,min:v_units_filter_price_min,max:v_units_filter_price_max,step:v_step,slide:function(event,ui){ $("#vunits-filter-price-min").val(ui.values[0]); $("#vunits-filter-price-max").val(ui.values[1])},change:function(event,ui){ $("#vunits-filter-price-min").val(ui.values[0]); $("#vunits-filter-price-max").val(ui.values[1])}}); $('#vunits-filter-price-min').change(function(e){ $('#vunits-filter-price-slider').slider("values",0, $(this).val())}); $('#vunits-filter-price-max').change(function(e){ $('#vunits-filter-price-slider').slider("values",1, $(this).val())}); $('#vunits-filter-price-min').change(); $('#vunits-filter-price-max').change()};nVENT.Kitchen_fans.filter_price_reset=function(){ $("#vunits-filter-price-min").attr('min',nVENT.Kitchen_fans.price_min()); $("#vunits-filter-price-min").attr('max',nVENT.Kitchen_fans.price_max()); $("#vunits-filter-price-min").val(nVENT.Kitchen_fans.price_min); $("#vunits-filter-price-max").attr('min',nVENT.Kitchen_fans.price_min()); $("#vunits-filter-price-max").attr('max',nVENT.Kitchen_fans.price_max()); $("#vunits-filter-price-max").val(nVENT.Kitchen_fans.price_min()); $('#vunits-filter-price-slider').slider("values",0,nVENT.Kitchen_fans.price_min()); $('#vunits-filter-price-slider').slider("values",1,nVENT.Kitchen_fans.price_max()); $('#vunits-filter-price-min').change(); $('#vunits-filter-price-max').change()};nVENT.Kitchen_fans.filter_init=function(){nVENT.Kitchen_fans.filter_price_init()};nVENT.Kitchen_fans.filter_reset=function(){nVENT.Kitchen_fans.filter_price_reset(); $('#vunits-filter-manufacturer input[type=checkbox]').each(function(){if(!$(this).is(':checked')){ $(this).prop('checked',true); $(this).trigger('change')}})};nVENT.Kitchen_fans.get_manufactures_on=function(){var v_manufactures={}; $('#vunits-filter-manufacturer input[name=filter-manufacturer]:checked').each(function(){v_manufactures[this.value]=true});return v_manufactures};nVENT.Kitchen_fans.get_utypes_on=function(){var v_utypes={}; $('#vunits-filter-utype input[name=filter-utype]:checked').each(function(){v_utypes[this.value]=true});return v_utypes};nVENT.Kitchen_fans.filter_use=function(){var v_filter={};v_filter.price_min=Number($("#vunits-filter-price-min").val());v_filter.price_max=Number($("#vunits-filter-price-max").val());var v_manufacturer=nVENT.Kitchen_fans.get_manufactures_on();var v_show=0,v_hidden=0; $('#vunits-list .units-item').each(function(){var v_self=$(this);var v_unit=v_self.find('.unit-item-buy');if(v_unit){var v_data=v_unit.data();if(!v_manufacturer[v_data.manufacturer]){v_hidden++;v_self.hide();return}if((Number(v_data.rub)<v_filter.price_min)||(Number(v_data.rub)>v_filter.price_max)){v_hidden++;v_self.hide();return}v_self.show();v_show++}});nVENT.Kitchen_fans.tollbar_counts_set(v_show,v_hidden)};nVENT.Kitchen_fans.tollbar_counts_get=function(){return{show:parseInt($('#vunits-counts-show').text().trim(),10),hidden:parseInt($('#vunits-counts-hidden').text().trim(),10)}};nVENT.Kitchen_fans.tollbar_counts_set=function(p_show,p_hidden){ $('#vunits-counts-show').text(p_show.toString()); $('#vunits-counts-hidden').text(p_hidden.toString())};nVENT.Kitchen_fans.toolbar_show_table=function(){ $('#units-toolbar-show-table').css({color:'#000000'}); $('#units-toolbar-show-tile').css({color:'#bbbbbb'})};nVENT.Kitchen_fans.toolbar_show_tile=function(){ $('#units-toolbar-show-table').css({color:'#bbbbbb'}); $('#units-toolbar-show-tile').css({color:'#000000'})}; $(document).ready(function(){ $('#vunits-filter-manufacturer-pop').click(function(){}); $('#vunits-filter-manufacturer-all').click(function(){}); $("#vunits-list").on('click','.unit-item-buy',nBASKET.buy); $('#vunits-filter-manufacturer').on('change','input[type=checkbox]',function(){nVENT.Kitchen_fans.filter_use();return}); $('#vunits-filter-utype').on('change','input[type=checkbox]',function(){nVENT.Kitchen_fans.filter_use();return}); $('#units-toolbar-image').click(function(p_event){p_event.preventDefault()});nVENT.Kitchen_fans.filter_init(); $('#vunits-filter-use').click(nVENT.Kitchen_fans.filter_use); $('#vunits-filter-clear').click(function(){nVENT.Kitchen_fans.filter_reset();nVENT.Kitchen_fans.filter_use()});nUSER.init();nFIND.init();var v_params=$.getUrlVars();if(0&&v_params.m){var v_m=v_params.m.split(',');var v_manufacturers={};for(var v_i=0;v_i<v_m.length;v_i++){v_manufacturers[unescape(v_m[v_i])]=true} $('#vunits-filter-manufacturer input[name=filter-manufacturer]').each(function(){ $(this).prop('checked',(v_manufacturers[this.value]?true:false))});if(v_params.pmin){ $("#vunits-filter-price-min").val(v_params.pmin); $("#vunits-filter-price-min").change()}if(v_params.pmax){ $("#vunits-filter-price-max").val(v_params.pmax); $("#vunits-filter-price-max").change()}if(v_params.hpmin){ $('#vunits-filter-power_heating-min').val(v_params.hpmin); $('#vunits-filter-power_heating-min').change()}if(v_params.hpmax){ $('#vunits-filter-power_heating-max').val(v_params.hpmax); $('#vunits-filter-power_heating-max').change()}nVENT.Kitchen_fans.filter_use()}});