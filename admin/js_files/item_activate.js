var databaseRef = firebase.database().ref('item');
document.getElementById('fileButton').onchange = function(event){
    selectedFile = event.target.files[0];
}
// var databaseRef_women = firebase.database().ref();


firebase.auth().onAuthStateChanged(function(user) {
    
    var url_string = window.location.href;
    var url = new URL (url_string);
    var id = url.searchParams.get('id');
    var uid = url.searchParams.get('uid');
    
    
    databaseRef.child('inactive').child(id).on('value',function(update_snapshot){
        
        
        document.getElementById('item_name').value = update_snapshot.child('item_name').val();
        document.getElementById('item_description').value = update_snapshot.child('item_description').val();
        document.getElementById('item_category').value = update_snapshot.child('item_category').val();
        document.getElementById('item_subcategory').value = update_snapshot.child('item_subcategory').val();
        document.getElementById('item_quantity').value = update_snapshot.child('item_quantity').val();
        document.getElementById('item_price').value = update_snapshot.child('item_price').val();
        document.getElementById('item_size').value = update_snapshot.child('item_size').val();
        document.getElementById('image_x').value = update_snapshot.child('item_image').val();            
                  

        
        var img = document.getElementById('loading_gif');
        img.style.visibility = 'hidden';
        
    });
    databaseRef.child('inactive').child(id).child('deals_of_the_day').on('value',function(update_checkbox_snapshot){
        
        
        var update_checkbox = update_checkbox_snapshot.val();
        
        console.log(update_checkbox);
        if(update_checkbox == true)
        {
            
            var check=document.getElementsByTagName('input');
            for(var i=0;i<check.length;i++){
                if(check[i].type=='checkbox')
                {
                    // console.log(i);
                    // check[i].checked=true;
                    document.getElementById('dod').checked=true;
                }
                else
                {
                    // alert('in checkbox');
                    // var uncheck=document.getElementsByTagName('input');
                    // for(var i=0;i<uncheck.length;i++){
                    //     if(uncheck[i].type=='checkbox')
                    //     {
                    //         console.log(i);
                    //         uncheck[i].checked=false;
                    //     }
                    // }
                    document.getElementById('dod').removeAttribute('checked');
                }
            }
        }
        else
        {
            
            
        }
        
    });

    firebase.auth().onAuthStateChanged(function(user) {
        
        databaseRef.child('inactive').child(id).child('recommended').on('value',function(update_checkbox_snapshot_rec){
            
            var update_checkbox_rec = update_checkbox_snapshot_rec.val();
            
            console.log(update_checkbox_rec);
            if(update_checkbox_rec == true)
            {
                
                var check_rec=document.getElementsByTagName('input');
                for(var i=0;i<check_rec.length;i++){
                    if(check_rec[i].type=='checkbox')
                    {
                        document.getElementById('rec').checked=true;
                    }
                    else
                    {
                        document.getElementById('rec').removeAttribute('checked');
                    }
                }
            }
            else
            {
                
                
            }
            
        });
        
    });
    
    
    
    document.getElementById('btn_active').onclick = function(){
        
        
        databaseRef.child('inactive').child(id).on('value',function(order_snapshot){
            var order = order_snapshot.val();

            
            var image_link = order_snapshot.child('optional_image').val();

            
            //var push_key = id.val();
            // firebase.database().ref().child('item').child('Girls').child(id);
            // alert(ref1.item_status);
            // alert(id.item_status);
            // alert(item_name);
            
            
        });
        var item_name = document.getElementById('item_name').value;
            var item_description = document.getElementById('item_description').value;
            var item_category = document.getElementById('item_category').value;
            var item_subcategory = document.getElementById('item_subcategory').value;
            var deals_of_the_day = document.getElementById('dod').checked;
            var recommended = document.getElementById('rec').checked;
            var item_quantity = document.getElementById('item_quantity').value;
            var item_price = document.getElementById('item_price').value;
            var item_size = document.getElementById('item_size').value;
            var image_link = document.getElementById('image_x').value;
        
            databaseRef.child(item_category).push({
                item_name : item_name,
                item_description : item_description,
                item_subcategory : item_subcategory,
                deals_of_the_day : deals_of_the_day,
                recommended : recommended,
                item_quantity : item_quantity,
                item_price :  item_price,
                item_size : item_size,
                optional_image : image_link
            });
        firebase.database().ref().child('item').child('inactive').child(id).remove(function(){
            // alert('Removed');
            window.location.href = 'index.html'; 
        });
        
        
        
    }
    
});
