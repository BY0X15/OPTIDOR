import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { RouterProviders  } from './routes';

import { main } from './components/main';

bootstrap(main, [RouterProviders ,disableDeprecatedForms(),provideForms()]);
