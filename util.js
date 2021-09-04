function sum_array(ar) {
    var total = 0;
    ar.forEach(element => {
        total += element;
    });
    return total;
}
module.exports = {
    add_numbers : sum_array
}