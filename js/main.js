$(document).ready(function () {
    // $('#selected').on('change', () => {
    //     var recipes = $('#selected').val();
    //     chooseRecipe(recipes);
    // });
    requestApi();
    $("#increase").on('click', function () {
        var oldVal = $('#number').val();
        addNumber(oldVal);
    });
    $("#decrease").on('click', function () {
        var getOldVal = $('#number').val();
        minusNumber(getOldVal);
    });
});
//get api
var requestApi = () => {
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success: (getData) => getRecipe(getData),
        error: () => getError()
    });
}
//get url
var getUrl = () => {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}
//getError
var getError = () => console.log("error");
//get recipe
var getRecipe = (data) => {
    data.recipes.forEach(element => {
        $("#selected").on('change',function(){
            var selectId = $('#selected').val();
            console.log(selectId);
            if(element.id == selectId){
                getIngredient(element.ingredients);
                computeRecipe(element);
            };
        });
    });
}
//get ingredient
var getIngredient = (ing) => {
    ing.forEach(item => {
        computeIngredient(item);
    })
}
//conpute recipe
var computeRecipe = (outPut) => {
        var getOutPut = "";
        var getNumber = "";
        var getStep = "";
        getOutPut += `
        ${outPut.name}
        <img src="${outPut.iconUrl}" width="100">
    `;
        getNumber += `
        <input type="text" id="number" value="${outPut.nbGuests}" disabled style="text-align:center">
    `;
        getStep += `
        ${outPut.instructions}
    `;
        var a1 = new Array();
        a1 = getStep.split("<step>,");
        $("#getStep").html(a1.join(" <br> "));
        $('#getInput').html(getNumber);
        $('#result').html(getOutPut);
}
//comput ingredient
var computeIngredient = (display) => {
    var getDisplay = "";
    getDisplay += `
        <img src="${display.iconUrl}" class="img-fluid rounded" width="50">
        ${display.quantity}
        ${display.unit[0]}
        ${display.name}<br>
    `;
    $('#getGredient').append(getDisplay);
}
//Increase number of person
function addNumber(getNumAdd) {
    var add = parseInt(getNumAdd) + 1;
    console.log(add);
    if (add <= 15) {
        $('#number').val(add);
        // comNumOfUnitAdd(add);
    }
}
//decrease number of person
function minusNumber(getMi) {
    var minus = parseInt(getMi) - 1;
    if (minus >= 1) {
        $('#number').val(minus);
    }
}
// choose recipe from select [arrow function]
// var chooseRecipe = (myRecipe) => {
//     var onlyNumber = parseInt(myRecipe);
//     switch (onlyNumber) {
//         case 0:
//             
//             break;
//         case 1:
//             requestApi();
//             break;
//         default: console.warn("You choose nothing");
//     }
// }



