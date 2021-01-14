var year = 2021; //entrada para teste

function centuryFromYear(year) {
    if(year % 100 != 0){
        var century = parseInt((year / 100) + 1);
    } else{
        century = (year / 100);
    }
    return century;
}

console.log(centuryFromYear(year));