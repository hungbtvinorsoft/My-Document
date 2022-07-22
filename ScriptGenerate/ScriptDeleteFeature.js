
// var domain = "http://ptfv.tdg.vinorsoft.com/backend/";
var domain = "http://45.119.215.79/thamdinhgia/";
// var domain = "https://localhost:44378/";
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6WyJiNzZmOTMxYS00NTgzLTRiYzQtYTQ0YS1lODlkNTMxMGY5Y2EiLCJiNzZmOTMxYS00NTgzLTRiYzQtYTQ0YS1lODlkNTMxMGY5Y2EiXSwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJJc0Jsb2NrZWQiOiJGYWxzZSIsIm5iZiI6MTY1ODQ3MjIwOSwiZXhwIjoxNjU4NDc4MjA5LCJpYXQiOjE2NTg0NzIyMDksImlzcyI6IkNvcmVJZGVudGl0eSIsImF1ZCI6IkNvcmVJZGVudGl0eVVzZXIifQ.heIDIwJ0z_IsKJW5EAh84AE8jqFQfCl_73CTf2_R0HM"

var Excutor = async function () {

    var features = (await getFeatures()).map(x => x.id);

    for (let index = 0; index < features.length; index++) {
        let element = features[index];
        await DeleteFeatureById(element)

        console.log((((index + 1) * 100) / features.length).toFixed(2) + "%")
    }
}

var DeleteFeatureById = function (featureId) {
    return new Promise(resolve => {
        fetch(`${domain}api/v1/ManageSystem/Features/${featureId}`, {
            "headers": {
                "accept": "*/*",
                "accept-language": "vi,en;q=0.9",
                "authorization": `bearer ${token}`,
                "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://localhost:44378/swagger/index.html",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "DELETE",
            "mode": "cors",
            "credentials": "include"
        }).then(result => {
            if (result.succeeded) {
                return resolve(result.data);
            }
            return resolve(false);
        });
    });
}

var getFeatures = function () {
    return new Promise(resolve => {
        fetch(`${domain}api/v1/ManageSystem/Features`, {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "authorization": `bearer ${token}`,
            },
            "referrer": `${domain}swagger/index.html`,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        }).then(response => response.json())
            .then(result => {
                if (result.succeeded) {
                    return resolve(result.data);
                }
                return resolve(false);
            });
    });
}
Excutor();