// cancel upload file //
document.getElementById('mfu1').onchange = function() {
    var fileName1 = document.getElementById('mfu1');
    var fileList1 = document.getElementById("mfu1").files;

    for (var i = 0; i < fileList1.length; i++) {
        $('.fieldInner1').append("<div>" + fileName1.files.item(i).name + "<span class='fileDelete'></span>" + "</div>");
        $('.fileDelete').click(function() {
            $(this).closest('div').remove();
        });
    }

};

document.getElementById('mfu2').onchange = function() {
    var fileName2 = document.getElementById('mfu2');
    var fileList2 = document.getElementById("mfu2").files;

    for (var i = 0; i < fileList2.length; i++) {
        $('.fieldInner2').append("<div>" + fileName2.files.item(i).name + "<span class='fileDelete'></span>" + "</div>");
        $('.fileDelete').click(function() {
            $(this).closest('div').remove();
        });
    }

};

// checkbox select all //
$("#new_contract_item01").click(function() {
    $('.tabTable_item_field input:checkbox').not(this).prop('checked', this.checked);
});

$(".tabTable_item_field .selectOption").on('change', function() {
    if ($(this).prop('id') !== 'new_contract_item01') {
        $("#new_contract_item01").prop('checked', '');
    }

    if ($(this).prop('checked') == false && $(this).closest('li').siblings('li').find('.selectOption').prop('checked') == true) {
        $("#new_contract_item01").prop('checked', '');
    } else if ($('.selectOption:checked').length == $('.selectOption').length) {
        $("#new_contract_item01").prop('checked', true);
    }
});
// add new form //
$('.notedRecordBtn_add').click(function(){
    $('.notedRecord_new').stop(true, true).slideDown();
});

// detail show/hide //
$('.notedRecord_td button').click(function() {
    $(this).closest('.notedRecord_tr').find('.notedRecord_detail').stop(true, true).slideToggle();
});

$('.notedRecord_formSend button').click(function() {
    $('.notedRecordTable_newForm .notedRecord_detail').slideUp();
});

// show package //
$('#sendType01').click(function() {
    if ($('#sendType01').prop('checked') == true) {
        $('.insuranceTable td.filePackageType_td').css('display', 'block');
        $('.filePackageType_ul1').css('display', 'block');
        $('.filePackageType_ul1').siblings('.filePackageType_ul').css('display', 'none');
        $(".sendType_field li input[type='checkbox']").prop('checked', '');
    }
});

$('#sendType02').click(function() {
    if ($('#sendType02').prop('checked') == true) {
        $('.insuranceTable td.filePackageType_td').css('display', 'block');
        $('.filePackageType_ul2').css('display', 'block');
        $('.filePackageType_ul2').siblings('.filePackageType_ul').css('display', 'none');
        $(".sendType_field li input[type='checkbox']").prop('checked', '');
    }
});

$('#sendType03').click(function() {
    if ($('#sendType03').prop('checked') == true) {
        $('.insuranceTable td.filePackageType_td').css('display', 'block');
        $('.filePackageType_ul3').css('display', 'block');
        $('.filePackageType_ul3').siblings('.filePackageType_ul').css('display', 'none');
        $(".sendType_field li input[type='checkbox']").prop('checked', '');
    }
});

// $('#sendType03').click(function() {
//     if ($('#sendType03').prop('checked') == true) {
//         $('.filePackageType_td').css('display', 'none');
//         $(".sendType_field li input[type='checkbox']").prop('checked', '');
//     }
// });

// $('#sendType04').click(function() {
//     $(".sendType_field li input[type='radio']").prop('checked', '');
//     if ($('#sendType04').prop('checked') == true) {
//         $('.filePackageType_td').css('display', 'none');
//         $(".filePackageType_ul li input[type='radio']").prop('checked','');
//     }
// });

$('.sendType_field input').click(function() {
    $('.insuranceTable td.packageTypeTd').stop(true, true).css('display', 'block');
});