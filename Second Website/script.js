function Agreecountadd() {
    let agreecount = localStorage.getItem('agreecount');
    if (agreecount) {
        agreecount = parseInt(agreecount) + 1;
    } else {
        agreecount = 1;
    }
    localStorage.setItem('agreecount', agreecount);
}

function Answerlist(answer) {
    let answerlist = localStorage.getItem('answerlist');

    if (answerlist) {
        answerlist = JSON.parse(answerlist);
    } else {
        answerlist = [];
    }

    answerlist.push(answer);
    localStorage.setItem('answerlist', JSON.stringify(answerlist));
}

function Returnhome() {
    window.location.href = '1frontpage.html';
}

function Goback() {
    let answerlist = localStorage.getItem('answerlist');
    let agreecount = localStorage.getItem('agreecount');

    if (!answerlist || answerlist.length === 0) {
        return false;
    }

    answerlist = JSON.parse(answerlist);
    const lastitem = answerlist.pop();

    if (lastitem === true) {
        agreecount = parseInt(agreecount) - 1;
        localStorage.setItem('answerlist', JSON.stringify(answerlist));
        localStorage.setItem('agreecount', agreecount);
    } else {
        localStorage.setItem('answerlist', JSON.stringify(answerlist));
    }

    history.back();

    return true;
}
