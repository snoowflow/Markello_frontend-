$("input[type='number']").blur(function () {
  $("input[type='checkbox']").prop('checked', false).eq($(this).val()-1).prop('checked', true)
})