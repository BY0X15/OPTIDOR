"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const forms_1 = require('@angular/forms');
const routes_1 = require('./routes');
const main_1 = require('./components/main');
platform_browser_dynamic_1.bootstrap(main_1.main, [routes_1.RouterProviders, forms_1.disableDeprecatedForms(), forms_1.provideForms()]);
//# sourceMappingURL=main.js.map