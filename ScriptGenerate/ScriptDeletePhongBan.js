var domain = "http://ptfv.tdg.vinorsoft.com/backend/";
// var domain = "http://45.119.215.79/thamdinhgia/";
// var domain = "https://localhost:44378/";
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6WyJiNzZmOTMxYS00NTgzLTRiYzQtYTQ0YS1lODlkNTMxMGY5Y2EiLCJiNzZmOTMxYS00NTgzLTRiYzQtYTQ0YS1lODlkNTMxMGY5Y2EiXSwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJJc0Jsb2NrZWQiOiJGYWxzZSIsIm5iZiI6MTY1NjkyMzU3NywiZXhwIjoxNjU2OTI5NTc3LCJpYXQiOjE2NTY5MjM1NzcsImlzcyI6IkNvcmVJZGVudGl0eSIsImF1ZCI6IkNvcmVJZGVudGl0eVVzZXIifQ.GORHtZJsabaH7Ygj9WjTVJFsL9Qk-8IsDN83okpdUvU"

var Excutor = async function () {
    var phongBans = (await getPhongbans()).map(x => x.id);

    for (let index = 0; index < phongBans.length; index++) {
        let element = phongBans[index];
        await DeletePhongBanById(element)

        console.log((((index + 1) * 100) / phongBans.length).toFixed(2) + "%")
    }
}

var DeletePhongBanById = function (phongBanId) {
    return new Promise(resolve => {
        fetch(`${domain}api/v1/PhongBans/${phongBanId}`, {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "authorization": `bearer ${token}`,
                "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Microsoft Edge\";v=\"103\", \"Chromium\";v=\"103\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": `${domain}swagger/index.html`,
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

var getPhongbans = function () {
    return new Promise(resolve => {
        fetch(`${domain}api/v1/PhongBans?PageSize=100`, {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "authorization": `bearer ${token}`,
                "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Microsoft Edge\";v=\"103\", \"Chromium\";v=\"103\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
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