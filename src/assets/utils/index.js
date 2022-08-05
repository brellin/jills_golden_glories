function handleChanges(e, state) {
    state[ e.target.name ] = e.target.value;
}

export {
    handleChanges
};
