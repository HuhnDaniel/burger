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

    $(`.change-devour`).on(`click`, function(e) {
        const id = $(this).data(`id`);
        const newDevour = $(this).data(`newdevour`);
        const newDevourState = { devoured: newDevour };

        $.ajax(`/api/burgers/${id}`, {
            type: `PUT`,
            data: newDevourState
        }).then(() => {
            console.log(`changed devoured to ${newDevour}`);
            location.reload();
        });
    });
});