$(function() {
    $(`.create-form`).on(`submit`, function(e) {
        e.preventDefault();

        const newBurger = { burger_name: $(`#bn`).val().trim() };

        $.ajax(`/api/burgers`, {
            type: `POST`,
            data: newBurger
        }).then(() => {
            console.log(`Created new burger.`);
            location.reload();
        });
    });
});