(function() {

    // Key Check Process

    $.getJSON("../developer/keys.json", function(code) {

        var key = code.key
        var url = code.url
        var prev = document.referrer

        function searchKey(obj, key = 'key') {
            return Object.keys(obj).reduce((finalObj, objKey) => {
                if (objKey !== key) {
                    return searchKey(obj[objKey]);
                } else {
                    return finalObj = obj[objKey];
                }
        
            }, [])
        }

        const result = searchKey(code.url);

        if(prev == result) {
            window.location.replace("esp-core.netlify.app/verification/")
        }

        if(!prev == result) {
            window.location.replace("https://esp-core.netlify.app/verification/failed");
        }


    })



    // VPN Check Process

    var ip_log = [
        "",
        "",
    ]

    $.getJSON("https://api.ipify.org?format=json", function(data) {
         
        var IP = data.ip

        if(IP == ip_log) {
            window.location.replace("https://esp-core.netlify.app/verification/failed");
        }

        if(!IP == ip_log){
            history.go(-1)
        }
    })


                

})()