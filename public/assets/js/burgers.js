// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".update-burger").on("click", function (event) {
    alert("Hola");
    var id = $(this).data("id");
    var newdevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: newdevoured
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        //console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bur").val().trim(),
      devoured: $("[name=devoured]:checked").val()
    };

    console.log("newBurger", $("[name=devoured]:checked").val());

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
