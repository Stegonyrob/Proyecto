//Reusable textarea component for edit form

export const TextArea = ({ title, onChange, value, name, placeholder }) => {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div style={{ textAlign: "center" }}>
                        <h6 className="space">{title}</h6>
                        <textarea onChange={onChange} value={value} name={name} placeholder={placeholder} rows="2" className="form-control"  ></textarea>
                    </div>
                </div>
            </div>
        </>
    );
}
