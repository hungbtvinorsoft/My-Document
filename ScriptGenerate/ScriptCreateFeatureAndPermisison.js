
// var domain = "http://ptfv.tdg.vinorsoft.com/backend/";
var domain = "http://45.119.215.79/thamdinhgia/";
// var domain = "https://localhost:44378/";
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6WyJiNzZmOTMxYS00NTgzLTRiYzQtYTQ0YS1lODlkNTMxMGY5Y2EiLCJiNzZmOTMxYS00NTgzLTRiYzQtYTQ0YS1lODlkNTMxMGY5Y2EiXSwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJJc0Jsb2NrZWQiOiJGYWxzZSIsIm5iZiI6MTY1ODQ3MjIwOSwiZXhwIjoxNjU4NDc4MjA5LCJpYXQiOjE2NTg0NzIyMDksImlzcyI6IkNvcmVJZGVudGl0eSIsImF1ZCI6IkNvcmVJZGVudGl0eVVzZXIifQ.heIDIwJ0z_IsKJW5EAh84AE8jqFQfCl_73CTf2_R0HM"

var features = [
    {
        Action: "", Title: "Danh sách phiếu yêu cầu", PermissionCustom: [], GeneratePermissionDefault: false, Order: 1,
        features: [
            {
                Action: "ds-phieu-yeu-cau", Title: "Danh sách phiếu yêu cầu", PermissionCustom: [
                    { Code: "See", Title: "Xem" },
                    { Code: "Update", Title: "Cập nhật" },
                    { Code: "Delete", Title: "Xóa" },
                    { Code: "LapPhieuThu", Title: "Lập phiếu thu" },
                    { Code: "LapBaoCaoKhaoSat", Title: "Lập báo cáo khảo sát" },
                    { Code: "LapChungThu", Title: "Lập chứng thư" },
                    { Code: "PhanBoChuyenVien", Title: "Phân bổ chuyên viên" },
                    { Code: "GuiPheDuyet", Title: "Gửi phê duyệt" },
                    { Code: "PheDuyet", Title: "Phê duyệt" },
                    { Code: "CapNhatTTTD", Title: "Cập nhật trạng thái thẩm định" },
                    { Code: "InBaoGia", Title: "In báo giá" },
                    { Code: "XacNhanPhi", Title: "Xác nhận phí" },
                    { Code: "HuyPhieuYeuCau", Title: "Hủy phiếu" },
                    { Code: "Manager", Title: "Quản lý" },
                ], GeneratePermissionDefault: false, Order: 2
            },
            {
                Action: "phieu-yeu-cau", Title: "Tạo mới phiếu yêu cầu", PermissionCustom: [
                    { Code: "Create", Title: "Thêm mới" },
                ], GeneratePermissionDefault: false, Order: 3
            },
        ]
    },
    {
        Action: "ds-phieu-thu", Title: "Danh sách phiếu thu", PermissionCustom: [
            { Code: "See", Title: "Xem" },
            { Code: "Update", Title: "Cập nhật" },
            { Code: "Delete", Title: "Hủy phiếu thu" },
            { Code: "Accept", Title: "Xác nhận thu" },
            { Code: "Print", Title: "In" },
            { Code: "Manager", Title: "Quản lý" },
        ], GeneratePermissionDefault: false, Order: 2
    },
    {
        Action: "ds-bao-cao-tham-dinh", Title: "Danh sách báo cáo khảo sát", PermissionCustom: [
            { Code: "See", Title: "Xem" },
            { Code: "Update", Title: "Cập nhật" },
            { Code: "Delete", Title: "Xóa" },
            { Code: "GuiPheDuyet", Title: "Gửi phê duyệt" },
            { Code: "KiemSoatMot", Title: "Kiểm soát một" },
            { Code: "KiemSoatHai", Title: "Kiểm soát hai" },
            { Code: "Print", Title: "In" },
            { Code: "Manager", Title: "Quản lý" },
        ], GeneratePermissionDefault: false, Order: 3
    },
    {
        Action: "ds-chung-thu", Title: "Danh sách Chứng thư", PermissionCustom: [
            { Code: "See", Title: "Xem" },
            { Code: "Update", Title: "Cập nhật" },
            { Code: "Print", Title: "In" },
            { Code: "GuiPheDuyet", Title: "Gửi phê duyệt" },
            { Code: "PheDuyet", Title: "Phê duyệt" },
            { Code: "HuyChungThu", Title: "Hủy chứng thư" },
            { Code: "DeXuatBanHanh", Title: "Đề xuất ban hành" },
            { Code: "BanHanh", Title: "Ban hành" },
            { Code: "InDeNghiThanhToan", Title: "In đề nghị thanh toán" },
            { Code: "Manager", Title: "Quản lý" },
        ], GeneratePermissionDefault: false, Order: 4
    },
    {
        Action: "ds-luong-kinh-doanh", Title: "Danh sách lương", PermissionCustom: [
            { Code: "See", Title: "Xem" },
            { Code: "LapDeXuatHoanPhi", Title: "Lập đề xuất hoàn phí" },
            { Code: "LapDeXuatChiHoaHong", Title: "Lập đề xuất chi hoa hồng" },
            { Code: "LapDeXuatLuongKinhDoanh", Title: "Lập đề xuất lương kinh doanh" },
            { Code: "LapDeXuatCongTacPhi", Title: "Lập đề xuất công tác phí" },
            { Code: "LapDeXuatLuongSanPham", Title: "Lập đề xuất lương sản phẩm" },
            { Code: "LapPhieuChi", Title: "Lập phiếu chi" },
        ], GeneratePermissionDefault: false, Order: 5
    },
    {
        Action: "ds-phieu-chi", Title: "Danh sách phiếu chi", PermissionCustom: [
            { Code: "See", Title: "Xem" },
            { Code: "Update", Title: "Cập nhật" },
            { Code: "Cancel", Title: "Hủy" },
            { Code: "ChoPheDuyet", Title: "Chờ phê duyệt" },
            { Code: "PheDuyetKTT", Title: "Phê duyệt KTT" },
            { Code: "PheDuyetGD", Title: "Phê duyệt GĐ" },
            { Code: "XacThucChi", Title: "Xác thực chi" },
        ], GeneratePermissionDefault: false, Order: 6
    },
    {
        Action: "phong-ban", Title: "Danh sách phòng ban", PermissionCustom: [], GeneratePermissionDefault: true, Order: 7
    },
    {
        Action: "chuc-danh", Title: "Danh sách chức danh", PermissionCustom: [
            { Code: "See", Title: "Xem" },
            { Code: "Create", Title: "Thêm mới" },
            { Code: "Update", Title: "Cập nhật" },
        ], GeneratePermissionDefault: false, Order: 8
    },
    {
        Action: "ds-chuyen-vien", Title: "Danh sách chuyên viên", PermissionCustom: [
            { Code: "See", Title: "Xem" },
            { Code: "Create", Title: "Thêm mới" },
            { Code: "Update", Title: "Cập nhật" },
        ], GeneratePermissionDefault: false, Order: 9
    },


    {
        Action: "", Title: "Cấu hình hệ thống", PermissionCustom: [], GeneratePermissionDefault: false, Order: 10,
        features: [
            {
                Action: "manage-system", Title: "Phân quyền hệ thống", PermissionCustom: [
                    { Code: "Admin", Title: "Admin" },
                ], GeneratePermissionDefault: false, Order: 1
            },
            {
                Action: "cong-ty", Title: "Thông tin công ty", PermissionCustom: [
                    { Code: "See", Title: "Xem" },
                ], GeneratePermissionDefault: false, Order: 2
            },
            { Action: "ds-chi-tieu-bao-cao", Title: "DS Chi tiêu báo cáo", PermissionCustom: [], GeneratePermissionDefault: true, Order: 3 },
        ]
    },



]
var Excutor = async function () {
    for (var i = 0; i < features.length; i++) {
        var feature = features[i];
        var featureId = await createFeature(feature);

        if (featureId && feature.PermissionCustom.length > 0) {
            await CreatePermissions(feature.PermissionCustom, featureId)
        }

        if (featureId && feature.features && feature.features.length > 0) {
            for (var j = 0; j < feature.features.length; j++) {
                var _feature = feature.features[j];

                _feature.ParentId = featureId;

                var _featureId = await createFeature(_feature);

                if (_featureId && _feature.PermissionCustom.length > 0) {
                    await CreatePermissions(_feature.PermissionCustom, _featureId)
                }
            }
        }
        console.log((((i + 1) * 100) / features.length).toFixed(2) + "%")
    }
}

var createFeature = function (feature) {
    return new Promise(resolve => {
        fetch(`${domain}api/v1/ManageSystem/Features`, {
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
            "body": JSON.stringify(feature),
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
var CreatePermissions = async function (permissions, featureId) {
    let dataRequest = permissions.map(x => {
        return {
            ...x,
            FeatureId: featureId
        }
    });
    var data = false;

    for (var i = 0; i < dataRequest.length; i++) {
        var per = dataRequest[i];
        data = await createPermission(per);
    }
    return data;
}

var createPermission = function (per) {
    return new Promise(resolve => {
        fetch(`${domain}api/v1/ManageSystem/Permissions`, {
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