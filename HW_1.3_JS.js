// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// При этом первым делом в функции проверялся тип данных. И если он не Number - кидается ошибка.
//* Преобразовать таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
// Вывести в консоль результат работы функции с возрастами 17, 18, 61
// 26. Создать переменную “age_1” и присвоить ей значение 10
// 27. Создать переменную “age_2” и присвоить ей значение 18
// 28. Создать переменную “age_3” и присвоить ей значение 60
// 29. Создать if в котором будите проверять значение переменной age_1
// 30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
// 31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
// 32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
// 33. Иначе выводите “Technical work”.

function checkAge(age) {
    let age_1 = Number(age)
    let age_2 = 18
    let age_3 = 60
    if (age_1 > 0) {
        if (age_1 < age_2) {
            return("You don\’t have access cause your age is " + age_1 + " It\’s less then")
        } else if (age_1 >= age_2 && age_1 < age_3) {
            return("Welcome !")
        } else if (age_1 > age_3) {
            return("Keep calm and look Culture channel")
        }
    } else return("Technical work")
    }
    console.log(checkAge('2'))
    console.log(checkAge(17))
    console.log(checkAge(18))
    console.log(checkAge(61))
    console.log(checkAge(-5))