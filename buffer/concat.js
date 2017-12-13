Buffer.concat = function(chunkList, len) {
    let length = len;
    if (chunkList.length === 0) {
        return Buffer.alloc(0);
    } else if (chunkList.length === 1) {
        return chunkList[0];
    }

    if (typeof length !== 'number') {
        length = 0;
        for (let i = 0; i < chunkList.length; i++) {
            length += chunkList.length;
        }
    }

    let index = 0;
    const buf = Buffer.alloc(length);

    for (let i = 0; i < chunkList.length; i++) {
        let b = chunkList[i];
        b.copy(buf, index);
        index += index + b.length;
    }

    return buf;
};