function arraynum(a) {
    var number = 0
    for(var i = 0; i < a.length; i++){
        number += a[i];
    }
    return number
}
arraynum([7, 2, 8])
