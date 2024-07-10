export default function Input({label,textarea, ...props}){
    return <p>
        <label htmlFor="">{label}</label>
        {textarea ? <textArea {...props} />: <input {...props} />}
    </p>
}