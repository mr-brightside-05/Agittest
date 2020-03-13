document.getElementById('sirialminut').onclick = function showMessage(){
alert ('Сколько минут сериалов ты посмотрел на этой неделе?');
var srial; 
var srialminit; 
do{                                                 
    var srial = prompt("Сколько серий сериалов ты посмотрел на этой неделе?",""); 
    var rialminit = prompt("А сколько минут длилась каждая серия?","");
	allsrial     = srial * rialminit;                
	alert("Столько времени ты сжег. ПОЗДРАВЛЯЮ! " + allsrial);                           
}while(uahValue !== null)                            
}
document.getElementById('wahabtn').onclick = function showMessage(){
alert ('Переводим дюймы в сантиметры');
var inch01; 
var inchmod = 2.54; 
do{                                                 
    var inch01 = prompt("На сколько далеко ты готов подвигать своих спейсмаринов?",""); 
    
    allsant = inch01 / inchmod;                
    alert("Спэйсмарины побежали дистанцию  " + allsant + " сантиметров");                           
}while(uahValue !== null)                            
  
}
document.getElementById('bookbtn').onclick = function showMessage(){
alert ('Приблизительно считаем сколько книг ты читаешь в год');
var book1000 = 1000;
var book500 = 500;
var book250 = 250;
var book100 = 100;
var bookcount1000;
var bookcount500;
var bookcount250;
var bookcount100;
do{                                                 
    var bookcount1000 = prompt("Сколько ты читаешь книг с обьемом от 1000 до 500 страниц?",""); 
    var bookcount500 = prompt("Сколько ты читаешь книг с обьемом от 500 до 250 страниц?",""); 
    var bookcount250 = prompt("Сколько ты читаешь книг с обьемом от 250 до 100 страниц?",""); 
    var bookcount100 = prompt("Сколько ты читаешь книг с обьемом от 100 и менее?",""); 
    
    allbookcount = book1000 * bookcount1000 + book500 * bookcount500 + book250 * bookcount250 +book100 * bookcount100 ;
    allpage = allbookcount / 360;          
    alert("Ты читаешь страниц в год " + allbookcount);
    alert("А столько страниц в длень ты в среднем читаешь " + allpage);

}while(uahValue !== null);                             
}

document.getElementById('check').onclick = function(){
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    var credentials = {
        login: 'admin',
        password: 'qwerty',
    };
    var green = document.getElementById('greenalert');
    var rad = document.getElementById('radalert');
    style1 = greenalert.style;
    style2 = rad.style;
    if (credentials.login == login && credentials.password == password)
    style1.display = "block";
    else  style2.display = "block";
}


    
    style.display = "block";

