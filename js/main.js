

const GRABCAR_DAU = 8000;
const GRABCAR_1_19 = 7500;
const GRABCAR_TREN19 = 7500;
const THOI_GIAN_CHO = 2000;

const GRABSUV_DAU = 9000;
const GRABSUV_1_19 = 8500;
const GRABSUV_TREN19 = 8000;
const THOI_GIAN_CHO_SUV = 3000;

const GRABBLACK_DAU = 10000;
const GRABBLACK_1_19 = 9500;
const GRABBLACK_TREN19 = 9000;
const THOI_GIAN_CHO_BLACK = 3500;

function tinhTienKm(soKm,giaDau,gia1_19,giaTren19) {
    if(soKm >0 && soKm <=1 ){
        return giaDau;
    }else if(soKm >1 && soKm <= 19){
        return giaDau + (soKm-1)*gia1_19
    }else if(soKm >19){
        return giaDau + 18*gia1_19 +(soKm-19)*giaTren19
    }else{
        alert("so km khong hop le!!")
    }
}
function tinhTienCho(time,timeValue){
    if(time >=3 && time < 6){
        return timeValue;
       }else if(time >=6){
        return parseInt(time/3)*timeValue;
       }else{
        return 0;
       }
}

function tienGrabmain() {
    // LAY GIA TRI TU FORM
    var car = document.getElementById('grabCar')
    var suv = document.getElementById('grabSUV')
    var black = document.getElementById('grabBlack')
    var soKm = Number(document.getElementById('soKm').value)
    var tGianCho = Number(document.getElementById('time').value)
    var loaiXe = kiemTraXe(car, suv, black)
    var tienKm = 0;
    var tienCho = 0;
    console.log(loaiXe)
    // XAC DINH LOAI XE
    switch (loaiXe) {
        case "car":
            console.log("tien km car")
           tienKm = tinhTienKm(soKm,GRABCAR_DAU,GRABCAR_1_19,GRABCAR_TREN19)
           tienCho = tinhTienCho(tGianCho,THOI_GIAN_CHO)
            break;
        case "suv":
            console.log("tien km suv")
            tienKm =  tinhTienKm(soKm,GRABSUV_DAU,GRABSUV_1_19,GRABSUV_TREN19)
            tienCho = tinhTienCho(tGianCho,THOI_GIAN_CHO_SUV)
            break;
        case "black":
            console.log("tien km black")
            tienKm = tinhTienKm(soKm,GRABBLACK_DAU,GRABBLACK_1_19,GRABBLACK_TREN19)
            tienCho = tinhTienCho(tGianCho,THOI_GIAN_CHO_BLACK)
            break;
        default:
            break;
    }
    document.getElementById("divThanhTien").style.display = "block"
   document.getElementById("xuatTien").innerHTML = (tienKm + tienCho).toLocaleString()

    // TINH TONG TIEN
}
document.getElementById('btnGrab').onclick = tienGrabmain;

function kiemTraXe(xe1, xe2, xe3) {
    if (xe1.checked) {
        return "car"
    } else if (xe2.checked) {
        return "suv"
    } else if (xe3.checked) {
        return "black"
    } else {
        alert("hay chon loai xe")
        return ""
    }
}