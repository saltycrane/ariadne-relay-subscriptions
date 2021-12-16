import { RelayEnvironmentProvider } from "react-relay";

import EnterName from "./EnterName";
import { environment } from "./relay";

export default function Index() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div className="align-items-center bg-light d-flex h-100 justify-content-center">
        <EnterName />
      </div>
    </RelayEnvironmentProvider>
  );
}
