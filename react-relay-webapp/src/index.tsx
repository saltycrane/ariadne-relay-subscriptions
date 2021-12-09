import { useState } from "react";
import { Button, Input } from "reactstrap";

/**
 * Index
 */
export default function Index() {
  return (
    <div className="align-items-center bg-light d-flex h-100 justify-content-center">
      <EnterName />
    </div>
  );
}

/**
 * EnterName
 */
function EnterName() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1 className="fs-3 mb-3">Enter your name</h1>
      <Input
        className="mb-3"
        onChange={(event) => setName(event.target.value)}
        type="text"
        value={name}
      />
      <Button block color="primary">
        Go
      </Button>
    </div>
  );
}
