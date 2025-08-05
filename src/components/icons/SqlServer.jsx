import React from 'react';

const SqlServerIcon = () => {
  return (
    <button className="rounded-lg flex gap-1.5 h-6 justify-center w-full items-center btn">
      <span className="text-cyan-500 w-4 flex text-sm">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          role="img"
          viewBox="0 0 24 24"
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.25 2.25h19.5v19.5H2.25V2.25zm1.5 1.5v16.5h16.5V3.75H3.75zM12 6c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 1.5c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5S14.485 7.5 12 7.5zm-3 4.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm3 0c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5z" />
        </svg>
      </span>
      SQL Server
    </button>
  )
}
export { SqlServerIcon }
