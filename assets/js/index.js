$("#add_user").submit(function(event){
    var request = {
        "url" : "http://localhost:3000/api/users/",
        "methode" : "POST",
    }
    if (confirm("do you really want to add this user")){
        $.ajax(request).done(function(response){
            alert("Data Inserted Successfuly!");
            location.reload();
    
    })
}
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }
    if(confirm("do you really want to update this user ?")){
    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
        location.reload();
    })
}

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}