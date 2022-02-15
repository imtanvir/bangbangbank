function idFinder(idElement) {
    const fromId = document.getElementById(idElement);
    return fromId;
}
idFinder('loginBtn').addEventListener('click', function () {
    const userName = 'tanvir1';
    const passWord = '123@pass';
    const userNameInput = idFinder('user-name').value;
    const userPasswordInput = idFinder('user-password').value;
    if (userNameInput == userName && userPasswordInput == passWord) {
        document.getElementById('svgId').removeAttribute('class', 'hidden');
        document.getElementById('svgId').setAttribute('class',"motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white");
        setTimeout(navigatePage, 2000);
        function navigatePage() {
            window.location.href = 'banking.html';
        }
    } else {
        const userNameAttribute = idFinder('user-name');
        const userPassAttribute = idFinder('user-password');
        userNameAttribute.removeAttribute('class', 'border-2 border-gray-300 rounded outline-green-400 caret-green-500 px-3 py-0.5 bg-sky-100');
        userPassAttribute.removeAttribute('class', 'border-2 border-gray-300 rounded outline-green-400 caret-green-500 px-3 py-0.5 bg-sky-100');

        userNameAttribute.setAttribute('class', 'border-2 border-rose-500 rounded outline-red-400 caret-red-500 px-3 py-0.5 bg-red-100');
        userPassAttribute.setAttribute('class', 'border-2 border-rose-500 rounded outline-red-400 caret-red-500 px-3 py-0.5 bg-red-100');
        let errorText = idFinder('error-text');
        errorText.innerText = 'username and password is invalid!';
    }
})