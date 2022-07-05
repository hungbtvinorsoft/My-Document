var domain = "http://ptfv.tdg.vinorsoft.com/backend/";
// var domain = "http://45.119.215.79/thamdinhgia/";
// var domain = "https://localhost:44378/";
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6WyJiNzZmOTMxYS00NTgzLTRiYzQtYTQ0YS1lODlkNTMxMGY5Y2EiLCJiNzZmOTMxYS00NTgzLTRiYzQtYTQ0YS1lODlkNTMxMGY5Y2EiXSwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJJc0Jsb2NrZWQiOiJGYWxzZSIsIm5iZiI6MTY1NjkyMzU3NywiZXhwIjoxNjU2OTI5NTc3LCJpYXQiOjE2NTY5MjM1NzcsImlzcyI6IkNvcmVJZGVudGl0eSIsImF1ZCI6IkNvcmVJZGVudGl0eVVzZXIifQ.GORHtZJsabaH7Ygj9WjTVJFsL9Qk-8IsDN83okpdUvU"

var phongBans = [
    {
        "maPhongBan": "11",
        "tenPhongBan": "Phòng giám đốc",
        "ghiChu": "",
        "trangThai": 1,
        "chucDanhs": [
            {
                "phongBanId": "",
                "maChucDanh": "1101",
                "tenChucDanh": "Giám đốc",
                "ghiChu": "",
                "trangThai": 1,
                "setPermission": {
                    "subject": "",
                    "permissions": [
                        {
                            "action": "ds-chung-thu",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-chung-thu",
                            "permissionCode": "PheDuyet"
                        },
                        {
                            "action": "ds-phieu-chi",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-phieu-chi",
                            "permissionCode": "PheDuyetGD"
                        },
                    ]
                }
            },
        ]
    },
    {
        "maPhongBan": "12",
        "tenPhongBan": "Phòng kế toán",
        "ghiChu": "",
        "trangThai": 1,
        "chucDanhs": [
            {
                "phongBanId": "",
                "maChucDanh": "1201",
                "tenChucDanh": "Kế toán trưởng",
                "ghiChu": "",
                "trangThai": 1,
                "setPermission": {
                    "subject": "",
                    "permissions": [
                        {
                            "action": "ds-phieu-thu",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-phieu-thu",
                            "permissionCode": "Update"
                        },
                        {
                            "action": "ds-phieu-thu",
                            "permissionCode": "Accept"
                        },
                        {
                            "action": "ds-phieu-thu",
                            "permissionCode": "Print"
                        },
                        {
                            "action": "ds-phieu-thu",
                            "permissionCode": "Manager"
                        },
                        {
                            "action": "ds-phieu-chi",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-phieu-chi",
                            "permissionCode": "PheDuyetKTT"
                        },
                    ]
                }
            },
            {
                "phongBanId": "",
                "maChucDanh": "1202",
                "tenChucDanh": "Thủ quỷ",
                "ghiChu": "",
                "trangThai": 1,
                "setPermission": {
                    "subject": "",
                    "permissions": [
                        {
                            "action": "ds-phieu-chi",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-phieu-chi",
                            "permissionCode": "XacThucChi"
                        },
                    ]
                }
            },
            {
                "phongBanId": "",
                "maChucDanh": "1203",
                "tenChucDanh": "Kế toán viên",
                "ghiChu": "",
                "trangThai": 1,
                "setPermission": {
                    "subject": "",
                    "permissions": [
                        {
                            "action": "ds-phieu-yeu-cau",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-phieu-yeu-cau",
                            "permissionCode": "LapPhieuThu"
                        },
                        {
                            "action": "ds-phieu-thu",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-phieu-thu",
                            "permissionCode": "Update"
                        },
                        {
                            "action": "ds-phieu-thu",
                            "permissionCode": "Accept"
                        },
                        {
                            "action": "ds-phieu-thu",
                            "permissionCode": "Print"
                        },
                        {
                            "action": "ds-chung-thu",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-chung-thu",
                            "permissionCode": "BanHanh"
                        },
                        {
                            "action": "ds-chung-thu",
                            "permissionCode": "Print"
                        },
                        {
                            "action": "ds-chung-thu",
                            "permissionCode": "InDeNghiThanhToan"
                        },
                        {
                            "action": "ds-luong-kinh-doanh",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-luong-kinh-doanh",
                            "permissionCode": "LapPhieuChi"
                        },
                        {
                            "action": "ds-phieu-chi",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-phieu-chi",
                            "permissionCode": "Update"
                        },
                        {
                            "action": "ds-phieu-chi",
                            "permissionCode": "Cancel"
                        },
                        {
                            "action": "ds-phieu-chi",
                            "permissionCode": "ChoPheDuyet"
                        },
                    ]
                }
            },
        ]
    },
    {
        "maPhongBan": "13",
        "tenPhongBan": "Phòng thẩm định",
        "ghiChu": "",
        "trangThai": 1,
        "chucDanhs": [
            {
                "phongBanId": "",
                "maChucDanh": "1301",
                "tenChucDanh": "Trưởng phòng thẩm định",
                "ghiChu": "",
                "trangThai": 1,
                "setPermission": {
                    "subject": "",
                    "permissions": [
                        {
                            "action": "ds-phieu-yeu-cau",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-phieu-yeu-cau",
                            "permissionCode": "PhanBoChuyenVien"
                        },
                        {
                            "action": "ds-phieu-yeu-cau",
                            "permissionCode": "Manager"
                        },
                        {
                            "action": "ds-bao-cao-tham-dinh",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-bao-cao-tham-dinh",
                            "permissionCode": "Manager"
                        },
                        {
                            "action": "ds-bao-cao-tham-dinh",
                            "permissionCode": "Manager"
                        },
                        {
                            "action": "ds-chung-thu",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-chung-thu",
                            "permissionCode": "PheDuyet"
                        },
                        {
                            "action": "ds-chung-thu",
                            "permissionCode": "Manager"
                        },
                    ]
                }
            },
            {
                "phongBanId": "",
                "maChucDanh": "1302",
                "tenChucDanh": "Kiểm soát hai",
                "ghiChu": "",
                "trangThai": 1,
                "setPermission": {
                    "subject": "",
                    "permissions": [
                        {
                            "action": "ds-bao-cao-tham-dinh",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-bao-cao-tham-dinh",
                            "permissionCode": "KiemSoatHai"
                        },
                    ]
                }
            },
            {
                "phongBanId": "",
                "maChucDanh": "1303",
                "tenChucDanh": "Kiểm soát một",
                "ghiChu": "",
                "trangThai": 1,
                "setPermission": {
                    "subject": "",
                    "permissions": [
                        {
                            "action": "ds-bao-cao-tham-dinh",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-bao-cao-tham-dinh",
                            "permissionCode": "KiemSoatMot"
                        },
                    ]
                }
            },
            {
                "phongBanId": "",
                "maChucDanh": "1304",
                "tenChucDanh": "Nhân viên thẩm định",
                "ghiChu": "",
                "trangThai": 1,
                "setPermission": {
                    "subject": "",
                    "permissions": [
                        {
                            "action": "ds-phieu-yeu-cau",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-phieu-yeu-cau",
                            "permissionCode": "CapNhatTTTD"
                        },
                    ]
                }
            },
            {
                "phongBanId": "",
                "maChucDanh": "1305",
                "tenChucDanh": "Nhân viên nhập liệu",
                "ghiChu": "",
                "trangThai": 1,
                "setPermission": {
                    "subject": "",
                    "permissions": [
                        {
                            "action": "ds-phieu-yeu-cau",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-phieu-yeu-cau",
                            "permissionCode": "LapBaoCaoKhaoSat"
                        },
                        {
                            "action": "ds-phieu-yeu-cau",
                            "permissionCode": "LapChungThu"
                        },
                        {
                            "action": "ds-bao-cao-tham-dinh",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-bao-cao-tham-dinh",
                            "permissionCode": "Update"
                        },
                        {
                            "action": "ds-bao-cao-tham-dinh",
                            "permissionCode": "GuiPheDuyet"
                        },
                        {
                            "action": "ds-chung-thu",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-chung-thu",
                            "permissionCode": "Update"
                        },
                        {
                            "action": "ds-chung-thu",
                            "permissionCode": "GuiPheDuyet"
                        },
                    ]
                }
            },
        ]
    },
    {
        "maPhongBan": "14",
        "tenPhongBan": "Phòng kinh doanh",
        "ghiChu": "",
        "trangThai": 1,
        "chucDanhs": [
            {
                "phongBanId": "",
                "maChucDanh": "1401",
                "tenChucDanh": "Trưởng phòng kinh doanh",
                "ghiChu": "",
                "trangThai": 1,
                "setPermission": {
                    "subject": "",
                    "permissions": [
                        {
                            "action": "ds-phieu-yeu-cau",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-phieu-yeu-cau",
                            "permissionCode": "Update"
                        },
                        {
                            "action": "ds-phieu-yeu-cau",
                            "permissionCode": "PheDuyet"
                        },
                        {
                            "action": "ds-phieu-yeu-cau",
                            "permissionCode": "HuyPhieuYeuCau"
                        },
                        {
                            "action": "ds-phieu-yeu-cau",
                            "permissionCode": "Manager"
                        },
                    ]
                }
            },
            {
                "phongBanId": "",
                "maChucDanh": "1402",
                "tenChucDanh": "Nhân viên kinh doanh",
                "ghiChu": "",
                "trangThai": 1,
                "setPermission": {
                    "subject": "",
                    "permissions": [
                        {
                            "action": "ds-phieu-yeu-cau",
                            "permissionCode": "See"
                        },
                        {
                            "action": "phieu-yeu-cau",
                            "permissionCode": "Create"
                        },
                        {
                            "action": "ds-phieu-yeu-cau",
                            "permissionCode": "Update"
                        },
                        {
                            "action": "ds-phieu-yeu-cau",
                            "permissionCode": "GuiPheDuyet"
                        },
                        {
                            "action": "ds-phieu-yeu-cau",
                            "permissionCode": "HuyPhieuYeuCau"
                        },
                        {
                            "action": "ds-chung-thu",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-chung-thu",
                            "permissionCode": "DeXuatBanHanh"
                        },
                        {
                            "action": "ds-luong-kinh-doanh",
                            "permissionCode": "See"
                        },
                        {
                            "action": "ds-luong-kinh-doanh",
                            "permissionCode": "LapDeXuat"
                        },
                    ]
                }
            },
        ]

    },
]
var Excutor = async function () {
    var _dataFeatures = await getFeature();

    var GetPermission = function (action, permissionCode, dataFeatures) {
        for (let index = 0; index < dataFeatures.length; index++) {
            var feature = dataFeatures[index];
            if (feature.action == action) {
                var permission = feature.permissions.find(x => x.code == permissionCode);

                if (!permission) {
                    return null;
                }
                return {
                    featureId: permission.featureId,
                    permissionId: permission.id
                };
            } else if (feature.features && feature.features.length > 0) {

                var permission = GetPermission(action, permissionCode, feature.features);

                if (permission) {
                    return permission;
                }
            }
        }
    }

    for (var i = 0; i < phongBans.length; i++) {
        var phongBan = phongBans[i];

        var phongBanId = await createPhongBan(phongBan);

        if (phongBanId && phongBan.chucDanhs && phongBan.chucDanhs.length > 0) {
            var chucDanhs = phongBan.chucDanhs;

            for (let index = 0; index < chucDanhs.length; index++) {
                let chucDanh = chucDanhs[index];
                chucDanh.phongBanId = phongBanId;
                let chucDanhId = await createChucDanh(chucDanh);

                if (chucDanhId && chucDanh.setPermission) {
                    var per = {};
                    var permissions = chucDanh.setPermission.permissions

                    per.subject = chucDanhId;
                    per.permissions = [];
                    permissions.map(x => {
                        var permission = GetPermission(x.action, x.permissionCode, _dataFeatures);

                        if (permission != null)
                            per.permissions.push(permission);
                        else
                            console.log({ 'action': x.action, 'permissionCode': x.permissionCode });
                    })
                    await setPermission(per);
                }
            }
        }

        console.log((((i + 1) * 100) / phongBans.length).toFixed(2) + "%")
    }
}

