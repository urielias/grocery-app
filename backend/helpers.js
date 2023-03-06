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

module.exports = {
    queryPromise,
    sqliteToJsArray,
};
