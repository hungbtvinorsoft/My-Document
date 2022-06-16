
// var domain = "http://45.119.215.79/thamdinhgia/";
var domain = "https://localhost:44378/";
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6WyI1MTZmMjBkYS1lNDNlLTQzZjEtMDhhOS0wOGRhM2VjMjI4MDAiLCI1MTZmMjBkYS1lNDNlLTQzZjEtMDhhOS0wOGRhM2VjMjI4MDAiXSwibmFtZSI6Im5oxrAiLCJlbWFpbCI6IkFkbWluQGdtYWlsLmNvbSIsIklzQmxvY2tlZCI6IkZhbHNlIiwibmJmIjoxNjU1MTExNDI4LCJleHAiOjE2NTUxMTc0MjgsImlhdCI6MTY1NTExMTQyOCwiaXNzIjoiQ29yZUlkZW50aXR5IiwiYXVkIjoiQ29yZUlkZW50aXR5VXNlciJ9.qXKXNwYVNmak5XfrLHWVkAKXg1DEu3oycSWrcYBh2YM"

var features = [
    "830b3d6d-3b7c-4a9a-3f7a-08da3f9de53a",
    "94ce4096-8e9f-4e10-ea32-08da4442ccf5",
    "4fe09b3f-06cb-4b0c-3f80-08da3f9de53a",
    "654b690a-d6df-473a-3f81-08da3f9de53a",
    "1ae07b37-bc8a-4552-3f82-08da3f9de53a",
    "16842368-d45d-4c70-3f83-08da3f9de53a",
    "78156584-bfcf-4201-3f84-08da3f9de53a",
    "828b60b7-7ec5-4285-3f85-08da3f9de53a",
    "e1821f34-c6f7-49f1-3f86-08da3f9de53a",
    "7b61ff4c-ada4-4253-3f87-08da3f9de53a",
    "9dba7db8-174f-4376-3f88-08da3f9de53a",
    "18d42d6c-c6de-4f25-3f89-08da3f9de53a",
    "f9ef21d3-dba6-4e4f-3f8a-08da3f9de53a"
]

var Excutor = async function () {
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
Excutor();