function gen() {
    const len = parseInt(document.getElementById('passlength').value, 10);
    
    const passlist = [
        ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ':', ';', '"', ',', '<', '.', '>', '/', '?']
    ];
    
    if(len > 20 || 6 > len) {
        alert("Password length range is 6 to 20. Please check your input.");
        document.getElementById('result').value = "Error"
    } else {
        let password = '';
        for (let i = 0; i < len; i++) {
            const category = Math.floor(Math.random() * passlist.length);
            const character = Math.floor(Math.random() * passlist[category].length);
            password += passlist[category][character];
        }
        document.getElementById('result').value = password; 
    }
}

function copypass() {
    const inputElement = document.getElementById("result");
        inputElement.select();
        navigator.clipboard.writeText(inputElement.value).then(() => {
            alert("Password copied: " + inputElement.value);
        }).catch(err => {
            alert("Failed to copy text: " + err);
        });
}