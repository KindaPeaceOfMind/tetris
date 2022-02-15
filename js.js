///Создание таблицы     //строка-столб
let table = document.querySelector('#table');
for (var i = 0; i < 15; i++)//Строка
{
	let tr = document.createElement('tr');
	for (var j = 0; j < 10; j++)//Столбец
	{
		let td = document.createElement('td');
		tr.appendChild(td);
		td.id = i + "-" + j; //ID i-j
	}
	table.appendChild(tr);
}

//Создание границы
for (var j = 0; j < 10; j++)
{
	document.getElementById("4-"+j).style.borderColor = "rgb(170, 0, 255)";
}



///Создание фигуры
var win = true;
var score = 0;
let arr = new Array();
function CreateFig()
{
	for (var i = 0; i < arr.length; i = i + 2) {//Закрашивание прошлой фигуры
		Zak(arr[i], arr[i + 1], "#FF0");
	}
	
	for (j = 0; j < 10; j++)
	{
		if (document.getElementById("4-" + j).style.backgroundColor == "rgb(255, 255, 0)")
		{
			win = false;
		}
	}
	if (win) {
		switch (Math.floor(Math.random() * 7)) {//Рандом
			case (0): {
				arr[0] = 2;//Создавать снизу вверх  //Создавать слева направо
				arr[1] = 5;
				Zak(2, 5, "#F00");
				arr[2] = 1;
				arr[3] = 5;
				Zak(1, 5, "#F00");
				arr[4] = 0;
				arr[5] = 5;
				Zak(0, 5, "#F00");
				arr[6] = 0;
				arr[7] = 6;
				Zak(0, 6, "#F00");
			} break //Г

			case (1): {
				arr[0] = 1;
				arr[1] = 5;
				Zak(1, 5, "#F00");
				arr[2] = 1;
				arr[3] = 6;
				Zak(1, 6, "#F00");
				arr[4] = 0;
				arr[5] = 5;
				Zak(0, 5, "#F00");
				arr[6] = 0;
				arr[7] = 6;
				Zak(0, 6, "#F00");
			} break //[]

			case (2): {
				arr[0] = 1;
				arr[1] = 6;
				Zak(1, 6, "#F00");
				arr[2] = 1;
				arr[3] = 5;
				Zak(1, 5, "#F00");
				arr[4] = 0;
				arr[5] = 4;
				Zak(0, 4, "#F00");
				arr[6] = 0;
				arr[7] = 5;
				Zak(0, 5, "#F00");
			} break //Z

			case (3): {
				arr[0] = 1;
				arr[1] = 4;
				Zak(1, 4, "#F00");
				arr[2] = 1;
				arr[3] = 5;
				Zak(1, 5, "#F00");
				arr[4] = 0;
				arr[5] = 5;
				Zak(0, 5, "#F00");
				arr[6] = 0;
				arr[7] = 6;
				Zak(0, 6, "#F00");
			} break //S

			case (4): {
				arr[0] = 2;
				arr[1] = 5;
				Zak(2, 5, "#F00");
				arr[2] = 1;
				arr[3] = 5;
				Zak(1, 5, "#F00");
				arr[4] = 0;
				arr[5] = 4;
				Zak(0, 4, "#F00");
				arr[6] = 0;
				arr[7] = 5;
				Zak(0, 5, "#F00");
			} break //7

			case (5): {
				arr[0] = 1;
				arr[1] = 5;
				Zak(1, 5, "#F00");
				arr[2] = 0;
				arr[3] = 5;
				Zak(0, 5, "#F00");
				arr[4] = 0;
				arr[5] = 4;
				Zak(0, 4, "#F00");
				arr[6] = 0;
				arr[7] = 6;
				Zak(0, 6, "#F00");
			} break //T

			case (6): {
				arr[0] = 3;
				arr[1] = 5;
				Zak(3, 5, "#F00");
				arr[2] = 2;
				arr[3] = 5;
				Zak(2, 5, "#F00");
				arr[4] = 1;
				arr[5] = 5;
				Zak(1, 5, "#F00");
				arr[6] = 0;
				arr[7] = 5;
				Zak(0, 5, "#F00");
			} break //I
		}
	}
	else {
		alert("You adopted!");
	}
}


///Функция закрашивания
function Zak(a,b,c)
{
	document.getElementById(a + "-" + b).style.backgroundColor = c;
}

