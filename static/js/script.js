
function checkCookie(){
	var cookieEnabled = navigator.cookieEnabled;
	if (cookieEnabled === undefined){ 
		document.cookie = "testcookie";
		cookieEnabled = document.cookie.indexOf("testcookie")!=-1;
	}
	return cookieEnabled || showCookieFail();
  }
  
  function showCookieFail(){
    
    if (!checkCookie()){
	    var cookieoff = 1;
    } else {
	    var cookieoff = 0;
    }
  }
    if (window.location.hostname !== window.atob("cHJvZmNsaW1hdHNwYi5ydQ==") && window.location.hostname !== window.atob("")) {
	    window.location = window.atob("aHR0cDovL3Byb2ZjbGltYXRzcGIucnUv");
	    throw "stop";
    }
  //var cookieoff = 0;
  // within a window load,dom ready or something like that place your:
  
  function b64_to_utf8(str) {
  str = str.replace(/\s/g, '');    
  return decodeURIComponent(escape(window.atob(str)));
  }
  
  document.getElementById("content").innerHTML = "Идёт загрузка...";
  
  function asyncFunction1() {
	  return new Promise(function(resolve) {
		  rct = ''; //
		  resolve('Result of Async Function 1');
	  });
  }
  
  function asyncFunction2() {
	return new Promise(function(resolve) {
  ipv4 = '';
  ipdbc = '';
  resolve('Result of Async Function 2');
	});
  }
  
  
  // dc6db1756364103eaac006b9503fb584
  function anotherFunction(result1, result2) {
  data = h1 ='b0f188a2444006d803f16e76f111f3e9b3ef0ec2a0a163620a42791d8cbf41a3&date=1703174372&hdc=1&a='+adb+'&country=FR&ip=185.84.108.16&v=9.023&cid=17031743729352&ptr=vps-a70a94b5.vps.ovh.net&w='+screen.width+'&h='+screen.height+'&cw='+document.documentElement.clientWidth+'&ch='+document.documentElement.clientHeight+'&co='+screen.colorDepth+'&pi='+screen.pixelDepth+'&ref='+encodeURIComponent(document.referrer)+'&accept=text%2Fhtml%2Capplication%2Fxhtml%2Bxml%2Capplication%2Fxml%3Bq%3D0.9%2Cimage%2Favif%2Cimage%2Fwebp%2Cimage%2Fapng%2C%2A%2F%2A%3Bq%3D0.8%2Capplication%2Fsigned-exchange%3Bv%3Db3%3Bq%3D0.7&tz='+Intl.DateTimeFormat().resolvedOptions().timeZone+'&ipdbc='+ipdbc+'&ipv4='+ipv4+'&rct='+rct+'&cookieoff=1';
  console.log(data);  
  console.log('Another Function executed with results:', result1, result2);
  }
  
  async function runAsyncFunctions() {
	try {
	  const result1 = await asyncFunction1();
	  const result2 = await asyncFunction2();
	  anotherFunction(result1, result2);
	} catch (error) {
	  console.error(error);
	}
  }
  
  runAsyncFunctions();
  
  
  
  function Button() {
  document.getElementById("content").innerHTML = b64_to_utf8("PHA+0J/QvtC00YLQstC10YDQtNC40YLQtSwg0YfRgtC+INCy0Ysg0YfQtdC70L7QstC10Lo6PC9wPjxkaXYgc3R5bGU9ImN1cnNvcjogcG9pbnRlcjsiIGNsYXNzPSJvZjY4YmRjZmY4NjgxOWE2OGVkNjQwN2JiMzI0ZDRmZmQgczA4MjY2ZDYzNGNiZjVjMWM1OTVkMTAxOTBmZmI4MDRlIiBvbmNsaWNrPSJmYWJlZGM2OTNkNzAwMDEwNzI1NTc0MjNjNmM4YzkzODMoJ3Bvc3QnLCBkYXRhLCAnMXw0MDVmNzQ0NTE4ZGFiZTM4NzIwN2MzOTY0N2ZjZmE5OWM2YzlhMzZmYWE0MWViZjIwMjE5NzBhYmEwM2U0ZTk2JykiPtCvINC90LUg0YDQvtCx0L7RgjwvZGl2PjxkaXYgc3R5bGU9ImN1cnNvcjogcG9pbnRlcjsiIGNsYXNzPSJvNjBiYjIwMDY5NzRhMGE3YjljMTk5YTUzMmRhYWU4MWEgczA4MjY2ZDYzNGNiZjVjMWM1OTVkMTAxOTBmZmI4MDRlIiBvbmNsaWNrPSJmYWJlZGM2OTNkNzAwMDEwNzI1NTc0MjNjNmM4YzkzODMoJ3Bvc3QnLCBkYXRhLCAnMXw0Nzg0MDdjNGJkMWQ0NTUyN2E2NzQ5ZGZkYThiMzk1ZmIyY2U1MDgxMTQ3ZmZiMjNhNTdjOTBiMjUxMzViNzM5JykiPtCvINC90LUg0YDQvtCx0L7RgjwvZGl2PjxkaXYgc3R5bGU9ImN1cnNvcjogcG9pbnRlcjsiIGNsYXNzPSJvZDBjYTYxZTcwYWUwNmUwOGRiYTRlYzJlMzBiN2IzMGIgczA4MjY2ZDYzNGNiZjVjMWM1OTVkMTAxOTBmZmI4MDRlIiBvbmNsaWNrPSJmYWJlZGM2OTNkNzAwMDEwNzI1NTc0MjNjNmM4YzkzODMoJ3Bvc3QnLCBkYXRhLCAnMXxhZGIzODg2ZTNhYWRlMjkyMGJiNzU2YjcxODUxMGIzNjk3MjUyOWYzMjFhMzllNjYwNDY3YjQ2MjdhZGVkZjVlJykiPtCvINC90LUg0YDQvtCx0L7RgjwvZGl2PjxkaXYgc3R5bGU9ImN1cnNvcjogcG9pbnRlcjsiIGNsYXNzPSJvZDQzZWZlN2JmNGE2YjEwNTQxZGNmMzI3YWFjOTBjZDUgczA4MjY2ZDYzNGNiZjVjMWM1OTVkMTAxOTBmZmI4MDRlIiBvbmNsaWNrPSJmYWJlZGM2OTNkNzAwMDEwNzI1NTc0MjNjNmM4YzkzODMoJ3Bvc3QnLCBkYXRhLCAnMXxjMDZiMjRhMTM0MmU5ZDFiZjAwMmZhOTQzNWQ4MmViNjRhMzQ0ZjhkZjhjYWI1ZGJkOGU1NTg1MDRiNjM0YzJkJykiPtCvINC90LUg0YDQvtCx0L7RgjwvZGl2PjxzdHlsZT4ub2Q0M2VmZTdiZjRhNmIxMDU0MWRjZjMyN2FhYzkwY2Q1IHt9ICAub2Y2OGJkY2ZmODY4MTlhNjhlZDY0MDdiYjMyNGQ0ZmZkIHtkaXNwbGF5OiBub25lO30gIC5vZDBjYTYxZTcwYWUwNmUwOGRiYTRlYzJlMzBiN2IzMGIge2Rpc3BsYXk6IG5vbmU7fSAgLm82MGJiMjAwNjk3NGEwYTdiOWMxOTlhNTMyZGFhZTgxYSB7ZGlzcGxheTogbm9uZTt9IDwvc3R5bGU+");
  }
  console.log(Button());
  function fabedc693d70001072557423c6c8c9383(s, d, x){
  document.getElementById("content").innerHTML = "Идёт загрузка...";
  d = d + '&x373884aa3b57d2b54f7666e1f7f8a442='+s+'&xxx=' + x + '&rowid=4&gray=2';
  console.log(d);
  var cloud = new XMLHttpRequest();
  cloud.open("POST", "/", true);
  cloud.timeout = 5000;
  cloud.setRequestHeader('Content-type', 'application/json');
  
  cloud.onload = function () {
  if(cloud.status == 200) {
  // успешный ответ проверки
  console.log('good: '+cloud.status);
  
  function obj () { 
  try {
	  JSON.parse(this.responseText);
  }
  catch (error) {
	  console.log('Error parsing JSON:', error, this.responseText);
  }
  console.log(this.responseText);
  }
  var d = new Date();
  d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = "ifGsckZRFLOEIvdzYtrhVwHUWjmTJu="+obj.cookie+"-1702543979; SameSite=Lax;; " + expires + "; path=/;";
  document.getElementById("content").innerHTML = "Идёт загрузка...";
  window.location.href = "/";
  if (typeof(obj.error) == "string") {
  if (obj.error == "Account Not Found" || obj.error == "This domain is not licensed" || obj.error == "Subscription has expired" || obj.error == "This domain is blacklisted" || obj.error == "Your request has been denied.") {
  const ErrorMsg = document.createElement('div');
  ErrorMsg.innerHTML = '<h1 style="text-align:center; color:red;">'+obj.error+'</h1>';
  document.body.insertAdjacentElement('afterbegin', ErrorMsg);
  document.getElementById("content").style.visibility = "hidden";
  document.getElementById("content").innerHTML = '';
  } else if (obj.error == "Cookies disabled") {
  document.getElementById("content").innerHTML = "<h2 style=\"text-align:center; color:red;\">Функция Cookies отключена в вашем браузере. Пожалуйста, включите Cookies для продолжения.</h2>";
  }
  if (obj.error == "Wrong Click") {
  document.getElementById("content").innerHTML = "Идёт загрузка...";
  window.location.href = "/";
  }
  }
  }
  };
  
  cloud.ontimeout = function () {
	console.log('timeout');
	Button();
  };
  cloud.send(d);
  }