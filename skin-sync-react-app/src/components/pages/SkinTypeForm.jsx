import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import ProductList from "./ProductList";
import "./SkinTypeForm.css";

const SKIN_TYPES = ["Dry", "Oily", "Combination", "Sensitive"];
const SKIN_CONDITIONS = [
    "None",
    "Acne-Prone",
    "Rosacea",
    "Seborrheic Dermatitis",
    "Contact Dermatitis",
    "Psoriasis"
];
function SkinTypeForm() {
    const [skinType, setSkinType] = useState("");
    const [skinConditions, setSkinConditions] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const firstRadioRef = useRef(null);

    // When the page loads, it will put focus on the first radio button to help direct user
    useEffect(() => {
        if (firstRadioRef.current) {
            firstRadioRef.current.focus();
        }
    }, []);
    // This updates the skin type state when a radio button is clicked
    const handleSkinTypeChange = (e) => {
        setSkinType(e.target.value);
    };
    // This updates the skin conditions state when checkboxes are checked/unchecked
    const handleConditionChange = (e) => {
        const condition = e.target.value;

        setSkinConditions((prev) =>
            e.target.checked
                ? [...prev, condition]
                : prev.filter((c) => c !== condition)
        );
    };
    // This handles submission of the form when the user hits submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (skinType && skinConditions.length > 0) {
            setSubmitted(true);
        }
    };
    // This will clear everything & reset the form for the user
    const handleClear = () => {
        setSkinType("");
        setSkinConditions([]);
        setSubmitted(false);
        if (firstRadioRef.current) {
            firstRadioRef.current.focus();
        }
    };
    return (
        <main className="form-wrap">
            <section className={submitted ? "form-box result-container" : "form-box"}>
                {/* Show different heading depending on form or results */}
                <h2>{submitted ? "Here Are Your Recommendations" : "Choose Your Skin Info"}</h2>

                {/* Show form if not submitted yet */}
                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Skin Type:</legend>
                            {SKIN_TYPES.map((type, index) => (
                                <label key={type} style={{ marginRight: "1rem" }}>
                                    <input
                                        type="radio"
                                        name="skinType"
                                        value={type}
                                        checked={skinType === type}
                                        onChange={handleSkinTypeChange}
                                        ref={index === 0 ? firstRadioRef : null}
                                    />
                                    {type}
                                </label>
                            ))}
                        </fieldset>

                        <fieldset style={{ marginTop: "1rem" }}>
                            <legend>Skin Conditions:</legend>
                            {SKIN_CONDITIONS.map((cond) => (
                                <label
                                    key={cond}
                                    style={{ display: "block", marginBottom: "0.25rem" }}
                                >
                                    <input
                                        type="checkbox"
                                        name="skinConditions"
                                        value={cond}
                                        checked={skinConditions.includes(cond)}
                                        onChange={handleConditionChange}
                                    />
                                    {cond}
                                </label>
                            ))}
                        </fieldset>

                        <div style={{ marginTop: "1.5rem" }}>
                            <Button type="submit" disabled={!skinType || skinConditions.length === 0}>Submit</Button>
                            <Button type="button" onClick={handleClear}>Clear</Button>
                        </div>
                    </form>
                ) : (
                    <>
                        <ProductList skinType={skinType} skinConditions={skinConditions} />
                        <Button type="button" onClick={handleClear}>Start Over</Button>
                    </>
                )}
            </section>
        </main>
    );
}

export default SkinTypeForm;