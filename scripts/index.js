
(() => {
    window.Page = {};

    window.globalData = {};

    for (const file of [
        'common/Shared.js',
        'styles.js', 
        'pages/register.js',
        'pages/list.js',
        'pages/edit.js'
    ]) {
        const script = document.createElement('script');
        script.setAttribute('src', `scripts/${file}`);
        document.body.appendChild(script);
    }

    window.addEventListener('load', ()=> {
        Header();

        window.main = document.createElement('main');
        document.body.appendChild(main);
        utils.CallLink('stylesheet','./styles.js');

    });
})();


