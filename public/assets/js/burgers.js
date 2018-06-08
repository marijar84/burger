// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".update-burger").on("click", function (event) {
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
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var burgerName = $("#bur").val().trim();

    if (burgerName == "") {
      alert("Please, fill out the Burger Name");
      return;
    }

    var newBurger = {
      burger_name: burgerName,
      devoured: 0
    };

    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
