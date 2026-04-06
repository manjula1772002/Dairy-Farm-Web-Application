const Header = () => {
 

      return (
     <footer>
        <div className="bg-[#FDFBF7]  py-8 my-10 bottom-0 w-full">
          <div className="container mx-auto px-4">
            <p className="text-center" style={{fontWeight:"bold",padding:"3px"}}>
              &copy; {new Date().getFullYear()} RK Dairy Farm. All rights reserved.
            </p>
          </div>
        </div>

     </footer>
  );
};

export default Header;