import dynamic from "next/dynamic";

const ClientOnlyIndexPage = dynamic(() => import(".."), { ssr: false });

export default ClientOnlyIndexPage;
