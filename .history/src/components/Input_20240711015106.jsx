export default function Input({textArea}){
    return <p>
        <label htmlFor=""></label>
        {textArea ? <textArea {...props} />: <input {...props} />}
    </p>
}