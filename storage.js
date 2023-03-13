const addToLocalStorage = ()=> {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    if(id && value){
        localStorage.setItem(id, value);
    }
    
    idInput.value = '';
    valueInput.value = '';
}

// in local storage single value can be easily stored. But if you want
// to store array or object you need to use stringify method. Stringify will make array and object as a string. 