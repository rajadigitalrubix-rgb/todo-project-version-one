import "./App.css";

function TodoAdd() {
    return (
        <>
            <div class="row item-text container-margin">

                <div class="col-6">

                    <input type="text" placeholder="Enter Todo Work" />

                </div>


                <div class="col-3">

                    <input type="date" placeholder=" Chose The Date" />

                </div>


                <div class="col-3">

                    <button type="button" class="btn-solid theme-success todobutton">Add</button>

                </div>



            </div>

        </>

    );
};

export default TodoAdd;
