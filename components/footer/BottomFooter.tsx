function BottomFooter() {
  return (
    <>
      <div className="h-[64px] bg-pMain flex justify-center items-center ">
        <span className="text-base text-white">
          ©{" "}
          <a href="#" className="hover:underline text-white">
            Copyright
          </a>{" "}
          Finsweet 2023
        </span>
      </div>
    </>
  );
}

export default BottomFooter;
