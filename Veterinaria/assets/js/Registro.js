$('#inicio').on("click", function () {

    $('#exampleModal').modal('show');

})
$("#ingresar").on("click", function () {

    $("#ingreso").modal({ backdrop: 'static', keyboard: false });

})
$('.mi-fecha').datepicker({
    format: "dd/mm/yyyy",
});