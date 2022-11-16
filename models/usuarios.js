const modeloUsuarios ={
quieryGetUsers: "SELECT * FROM Usuarios",

//se sustituye cada elemento del arreglo por cada signo de interrogacion, y se acomodan en el orden respectivo
//si se usa 2 veces se pasa las 2 veces
quieryGetUsersByeID: `SELECT * FROM Usuarios WHERE ID = ?`,
quieryDeleteUsersByeID: `UPDATE Usuarios SET Activo = 'N' WHERE ID = ?`,
quieryUsersExists: `SELECT Usuario FROM Usuarios WHERE Usuario = ?`,
quieryAddUser:`INSERT INTO Usuarios (
    Usuario,
    Nombre,
    Apellidos,
    Edad,
    Genero,
    Contraseña,
    Fecha_nacimiento,
    Activo
    ) VALUES (
    ?,
    ?,
    ?,
    ?,
    ?,
    ?,
    ?,
    ?)
    `,
    
 quierySinin:`SELECT Usuario, Contraseña, Activo FROM Usuarios WHERE Usuario = ?`
}

module.exports = modeloUsuarios