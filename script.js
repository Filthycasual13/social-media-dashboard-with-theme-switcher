
 function themeSwitcher() {
    let toggle = document.querySelector('input[type="checkbox"]');

    let bgTop = document.querySelector('.bg-top, .bg-top-light');
    //let bgTopLight = document.querySelector('.bg-top-light');

    let bgBottom = document.querySelector('.bg-bottom, .bg-bottom-light');
    //let bgBottomLight = document.querySelector('.bg-bottom-light');

    let title = document.querySelector('.title, .title-light');
    //let titleLight = document.querySelector('.title-light');

    let toggleText = document.querySelector('.toggle, .toggle-light');
    //let toggleTextLight = document.querySelector('.toggle-light');

    let overview = document.querySelector('.overview, .overview-light');

    let card = document.querySelectorAll('.card, .card-light');

    let username = document.querySelectorAll('.username, .username-light');

    let numberCard = document.querySelectorAll('.number-card, .number-card-light');

    let followers = document.querySelectorAll('.followers, .followers-light');

    let tile = document.querySelectorAll('.tile, .tile-light');

    let stat = document.querySelectorAll('.stat, .stat-light');

    let numberTile = document.querySelectorAll('.number-tile, .number-tile-light');

    
    

    if(toggle.checked) {
        bgTop.classList.add('bg-top-light');
        bgTop.classList.remove('bg-top');

        bgBottom.classList.add('bg-bottom-light');
        bgBottom.classList.remove('bg-bottom');

        title.classList.add('title-light');
        title.classList.remove('title');

        toggleText.classList.add('toggle-light');
        toggleText.classList.remove('toggle');

        overview.classList.add('overview-light');
        overview.classList.remove('overview');

        for (let i = 0; i < card.length; i++){
            card[i].classList.remove('card');
            card[i].classList.add('card-light');
        }

        for (let i = 0; i < username.length; i++){
            username[i].classList.remove('username');
            username[i].classList.add('username-light');
        }

        for (let i = 0; i < numberCard.length; i++){
            numberCard[i].classList.remove('number-card');
            numberCard[i].classList.add('number-card-light');
        }

        for (let i = 0; i < followers.length; i++){
            followers[i].classList.remove('followers');
            followers[i].classList.add('followers-light');
        }

        for (let i = 0; i < tile.length; i++){
            tile[i].classList.remove('tile');
            tile[i].classList.add('tile-light');
        }

        for (let i = 0; i < stat.length; i++){
            stat[i].classList.remove('stat');
            stat[i].classList.add('stat-light');
        }

        for (let i = 0; i < numberTile.length; i++){
            numberTile[i].classList.remove('number-tile');
            numberTile[i].classList.add('number-tile-light');
        }

    } else {
        bgTop.classList.remove('bg-top-light');
        bgTop.classList.add('bg-top');

        bgBottom.classList.remove('bg-bottom-light');
        bgBottom.classList.add('bg-bottom');

        title.classList.remove('title-light');
        title.classList.add('title');

        toggleText.classList.remove('toggle-light');
        toggleText.classList.add('toggle');
        
        overview.classList.remove('overview-light');
        overview.classList.add('overview');

        for (let i = 0; i < card.length; i++){
            card[i].classList.remove('card-light');
            card[i].classList.add('card');
        }

        for (let i = 0; i < username.length; i++){
            username[i].classList.remove('username-light');
            username[i].classList.add('username');
        }
        
        for (let i = 0; i < numberCard.length; i++){
            numberCard[i].classList.remove('number-card-light');
            numberCard[i].classList.add('number-card');
        }

        for (let i = 0; i < followers.length; i++){
            followers[i].classList.remove('followers-light');
            followers[i].classList.add('followers');
        }

        for (let i = 0; i < tile.length; i++){
            tile[i].classList.remove('tile-light');
            tile[i].classList.add('tile');
        }

        for (let i = 0; i < stat.length; i++){
            stat[i].classList.remove('stat-light');
            stat[i].classList.add('stat');
        }

        for (let i = 0; i < numberTile.length; i++){
            numberTile[i].classList.remove('number-tile-light');
            numberTile[i].classList.add('number-tile');
        }
    }
 }
