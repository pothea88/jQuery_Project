$(document).ready(function () {
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
        success: (getData) => getAllRecipe(getData.recipes),
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
//get recipes to select option
var allData = [];
function getAllRecipe(recipe) {
    allData = recipe;
    var option = "";
    recipe.forEach(select => {
        option +=`
            <option value="${select.id}">${select.name}</option>;
        `
    });
    $('#selected').append(option);
    getRecipe(allData);
};
//get recipe
var getRecipe = (data) => {
    data.forEach(element => {
        $("#selected").on('change',function(){
            var selectId = $('#selected').val();
            if(element.id == selectId){
                computeRecipe(element);
                getIngredient(element);
                // computeIngredient();
            };
        });
    });
}
// conpute recipe
var computeRecipe = (outPut) => {
        var getOutPut = "";
        var getNumber = "";
        var getStep = "";
        getOutPut += `
        <h3 style="font-size:25px;">
            ${outPut.name}
            <img src="${outPut.iconUrl}" width="200" class="img-fluid rounded">
        </h3> 
       
    `;
    getNumber += `
    <input type="text" id="number" class="text-danger border-primary" value="${outPut.nbGuests}" disabled style="text-align:center">
    `;
    getStep += `
        <h5><strong>Instruction</strong></h5>
        ${outPut.instructions}
    `;
    var a1 = new Array();
    a1 = getStep.split("<step>");
    $("#getStep").html(a1.join(" <br> "));
    $('#getInput').html(getNumber);
    $('#result').html(getOutPut);
} 
//get vertical line

//get ingredient
var getIngredient = (ing => {
    var getDisplay = "";
    getDisplay += `
        <h5><strong>Ingredients</strong></h5>
    `;
    ing.ingredients.forEach(display => {
        getDisplay += `
            <tr>
                <td><img src="${display.iconUrl}" class="img-fluid rounded" width="50"></td>
                <td class="text-danger">${display.quantity}</td>
                <td>${display.unit[0]}</td>
                <td>${display.name}</td>
            </tr>
        `;
    });
    $('#getGredient').html(getDisplay);
});
//Increase number of person
function addNumber(getNumAdd) {
    var add = parseInt(getNumAdd) + 1;
    console.log(add);
    if (add <= 15) {
        $('#number').val(add);
        comNumOfUnitAdd(add);
    }
}
//decrease number of person
function minusNumber(getMi) {
    var minus = parseInt(getMi) - 1;
    if (minus >= 1) {
        $('#number').val(minus);
    }
}
//compute Number of Unit Add
var comNumOfUnitAdd = (com) => {
    
}




