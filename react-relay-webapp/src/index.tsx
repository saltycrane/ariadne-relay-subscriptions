import { Suspense, useState } from "react";
import { RelayEnvironmentProvider } from "react-relay";

import ChatBox from "./ChatBox";
import EnterName from "./EnterName";
import { environment } from "./relay";
import SelectUser from "./SelectUser";

export default function Index() {
  const [myUserId, setMyUserId] = useState("");
  const [otherUserId, setOtherUserId] = useState("");

  return (
    <RelayEnvironmentProvider environment={environment}>
      <div className="align-items-center bg-dark d-flex h-100 justify-content-center p-5">
        {!myUserId ? (
          <EnterName onGetUserId={setMyUserId} />
        ) : !otherUserId ? (
          <Suspense fallback={<div>Loading...</div>}>
            <SelectUser onSelectUser={setOtherUserId} />
          </Suspense>
        ) : (
          <ChatBox userId={myUserId} />
        )}
      </div>
    </RelayEnvironmentProvider>
  );
}
