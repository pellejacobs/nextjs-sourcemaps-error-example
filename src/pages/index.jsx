import { throwError } from "@/libs/utils";

export default function Home() {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          throwError("Client side error");
        }}
      >
        Throw error
      </button>
    </>
  );
}
