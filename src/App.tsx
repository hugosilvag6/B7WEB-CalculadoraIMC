import { useState } from "react";
import styles from "./App.module.css";
import Logo from "./images/powered.png";
import leftArrow from "./images/leftarrow.png";
import * as C from "./components/index";
import { levels, calculateImc, Level } from "./helpers/imc";

function App() {
    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);
    const [toShow, setToShow] = useState<Level | null>(null);

    const handleButton = () => {
        if (weightField && heightField) {
            setToShow(calculateImc(heightField, weightField));
        } else {
            alert("Digite todos os campos");
        }
    };

    const handleBackButton = () => {
        setToShow(null);
        setWeightField(0);
        setHeightField(0);
    };

    return (
        <div>
            <header>
                <img src={Logo} alt="powered" />
            </header>
            <div className={styles.conteudoContainer}>
                <div className={styles.leftBox}>
                    <h1>Calcule o seu IMC.</h1>
                    <p>
                        IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de
                        cada pessoa.
                    </p>
                    <C.Input
                        type={"number"}
                        placeholder={"Digite a sua altura. Ex: 1.5 (em metros)"}
                        onChange={(value) => setHeightField(parseFloat(value.target.value))}
                        value={heightField ? heightField : ''}
                        disabled={toShow ? true : false}
                    />
                    <C.Input
                        type={"number"}
                        placeholder={"Digite o seu peso. Ex: 75.3 (em kg)"}
                        onChange={(value) => setWeightField(parseFloat(value.target.value))}
                        value={weightField ? weightField : ''}
                        disabled={toShow ? true : false}
                    />
                    <C.Botao onClick={handleButton} disabled={toShow ? true : false}>Calcular</C.Botao>
                </div>
                <div className={styles.rightBox}>
                    {!toShow && (
                        <div className={styles.grid}>
                            {levels.map((item, key) => (
                                <C.GridItem key={key} item={item} />
                            ))}
                        </div>
                    )}
                    {toShow && (
                        <div className={styles.rightBig}>
                            <div className={styles.rightArrow} onClick={handleBackButton}>
                                <img src={leftArrow} alt="" width={25} />
                            </div>
                            <C.GridItem item={toShow} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
