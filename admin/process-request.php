<?php
if(isset($_POST["category"])){
    // Capture selected country
    $category = $_POST["category"];
    
    // Define country and city array
    $categoryArr = array(
        "Men" => array("Sherwani", "Blazer", "Kurta-pyjama","Nehru-Jacket", "Suit","Men-Accessories"),
        "Women" => array("Anarkali" , "Lehenga", "Gown", "Sarees", "Top-skirts","Women-Accessiories"),
        "Boy" => array("Boy"),
        "Girls" => array("Girls")
    );
    
    // Display city dropdown based on country name
    if($category !== 'Select'){
        echo "<label>Subcategory:</label>";
        echo "<select id='response_val'>";
        foreach($categoryArr[$category] as $value){
            echo "<option value='$value'>". $value . "</option>";
        }
        echo "</select>";
    } 
}
?>