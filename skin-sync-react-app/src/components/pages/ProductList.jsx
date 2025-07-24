import { useEffect, useState } from "react";

// Array of products that will display based off the users selection
const PRODUCT_DATA = {
    Dry: {
        None: {
            cleanser: ["CeraVe Hydrating Facial Cleanser"],
            moisturizer: ["Neutrogena Hydro Boost Gel Cream"],
            topicals: ["Vanicream Moisturizing Ointment"]
        },
        "Acne-Prone": {
            cleanser: ["CeraVe Hydrating Facial Cleanser"],
            moisturizer: ["La Roche-Posay Toleriane Double Repair"],
            topicals: ["Paula's Choice BHA Liquid Exfoliant"]
        },
        Rosacea: {
            cleanser: ["La Roche-Posay Gentle Foaming Moisturizing Cleanser"],
            moisturizer: ["CeraVe PM Facial Moisturizing Lotion"],
            topicals: ["The Ordinary Azelaic Acid"]
        },
        "Seborrheic Dermatitis": {
            cleanser: ["Vanicream Z-Bar (Pyrithione Zinc)"],
            moisturizer: ["CeraVe Moisturizing Cream"],
            topicals: ["Nizoral Cream (Ketoconazole)"]
        },
        "Contact Dermatitis": {
            cleanser: ["Cetaphil Gentle Skin Cleanser"],
            moisturizer: ["Aquaphor Healing Ointment"],
            topicals: ["Hydrocortisone 1% Cream"]
        },
        Psoriasis: {
            cleanser: ["Eucerin Skin Calming Body Wash"],
            moisturizer: ["CeraVe Psoriasis Moisturizing Cream"],
            topicals: ["MG217 Psoriasis Treatment Coal Tar Ointment"]
        },
    },
    Oily: {
        None: {
            cleanser: ["La Roche-Posay Effaclar Purifying Foaming Gel"],
            moisturizer: ["Neutrogena Oil-Free Moisture"],
            topicals: ["The Ordinary Niacinamide 10% + Zinc 1%"]
        },
        "Acne-Prone": {
            cleanser: ["CeraVe Acne Foaming Cream Cleanser"],
            moisturizer: ["La Roche-Posay Effaclar Mat"],
            topicals: ["Paula’s Choice BHA Liquid Exfoliant"]
        },
        Rosacea: {
            cleanser: ["Avene Antirougeurs Cleanser"],
            moisturizer: ["Cetaphil Redness Relieving Night Moisturizer"],
            topicals: ["MetroGel (Metronidazole)"]
        },
        "Seborrheic Dermatitis": {
            cleanser: ["Neutrogena T-Sal Cleanser"],
            moisturizer: ["La Roche-Posay Toleriane Double Repair"],
            topicals: ["Selsun Blue (Selenium Sulfide)"]
        },
        "Contact Dermatitis": {
            cleanser: ["Eucerin Advanced Cleansing Body & Face Cleanser"],
            moisturizer: ["Aveeno Eczema Therapy Moisturizer"],
            topicals: ["1% Hydrocortisone Ointment"]
        },
        Psoriasis: {
            cleanser: ["Neutrogena T-Gel Daily Control"],
            moisturizer: ["Gold Bond Multi-Symptom Psoriasis Relief Cream"],
            topicals: ["Psoriasin Gel"]
        },
    },
    Combination: {
        None: {
            cleanser: ["CeraVe Foaming Facial Cleanser"],
            moisturizer: ["Neutrogena Hydro Boost Water Gel"],
            topicals: ["The Ordinary Azelaic Acid Suspension 10%"]
        },
        "Acne-Prone": {
            cleanser: ["PanOxyl Acne Foaming Wash"],
            moisturizer: ["Differin Oil Absorbing Moisturizer"],
            topicals: ["La Roche-Posay Effaclar Duo"]
        },
        Rosacea: {
            cleanser: ["Paula’s Choice Calm Cleanser"],
            moisturizer: ["Avene Skin Recovery Cream"],
            topicals: ["Finacea (Azelaic Acid)"]
        },
        "Seborrheic Dermatitis": {
            cleanser: ["Head & Shoulders Clinical Strength"],
            moisturizer: ["CeraVe Moisturizing Lotion"],
            topicals: ["Ciclopirox Cream"]
        },
        "Contact Dermatitis": {
            cleanser: ["Neutrogena Ultra Gentle Daily Cleanser"],
            moisturizer: ["Eucerin Original Healing Cream"],
            topicals: ["Aveeno Anti-Itch Concentrated Lotion"]
        },
        Psoriasis: {
            cleanser: ["MG217 Medicated Tar Cleanser"],
            moisturizer: ["Vanicream Moisturizing Cream"],
            topicals: ["Cortizone 10 Anti-Itch Cream for Psoriasis"]
        },
    },
    Sensitive: {
        None: {
            cleanser: ["Cetaphil Gentle Skin Cleanser"],
            moisturizer: ["La Roche-Posay Toleriane Sensitive"],
            topicals: ["Avene Cicalfate+ Restorative Protective Cream"]
        },
        "Acne-Prone": {
            cleanser: ["Neutrogena Ultra Gentle Acne Cleanser"],
            moisturizer: ["CeraVe Facial Moisturizing Lotion"],
            topicals: "Differin Gel (Gentle Formula)"
        },
        Rosacea: {
            cleanser: ["Cetaphil Redness Relieving Cleanser"],
            moisturizer: ["Eucerin Redness Relief Night Creme"],
            topicals: ["Rhofade (Oxymetazoline)"]
        },
        "Seborrheic Dermatitis": {
            cleanser: ["Sukin Sensitive Cleansing Gel"],
            moisturizer: ["Eucerin Sensitive Skin Experts Q10 Cream"],
            topicals: ["DermaHarmony Zinc Cream"]
        },
        "Contact Dermatitis": {
            cleanser: ["Aveeno Ultra-Calming Foaming Cleanser"],
            moisturizer: ["Aquaphor Baby Healing Ointment"],
            topicals: ["Cortizone 10 Maximum Strength"]
        },
        Psoriasis: {
            cleanser: ["Eucerin Baby Wash"],
            moisturizer: ["CeraVe Baby Moisturizing Cream"],
            topicals: ["MG217 Baby Psoriasis Cream"]
        },
    }
};

