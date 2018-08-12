 
$(document).ready(function() {
    
    $(".burg-form").on("submit", function(event) {
      event.preventDefault();
  
      var burger_id = $(this).children(".burgerid").val();
      console.log(burger_id);
      $.ajax({
        method: "PUT",
        url: "/burgers/" + burger_id
      }).then(function(data) {
      
        location.reload();
      });
  
    });
  });