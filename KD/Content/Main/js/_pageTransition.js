class PageTransition {
    constructor(params) {
        if (!params.data) params.data = {};
        this._pages = document.getElementsByClassName('main-page-transition');
        this._initState = params;
        this._currentState = window.history.state || params;

        for (let i = 0; i < (this._pages.length) || 0; i++) {
            let _page = this._pages[i];
            _page.style.display = 'none';
            _page.style.opacity = '0';
        }

        this._displayPage(this._currentState);
        this._onListener();
        this._fadeTimeInterval;
    }

    get currentState() { return this._currentState };

    // on listen when state change
    _onListener() {
        window.addEventListener('popstate', (event) => {
            let _state = event.state || this._initState;

            this._setState(_state);
        });
    }

    // on action change
    _setState(state, isFade = true) {
        this._currentState = state;
        this._displayPage(state, isFade);
        if (this._onChange) this._onChange(state);
    }

    // add data to state
    set data(data) {
        let newState = { ...this.currentState };
        let currData = newState.data;

        currData = (typeof currData != 'object') ? {} : currData;
        data = (typeof data != 'object') ? {} : data;
        Object.assign(currData, data);
        newState.data = currData;

        this.pushReplace(newState, false);
    }

    // get data from state
    get data() { return this.currentState.data || {} }

    // clear data
    clearData(keys) {
        let newState = { ...this.currentState };

        if (typeof keys == 'string') {
            let _arrs = keys.split(',');

            for (let _arr in _arrs) delete newState.data[_arrs[_arr].trim()];
        } else {
            newState.data = {};
        }

        this.pushReplace(newState, false);

        return this;
    }

    // listen on state change
    onChange(callback) { this._onChange = callback }

    // transition to new page
    push(params, isFade = true) {
        if (!params) return;
        if (!params.data) params.data = {};
        if (params.targetId) params.targetId = params.targetId.replace('#', '') || '';
        if (!this._pageExist(params)) {
            this._message(params.targetId);
            return;
        }

        history.pushState(params, params.title || document.title, `?${params.key || 'p='}${params.url || params.targetId}`);
        this._setState(params, isFade);
        return this;
    }

    // transition and replace current state
    pushReplace(params, isFade = true) {
        if (!params) return;
        if (!params.data) params.data = {};
        if (params.targetId) params.targetId = params.targetId.replace('#', '') || '';
        if (!this._pageExist(params)) {
            this._message(params.targetId);
            return;
        }

        history.replaceState(params, params.title || document.title, `?${params.key || 'p='}${params.url || params.targetId}`);
        this._setState(params, isFade);

        return this;
    }

    // back of page
    pop() {
        history.back();
        return this;
    }

    // forword of the page
    forward() {
        history.forward();
        return this;
    }

    // display page
    _displayPage(params, isFade = true) {
        let _dom = document.getElementById(params.targetId);
        let _opacity = 0;

        clearInterval(this._fadeTimeInterval);

        for (let i = 0; i < this._pages.length; i++) {
            this._pages[i].style.display = 'none';
            this._pages[i].style.opacity = '0';
        }

        if (isFade) {
            this._fadeTimeInterval = setInterval(() => {
                if (_opacity < 1) {
                    _opacity += 0.01;
                    _dom.style.display = '';
                    _dom.style.opacity = _opacity;
                } else {
                    clearInterval(this._fadeTimeInterval);
                }
            }, 1);
        } else {
            _dom.style.display = '';
            _dom.style.opacity = '1';
        }

        document.title = params.title || document.title;
    }

    // check page exist
    _pageExist(params) {
        if (!params) return false;
        let _dom = document.getElementById(params.targetId);

        let _length = _dom ? _dom.length : 0;

        if (_length <= 0) return false;

        return true;
    }

    _message(page = '') {
        let _langCode = localStorage.getItem('ocs-lang-code') || 'km';
        let text;

        text = _langCode == 'km' ? 'រកមិនមានទំព័រនេះទេ! ' + page : 'Page not found! ' + page;
        alert(text);
    }
}