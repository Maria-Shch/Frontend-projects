//Вывести на экран самый частовстречающийся символ в строке

let divReplace = document.getElementById('fieldest__d-2-stringReplace');

buttonReplaceRes.addEventListener("click", buttonReplaceResClick);

function buttonReplaceResClick() {

    //Очищаю блок, хранящий введённые строки
    while (divReplace.firstChild) {
        divReplace.removeChild(divReplace.firstChild);
    }

    if(document.getElementById("inputStringSecond").value.trim() != "" &&  document.getElementById("inputChar").value.trim()!= "")
    {
        let inputStringSecond = document.getElementById("inputStringSecond").value.trim();
        let charUser = document.getElementById("inputChar").value.trim();

        let pReplace = document.createElement('p');
        pReplace.setAttribute("class", "res");
        pReplace.textContent = "Исходная строка: " + inputStringSecond;
        divReplace.appendChild(pReplace);

        let setReplace = searchChars(inputStringSecond); 
        c = setReplace.values().next().value; //Получаю первое значение из Seta с асмыми частовстречающимися символами
        
        let pReplace2 = document.createElement('p');
        pReplace2.setAttribute("class", "res");
        pReplace2.textContent = "Ваш символ: " + charUser;
        divReplace.appendChild(pReplace2);

        String.prototype.replaceAll = function(search, replacement) {
            let target = this;
            return target.split(search).join(replacement);
        };

        let pReplace3 = document.createElement('p');
        pReplace3.setAttribute("class", "res");
        pReplace3.textContent = "Результат: " + inputStringSecond.replaceAll(c, charUser);
        divReplace.appendChild(pReplace3);
    }
    else
    {
        let pReplace = document.createElement('p');
        pReplace.setAttribute("class", "res-error");
        pReplace.textContent = "Вы не ввели строку или символ";
        divReplace.appendChild(pReplace);
    }
    
    //Очищаю поля ввода
    document.getElementById("inputStringSecond").value = '';
    document.getElementById("inputChar").value = '';
}

