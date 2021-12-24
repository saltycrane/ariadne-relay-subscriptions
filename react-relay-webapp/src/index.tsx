import { useState } from "react";
import { RelayEnvironmentProvider } from "react-relay";

import ChatBox from "./ChatBox";
import EnterName from "./EnterName";
import { environment } from "./relay";

export default function Index() {
  const [userId, setUserId] = useState("");

  return (
    <RelayEnvironmentProvider environment={environment}>
      <div className="align-items-center bg-dark d-flex h-100 justify-content-center p-5">
        {userId ? (
          <ChatBox userId={userId} />
        ) : (
          <EnterName onGetUserId={setUserId} />
        )}
      </div>
    </RelayEnvironmentProvider>
  );
}