///Шаг таймера
function Timer()
{
	score = score + 1;
	
	

	if (win)
	{
		var prov = false;
		for (var i = 0; i < arr.length; i = i + 2) //Для каждого квадрата в массиве
		{
			//document.getElementById(arr[i] + 1 + "-" + arr[i + 1]).style.backgroundColor == rgb(255, 0, 0)

			if (arr[i] == 14|| //Проверка последней строки
				document.getElementById(arr[i] + 1 + "-" + arr[i + 1]).style.backgroundColor == "rgb(255, 255, 0)"//проверка квадрата снизу
				)
			{
				prov = true;
			}
		}

		if (prov)//Если тот занят, то создаём новую фигуру
		{
			CreateFig();
			prov = false;
		}
		else {//Иначе двигаем фигуру вниз
			for (var i = 0; i < arr.length; i = i + 2)
			{
				Zak(arr[i], arr[i + 1],"#FFF");
				arr[i] = arr[i] + 1;
			}
			for (var i = 0; i < arr.length; i = i + 2) {
				Zak(arr[i], arr[i + 1],"#F00");
		    }
		}

		Line();
		document.getElementById("stats").innerHTML = "Your score: "+score;
	}
	
}

///Линия
function Line()
{
	var busy = 0;
	var bool = false;
	for (var i = 0; i < 15; i++)
	{
		for (var j = 0; j < 10; j++)
		{
			if (document.getElementById(i + "-" + j).style.backgroundColor == "rgb(255, 255, 0)")
			{
				busy++;
			}
		}
		if (busy == 10)
		{
			score = score + 100;
			for (var i2 = i; i2 > 0; i2--) {
				for (var j = 0; j < 10; j++) {
					document.getElementById(i2 + "-" + j).style.backgroundColor = document.getElementById(i2 - 1 + "-" + j).style.backgroundColor;
				}
			}
		}
		busy = 0;
	}

	
		
	
}

///Обработка клавишей
function ctrl(e)
{
	if (win)
	{
		switch (e.key) {
			case ("ArrowLeft"): {
				Left();
			} break
			case ("ArrowRight"): {
				Right();
			} break
			case ("ArrowUp"): {
				Tilt();
			} break
			case ("ArrowDown"): {
				Timer();
			} break
		}
	}
}

///Лево
function Left()
{
	var prov = false;
	for (var i = 0; i < arr.length; i = i + 2) //Для каждого квадрата в массиве
	{
		if (arr[i+1] == 0||//Проверка пустоты слева
			document.getElementById(arr[i] + "-" + (arr[i + 1] - 1)).style.backgroundColor == "rgb(255, 255, 0)"//проверка квадрата слева
		) {
			prov = true;
		}
	}
	if (prov)//Если тот занят, то нифига не делаем
		{ ;}
		else {//Иначе двигаем фигуру влево
			for (var i = 0; i < arr.length; i = i + 2) {
				Zak(arr[i], arr[i + 1], "#FFF");
				arr[i + 1] = arr[i + 1] - 1;
			}
			for (var i = 0; i < arr.length; i = i + 2) {
				Zak(arr[i], arr[i + 1], "#F00");
			}
		}
}

///Право
function Right() {
	var prov = false;
	for (var i = 0; i < arr.length; i = i + 2) //Для каждого квадрата в массиве
	{
		if (arr[i + 1] == 9 ||//Проверка пустоты справа
			document.getElementById(arr[i] + "-" + (arr[i + 1] + 1)).style.backgroundColor == "rgb(255, 255, 0)"//проверка квадрата справа
		) {
			prov = true;
		}
	}
	if (prov)//Если тот занят, то нифига не делаем
	{ ; }
	else {//Иначе двигаем фигуру вправо
		for (var i = arr.length - 2; i >= 0; i = i - 2)
		{
			Zak(arr[i], arr[i + 1], "#FFF");
			arr[i + 1] = arr[i + 1] + 1;
		}
		for (var i = arr.length - 2; i >= 0; i = i - 2)
		{
			Zak(arr[i], arr[i + 1], "#F00");
		}
	}
}

//Поворот
function Tilt()
{
	var s = arr[2];
	var s1 = arr[3]
	var s0 = 0;
	var prov = true;

	for (var i = 0; i < arr.length; i = i + 2)
	{
		if (document.getElementById((-arr[i + 1] + s1 + s) + "-" + (arr[i] - s + s1)).style.backgroundColor == "rgb(255, 255, 0)")
		{
			prov = false;
		}
	}
	if (prov) {
		for (var i = 0; i < arr.length; i = i + 2)
		{
			Zak(arr[i], arr[i + 1], "#FFF");
		}
		for (var i = 0; i < arr.length; i = i + 2)
		{
			arr[i] = arr[i] - s;
			arr[i + 1] = arr[i + 1] - s1;

			s0 = arr[i + 1]
			arr[i + 1] = arr[i];
			arr[i] = -s0;

			arr[i] = arr[i] + s;
			arr[i + 1] = arr[i + 1] + s1;
		}

		for (var i = 0; i < arr.length; i = i + 2)
		{
			Zak(arr[i], arr[i + 1], "#F00");
		}
		prov = true;
	}
}


function Start()
{
	CreateFig();

	///Нажатие клавиши
	addEventListener("keydown", ctrl);

	///Планирование таймера
	let timer = setInterval(Timer, 300);//1000 = 1сек
}