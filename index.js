var arr = [];
function NhapSo(){
    event.preventDefault();
    var giaTri = document.getElementById('nhapSo').value*1;
    arr.push(giaTri);
    renderDisplay();
    document.getElementById('form_nhap').reset();   
}


function renderDisplay(){
    document.querySelector('.showNumber').innerHTML = `${arr}`;
}

function tongCacSoDuong(){
    var tongSoDuong = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            tongSoDuong += arr[i];
        }
    }
    document.querySelector('.result1').innerHTML = `Tổng Các Số Dương là ${tongSoDuong}`;
}

function soduongtrongmang(){
    var ketQua2 = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            ketQua2 ++;
        }
    }
    document.querySelector('.result2').innerHTML = `Số lượng số dương:${ketQua2}`;
}

function sonhonhatmang(){
    var ketQua3 = 0;
    var arr3 = arr;
    arr3.sort();
    ketQua3 = arr3[0];
    console.log(arr);
    document.querySelector('.result3').innerHTML = `Số nhỏ nhất: ${ketQua3}`;
}

function soduongnhonhatmang(){
    var ketQua4 = 0;
    var arr4 = arr;
    arr4 = arr4.sort();
    for(var i = 0; i < arr4.length;i++){
        if(arr[i] > 0){
            ketQua4 = arr[i];
            break;
        }
    }
    document.querySelector('.result4').innerHTML = `Số dương nhỏ nhất ${ketQua4}`;
}


function sochancuoicungtrongmang(){
    var ketQua5 = 0;
    var doDai = arr.length;
    for(var i = doDai; i >= 0;i--){
        if(arr[i] % 2 == 0 && arr[i] > 0){
            ketQua5 = arr[i];
            break;
        }
    }
    if(ketQua5 == 0){
        ketQua5 = -1;
    }
    document.querySelector('.result5').innerHTML = `Số chẵn cuối cùng: ${ketQua5}`;

}

function doicho2giatri(){
    event.preventDefault();
    var indexA = document.getElementById('indexA').value*1;
    var indexB = document.getElementById('indexB').value*1;
    var C = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = C;
    renderDisplay();
    document.querySelector('.result6').innerHTML = `${arr}`;
    document.getElementById('bai6').reset();
}

function sorttangdan(){
    arr = arr.sort();
    renderDisplay();
    document.querySelector('.result7').innerHTML = `${arr}`;
}

function checkSoNguyenTo(n){
    var cangBat2 =  Math.sqrt(n);
    if(n == 1 || n == 2) return true;
    for(var i = 2; i < cangBat2;i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

function findNguyenTo(){
    var ketQua8 = 0;
   
    for(var i = 0 ; i < arr.length;i++){
        if(checkSoNguyenTo(arr[i])){
            ketQua8 = arr[i];
            break;
        }
    }
    document.querySelector('.result8').innerHTML = `Số nguyên tố là: ${ketQua8}`;

}

var arr9 = [];

function nhapMangMoi(){
    event.preventDefault();
    var value9 = document.getElementById('nhapSo9').value*1;
    arr9.push(value9);
    document.querySelector('.result9').innerHTML = `${arr9} `;
     document.getElementById('nhapBai9').reset();
}   

function demsoNguyen(){
    var ketqua9 = 0;
    console.log(arr9);
    for(var i = 0; i < arr9.length;i++){
        if(arr9[i] % 1 == 0) ketqua9++;
    }
    document.querySelector('.result9').innerHTML = `${arr9} có ${ketqua9} số nguyên `;
}


function sosanhsoduongvasoam(){
    var soduong = 0;
    var soam = 0;
    var ketQua10 = '';
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            soduong++;
        }
        else if(arr[i]<0){
            soam++;
        }
    }
    if(soduong > soam){
        ketQua10 =  'Số dương nhiều hơn';
    }
    else if(soduong < soam){
        ketQua10 =  'Số âm nhiều hơn';
    }
    else{
        ketQua10 =  'Số dương bằng số âm';
    }
    document.querySelector('.result10').innerHTML = `${ketQua10}`;

}