function ProductList({ skinType, skinConditions }) {
    const [recommendations, setRecommendations] = useState({
        cleanser: [],
        moisturizer: [],
        topicals: [],
    });
    // THis will run whenever Skin type or Skin conditions change
    useEffect(() => {
        if (!skinType || !skinConditions.length === 0) {
            setRecommendations({ cleanser: [], moisturizer: [], topicals: [] });
            return;
        }

        const typeData = PRODUCT_DATA[skinType];
        if (!typeData) return;

        const result = {
            cleanser: [],
            moisturizer: [],
            topicals: [],
        };

        // Looping through each condition the user selected
        skinConditions.forEach((condition) => {
            const conditionData = typeData[condition];
            if (conditionData) {
                result.cleanser.push(...conditionData.cleanser);
                result.moisturizer.push(...conditionData.moisturizer);
                result.topicals.push(...conditionData.topicals);
            }
        });

        // Removing any duplicates
        result.cleanser = [...new Set(result.cleanser)];
        result.moisturizer = [...new Set(result.moisturizer)];
        result.topicals = [...new Set(result.topicals)];

        setRecommendations(result);
    }, [skinType, skinConditions]);

    return (
        <section className="results-container">
            <div className="product-column">
                <h3 className="column-title">Cleanser</h3>
                <ul>
                    {recommendations.cleanser.length > 0 ? (
                        recommendations.cleanser.map((item, index) => <li key={index}>{item}</li>)
                    ) : (
                        <li>No cleanser suggestions</li>
                    )}
                </ul>
            </div>

            <div className="product-column">
                <h3 className="column-title">Moisturizer</h3>
                <ul>
                    {recommendations.moisturizer.length > 0 ? (
                        recommendations.moisturizer.map((item, index) => <li key={index}>{item}</li>)
                    ) : (
                        <li>No moisturizer suggestions</li>
                    )}
                </ul>
            </div>

            <div className="product-column">
                <h3 className="column-title">Topicals</h3>
                <ul>
                    {recommendations.topicals.length > 0 ? (
                        recommendations.topicals.map((item, index) => <li key={index}>{item}</li>)
                    ) : (
                        <li>No topicals suggested</li>
                    )}
                </ul>
            </div>
        </section>
    );
}

export default ProductList;