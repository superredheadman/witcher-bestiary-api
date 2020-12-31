$(document).ready(function(){
    var loading = false;

    for(var i=1;i<=6;i++){

        $('.PokemonImgs').append(`
        <img class="pokemon" src="https://raw.githubusercontent.com/superredheadman/witcher-bestiary-api/master/img/` + i + `.png"/>
        `);
        
    }

    if(loading){
        setInterval(function(){
            toggleLights();
        },1000)
    }

    $('.pokemon').on('click',function(){
        loading = true;
        var id = $(this).attr('src');
        id = id.split('/pokemon/');
        id = id[1].split('.');
        id = id[0];
        //id = id.slice(id.length-10, id.length);
        console.log(id);


        $.get("https://raw.githubusercontent.com/superredheadman/witcher-bestiary-api/master/db.json", function(data, status){
            console.log(status);
            console.log(data);

            if(status === "success"){
                $('#PokemonName').text(data.name);
                $('.PokedexImg').attr('src', data.sprites.front_default);
                $('#PokedexHeight').text(data.height);
                $('#PokedexWeight').text(data.weight);

                $('.PokedexList').html("");
                for(var x=0;x<data.types.length;x++){
                    $('.PokedexList').append(`
                        <li>`+ data.types[x].type.name +`</li>
                    `);
                }

            }


        }, "json");

    });

});

function toggleLights(){
    
}