var createPhongBan = function (phongBan) {
    return new Promise(resolve => {
        fetch(`${domain}api/v1/PhongBans`, {
            "headers": {
                "accept": "*/*",
                "accept-language": "vi,en;q=0.9",
                "authorization": `bearer ${token}`,
                "content-type": "application/json",
                "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": `${domain}swagger/index.html`,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": JSON.stringify(phongBan),
            "method": "POST",
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

var createChucDanh = function (chucDanh) {
    return new Promise(resolve => {

        var formData = new FormData()
        formData.append('phongBanId', chucDanh.phongBanId)
        formData.append('maChucDanh', chucDanh.maChucDanh)
        formData.append('tenChucDanh', chucDanh.tenChucDanh)
        formData.append('ghiChu', chucDanh.ghiChu || '')
        formData.append('trangThai', chucDanh.trangThai)

        fetch(`${domain}api/v1/ChucDanhs`, {
            "headers": {
                "authorization": `bearer ${token}`,
            },
            "body": formData,
            "method": "POST",
        }).then(response => response.json())
            .then(result => {
                if (result.succeeded) {
                    return resolve(result.data);
                }
                return resolve(false);
            });
    });
}

var getFeature = function () {
    return new Promise(resolve => {
        fetch(`${domain}api/v1/ManageSystem/Features`, {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "authorization": `bearer ${token}`
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
var setPermission = function (per) {
    return new Promise(resolve => {
        fetch(`${domain}api/v1/ManageSystem/FeaturePermissionPeneficiary`, {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "authorization": `bearer ${token}`,
                "content-type": "application/json"
            },
            "referrer": `${domain}swagger/index.html`,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": JSON.stringify(per),
            "method": "POST",
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
