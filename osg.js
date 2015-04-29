    $(document).ready(function () {  
        $.ajax({  
            type: "GET",  
            url: "https://wdciw19.wdf.sap.corp:1033/sap/opu/odata/CPD/SC_PROJ_ENGAGMNT_MAINT_SRV/ProjectSearchSet?$format=json",  
            contentType: "application/json; charset=utf-8",  
            dataType: "json",  
            success: function (response) {  
                 var  result = response.d.results;
		 
			 var text = "";
			var i;
			for (i = 0; i < 5; i++) {
					text +=  i +"."+ result[i].Title + result[i].StageDesc+ result[i].ProjMngrName+"<br>";
				}
			document.getElementById("demo").innerHTML = text;
            },  
            failure: function (response) {  
                alert(response.d);  
            }  
        });  
    });  
  
