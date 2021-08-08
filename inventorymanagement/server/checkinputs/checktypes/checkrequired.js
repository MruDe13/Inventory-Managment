function checkRequired(item){
    if (item.length === 0 || item === null){
        return false;
    }

    return true;
}

export { checkRequired }

