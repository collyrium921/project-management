export default function NewProject(){
    return <div>
        <menu>
            <li><button>Cancel</button></li>
            <li><button>Save</button></li>
        </menu>
        <div>
            <p>
                <label htmlFor="">Title</label>
                <input type="text" />
            </p>
            <p>
                <label htmlFor="">Description</label>
                <textarea />
            </p>
            <p>
                <label htmlFor="">Due Date</label>
                <input type="text" />
            </p>
        </div>
    </div>
}