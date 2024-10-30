export default function Home() {
  // useEffect(() => {
  //   window.alert("Welcome guysss!");
  // });

  console.log("[Home Page] rendering");
  return (
    <>
      <h1 className="text-2xl font-semibold">Hello Developer</h1>
      <p>Improve your Skills!</p>
      <p className="mt-4">
        This is NextJS <b>Pages Router</b>
      </p>
    </>
  );
}
