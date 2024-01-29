function encrypt(text) {
    return text.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decrypt(text) {
    return text.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.querySelector('.input-text-area');
    const btnEncrypt = document.querySelector('.btn-primary');
    const btnDecrypt = document.querySelector('.btn-secondary');
    const copyButton = document.getElementById('copy-button');
    const resultMessage = document.querySelector('.message');
    const emptyContainer = document.querySelector('.empty-container');
    const outputContainer = document.querySelector('.output-wrapper');

    const updateButtonCopy = () => {
        resultMessage.style.display = resultMessage.textContent.trim() ? 'block' : 'none';
        outputContainer.style.justifyContent = resultMessage.textContent.trim() ? 'space-between' : 'center';
        outputContainer.style.alignItems = resultMessage.textContent.trim() ? 'flex-start' : 'center';
        outputContainer.style.padding = resultMessage.textContent.trim() && '0rem 2rem';
        emptyContainer.style.display = !resultMessage.textContent.trim() ? 'block' : 'none';
    };

    btnEncrypt.addEventListener('click', () => {
        resultMessage.textContent = encrypt(textarea.value);
        updateButtonCopy();
    });

    btnDecrypt.addEventListener('click', () => {
        resultMessage.textContent = decrypt(textarea.value);
        updateButtonCopy();
    });


    copyButton.addEventListener('click', () => {
        if (!resultMessage.textContent.trim()) {
            alert('Nenhum texto para copiar!');
            return;
        }

        navigator.clipboard.writeText(resultMessage.textContent).then(() => {
            alert('Texto copiado para a área de transferência!');
        }).catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
    });

});
