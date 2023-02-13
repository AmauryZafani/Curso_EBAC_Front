$(document).ready(function(){
    
    $('.add').on('click', function(){
        const AddTarefa = $('#AddTarefa').val()
        const li = document.createElement('li')
        li.innerHTML = `${AddTarefa}`
        $('ul').append(li)
        $('#nomeTarefa').val('')
        $(li).click(function(){
            $(li).toggleClass('riscar')
        })
    })
})