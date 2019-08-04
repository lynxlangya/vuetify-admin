const settingsDefault = {
    language: 'ru',
    dense: true,
    navbar: {
        show: true,
        logo: false
    },
    fullscreen: {
        show: false,
        btn: true
    },
    settingsPanel: {
        show: false,
        btn: true
    },
    theme: {
        index: 0
    }
};

const settings = {
    state: JSON.parse(JSON.stringify(settingsDefault)),

    getters: {
        language: state => state.language,
        toolbarDense: state => state.dense,
        navbarShow: state => state.navbar.show,
        navbarLogo: state => state.navbar.logo,
        fullscreenBtn: state => state.fullscreen.btn,
        fullscreenShow: state => state.fullscreen.show,
        settingsPanelBtn: state => state.settingsPanel.btn,
        settingsPanelShow: state => state.settingsPanel.show,
        themeIndex: state => state.theme.index
    },

    mutations: {
        SET_SETTINGS: (state, payload) => {
            state.language = payload.language || state.language;
            state.dense = typeof payload.dense === 'boolean' ? payload.dense : state.dense;
            state.navbar = payload.navbar || state.navbar;
            state.fullscreen = payload.fullscreen || state.fullscreen;
            state.settingsPanel = payload.settingsPanel || state.settingsPanel;
            state.theme = payload.theme || state.theme || 0;
        },
        SET_SETTINGS_DEFAULT: (state, payload) => {
            state.language = payload.language;
            state.dense = payload.dense;
            state.navbar = payload.navbar;
            state.fullscreen = payload.fullscreen;
            state.settingsPanel = payload.settingsPanel;
            state.theme = payload.theme;
        },
        LANGUAGE_TOGGLE: (state, payload) => {
            state.language = payload.state;
        },
        THEME_TOGGLE: (state, payload) => {
            state.theme.index = payload.index;
        },
        TOOLBAR_DENSE_TOGGLE: state => {
            state.dense = !state.dense;
        },
        NAVBAR_LOGO_TOGGLE: state => {
            state.navbar.logo = !state.navbar.logo;
        },
        NAVBAR_TOGGLE: state => {
            state.navbar.show = !state.navbar.show;
        },
        NAVBAR_STATE: (state, payload) => {
            state.navbar.show = payload.state;
        },
        FULLSCREEN_TOGGLE: (state, payload) => {
            state.fullscreen.show = payload.state;
        },
        FULLSCREEN_BTN: (state, payload) => {
            state.fullscreen.btn = payload.state;
        },
        SETTINGS_PANEL_BTN_TOGGLE: state => {
            state.settingsPanel.btn = !state.settingsPanel.btn;
        },
        SETTINGS_PANEL_TOGGLE: state => {
            state.settingsPanel.show = !state.settingsPanel.show;
        },
        SETTINGS_PANEL_STATE: (state, payload) => {
            state.settingsPanel.show = payload.state;
        }
    },
    actions: {
        LanguageToggle: (context, payload) => {
            context.commit('LANGUAGE_TOGGLE', payload);
        },
        ThemeToggle: (context, payload) => {
            context.commit('THEME_TOGGLE', payload);
        },
        ToolbarDenseToggle: context => {
            context.commit('TOOLBAR_DENSE_TOGGLE');
        },
        NavbarLogoToggle: (context, payload) => {
            context.commit('NAVBAR_LOGO_TOGGLE', payload);
        },
        NavbarToggle: (context, payload) => {
            context.commit('NAVBAR_TOGGLE', payload);
        },
        NavbarState: (context, payload) => {
            context.commit('NAVBAR_STATE', payload);
        },
        FullscreenToggle: (context, payload) => {
            context.commit('FULLSCREEN_TOGGLE', payload);
        },
        FullscreenBtn: (context, payload) => {
            context.commit('FULLSCREEN_BTN', payload);
        },
        SettingsPanelBtnToggle: (context, payload) => {
            context.commit('SETTINGS_PANEL_BTN_TOGGLE', payload);
        },
        SettingsPanelToggle: (context, payload) => {
            context.commit('SETTINGS_PANEL_TOGGLE', payload);
        },
        SettingsPanelState: (context, payload) => {
            context.commit('SETTINGS_PANEL_STATE', payload);
        },
        SettingsPanelDefault: context => {
            context.commit('SET_SETTINGS_DEFAULT', JSON.parse(JSON.stringify(settingsDefault)));
        }
    }
};

export default settings;
