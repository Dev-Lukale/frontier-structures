import React from 'react'

type CardProps = {
    name: string,
    href: string,
    content:string
};

const Card = ({name,href,content}: CardProps) => {
  return (
    <div className="flex mb-4">
      <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 rounded bg-foreground/5 text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="w-5 h-5 bi bi-file-earmark-code"
          viewBox="0 0 16 16"
        >
          <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
          <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
        </svg>
      </span>
      <div>
        <h2 className="mb-4 text-xl w-fit font-bold leading-tight text-primary md:text-2xl  relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
          {name}
        </h2>
        <p className="text-base leading-loose text-secondary line-clamp-3">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Card