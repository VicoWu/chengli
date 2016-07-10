/**
 * @file js
 *
 * @author fanxingguang
 * @date 2016-07-03
 */

$(document).ready(function () {
    $(document).on('click', '.product-list a', function (event) {
        // 阻止a标签的默认事件，组织冒泡
        event.preventDefault();
        event.stopPropagation();
        // 获取a标签的href信息
        var href = $(this).attr('data-html');
        // ajax异步获取html信息并放入模态框的modal-body中
        $('#product-detail .modal-body').load(href, function () {
            $('#product-detail').modal({
                show: true
            });
        });
    });
    $(document).on('click', '.pic-show-list .mask', function (event) {
        var el = $(this);
        var src = el.siblings('.img-wrap').find('img').attr('src');
        $('.pic-show-big').attr('src', src);
        el.parent().addClass('active').siblings('.active').removeClass('active');
    });
});
