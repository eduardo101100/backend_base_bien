const modeloUsuarios ={
quieryGetUsers: "SELECT * FROM Assasins",

//se sustituye cada elemento del arreglo por cada signo de interrogacion, y se acomodan en el orden respectivo
//si se usa 2 veces se pasa las 2 veces
quieryGetUsersByeID: `SELECT * FROM Assasins WHERE ID = ?`,
quieryDeleteUsersByeID: `UPDATE Assasins SET Activo = 'N' WHERE ID = ?`,
quieryUsersExists: `SELECT Enemigos FROM Assasins WHERE Enemigos = ?`,
quieryAddUser:`INSERT INTO Assasins (
    Enemigos,
    Armas,
    Armaduras,
    Nivel,
    Nivel_Recomendado,
    Activo
    ) VALUES (
    ?,
    ?,
    ?,
    ?,
    ?,
    ?
    )`,
quieryGetUsersInfo: `
SELECT Enemigos, Armas, Armaduras, Nivel, Nivel_Recomendado 
FROM Assasins
WHERE Enemigos = ?`,
quieryUpdateByeUsuario: `
UPDATE Assasins SET 
Armas = ?,
Armaduras =?,
Nivel = ?,
Nivel_Recomendado = ?
WHERE Enemigos = ?
`
}

module.exports = modeloUsuarios