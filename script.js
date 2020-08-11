//console.log('отдельный файл');

/*
    console.log("JavaScript");
    let str= 'Строка';
    const numb=12;
    console.log(str);
    //alert(str);
    console.log(12);
    
    
    let_q='xx';
    let string2='str2';
    console.log(str);
    _q=1;
    console.log(_q);
    console.log(string2);

    let summ=_q + string2;
    let namb2='2';
    let summ2=numb + _q;
    let array = [1,2,3, 'xxx'];
    let obj={
        'array': array
    }
    console.log(obj);
    console.log(window)
    console.log(document)

    let title=document.getElementsByClassName('row-middle__main');
    console.log(title);

    //console.log(summ2);
    //console.log(array);

    //let closePopupp=document.getElementById('close-popupp');
    //console.log(closePopupp);

    
    //console.log(document.getElementsByTagName('h1'));

    //console.log(document.querySelectorAll('.row-middle__title'));
*/


/* 
найти и взять элемент
изменить его ссс свойства элемента
*/
function popuppOpen() {
    console.log('Функция для открытия попапа');
    const overlay=document.getElementById('overlay');
    //добавление стилей
    //overlay.style='display:block';
    //добавление класса элементу
    overlay.className+=' active';
}
//popuppOpen();

let closePopupp=document.getElementById('close-popupp');
//closePopupp.onclick=function(){
    //alert('закрыть попап')

/*
closePopupp.addEventListener('click', function(){
    alert('закрыть попап второй вариант')
})
*/

//let closePopupp=document.getElementById('close-popupp');
//closePopupp.onckick=function(){
   // alert('закрыть попап');
//}


closePopupp.addEventListener('click' , function() {
   // alert('Закыть попап 2 вариант');
   const overlay=document.getElementById('overlay');
   overlay.className='overlay';
})

//second popupp

let openpopupp2=document.getElementById('openpopupp2');
let dark=document.getElementById('dark');

openpopupp2.addEventListener('click', function(){
    dark.className+=" active";
})

let closepopupp2=document.getElementById('closepopupp2');
closepopupp2.addEventListener('click' , function() {
    let closepopupp2=document.getElementById('dark');
    dark.className='dark';
 })


//Lesson 10. Знакомство с JQuery, события, this, Animation, Плавный скрол
/*
//Первый вариант(Назначение одного css свойства)
$("#msk").css( "color", "red" );
//Второй вариант(Назначение нескольких css свойств)
$("#msk").css({"color":"green", "font-size":"16px"})

$(".features__item").click(function(){ 
	this.innerHTML = "<h1> TEST </h1>";
	console.log($(this));
	$(this).css({"color":"green", "font-size":"16px"});	
});

$(".top-block-menu a").mousemove(function(){ 
	$(this).css({"color":"red"});	;
 });

$(".top-block-menu a").mouseleave(function(){ 
   $(this).css({"color":"gray"});	;
});

$(".fas.fa-bars").click(function(){ 
	//$(".top-block-menu").toggle();

	//$(".top-block-menu")[0].animate({"opacity": "1"}, 300);
	//$(".top-block-menu").animate({"opacity": 1}, 300, function () {

	//})
});

$("#service").click(function(e){
	e.preventDefault(); 
	$('html, body').animate({
		scrollTop:$('#service').offset().top
		}, 500);
})
*/


//11 lesson
/*
 $("#service").click(function(e){
     e.preventDefault();
     console.log($(this).data('to'));
    
    
     

 })
*/

const setting = {
    "speed" : 500
 }

 function setSpeedScroll(speedScroll){
   console.log('setSpeedScroll run');
   setting.speed = speedScroll;
 }

 $(".top-block-menu__link").click(function(e){
     e.preventDefault();
     console.log($(this).data('to'));
     if($(this).data('to')){
         console.log('Не пустое значение!');
         $('html, body').animate({
             scrollTop:$('.' + $(this).data('to')).offset().top
         }, setting.speed);

     }else{
         console.log('Пустое значение!')
     }

 })

 




// простые примеры функций

function calculSumm(numb1, numb2){
    return numb1 + numb2;
}

function editStr(str1, str2){
    if(str1=='Имя'){
        str2+= " отредактированно";
        return str2
    }
    return "В данную функцию было передано значение НЕ имя";
}

/*
function buyGood (good, user){
    if(good="Машина"){
        return 'Уважаемый, ' + user + ' Машина на складе ЕСТЬ!';
    }else if(good=='DVD'){
        return 'Уважаемый, ' + user + ' DVD на складе закончились!';
    }else 'Уважаемый, ' + user + 'товар не определен'
}
*/

/*
function buyGood (good, user){
    if(good=="Машина" && user =='Александр'){
        return 'Уважаемый, ' + user +'  " + good + " ' Машина на складе ЕСТЬ!';
    }else{
        return 'Ошибка в системе'
    }
}*/
    //3 variant phynkchii
    
function buyGood(good, user, count){
switch(good){
    case "Машина":
        console.log("Покупка '+ good' сейчас не доступна");
    break;
    case "Холодильник":
        let support;
        (count>1) ? support="Штуки": support='Штук'; 
        console.log("Покупка холодильника доступна сейчас" + count + ' штуки');
    break;
    case "Газовая плита":
        console.log("Покупка машины сейчас доступна");
    break;
}
}



$('#check').on( "click", function() {
    let login = $("#login"),
        password = $("#password"),
        alertMessage = $("#alertMessage");
       
    if (login.val() && password.val()) {
        login.removeClass('invalid');
        password.removeClass('invalid');
        alertMessage.removeClass('show');
        if (login.val() === 'Admin' && password.val() === 'Admin') {
            alert("Welcom");
        }
        else {
            alert ('Введен неверный логин или пароль')
        }
    }
    else {
        if (login.val()) {
            login.removeClass('invalid')
        } else {
            login.addClass('invalid');
            alertMessage.addClass('show');
        }
        if (password.val()) {
            password.removeClass('invalid');
        } else {
            password.addClass('invalid');
            alertMessage.addClass('show');
        }
    }
});

//12 lesson
/*
function validation(that){
	console.log('validation form');
	if( nameForm. length < 50 ){

		if( passForm.length < 50){
			//alert('пароль и логин введен корректно')
			if(passForm == password && nameForm == login){
				alert ('авторизация прошла успешно');

			}else ('логин или пароль введены не корректно')
		}else 
		alert('не корректное число в поле ПАРОЛЬ');
		
	}else{
		alert('не корректное число в поле ЛОГИН');
	}
}
	

//slaider 
let index=0;


	$( '#back' ).click(function(){
		if(index >= 0){
            $('.banner')[0].style.cssText = arrImg[index];
            index--;
        }else{
            //alert('Переход на последний слайд');
            index[arrImg.length -1];
        }
	})
	$("#next").click(function(){
       if(index < arrImg.length -1){
         $('.banner')[0].style.cssText = arrImg[index];
        index++;  
       }else{
          // alert('Переход на первый слайдер');
          index=0;
       }
        
	})


    let arrImg = [
        'background: url(./moscow/photos/top.jpg) no-repeat;',
       'background: url(https://cdn2.tu-tu.ru/image/pagetree_node_data/1/3849d53a71ff66abd9233d1d6ec0d1a9/) no-repeat;'
    ]


const arr = [1, 2, 3, 4, 5, 6];  
let indexArray= 0;

function editArr(val){
    indexArray=val;
}

for(let i = 0; i < 10; i++){
    console.log(i);
}
*/