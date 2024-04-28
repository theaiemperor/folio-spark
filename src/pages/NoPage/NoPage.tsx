import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <div className="w-vw text-center h-[80vh] flex flex-col item-center justify-center">
      <div className="text-[150px]">404</div>
      <div className="text-sm">Page Not fount</div>
      <div>
        <span>Go to </span>
        <span className="text-blue-900 font-bold">
          <Link to="/">Home</Link>
        </span>
      </div>
    </div>
  );
}
