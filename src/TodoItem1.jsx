
import "./App.css";
function TodoItem1() {
    return (
        <>
            <div class="row item-text container-margin">
                <div class="col-6">
                    <p> Go to college</p>

                </div>
                <div class="col-3">
                    <p> 04/11/2026</p>
                </div>

                <div class="col-3">

                    <button type="button" class="btn-solid theme-danger todobutton">Danger</button>

                </div>

            </div>

        </>
    );

};

export default TodoItem1;