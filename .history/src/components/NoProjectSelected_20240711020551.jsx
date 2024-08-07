import noProjectImage from "../assets/no-projects.png"
export default function NoProjectSelected(){
    return <div className="mt-24 text-center w-2/3">
        <img src={noProjectImage} alt="An empty task list" />
        <h2 className="text-xl font-bold text-stone-500 mt-4">No Project Selected</h2>
        <p>Select a project or get started with a new one!</p>
        <p>
            <button>
                Create New Project
            </button>
        </p>
    </div>
}