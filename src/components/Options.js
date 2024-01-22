function Options({options,selectedOption,onOptionChange}){
    return (
        <div className="optionSection">
            {
                options.map(
                    (option)=>(
                            <input
                                type="button"
                                name="option"
                                value={option}
                                checked={selectedOption===option}
                                onClick={onOptionChange}
                            />
                    )
                )
            }
        </div>
    );
}

export default Options;