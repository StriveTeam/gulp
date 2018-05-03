window.Dialog = function (data, callback) {
    if (!(data instanceof Array)) {
        console.error('Dialog 参数错误')
        return false
    }

    var str = "<div =class='dialog'>" +
        "<div class='bg'></div>" +
        "<div class='con'>" +
        "<ul>" +
        "<li></li>" +
        "</ul>" +
        "</div>" +
        "</div>"
    console.log(str)
}

Dialog.prototype.show = function () {
    console.log(333)
}


var arr = ['测试一', '测试二'];
var dia1 = new Dialog(arr)

dia1.show()

var obj = new Object();
console.log(obj.__proto__)
console.log(Object.prototype)