export function Route() {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-[url(https://images.pexels.com/photos/17485709/pexels-photo-17485709.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]">
      <div className="text-center text-neutral-content text-blue-500 bg-white rounded-[10px] p-[20px]">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">Next Antd Admin</h1>
          <p className="mb-5">
            A lightweight content management system, not limited to content
            management.
          </p>
          <button className="px-[10px] py-[6px] rounded-md bg-blue-500 text-white">
            <a
              href="https://github.com/yyong008/next-antd-admin"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
