// $(document).ready( () => {
//     $('#selected').on('change', () => {
//         var recipes = $('#selected').val();
//         if(recipes == 0){
//             var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json"; 
//             $.ajax({
//                 dataType: 'json',
//                 url:url,
//                 success: (data) =>{
//                     var result = "";
//                     data.recipes.forEach(element => {
//                         console.log(element.ingredients);
//                         if(element.id == 0){
//                             result += `
//                                 ${element.name}
//                                 <img src="${element.iconUrl}" width="270">
//                                 <p class="text-center mt-5">Number of persons: ${element.nbGuests}</p>
//                             `;
//                             var getGredient = "";
//                             getGredient +=`
//                                 <p><strong>Ingredients</strong></p>
//                             `
//                             element.ingredients.forEach(datas =>{
//                                 if(element.id == 0){
//                                     getGredient +=`
//                                     <img src="${datas.iconUrl}" width="50" class="mb-3">
//                                     ${datas.quantity}
//                                     ${datas.unit}
//                                     ${datas.name}<br>
//                                 `;
//                                 }
//                             });
//                             $('#getGredient').html(getGredient);
//                         }
//                     });
                    
//                     $('#result').html(result);
//                 }
//             })
           
//         }else{
//             var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json"; 
//             $.ajax({
//                 dataType: 'json',
//                 url:url,
//                 success: (data) =>{
//                     var result = "";
//                     data.recipes.forEach(element => {
//                         if(element.id == 1){
//                             result += `
//                             ${element.name}
//                             <img src="${element.iconUrl}" width="270">
//                             `;
//                             var getGredient = "";
//                             getGredient +=`
//                                 <p><strong>Ingredients</strong></p>
//                             `
//                             element.ingredients.forEach(datas =>{
//                                 if(element.id == 0){
//                                     getGredient +=`
//                                     <img src="${datas.iconUrl}" width="50" class="mb-3">
//                                     ${datas.quantity}
//                                     ${datas.unit}
//                                     ${datas.name}<br>
//                                 `;
//                                 }
//                             });
//                             $('#getGredient').html(getGredient);
//                         }
//                     });
//                     $('#result').html(result);
//                 }
               
//             })
//         }
//     });
// });



 