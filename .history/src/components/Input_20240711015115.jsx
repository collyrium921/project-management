export default function Input({textArea}){
    return <p>
        <label htmlFor="">{label}</label>
        {textArea ? <textArea {...props} />: <input {...props} />}
    </p>
}