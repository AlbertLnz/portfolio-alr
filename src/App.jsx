function App() {
  return (
    <div className="h-screen">
      <div className="grid lg:grid-rows-10 lg:grid-cols-10 h-full">
        <div className="row-span-2 col-span-2 bg-red-300">
          <p>PHOTO</p>
        </div>
        <div className="row-span-2 col-span-5 bg-blue-300">
          <p>NAME</p>
        </div>
        <div className="row-span-2 col-span-1 bg-green-300">
          <p>OPEN</p>
        </div>
        <div className="row-span-2 col-span-1 bg-slate-300">
          <p>EN</p>
        </div>
        <div className="row-span-2 col-span-1 bg-orange-300">
          <p>DARK</p>
        </div>
        <div className="row-span-6 col-span-4 bg-slate-800">
          <p>PROJECTS</p>
        </div>
        <div className="row-span-5 col-span-3 bg-slate-200">
          <p>CHALLENGE</p>
        </div>
        <div className="row-span-5 col-span-3 bg-blue-800">
          <p>TOOLS</p>
        </div>

        <div className="row-span-3 col-span-4 bg-orange-800">
          <p>STUDIES</p>
        </div>
        <div className="row-span-3 col-span-1 bg-pink-400">
          <p>LANGUAGES</p>
        </div>
        <div className="row-span-3 col-span-1 bg-stone-400">
          <p>FIGMA</p>
        </div>
        <div className="row-span-2 col-span-4 bg-green-800">
          <p>COURSES</p>
        </div>
      </div>
    </div>
  );
}

export default App;
