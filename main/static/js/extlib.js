function unix_time(p_year,p_mon,p_day,p_hour,p_min){return((new Date(p_year,p_mon,p_day,p_hour,p_min,0)).getTime()/1000)}String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};String.prototype.ltrim=function(){return this.replace(/^\s+/,"")};String.prototype.rtrim=function(){return this.replace(/\s+$/,"")};String.prototype.rpad=function(p_string,p_length){var v_str=this;while(v_str.length<p_length)v_str+=p_string;return v_str};String.prototype.lpad=function(p_string,p_length){var v_str=this;while(v_str.length<p_length)v_str=p_string+v_str;return v_str};Number.prototype.div=function(p_by){return(this-this%p_by)/p_by};Number.prototype.tmoney=function(){if(this===0){return"0,00"}return this.div(100)+','+(this%100).toString().lpad('0',2)};Number.prototype.money=function(p_currency,p_html_tag){if(this===0){return"0,00"}var v_money=(this).toFixed(2).split('.');v_money[0]=v_money[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,'$1\u00A0');if(p_html_tag){return(p_currency?v_money[0]+','+v_money[1]+'<'+p_html_tag+'>'+p_currency+'</'+p_html_tag+'>':v_money[0]+','+v_money[1])}return(p_currency?v_money[0]+','+v_money[1]+p_currency:v_money[0]+','+v_money[1])};Number.prototype.digits=function(){if(this===0){return"0"}var v_val=this.toString();v_val=v_val.replace(/(\d)(?=(\d\d\d)+(?!\d))/g,'$1\u00A0');return v_val};function _console_log(){if(g_DEBUG){console.log.apply(console,arguments)}}function translit(p_text){var transl=new Array();transl['А']='A';transl['а']='a';transl['Б']='B';transl['б']='b';transl['В']='V';transl['в']='v';transl['Г']='G';transl['г']='g';transl['Д']='D';transl['д']='d';transl['Е']='E';transl['е']='e';transl['Ё']='Yo';transl['ё']='yo';transl['Ж']='Zh';transl['ж']='zh';transl['З']='Z';transl['з']='z';transl['И']='I';transl['и']='i';transl['Й']='J';transl['й']='j';transl['К']='K';transl['к']='k';transl['Л']='L';transl['л']='l';transl['М']='M';transl['м']='m';transl['Н']='N';transl['н']='n';transl['О']='O';transl['о']='o';transl['П']='P';transl['п']='p';transl['Р']='R';transl['р']='r';transl['С']='S';transl['с']='s';transl['Т']='T';transl['т']='t';transl['У']='U';transl['у']='u';transl['Ф']='F';transl['ф']='f';transl['Х']='H';transl['х']='h';transl['Ц']='C';transl['ц']='c';transl['Ч']='Ch';transl['ч']='ch';transl['Ш']='Sh';transl['ш']='sh';transl['Щ']='Shh';transl['щ']='shh';transl['Ъ']='A';transl['ъ']='a';transl['Ы']='Y';transl['ы']='y';transl['Ь']='';transl['ь']='';transl['Э']='E';transl['э']='e';transl['Ю']='Yu';transl['ю']='yu';transl['Я']='Ya';transl['я']='ya';var result='';for(i=0;i<p_text.length;i++){if(transl[p_text[i]]!==undefined){result+=transl[p_text[i]]}else{result+=p_text[i]}}return result}function is_undef(p_val){return typeof(p_val)==='undefined'};function is_empty(p_val){return/^\s*$/.test(p_val)};function is_phone(p_val){if(/^\d{5,16}$/.test(p_val)){return true}if(/^\d+-\d+$/.test(p_val)){return true}if(/^\d+-\d+-\d+$/.test(p_val)){return true}if(/^\d+-\d+-\d+-\d+$/.test(p_val)){return true}if(/^\d+-\d+-\d+-\d+-\d+$/.test(p_val)){return true}if(/^\+?\d+\s+\(\d+\)\s+\d+-\d+-\d+$/.test(p_val)){return true}if(/^\+?\d+\s+\d+\s+\d+-\d+-\d+$/.test(p_val)){return true}return false};function is_email(p_val){if(/^[-a-z0-9.]+@[-a-z0-9_.]+\.[a-z]{2,3}$/i.test(p_val)){return true}return false};function is_rus_name(p_str){if(/^[АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ]+$/i.test(p_str)){return true}if(/^[АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ][-АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ]+[АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ]$/i.test(p_str)){return true}return false}function rus2lat(p_str){return p_str}function is_rus(p_str){if(/^[АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ]+$/i.test(p_str)){return true}return false}function is_userid(p_str){if(/^[A-Z][A-Z0-9_]+[A-Z0-9]$/i.test(p_str)){return true}return false}function n2br(p_str){return p_str.replace(/\n/g,"<br/>")}