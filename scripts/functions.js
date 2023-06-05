// Do some stuff when page hmtl page is launched
$(document).ready(function () {

    //$("#headerTitle").hide(300).show(1500);
    // calling update currency rates function
    updateCurrencyRates();

    // If you want to fetch data from the file 
    // call fetch data function instead of showFoodMenu
    //fetchData();
    automate();
});

// ***************************************************************************************
// this function calls showfoodmenu 3000 milisecond to get new changes                   *
// made on demo.xml                                                                      *
// ***************************************************************************************
function fetchData() {
    updateCurrencyRates();
    setTimeout(function () {
        automate();
    }, 1000*60*30);
}


// **************************************************************************************
// read data from tcmb rates using Jquery | AJAX                                          *
// **************************************************************************************
function updateCurrencyRates() {

    $.ajax({
        type: "GET",
        url: "today.xml",
        dataType: "xml",
        error: function (e) {
            alert("An error occurred while processing XML file");
            console.log("XML reading Failed: ", e);
        },

        success: function (response) {
            $date=$(response).find('Tarih_Date').attr('Date');
            $date_array=$date.split("/")
            $rate_date =new Date();
            $rate_date.setFullYear(parseInt($date_array[2]));
            console.log($date_array[2]);
            $rate_date.setMonth(parseInt($date_array[0]));
            $rate_date.setDate(parseInt($date_array[1]));
            $("span.date").text($rate_date.getDate()+"."+$rate_date.getMonth()+"."+$rate_date.getFullYear());
            $(response).find('Currency').each(function () {
                var _currency = $(this).attr('CurrencyCode').toLowerCase();

                var _selling = parseFloat($(this).find('ForexSelling').text()).toFixed(2);
                var _buying = parseFloat($(this).find('ForexBuying').text()).toFixed(2);

                // add content to the HTML      
                $("#"+_currency + "_selling").text(_selling);
                $("#"+_currency + "_buying").text(_buying);
            });
        }
    });
}

// ***************************************************************************************
// this function calls showfoodmenu 3000 milisecond to get new changes                   *
// made on demo.xml   
// this function calculates how many miliseconds to tomorrow at 15:30                                                                    *
// ***************************************************************************************
function automate() {
    //https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
    const current_date = new Date();
    const tomorrow=new Date(current_date);
    //https://flaviocopes.com/how-to-get-tomorrow-date-javascript/
    tomorrow.setDate(current_date.getDate()+1);
    tomorrow.setHours(16,0,0,0);
    //https://www.yandex.com.tr/search/?text=translate
    const x = tomorrow-current_date;
    setTimeout(function () {
        fetchData();
    }, x);
}