import { it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/angular";
import { AppComponent } from "./app.component";
import { AppInfoService, AuthService, ScreenService } from "./shared/services";

it('should show footer', async () => {
  await render(AppComponent, {
    providers: [
      {
        provide: AuthService,
        useValue: {
          loggedIn: true
        }
      },
      {
        provide: ScreenService,
        useValue: {
          sizes: {
            'screen-large': true
          }
        }
      },
      {
        provide: AppInfoService,
        useValue: {
          appName: 'My App'
        }
      }
    ],
  });

  await waitFor(() => expect(screen.queryByTestId('app-footer')).toBeInTheDocument());
});
