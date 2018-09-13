$("devourBurger").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var devouredUpdate = $(this).data("devouredUpdate");

    var updatedBurger = {
        devoured: devouredUpdate
    };

    $.ajax("/burgers/:id" + id, {
        type: "PUT",
        data: updatedBurger
    }).then(function(){
        console.log("The burger has been updated to", devouredUpdate)
    });
})