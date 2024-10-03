
import { it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/angular";
import { UserPanelComponent, UserPanelModule } from "./user-panel.component";

it('should show users email', async () => {
  await render(UserPanelComponent, {
    imports: [
      UserPanelModule,
    ],
    inputs: {
      user: {
        email: 'some@email.com'

      }
    }
  });

  await waitFor(() => expect(screen.queryByText('some@email.com')).toBeInTheDocument());
});
