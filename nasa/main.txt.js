var url = "https://api.nasa.gov/planetary/apod?api_key=S3Zsfz4qJ1OSeELVfKEpZiquo39Qt97XlZf9CjZq";


$.ajax({
  url: url,
  success: function(result){
  if("copyright" in result) {
    $("#copyright").append("Copyright: " + result.copyright);
  }
  else {
    $("#copyright").append("Copyright: " + "Public Domain");
  }
  
  if(result.media_type == "video") {
    $("#apod_img_id").css("display", "none"); 
    $("#apod_vid_id").attr("src", result.url);
    $("body").css("background-color","#000000");
  }
  else {
    $("#apod_vid_id").css("display", "none"); 
    $("#apod_img_id").attr("src", result.hdurl);
    $("body").css("background-image","url("+ result.hdurl +")");
  }
  
  

  $("#apod_date").append(result.date);
  $("#apod_title").append(result.title);
  $("#apod_explanation").append(result.explanation);
  
  $("#reqObject").append(url);
  $("#returnObject").append(JSON.stringify(result, null, 4));
  }
});


 // $('#id1').val(inputvalue);


//background: url(images/bg.jpg) no-repeat center center fixed

    