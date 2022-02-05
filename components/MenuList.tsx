function MenuList({ icon, name }: { icon: any; name: string }): JSX.Element {
    return (
      <div className="relative flex items-center cursor-pointer group text-fuchsia-200">
        <i> {icon} </i>
  
        <div className="absolute z-50 hidden px-4 py-1 rounded-md group-hover:block bg-textColor left-8 ">
          <p
            className="before:absolute before:w-[15px] before:h-[15px] before:rounded before:bg-textColor
        before:left-[-7px] before:top-2 before:rotate-45 
        after:absolute after:w-[150px] after:h-[15px] after:rounded after:bg-textColor
        after:right-[-7px] after:top-2 "
          >
            <a href="google.com">تماس با ما</a> <br />
            <a href="google.com">{name}</a><br />
            <a href="google.com">{name}</a><br />
            <a href="google.com">{name}</a>
          </p>
        </div>
      </div>
    );
  }
  
  export default MenuList;
  