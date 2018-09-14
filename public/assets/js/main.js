
$(function () {
    $(".devourBurger").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var devouredUpdate = $(this).data("devouredUpdate");

        var updatedBurger = {
            devoured: devouredUpdate
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updatedBurger
        }).then(function () {
            console.log("The burger has been updated to", devouredUpdate)
            location.reload();
        });
    })

    $(".burgerAddForm").on("submit", function(event){
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burgerName").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers/", {
            type: "POST", 
            data: newBurger
        }).then(function(){
            console.log("New Burger made!");
            location.reload();
        })
    })
})
