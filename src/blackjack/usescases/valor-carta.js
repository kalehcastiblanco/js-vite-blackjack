/**
 * Obtiene el valor de la carta
 * @param {String} carta recibe la carta
 * @returns {number}retorna el valor de dicha carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}