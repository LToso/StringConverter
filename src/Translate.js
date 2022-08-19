export const translate = (tag, language) => {

    if (language === "PT-BR") {
        switch (tag) {
            case 'upper': return 'MAIUSCULAS';
            case 'lower': return 'minusculas';
            case 'capit': return 'Todas Primeiras';
            case 'altern': return 'aLtErNaDo';
            case 'inverse': return 'iNvErTiDo';
            case 'flip': return 'Texto ao Contrario';
            case 'upside': return 'Ponta-cabeça';
            case 'countLetter': return 'Letras: ';
            case 'countSpace': return 'Espaços: ';
            case 'countWord': return 'Palavras: ';
            case 'countLine': return 'Linhas: ';

        }
    }
    else {
        switch (tag) {
            case 'upper': return 'UPPER CASE';
            case 'lower': return 'lower case';
            case 'capit': return 'Capitalized Case';
            case 'altern': return 'aLtErN cAsE';
            case 'inverse': return 'InVeRsE CaSe';
            case 'flip': return 'Flipped Text';
            case 'upside': return 'Upside Down';
            case 'countLetter': return 'Letters: ';
            case 'countSpace': return 'Spaces: ';
            case 'countWord': return 'Words: ';
            case 'countLine': return 'Lines: ';
        }
    }
}