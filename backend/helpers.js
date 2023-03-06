const queryPromise = (query, type = "all") => {
    return new Promise((resolve, reject) => {
        switch (type) {
            case "get":
                global.db.get(query, function (err, data) {
                    if (err) {
                        console.error("[ERROR]", err);
                        return reject(err);
                    }

                    return resolve(data);
                });
                break;
            case "run":
                global.db.run(query, function (err) {
                    if (err) {
                        console.error("[ERROR]", err);
                        return reject(err);
                    }

                    return resolve(this.lastID);
                });
                break;
            default:
                global.db.all(query, function (err, data) {
                    if (err) {
                        console.error("[ERROR]", err);
                        return reject(err);
                    }

                    return resolve(data);
                });
                break;
        }
    });
};

const sqliteToJsArray = (sqlArray) => {
    if (sqlArray == "") return [];
    return sqlArray.split(",");
};

const cypher = (password) => {
    const key = Math.floor(Math.random() * 10);
    let chars = password.split("");
    console.log(chars);
    chars = chars.map((char) => String.fromCharCode(char.charCodeAt(0) + key));
    return [key, chars.join("")];
};

const decypher = (cyphered, key) => {
    let chars = cyphered.split("");
    chars = chars.map((char) => String.fromCharCode(char.charCodeAt(0) - key));
    return chars.join("");
};

module.exports = {
    queryPromise,
    sqliteToJsArray,
    cypher,
    decypher,
};
