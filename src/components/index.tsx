import styled from "styled-components";
import { Level } from "../helpers/imc";
import upImage from "../images/up.png";
import downImage from "../images/down.png";
import styles from "./GridItem.module.css";

export const Input = styled.input`
    border: none;
    border-bottom: 2px solid rgba(150, 163, 171, 0.5);
    padding: 10px 2px;
    width: 100%;
    font-family: inherit;
    margin-bottom: 20px;
    outline: none;
    font-size: 14px;
    &&:disabled {
        opacity: .5;
    }
`;

export const Botao = styled.button`
    border: none;
    border-radius: 10px;
    background-color: #0ea5e9;
    width: 100%;
    margin-top: 40px;
    padding: 15px;
    font-size: 18px;
    color: white;
    cursor: pointer;
    transition: 300ms;
    &&:hover {
        background-color: #066fa3;
    }
    &&:disabled {
        opacity: .4;
    }
`;

type Props = {
    item: Level;
};
export const GridItem = ({ item }: Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcon}>
                <img src={item.icon == "up" ? upImage : downImage} alt="" width="30" />
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
            {item.yourImc && <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m².</div>}
            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
};
